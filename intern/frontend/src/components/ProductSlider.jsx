import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProductSlider = () => {
    const [data,setData]=useState([]);
    
    
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
          .then((res) => {
            console.log(res.data);
            setData(res.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
  return (
    <div>
      {data.map((val,i)=>{

      })}
    </div>
  )
}

export default ProductSlider
