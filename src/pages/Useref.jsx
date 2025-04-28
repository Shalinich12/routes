// import { useState } from "react"
// export const Useref = () => {
//     const [isFocused, setIsFocused] = useState(false)
//     return (
//         <div>
//             <input
//                 type="text"
//                 onFocus={() => setIsFocused(true)}
//                 onBlur={() => setIsFocused(false)}
//                 style={{
//                     border: isFocused ? "2px solid blue" : "1px solid gray",
//                     outline: "none"
//                 }}
//             />
//         </div>
//     )
// }

import { useRef, useEffect, useState } from "react"


export const Useref = () => {
    const inputRef = useRef(null)
    const [count, setCount] = useState(0);
    const prevCount = useRef();

    const onSubmitClick = (e) => {
        e.preventDefault();
        alert("input value: " + inputRef.current.value);
    }

    useEffect(() => {
        prevCount.current = count;
    }, [count]);
    return (
        <>
            <div>
                <form action="" onSubmit={onSubmitClick}>
                    <input type="text" ref={inputRef} />
                    <button >Submit</button>
                </form>
            </div>

            <div>
                <h1>Current: {count}</h1>
                <h2>Previous: {prevCount.current}</h2>
                <button onClick={() => setCount(count + 1)}>Increase</button>
            </div>
        </>
    )
}