import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart; 
    console.log("mafi",cart);

    const totalSalary = cart.reduce((sum,friend)=> sum + friend.salary,0);
    return (
        <div>

            <h5>Total Salary: {totalSalary}</h5>
            <h3>Added friends:{cart.length}</h3>
        </div>
    );
};

export default Cart;