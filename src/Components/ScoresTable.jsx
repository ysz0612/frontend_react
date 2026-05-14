import React from 'react'



function ScoresTable({scores}) {
  return (
   <table>
      <tr>
        {
          Object.keys(scores[0]).map(key=>(
            <th>{key}</th>
          ))
        }
        
      </tr>
      {scores.map(item => 
        (
          <tr>
          {
            Object.values(item).map(
              (value) => (<td>{value}</td>)
            )
          }
        </tr>
      )
    )
  }
    </table>
  )
}

export default ScoresTable
