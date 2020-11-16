import React, { useLayoutEffect, useRef, useState } from 'react'
import './layout.css'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';



export const Layout = () => {

    const {counter,increment}=useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const{author,quote} = !!data&& data[0] //si existe la data, toma el primer elemento
    //console.log(author,quote)

    const pTag = useRef()
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
       setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])


    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>
            <blockquote className="blockquote text-right">
                     <p className="mb-0"
                        ref={pTag}
                     >
                        {quote}
                    </p>
                <footer className="blockquote-footer" >{author}</footer>
                </blockquote>

                <pre>
        {JSON.stringify(boxSize,null,3)}
                </pre>

        <button className="btn btn-primary" onClick={increment}>Siguiente Quote</button>
            
        </div>
    )
}
