
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div style={{display:"flex",justifyContent:"center",justifyItems:"center"}}>
            <Link to="todo"><button>Todo</button></Link>
            <Link to="userlist"><button>UserList</button></Link>
            
        </div>
    )
}
