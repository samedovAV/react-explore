export default function Header() {
    const now = new Date()

    return (
        <header>
            <h3>Header</h3>
            <span>Time Now: {now.toLocaleTimeString()}</span>
        </header>
    )
}