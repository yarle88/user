import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getUsers } from './API'



function App() {

  const [users, setUsers] = useState([])
  
  useEffect(()=>{
    getUsers().then(data=>setUsers(data.results))

  },[])
  return (
    console.log(users),
    <>
      <main>
        <table style={{width:"100%"}}> 
          <thead>
            <tr>
              <th>Foto</th>
              <th>Name</th>
              <th>Apellido</th>
              <th>Pais</th>
              <th>Accion</th>

            </tr>
          </thead>
          <tbody>
            {users.map(user=>{
              return(<tr key={user.dob.date} style={{justifyItems:"space-around"}}>
                <td><img src={user.picture.thumbnail}/></td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td><button onClick={()=>setUsers(users.filter(use=>use!==user))}>Delete</button></td>
                </tr>)
            })}
          </tbody>
        </table>
      </main>
    </>
  )
}

export default App
