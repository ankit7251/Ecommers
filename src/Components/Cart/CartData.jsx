import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDeleteForever } from "react-icons/md";
import '../../Style/Cart/CartData.css';
import { removetoCart, removeAll } from '../../Store/Slice/AddCardSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { JackInTheBox } from 'react-awesome-reveal';

const CartData = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.AddCard.addCartData);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.productId.price * item.quantity;
    });
    setSubtotal(total);
  }, [cartItems]);



  const handleDeleteItem = (id) => {
    dispatch(removetoCart(id));
    toast.success("Item Removed From Cart");
  };

  const shopingHandle = () => {
    navigate('/product');
  }

  return (
    <>
      <div className="CartData_main_container">
        <div className="CartData_container">
          <table>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
                <th>REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className='CartData_container_img'>
                      <img src={item.productId.image} alt="" />
                    </div>
                  </td>
                  <td>{item?.productId?.price}$</td>
                  <td>
                    {item.quantity}
                  </td>
                  <td> {(item?.productId?.price * item.quantity).toFixed(2)}$</td>
                  <td><span onClick={() => handleDeleteItem(item?.productId?.id)}><MdDeleteForever /></span></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="CartBtn">
            <button onClick={shopingHandle}>CONTINUE SHOPPING</button>
            <button onClick={() => dispatch(removeAll()) && toast.success("Cart Cleared")}>CLEAR CART</button>
          </div>

          <div className="order_details">
            <div className="order_details_box">
              <JackInTheBox style={{ width: "100%" }}>
                <div className='order_details_box_text'>
                  <p>Subtotal : </p>
                  <p>${subtotal.toFixed(2)}$</p>
                </div>
                <div className='order_details_box_text'>
                  <p>Shipping fee : </p> <p> 2$</p>
                </div>
                <div className="order_details_line"></div>
                <div className='order_details_box_text'>
                  <p>Total Price : </p>
                  <p>${(subtotal + 2).toFixed(2)}$</p>

                </div>
              </JackInTheBox>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </>
  );
};

export default CartData;
