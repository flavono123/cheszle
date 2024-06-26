import React, { ReactNode } from 'react'

interface Props {
  color: string
  children: ReactNode
}

export default function Square({ color, children }: Props): ReactNode {
  return (
    <div
      style={{
        backgroundColor: color,
        width: '100%',
        height: '100%'
      }}
    >
      {children}
    </div>
  )
}

