import React, { useState } from 'react';
import ItemCard from './ItemCard';
import Data from "./Data";



const Home = () => {
    console.warn(Data.productData)
    const [query, setQuery] = useState('');
    return (
        <>
         <div className="p-4">
      <input type='text' placeholder='Search...' onChange={(e) => {
        setQuery(e.target.value);
      }} className="form-control" />
      </div>
            <h1 className='text-center mt-3'> All Items </h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {
                        Data.productData.filter(pdr => pdr.title.toLowerCase().includes(query.toLowerCase()) || pdr.price.toString().toLowerCase().includes(query.toLowerCase())).map((item, index) => {
                            return (


                                <ItemCard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />


                            )
                        })
                    }

                </div>

            </section>
        </>
    );
};
export default Home;