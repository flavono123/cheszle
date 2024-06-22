import React, { ReactNode } from 'react'

export default function InstuctionSquares(): ReactNode {
  return (
    <>
      <span
        style={{
          fontSize: '1em',
          letterSpacing: '0.3em',
        }}
      >
        BLACK KNIGHT
      </span>
      <br />
      <span
        style={{
          fontSize: '0.7em',
          lineHeight: '0.1em', // TODO: shrnik, this is not working
        }}>
        Use the standard chess movements to get the Black Knight to the black square
      </span>
    </>
  )
}
