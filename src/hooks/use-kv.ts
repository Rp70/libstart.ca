import { useState, useCallback } from 'react'

/**
 * A localStorage-backed key-value hook that mirrors the @github/spark useKV API.
 * Returns [value, setter] where setter accepts either a new value or an updater function.
 */
export function useKV<T>(key: string, defaultValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [value, setValueState] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored !== null ? (JSON.parse(stored) as T) : defaultValue
    } catch {
      return defaultValue
    }
  })

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValueState((prev) => {
        const resolved = typeof next === 'function' ? (next as (prev: T) => T)(prev) : next
        try {
          localStorage.setItem(key, JSON.stringify(resolved))
        } catch {
          // Ignore storage errors (e.g. private browsing quota)
        }
        return resolved
      })
    },
    [key]
  )

  return [value, setValue]
}
