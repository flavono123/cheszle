import React, { ReactNode } from 'react'

const hiddenLinkStyle: React.CSSProperties = {
  color: 'inherit', // 링크의 색상을 주변 텍스트와 동일하게 만듭니다
  textDecoration: 'none', // 링크의 밑줄을 제거합니다
  cursor: 'text',
};

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
        Use the standard <a href="https://www.youtube.com/shorts/C-oMJUXvGto" style={hiddenLinkStyle}>chess</a> movements to get the Black Knight to the black square
      </span>
    </>
  )
}
