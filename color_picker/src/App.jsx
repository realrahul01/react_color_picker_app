import { useState } from 'react'
import './App.css'

function App() {
const [range1,setRange1] = useState(30)
const [range2,setRange2] = useState(10)
const [range3,setRange3] = useState(30)


  const rangeHandler1=(e)=>{
    setRange1(e.target.value)
  }
  const rangeHandler2=(e)=>{
    setRange2(e.target.value)
  }
  const rangeHandler3=(e)=>{
    setRange3(e.target.value)
  }


  return (
   <>
      <div className="color_picker">
        <h1>Color_picker</h1>
          <p style={{background: `rgba(${range1},${range2},${range3})`}} className='circle'></p>
          <div className='range_sty'>
          <input type="range" min='0' max='255' value={range1} onChange={rangeHandler1}/>
          <input type="range" min='0' max='255' value={range2} onChange={rangeHandler2}/>
          <input type="range" min='0' max='255' value={range3} onChange={rangeHandler3}/>
          </div>
          <div>
            <h1>RGBA - ({range1} {range2} {range3})</h1>
          </div>
      </div>
   </>
  )
}

export default App
