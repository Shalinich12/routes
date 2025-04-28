import React from 'react'
import Grandchild from './Grandchild'

function Child() {
  return (
    <div>
        <h1>Hello, Child Component!</h1>
        {/* <Grandchild data={props.data} /> */}
        <Grandchild />
    </div>
  )
}

export default Child