import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from 'components/Header'
import { ReferencesSection } from 'components/ReferencesSection'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div>
          <a rel="noopener noreferrer"  href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a rel="noopener noreferrer"  href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <br/>
        <ReferencesSection />
      </main>
    </>
  )
}
