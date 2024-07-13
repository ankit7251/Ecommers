import React, { useEffect, useState } from 'react';
import '../../Style/Product/AllProduct.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../Store/Slice/ProductApiSlice';
import { useNavigate } from 'react-router-dom';
import { fetchSingleProduct } from '../../Store/Slice/SingleProductApiSlice'
import { JackInTheBox } from 'react-awesome-reveal';
import CountUp from 'react-countup';


const AllProduct = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    const productsState = useSelector((state) => state.products);
    if (!productsState) {
        return <div>Loading...</div>;
    }

    const { items: products, loading, error } = productsState;

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="AllProduct_heading">
                <h1> <CountUp end={`${products ? products.length : 0}`} /> <JackInTheBox> TOTAL PRODUCT</JackInTheBox> </h1>
            </div>
            <div className="AllProduct_Main_container">
                <div className="AllProduct_container">
                    {products.map((item) => (
                        <JackInTheBox> <div className="Product_box" key={item.id}  >
                            <div className="Product_box_image">
                                <div className="product_image_Hover_box">
                                    <button onClick={() => dispatch(fetchSingleProduct(item.id)) && navigate(`/productdetails`)}>MORE DETAILS</button>
                                </div>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="Product_details">
                                <p>{item.title}</p>
                                <p>{`${item.price}$`}</p>
                            </div>
                        </div></JackInTheBox>
                    ))}
                </div>
            </div >

            <div className="space"></div>
        </>
    );
};

export default AllProduct;
