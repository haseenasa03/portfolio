
const Education = () => {
  return <>
  <div id='project' className="container reveal" style={{overflowX:"auto"}}>
   <center><h1 className='education-heading'>Education</h1></center> 
    <div className="container table-container">
 <table className='table' >
        <thead className='thead'>
          <tr className='headTr'>
            <th>Courses</th>
            <th>Name of Institution</th>
            <th>Year of Passing</th>
            <th>Percentage Scored %</th>
          </tr>
        </thead>
        <tbody className='tbody'>
              <tr className='bodyTr'>
              <td>Bachelor of Engineering in Compueter Science</td>
              <td>Bapuji institute of Engineering and technology</td>
              <td>2019</td>
              <td>58.9</td>
              </tr>
              <tr className='bodyTr'>
              <td>Diploma in Computer Science</td>
              <td>Bapuji Polytechnic</td>
              <td>2016</td>
              <td>83.3</td>
              </tr>
              <tr className='bodyTr'>
              <td>SSLC</td>
              <td>Gnana Deepa Convent</td>
              <td>2013</td>
              <td>77.92</td>
              </tr>
              
        </tbody>
      </table>
      </div></div>
  </>
}

export default Education