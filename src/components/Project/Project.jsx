import { useEffect } from 'react'

import { useState } from 'react'
import Data from './data.json'
const Project = () => {
let [data,setData]=useState([])
useEffect(()=>{
    setData(Data)
},[])

  return <>
    <div id='project' className="container reveal" style={{overflowX:"auto"}}>
   <center><h1 className='project-heading'>Projects</h1></center> 
    <div className="container table-container" >
      <table className='table'>
        <thead className='thead'>
          <tr className='headTr'>
            <th>&nbsp;#&nbsp;</th>
            <th>Project Title</th>
            <th>Languages & Libraries used</th>
            <th>Live Deployed Link</th>
            <th>GitHub Source Link</th>
          </tr>
        </thead>
        <tbody className='tbody'>

             {
              data.map((dat)=>{
              return <tr className='bodyTr' key={dat.id}>
                <td>{dat.id}</td>
                <td>{dat.title}</td>
                <td>{dat.languages}</td>
                <td><a className='prjectLink' href={dat.link} target='_blank'>Go Live</a></td>
                <td><a className='prjectLink' href={dat.githublink} target='_blank'>Source Link</a></td>
              </tr>
              })
             }
        </tbody>
      </table>
    </div>
    </div>
    

  </>
}

export default Project
