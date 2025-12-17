import { Card } from '@/components/ui/card'
import { GlobeHemisphereWest, ShieldCheck, Coffee } from '@phosphor-icons/react'

export function CultureGuide() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-3">Library Culture Shock Guide</h2>
        <p className="text-muted-foreground text-lg">
          Understanding Canadian libraries - what might surprise you
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-secondary text-secondary-foreground rounded-lg">
              <GlobeHemisphereWest size={28} weight="duotone" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">The "Noise" Reality</h3>
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  <strong>What might surprise you:</strong> Canadian libraries can be surprisingly loud! 
                  They're not always the silent reading rooms you might expect.
                </p>
                <p>
                  Many libraries have transformed into <strong>community hubs</strong>. You might see:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Children playing and laughing in play areas</li>
                  <li>Teens gaming together on computers</li>
                  <li>People chatting at group study tables</li>
                  <li>Community events with music and activities</li>
                </ul>
                <p className="text-primary font-medium mt-4">
                  💡 Looking for quiet? Ask for the "quiet study room" or look for designated silent zones.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary text-primary-foreground rounded-lg">
              <ShieldCheck size={28} weight="duotone" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">Trust & Privacy</h3>
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  <strong>Important to know:</strong> Canadian libraries protect your privacy by law.
                </p>
                <p>
                  Your reading history is <strong>completely private</strong>:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>The library doesn't report what you read to anyone</li>
                  <li>Not to the government, not to immigration</li>
                  <li>Your borrowing records are confidential</li>
                  <li>Staff cannot share your information without your permission</li>
                </ul>
                <p className="text-primary font-medium mt-4">
                  🔒 Libraries in Canada follow strict privacy laws. You're safe to explore any topic.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-sage/10 to-sage/5 border-sage/20 md:col-span-2 lg:col-span-1">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-sage text-sage-foreground rounded-lg">
              <Coffee size={28} weight="duotone" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">"Can I Sleep Here?"</h3>
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  <strong>What you CAN do</strong> (that might surprise you):
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span><strong>Nap in a chair</strong> - Taking a rest is usually fine</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span><strong>Bring covered drinks</strong> - Coffee with a lid is welcome</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span><strong>Use your phone</strong> - Just keep volume low in quiet areas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span><strong>Stay all day</strong> - No time limits, come and go freely</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span><strong>Bring your own food</strong> - Snacks are usually okay</span>
                  </li>
                </ul>
                <p className="text-primary font-medium mt-4">
                  🏠 Think of the library as a welcoming public living room!
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-accent/10 border-accent/30">
        <h3 className="text-lg font-semibold mb-3 text-accent-foreground">Comparing Library Cultures</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2 text-accent-foreground">In many countries:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Libraries are primarily for serious study</li>
              <li>• Strict silence is enforced</li>
              <li>• Limited services beyond books</li>
              <li>• Formal atmosphere</li>
              <li>• May require special permission to join</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-accent-foreground">In Canada:</h4>
            <ul className="space-y-2 text-foreground">
              <li>• Libraries are community gathering spaces</li>
              <li>• Mix of quiet and active zones</li>
              <li>• Free programs, technology, and activities</li>
              <li>• Casual and welcoming atmosphere</li>
              <li>• Free library card for all residents</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
