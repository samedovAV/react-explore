import { useEffect, useState, useCallback } from "react";
import { Modal }  from "components/Modal";

export function ReferenceItem({ link, name }) {
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    setUsers(users)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return(
    <section>
      <li onClick={() => setModal(true)}>
        <a rel="noopener noreferrer" href={link} target="_blank">
          {name}
        </a>
      </li>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>Text</p>
        <button onClick={() => setModal(false)}>close</button>
      </Modal>

      {loading && <p>Loading...</p>}

      {!loading && <ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>}
    </section>
  )
}
