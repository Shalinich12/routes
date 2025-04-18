import React, {useState} from 'react'

function Hooks() {
    let [count, setCount] = useState(0); //declare state
    let [showPassword, setPassword]=useState(true);
    let [color, setColor] = useState("");
    let [name, setName] = useState("");
    let [data, setData] = useState("");
    let [toggle, setToggle] = useState(false);
    function Toggle(){
      setToggle(!toggle);
    }

    function Increment(){
        setCount(count+1); //updates state

    }
    function Decrement(){
      setCount(count<=0?0:count-1);
    }
  return (
    <div>
        <button onClick={Increment}>Increment</button>
        {count}
        <button onClick={Decrement}>Decrement</button>

        <input type={showPassword ?"password":"text"} />
        <button onClick={()=>setPassword(!showPassword)}>Show Password</button>

        <p style={{backgroundColor:color}}>this is paragraph for the changing color</p>
        <button onClick={()=>setColor("red")}>Red</button>
        <button onClick={()=>setColor("green")}>Green</button>
        <button onClick={()=>setColor("yellow")}>Yellow</button>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>   
        <p>your name is {name}</p>

        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <button onClick={()=>setData(name)}>Add to para</button>
        <p>{data}</p>
        <div style={{backgroundColor:toggle?'purple':'pink'?'pink':'purple'}}>
          <p>This is toggle light and dark</p>
          <button onClick={Toggle}>Toggle</button>
        </div>
    </div>
  )
}

export default Hooks