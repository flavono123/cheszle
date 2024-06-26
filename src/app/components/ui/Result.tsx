import React, { ReactNode } from 'react'

import { store } from '../../store/useStore'

export default function Result(): ReactNode {
  const { moveCount } = store();

  return (
    <div>
      <h1>A Trifling victory, but a victory nonetheless</h1>
      <span>{'🐴'.repeat(moveCount.knight)}</span>
      <span>{'🧙'.repeat(moveCount.bishop)}</span>
      <span>{'🏰'.repeat(moveCount.rook)}</span>
      <span>https://cheszle.vercel.app/</span>
      <span>당신의 기록 꾹♡  눌러서 ☆복☆붙☆공☆유☆</span>
      <h2>NEXT(P is Q): comming soon</h2>
    </div>
  )
}
