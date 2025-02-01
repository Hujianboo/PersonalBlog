'use client'

import { createContext, useContext, useState } from 'react'
import { ArchiveSection } from './sections/ArchiveSection'
interface ArchiveContextType {
  isOpen: boolean
  openArchive: () => void
  closeArchive: () => void
}

const ArchiveContext = createContext<ArchiveContextType | null>(null)

export function ArchiveProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openArchive = () => setIsOpen(true)
  const closeArchive = () => setIsOpen(false)

  return (
    <ArchiveContext.Provider value={{ isOpen, openArchive, closeArchive }}>
      {children}
      <ArchiveSection isOpen={isOpen} onClose={closeArchive} />
    </ArchiveContext.Provider>
  )
}

export function useArchive() {
  const context = useContext(ArchiveContext)
  if (!context) {
    throw new Error('useArchive must be used within an ArchiveProvider')
  }
  return context
} 