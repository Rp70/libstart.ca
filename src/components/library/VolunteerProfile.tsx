import { useState, useRef } from 'react'
import { useKV } from '@github/spark/hooks'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { QRCodeSVG } from 'qrcode.react'
import { UserCircle, QrCode, ShareNetwork, DownloadSimple, Copy, Eye, Trash } from '@phosphor-icons/react'
import { toast } from 'sonner'

type VolunteerProfile = {
  id: string
  name: string
  message: string
  photoUrl?: string
  createdAt: number
  views: number
}

export function VolunteerProfile() {
  const [profiles, setProfiles] = useKV<VolunteerProfile[]>('volunteer-profiles', [])
  const [isCreating, setIsCreating] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [photoPreview, setPhotoPreview] = useState<string>()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error('Photo must be smaller than 2MB')
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const createProfile = () => {
    if (!name.trim()) {
      toast.error('Please enter your name')
      return
    }

    if (!message.trim()) {
      toast.error('Please enter a message')
      return
    }

    const newProfile: VolunteerProfile = {
      id: `profile-${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      photoUrl: photoPreview,
      createdAt: Date.now(),
      views: 0
    }

    setProfiles((current) => [...(current || []), newProfile])
    
    setName('')
    setMessage('')
    setPhotoPreview(undefined)
    setIsCreating(false)
    
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }

    toast.success('Profile created successfully!')
  }

  const deleteProfile = (id: string) => {
    setProfiles((current) => (current || []).filter(p => p.id !== id))
    toast.success('Profile deleted')
  }

  const incrementViews = (id: string) => {
    setProfiles((current) => 
      (current || []).map(p => 
        p.id === id ? { ...p, views: p.views + 1 } : p
      )
    )
  }

  const getProfileUrl = (id: string) => {
    return `${window.location.origin}${window.location.pathname}?volunteer=${id}`
  }

  const copyLink = (id: string) => {
    const url = getProfileUrl(id)
    navigator.clipboard.writeText(url)
    toast.success('Link copied to clipboard!')
  }

  const downloadQRCode = (id: string, name: string) => {
    const svg = document.getElementById(`qr-${id}`)
    if (!svg) return

    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()

    canvas.width = 1000
    canvas.height = 1200

    img.onload = () => {
      if (!ctx) return

      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, 1000, 1200)

      ctx.fillStyle = '#5E4BA1'
      ctx.fillRect(0, 0, 1000, 120)
      ctx.fillStyle = 'white'
      ctx.font = 'bold 36px Arial'
      ctx.textAlign = 'center'
      ctx.fillText('Your Library Companion', 500, 70)

      const qrSize = 600
      const qrX = (1000 - qrSize) / 2
      const qrY = 180
      ctx.drawImage(img, qrX, qrY, qrSize, qrSize)

      ctx.fillStyle = '#433964'
      ctx.font = 'bold 32px Arial'
      ctx.textAlign = 'center'
      ctx.fillText(`Shared by ${name}`, 500, 860)

      ctx.font = '24px Arial'
      ctx.fillText('Scan to explore library services!', 500, 920)

      const link = document.createElement('a')
      link.download = `library-guide-qr-${name.replace(/\s+/g, '-').toLowerCase()}.png`
      link.href = canvas.toDataURL()
      link.click()

      toast.success('QR code downloaded!')
    }

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)))
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-3">Library Champion Profiles</h2>
        <p className="text-muted-foreground text-lg">
          Create your volunteer profile and share the library guide with newcomers
        </p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-secondary text-secondary-foreground rounded-lg">
            <UserCircle size={32} weight="duotone" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">For Library Volunteers</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Create a personalized profile with a QR code and shareable link. Track how many people 
              you've helped discover library services!
            </p>
            <Dialog open={isCreating} onOpenChange={setIsCreating}>
              <DialogTrigger asChild>
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Create Your Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle>Create Volunteer Profile</DialogTitle>
                  <DialogDescription>
                    Share your enthusiasm for the library with newcomers
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="photo">Your Photo (optional)</Label>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-20 w-20">
                        {photoPreview ? (
                          <AvatarImage src={photoPreview} />
                        ) : (
                          <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                            <UserCircle size={40} weight="duotone" />
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div className="flex-1">
                        <input
                          ref={fileInputRef}
                          id="photo"
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          Choose Photo
                        </Button>
                        <p className="text-xs text-muted-foreground mt-1">
                          Max 2MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      placeholder="e.g., Sarah Chen"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Welcome Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="e.g., Welcome to Canada! I'm here to help you discover all the amazing free services at our library. Scan this code to get started!"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button onClick={createProfile} className="flex-1">
                    Create Profile
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsCreating(false)
                      setName('')
                      setMessage('')
                      setPhotoPreview(undefined)
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Card>

      {(profiles || []).length === 0 ? (
        <Card className="p-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-muted rounded-full">
              <UserCircle size={48} className="text-muted-foreground" weight="duotone" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">No Profiles Yet</h3>
              <p className="text-sm text-muted-foreground">
                Create your first volunteer profile to start sharing the library guide
              </p>
            </div>
          </div>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {(profiles || []).map((profile) => (
            <Card key={profile.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="h-16 w-16">
                  {profile.photoUrl ? (
                    <AvatarImage src={profile.photoUrl} />
                  ) : (
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                      {getInitials(profile.name)}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{profile.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {profile.message}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Eye size={14} />
                  {profile.views} views
                </Badge>
                <Badge variant="outline">
                  {new Date(profile.createdAt).toLocaleDateString()}
                </Badge>
              </div>

              <div className="space-y-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full" size="sm">
                      <QrCode size={16} className="mr-2" />
                      View QR Code
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>QR Code - {profile.name}</DialogTitle>
                      <DialogDescription>
                        Share this QR code on social media or print it for in-person sharing
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col items-center gap-4 py-4">
                      <div className="p-4 bg-white rounded-lg">
                        <QRCodeSVG
                          id={`qr-${profile.id}`}
                          value={getProfileUrl(profile.id)}
                          size={256}
                          level="H"
                          includeMargin
                        />
                      </div>
                      <Button 
                        onClick={() => downloadQRCode(profile.id, profile.name)}
                        className="w-full"
                      >
                        <DownloadSimple size={16} className="mr-2" />
                        Download QR Code
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                    onClick={() => copyLink(profile.id)}
                  >
                    <Copy size={16} className="mr-2" />
                    Copy Link
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                    onClick={() => {
                      incrementViews(profile.id)
                      window.open(getProfileUrl(profile.id), '_blank')
                    }}
                  >
                    <ShareNetwork size={16} className="mr-2" />
                    Preview
                  </Button>
                </div>

                <Button 
                  variant="destructive" 
                  size="sm"
                  className="w-full"
                  onClick={() => deleteProfile(profile.id)}
                >
                  <Trash size={16} className="mr-2" />
                  Delete Profile
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Card className="p-6 bg-accent/10 border-accent/30">
        <h3 className="font-semibold mb-3">💡 How to Use Your Profile</h3>
        <div className="space-y-2 text-sm">
          <p><strong>QR Code:</strong> Download and add to your social media posts, email signature, or print on flyers</p>
          <p><strong>Shareable Link:</strong> Copy and paste in emails, text messages, or Facebook groups</p>
          <p><strong>Track Impact:</strong> See how many people have clicked your link to visit the guide</p>
          <p><strong>Print & Share:</strong> The QR code includes your name automatically when downloaded</p>
        </div>
      </Card>
    </div>
  )
}
