import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderdetails'>
        <main>
            <h1>Order Details</h1>

            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {"Indra Nagar 1st , Brahmpuri"}
                </p>
            </div>

            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {"Virat Kholi"}
                </p>
                <p>
                    <b>Phone No.</b>
                    {9997136934}
                </p>
            </div>

            <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {"Processing"}
                </p>
                <p>
                    <b>Placed At</b>
                    {"28-08-2023"}
                </p>
                <p>
                    <b>Delivered At</b>
                    {"29-08-2023"}
                </p>
            </div>

            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Method</b>
                    {"Online"}
                </p>
                <p>
                    <b>Payment Reference</b>
                    {"asncdjkcnsnkd"}
                </p>
                <p>
                    <b>Paid At</b>
                    {"29-08-2023"}
                </p>
            </div>

            <div>
                <h1>Amount</h1>
                <p>
                    <b>Item Total</b>₹{2500}
                </p>
                <p>
                    <b>Shipping Charges</b>₹{200}
                </p>
                <p>
                    <b>Tax</b>₹{232}
                </p>
                <p>
                    <b>Total Amount</b>₹{2800}
                </p>
              
            </div>


            <article>
                <h1>Ordered Items</h1>
                <div>
                    <h4>Cheese Burger</h4>
                    <div>
                        <span>{2}</span> × <span>{232}</span> 
                    </div>
                </div>
                <div>
                    <h4>Veg Cheese Burger</h4>
                    <div>
                        <span>{10}</span> × <span>{500}</span> 
                    </div>
                </div>
                <div>
                    <h4>Burger With FrenchFries</h4>
                    <div>
                        <span>{10}</span> × <span>{1800}</span> 
                    </div>
                </div>
                <div>
                    <h4 style={{
                        fontWeight:800,

                    }}>Sub Total</h4>
                    <div 
                        style={{
                            fontWeight:800,
                            
                        }}
                    >₹{2112}</div>
                </div>
                
            </article>

        </main>
    </section>
  );
}

export default OrderDetails;