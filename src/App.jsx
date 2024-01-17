import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import ReferenceItem from './components/ReferenceItem/ReferenceItem'
import { referenceList } from './data'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <a rel="noreferrer" href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a rel="noreferrer" href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <section>
        <ul>
          {referenceList.map((reference) => (
            <ReferenceItem key={reference.title} {...reference} />
          ))}
        </ul>
      </section>
    </>
  )
}
