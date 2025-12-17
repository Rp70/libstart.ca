import { createContext, useContext, ReactNode } from 'react'
import { useKV } from '@github/spark/hooks'

export type Audience = 'newcomer' | 'canadian'

interface AudienceContextType {
  audience: Audience
  setAudience: (audience: Audience) => void
}

const AudienceContext = createContext<AudienceContextType | undefined>(undefined)

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudience] = useKV<Audience>('user-audience', 'newcomer')

  return (
    <AudienceContext.Provider value={{ audience: audience || 'newcomer', setAudience }}>
      {children}
    </AudienceContext.Provider>
  )
}

export function useAudience() {
  const context = useContext(AudienceContext)
  if (!context) {
    throw new Error('useAudience must be used within AudienceProvider')
  }
  return context
}
