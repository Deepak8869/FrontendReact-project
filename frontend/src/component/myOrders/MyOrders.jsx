import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineEye} from "react-icons/ai";
const MyOrders = () => {
    const arr = [1,2,3,4];
  return (
    <section className='tableClass'>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Item Quantity</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map(i=>(
                        <tr key={i}>
                        <td>1234</td>
                        <td>Processing</td>
                        <td>24</td>
                        <td>₹{2500}</td>
                        <td>Online</td>
                        <Link to={`/order/${"asdsds"}`}>
                        <AiOutlineEye />
                       </Link>
                      </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    </section>
  )
}

export default MyOrders;