import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3030/users')
        .then(res =>setData(res.data) )
        .catch(err => console.log(err))
    },[])
  return (
    <div className='container mt-5'>
        <h1>CRUD app </h1>
        <div >

        <Link to="/addRecord" className='btn btn-primary'>Create</Link>
        </div>
      <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
            data.map((d, i) => {
                return(

                <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.first_name}</td>
                    <td>{d.gender}</td>
                    <td>{d.email}</td>
                    <td><button>Update</button></td>
                </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
