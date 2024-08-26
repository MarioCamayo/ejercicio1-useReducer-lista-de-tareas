import { useReducer, useRef} from "react"

const ListaDeTareas = () => {
     
    const inputRef = useRef()
    
    const [tasks, dispatch] =  useReducer((state = [], action)=>{
        console.log(action)
        switch(action.type){
            case 'add_task':{
                return [
                    ...state,
                    { id: state.length,
                      title: action.title
                    }
                ]

            }

            case 'remove_task':{
                return state.filter((task, index)=> index !=action.index)
            }

            default:{
                return state
            }
        }
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch({
            type:'add_task',
            title:inputRef.current.value
        })

    }
  return (
    <div>
        <h1>Lista de Tareas</h1>
        <form onSubmit={handleSubmit}>
            <label>Tarea</label>
            <input type="text" name="title" ref={inputRef}/>
            <input type="submit" value='Enviar'/>
        </form>
        <div>
            {tasks && tasks.map((task, index) =>(
                <div key={index}>
                    <p>{task.title} </p>
                    <button onClick= {()=> dispatch({type:'remove_task', index})}>
                        Borrar
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ListaDeTareas
