import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputref = useRef();
    //console.log(ref)

    const handleClick =()=>{
        inputref.current.select();
        //console.log(inputref)
    }




    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input ref={inputref} className="form-control" placeholder="Su nombre" />
            <button className="btn btn-outline-primary mt-5" onClick={handleClick}>Focus</button>
        </div>
    )
}
