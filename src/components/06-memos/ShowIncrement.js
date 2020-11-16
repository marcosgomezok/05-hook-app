import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

    //react.memo no me va a servir
    console.log('me volvi a generar')
    return (
        <div>
            <button className="btn btn-primary" onClick= {()=>{
                    increment(5);
            }
        }
            >
            
            
            
                Incrementar
            </button>
        </div>
    )
}
)