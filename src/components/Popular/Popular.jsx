import React from 'react';
import data_product from '../assets/all-products/data';
import Container from '../Shared/Container/Container';

const Popular = () => {
    return (
        <div className='my-20'>
            <Container>
                <h1 className='text-center text-4xl font-semibold text-red-300'>POPULAR IN WOMEN</h1>
                <hr className='mb-10 w-44 h-1 bg-red-300 mx-auto mt-4'/>
                <div className='grid md:grid-cols-2 grid-cols-1 xl:grid-cols-4  justify-center gap-3 md:gap-5'>
                    {
                        data_product.map(item => <div>
                            <div className="card bg-base-100 shadow-xl">
                                <figure><img src={item.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.name}</h2>
                                    <div className='flex gap-3 font-semibold text-lg text-red-400'>${item.new_price} <del className='text-red-200'>${item.old_price}</del></div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Popular;