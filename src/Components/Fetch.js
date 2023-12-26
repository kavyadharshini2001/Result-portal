import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Fetch() {
    const [results,setResults]=useState([]);
    const [studentId,setStudentId] = useState('');
    const fetchResults=()=>{

      axios.get(`https://65773163197926adf62d9e6b.mockapi.io/Results?id=${studentId}`).then((res)=>{const filteredResults = res.data.filter(result => result.id === studentId);
      setResults(filteredResults)}).catch((err)=>{console.log(err)})

    }
    const handleInputChange = (e) => {
    setStudentId(e.target.value);
  };
  // useEffect(()=>{
  //   fetchResults()
  // },[])
  return (
    <>
   <div className='container  text-capitalize fs-5 fw-semibold'><label htmlFor="studentId">Enter Student ID:</label>
      <input
        type="text"
        id="studentId"
        value={studentId}
       onChange={handleInputChange}
      /><button className='btn btn-outline-success m-5'onClick={fetchResults}>submit</button></div> 
      

      <table className=' container table mt-5'>
        <thead>
          <tr className='table-warning  '>
            <th scope="col">Roll Number</th>
            <th scope="col">Name</th>
            <th scope="col">Maths</th>
            <th scope="col">Physics</th>
            <th scope="col">Chemistry</th>
            <th scope="col">E-graphics</th>
            <th scope="col">Total</th>
          </tr>
        </thead>

        <tbody>
          {results.map((result, index) => (
            <tr className="table-success  "key={result.id}>
              <td>{result.id}</td>
              <td>{result.Name}</td>
              <td>{result.maths}</td>
              <td>{result.physics}</td>
              <td>{result.chemistry}</td>
              <td>{result.enggraphics}</td>
              <td>{result.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </>
  )
}

export default Fetch