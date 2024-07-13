import React, { useState } from 'react';
import '../../Style/signleProductData.css/SingleProduct.css';
import { CiDeliveryTruck } from "react-icons/ci";
import { TbReplaceFilled } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../Store/Slice/AddCardSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState(1);

    const decreaseProduct = () => {
        if (product > 1) {
            setProduct(product - 1);
        }
    };

    const increaseProduct = () => {
        setProduct(product + 1);
    };
    const singleProduct = useSelector((state) => state.singleProduct);

    const handleAddToCart = () => {
        dispatch(addToCart({ productId: singleProduct.id, quantity: product }));
        navigate('/cart');
        toast.success("Item Added To Cart");
    };

    return (
        <>
            <div className="SingleProduct_main_conatainer">
                <div className="SingleProduct_container">
                    <div className='SIngleProduct_container_image'>
                        <div className='SIngleProduct_container_image_img'>
                            <img src={singleProduct?.id?.image} alt="" />
                        </div>
                    </div>
                    <div className='SIngleProduct_container_content'>
                        <h2>{singleProduct?.id?.title}</h2>
                        <p>rate : {singleProduct?.id?.rating.rate}</p>
                        <p>category : {singleProduct?.id?.category}</p>
                        <p>MRP : {singleProduct?.id?.price}$</p>
                        <p>{singleProduct?.id?.description}</p>

                        <div className="SingleProduct_delevery">
                            <div className='SingleProduct_delevery_innerBox'>
                                <span><CiDeliveryTruck /></span>
                                <p>free delivery</p>
                            </div>
                            <div className='SingleProduct_delevery_innerBox'>
                                <span><TbReplaceFilled /></span>
                                <p>30 days Replacement</p>
                            </div>
                            <div className='SingleProduct_delevery_innerBox'>
                                <span> <CiDeliveryTruck /></span>
                                <p>fast delivery</p>
                            </div>
                            <div className='SingleProduct_delevery_innerBox'>
                                <span> <MdOutlineSecurity /></span>
                                <p>2 year warranty</p>
                            </div>
                        </div>

                        <p>stock : {singleProduct?.id?.rating?.count}</p>

                        <div className='SingleProduct_delevery_prodectOrder'>
                            <div className='SingleProduct_delevery_prodectOrder_box'>
                                <button onClick={decreaseProduct}>-</button>
                                <p>{product}</p>
                                <button onClick={increaseProduct}>+</button>
                            </div>
                            <button onClick={handleAddToCart}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space"></div>
        </>
    );
};

export default SingleProduct;
