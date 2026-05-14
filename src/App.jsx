import './App.css'
import { useState } from 'react'

const style ={
  width: "500px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}


// let numbers = [ 0, 1, 2, 3]

// let newScores = numbers.map(item=>{return item*2})
// console.log(newScores)

// let newScores = []
// for(let i=0;i<numbers.length;i++){
//   newScores.push(numbers[i]*2)
// }   //이게 매핑작업

// {console.log(newScores)}

const initialInfo ={
  이름: "",
  국어: null,
  영어: null,
  수학: null,
  과학: null,
}

function App() {
  const [info, setInfo] = useState(initialInfo)

  const handleChange = (event)=>{
        setInfo((prev)=>(
          {...prev, 이름: event.target.value}
        ))

  }
  const handleSubmit = (event) => {

  }
  return (
    <form onSubmit={handleSubmit}> 
       <div>이름 <input
          type="text"
          name="이름"
          value={info.이름}
          onChange={handleChange}
          />
        </div>
       <div>국어<input
          type="number"
          name="국어"
          value={info.국어}
          // onChange={handleChange}
          />
        </div>
       <div>영어<input
          type="number"
          name="영어"
          value={info.영어}
          // onChange={handleChange}
          />
        </div>
       <div>수학<input
          type="number"
          name="수학"
          value={info.수학}
          // onChange={handleChange}
          />
        </div>
       <div>과학<input
          type="number"
          name="과학"
          value={info.과학}
          // onChange={handleChange}
          />
        </div>

       <button>제출</button>
    </form>

  )
}

export default App
