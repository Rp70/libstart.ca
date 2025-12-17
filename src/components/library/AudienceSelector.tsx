import { Button } from '@/components/ui/button'
import { useAudience } from '@/contexts/AudienceContext'
import { Users, UserCircle } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

export function AudienceSelector() {
  const { audience, setAudience } = useAudience()

  return (
    <div className="flex gap-2 bg-muted/50 rounded-lg p-1.5">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setAudience('newcomer')}
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-md transition-all',
          audience === 'newcomer' 
            ? 'bg-primary text-primary-foreground shadow-sm' 
            : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
        )}
      >
        <UserCircle size={18} weight={audience === 'newcomer' ? 'fill' : 'regular'} />
        <span className="text-sm font-medium hidden sm:inline">Newcomer</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setAudience('canadian')}
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-md transition-all',
          audience === 'canadian' 
            ? 'bg-primary text-primary-foreground shadow-sm' 
            : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
        )}
      >
        <Users size={18} weight={audience === 'canadian' ? 'fill' : 'regular'} />
        <span className="text-sm font-medium hidden sm:inline">Local</span>
      </Button>
    </div>
  )
}
