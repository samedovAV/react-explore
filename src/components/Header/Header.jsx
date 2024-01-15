import { useState } from "react"

export default function Header() {
    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()), 1000)

    return (
        <header>
            <h3>Header</h3>
            <span>Time Now: {now.toTimeString()}</span>
        </header>
    )
}