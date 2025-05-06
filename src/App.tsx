//import { useState } from 'react'
import { DataList } from "./components/DataList"

const App: React.FC = () =>{

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif"}}>
      <h1>Test App View Layer</h1>
      <DataList />
    </div>
  )
}

export default App
