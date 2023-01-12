import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function HomeForm() {

    const [text, setText] = React.useState<string>('')
    const navigate = useNavigate()

  return (
    <form onSubmit = {(e) => {
        e.preventDefault()
        navigate(`/home/${text}`)
      }}>
        <input value = {text} onChange={(e) => {setText(e.currentTarget.value)}} />
        <button>Join</button>
      </form>
  )
}
