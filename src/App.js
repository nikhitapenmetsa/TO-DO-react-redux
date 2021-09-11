import React from 'react'
import Input from './Input'
import Output from './Output'

function App(){
  return (
    <>
    <div style={{display:"flex"}}>
         <div >
           <Input/>
         </div>
              <div>
             <Output/>
             </div>
    </div>
    </>
  );
}

export default App;