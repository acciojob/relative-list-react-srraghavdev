import React from 'react'

const App = () => {
  let list=['pitake','ladoo','idli','payasam','rabdi']
  return (
    <div id="main">
      <ol key={'relativeList'}>
      {
        list.map((element,index)=>{
          return (
            <li key={'relativeListItem'+index+1}>{element}</li>
          )
        })
      }
      </ol>
    </div>
  )
}

export default App
