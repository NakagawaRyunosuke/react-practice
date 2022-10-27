import React, {useState} from 'react'
import "../style/inputArea.css"

export const InputArea = ({addCollection}) => {
  const [userName, setUserName] = useState("")
  const add = (e) => {
    e.preventDefault()
    addCollection(userName)
    setUserName("")
  }
 
  return (
    <div className='inputArea'>
      <form onSubmit={add}>
        <h2>新しくTLを追加</h2>
        <input placeholder='@ユーザー名' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <button>TL追加</button>
      </form>
    </div>
  )
}
