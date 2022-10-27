import React from 'react'
import "../style/Main.css"
import { InputArea } from './InputArea'
import { Card } from './Card' 
import { useState } from 'react'

export const Main = () => {
  let original = []
  const [lists, setList] = useState(original)

  const addCollection = (userName) => {
    const id = Math.floor(Math.random() * 1e5)
    const newLists = lists
    setList([...newLists, {id:id, name:userName}])
  }

  return (
    <div className='container'>
      <InputArea addCollection={addCollection}/>
      <div className='cardArea'>
        <Card lists={lists} />
      </div>
    </div>
  )
}
