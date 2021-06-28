import {React,useState} from "react"

function Todo() {
    const [ toDo, setTodo ] = useState();
    const [toDoes, setToDoes]= useState([]);
  
    const AddTodo=()=>{
      let temp = toDoes;
      temp.push(toDo);
      setToDoes(temp);
      setTodo("");
  
    }
  
    return (
      <>
      <div style={{display:"flex",justifyContent:"center",justifyItems:"center"}}>
        <div style={{display:""}}>
      <div style={{display:"flex",justifyContent:"center"}}>
        Todo
      </div>
      <div style={{display:"flex"}}>
        <input type="text" value={toDo} onChange={(e)=>setTodo(e.target.value)} placeholder="task"></input>
        <button className="btn sm" onClick={AddTodo}> Add</button>
      </div>
      <div>
        {toDoes.map((data,i)=> <div> {i+1 + ".  " +data} </div>)}
      </div>
      </div>
      </div>
      </>
    );
}

export default Todo
