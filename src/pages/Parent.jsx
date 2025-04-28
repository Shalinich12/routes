import React, { createContext } from 'react'
import Child from './Child';
export const MessageContext=createContext();
function Parent() {
  
  let data = "Shalini";
  return (
    <MessageContext.Provider value={data}>
    <div>
      <h2>this is parent component</h2>
      {/* <Child  data={}/> */}
      <Child />
    </div>
   </MessageContext.Provider>
   
  );
}

export default Parent