import React from 'react'
import Ott from './Ott.jsx'
import data from './data.jsx'

function App() {
  let Data = data()
  return (
    <Ott data={Data} />
  )
}

export default App
