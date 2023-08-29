import React from 'react'

const App = () => {
  let list=['pitake','ladoo','idli','payasam','rabdi']
  return (
    <div id="main">
      <ol id={'relativeList'}>
      {
        list.map((element,index)=>{
          return (
            <li id={'relativeListItem'+index+1}>{element}</li>
          )
        })
      }
      </ol>
    </div>
  )
}

export default App
