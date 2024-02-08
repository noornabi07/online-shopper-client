import React, { useContext } from 'react';
import { ShopContext } from '../../provider/ContextProvider/ContextProvider';
import Container from '../../Shared/Container/Container';
import dIcon from '../../assets/all-products/dropdown_icon.png'

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    return (
        <Container>
            <img src={props.banner} className='rounded-xl' alt="" />
            <div >
                <div className='flex mt-5 justify-between items-center'>
                    <p className='text-gray-600 text-lg text-semibold'><span className='font-bold'>showing 1-12</span> out of 36 products </p>
                    <div className='flex font-semibold items-center gap-1 border-2 border-gray-600 py-2 px-4 rounded-3xl'>
                        sort by <img src={dIcon} width='12' height='12' alt="" />
                    </div>
                </div>

                <div className='grid my-5 md:grid-cols-2 grid-cols-1 xl:grid-cols-4  justify-center gap-3 md:gap-8'>
                    {
                        all_product.map((item) => {
                            
                            if (props.category === item.category) {
                                return <div>
                                    <div className="card bg-base-100 hover:scale-105 hover:duration-300 shadow-xl">
                                        <figure><img src={item.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{item.name}</h2>
                                            <div className='flex gap-3 font-semibold text-lg text-red-400'>${item.new_price} <del className='text-red-200'>${item.old_price}</del></div>
                                        </div>
                                    </div>
                                </div>
                            } else {
                                return null
                            }
                        })
                    }
                </div>
                    {/* Explore more button */}
                <div className='font-bold rounded-3xl my-10 cursor-pointer bg-gray-300 text-red-400 w-36 text-center py-2 px-4 mx-auto'>Explore More</div>
            </div>
        </Container>
    );
};

export default ShopCategory;
