import React,{useContext} from 'react'
import { MessageContext } from './Parent';

function Grandchild() {
    const message = useContext(MessageContext);
  return (
    <div>
        <h1>Hello from Grandchild!</h1>
        <p>{message}</p>
    </div>
  )
}

export default Grandchild