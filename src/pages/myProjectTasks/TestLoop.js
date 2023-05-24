import React from 'react'
import Menu from '../navigation/Menu'

const TestLoop = () => {
  return (
    <div style={{backgroundColor : 'yellowgreen'}}><Menu/>
      <div style={{backgroundColor : 'yellow'}}><h1>Small Tutorials</h1>
      <div><table style={{margin : 'auto'}}>
        <tr>
            <td><input style={{backgroundColor : 'azure', borderRadius : 10, color : 'green'}}/></td>&nbsp;&nbsp;&nbsp;
            <td><button> Add </button></td>
        </tr>
      </table>
        </div>
      </div>
    </div>
  )
}

export default TestLoop
