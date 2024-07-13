import React, { useEffect } from 'react';
import '../../Style/Home/HomeOurService.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../Store/Slice/ProductApiSlice';
import { fetchSingleProduct } from '../../Store/Slice/SingleProductApiSlice';
import { useNavigate } from 'react-router-dom';
import { Bounce } from 'react-awesome-reveal';


const HomeOurService = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);
    const productsState = useSelector((state) => state.products);
    const { items, status, error } = productsState;
    if (status === 'loading') {
        return <div>Loading...</div>;
    }
    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }
    return (
        <>
            <div className="HomeOurService_Main_Container">
                <div className="HomeOurService_container">
                    <div>
                        <p>CHECK NOW!</p>
                        <h2><Bounce>Our Feature Service</Bounce></h2>
                    </div>
                    <div className="HomeOurService_boxes_container">
                        {items.slice(0, 3).map((item, index) => (
                            <div className="HomeOurService_boxex" key={index}>
                                <div className="HomeOurService_Img_box">
                                    <div className="HomeOurService_Img_Hover_box">
                                        <button onClick={() => dispatch(fetchSingleProduct(item.id)) && navigate(`/productdetails`)}>MORE dETALIS</button>
                                    </div>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="HomeOurService_Title_box">
                                    <p>{item.title}</p>
                                    <p>{`${item.price}$`}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeOurService;
