import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './product.css'
function Products() {
    let [data, setData] = useState([])
    let [page, setPage] = useState(1);
    let totalproducts = 10;
    // useEffect(()=>{
    //     const fetchdata=async()=>{
    //         let dataApi = await fetch('https://dummyjson.com/products')
    //         let {products} = await dataApi.json();
    //         setData(products)
    //     }
    //     fetchdata()
    // },[])
    useEffect(() => {
        async function fetchData() {
            let { data } = await axios.get('https://dummyjson.com/products');
            setData(data.products);

        }
        fetchData();
    }, [])
    let output = data.slice((page - 1) * totalproducts, page * totalproducts);

    return (
        <div>
            <div className='container'>
                {output.map((item) => 
                     (
                        <div className='container-cards'>
                            <img src={item.thumbnail} alt="" />
                            <h2>{item.title}</h2>
                            <p>Price: ${item.price}</p>
                            <p>Rating: {item.rating}</p>
                        </div>)
                )}
            </div>
            <div className='pagination'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((btn) => (
                        <button onClick={() => setPage(btn)}>{btn}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default Products;