import React, { ReactNode } from 'react'

interface Props {
  dark: boolean
  children: ReactNode
}

const BOARD_COLORS = {
  dark: '#8B4513',
  light: '#DEB887'
}

export default function Square({ dark, children }: Props): ReactNode {
  const fill = dark ? BOARD_COLORS.dark : BOARD_COLORS.light

  return (
    <div
      style={{
        backgroundColor: fill,
        width: '100%',
        height: '100%'
      }}
    >
      {children}
    </div>
  )
}

