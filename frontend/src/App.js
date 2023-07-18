import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./component/home/Home";
import Footer from "./component/Layout/Footer";
import Header from "./component/Layout/Header";
import Contact from "./component/Contact/Contact";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import PaymentSuccess from "./component/Cart/PaymentSuccess";
import Login from "./component/login/Login";
import Profile from "./component/profile/Profile";
import MyOrders from "./component/myOrders/MyOrders";
import OrderDetails from "./component/myOrders/OrderDetails";
import Dashboard from "./component/admin/Dashboard";
import Users from "./component/admin/Users";
import Orders from "./component/admin/Orders";
import About from "./component/about/About";
import NotFound from "./component/Layout/NotFound";


import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmorder.scss";
import "./styles/paymentsuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderdetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";





function App() {
  return ( <Router>
    <Header isAuthenticated = {true} />
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/contact" element = {<Contact />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "/cart" element = {<Cart />} />
      <Route path = "/shipping" element = {<Shipping />} />
      <Route path = "/confirmorder" element = {<ConfirmOrder />} />
      <Route path = "/paymentsuccess" element = {<PaymentSuccess />} />
      <Route path = "/login" element = {<Login />} />
      <Route path = "/me" element = {<Profile />} />
      <Route path = "/myorders" element = {<MyOrders />} />
      <Route path = "/order/:id" element = {<OrderDetails />} />
      <Route path = "me/admin/dashboard" element = {<Dashboard />} />
      <Route path = "/admin/users" element = {<Users />} />
      <Route path = "/admin/orders" element = {<Orders />} />



      <Route path = "*" element={<NotFound />} />
     
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
