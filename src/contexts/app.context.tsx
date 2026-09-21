'use client'

import React, { FC, ReactNode, useState, createContext } from 'react'

// context
export const AppContext = createContext<AppState>({} as AppState)

export const AppContextProvider: FC<{
  children: ReactNode
  initialIsDark?: boolean
}> = ({ children, initialIsDark = false }) => {
  const [isDark, setIsDark] = useState<boolean>(initialIsDark)

  return (
    <AppContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </AppContext.Provider>
  )
}
