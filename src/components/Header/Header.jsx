import { useEffect, useState } from 'react'
// import './Header.css'
import { styled } from 'styled-components'

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
`

export function Header() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <HeaderContainer>
        <h3>Header</h3>
        <span>Time Now: {now.toLocaleString()}</span>
    </HeaderContainer>
    )
}
