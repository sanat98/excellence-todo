import {React,useEffect,useState} from "react"

function Todo() {
    const [ toDo, setTodo ] = useState();
    const [toDoes, setToDoes]= useState([]);
    const [tempArrayPlace,setTempArrayPlace] = useState ();
    const [toDoForDelete, setToDoForDelete] = useState(false);
    const [toDoForEdit, setToDoForEdit] = useState(false);
    
  
    const AddTodo=()=>{
      let temp = toDoes;
      temp.push(toDo);
      setToDoes(temp);

      setTodo("")
      
  
    }

    useEffect(() => {
    if(toDoForDelete == true && tempArrayPlace !=undefined){ 
     toDoes.splice(tempArrayPlace, 1);
     setToDoForDelete(false);
    }

    if(toDoForEdit == true && tempArrayPlace !=undefined){
     let tempValue = toDoes.slice(tempArrayPlace , tempArrayPlace +1);
     toDoes.splice(tempArrayPlace, 1);
     setTodo(tempValue)
     setToDoForEdit(false);
      
     }
    }, [toDoes,toDoForDelete,toDoForEdit]);
  
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

      

        {toDoes.map((data,i)=> 
          
    <>
    <div style={{display:"flex",justifyContent:"space-between"}}>
     <div>{i+1 + ".  " +data} </div> 
     <div style={{display:"flex"}}>
     <div> <button onClick={()=>{setToDoForEdit(true);setTempArrayPlace(i)}}>edit</button> </div>
     <div> <button onClick={()=>{setToDoForDelete(true);setTempArrayPlace(i)}} >delete</button> </div>
     </div>
      </div>
    </>
       

       
        
        )} 
        </div>
        
      </div>
     
     
      </>
    );
}

export default Todo
