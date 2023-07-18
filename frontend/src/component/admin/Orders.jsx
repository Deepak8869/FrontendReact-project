import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineEye} from "react-icons/ai";
import {GiArmoredBoomerang} from "react-icons/gi";

const Orders = () => {
    const arr = [1,2,3,4];
  return <section className='tableClass'>
  <main>
      <table>
          <thead>
              <tr>
                  <th>Order ID</th>
                  <th>Status</th>
                  <th>Item Quantity</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>User</th>
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
                  <td>Virat</td>
                  <Link to={`/order/${"asdsds"}`}>
                  <AiOutlineEye />
                 </Link>
                 
                 <button><GiArmoredBoomerang /></button>
                </tr>
                  ))
              }
          </tbody>
      </table>
  </main>
</section>
}

export default Orders;