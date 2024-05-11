import { useEffect, useState } from "react"


function App() {
  const [user,setuser] = useState([])
 useEffect(()=>{
  fetch('http://localhost:4545/user')
  .then(respons => respons.json())
  .then (data => setuser(data))
 },[])


  return (
    <>
     <h1>User List : </h1>
      {
  user.map((item)=>(
    <ul>
      <li>
      {item.firstname}
      </li>
      <li>
        {item.lastname}
      </li>
      <li>
        {item.email}
      </li>
      
    </ul>
  ))
}
    </>
  )
}

export default App




// import { useEffect, useState } from "react"

// function App() {
//   const [user,setuser]=useState([])
//   useEffect(() =>{
//     fetch('http://localhost:4545/user')
//   .then (resp =>  resp.json())
//   .then (data => setuser(data))
  
//   },[])

//   return (
//     <>
//      <h1>user list :</h1>
//      {
//       user.map((items)=>(
//         <ul>
//           <li>
//             {items.firstname}{items.lastname}{items.email}-{items.password}
//           </li>
//         </ul>
//       ))
//      }
//     </>
//   )
// }

// export default App
