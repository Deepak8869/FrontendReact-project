import React from 'react';
import {Link} from "react-router-dom";
import {RiFindReplaceLine} from "react-icons/ri";
import me from "../../assets/founder.jpg";

const About = () => {
  return <section className='about'>
    <main>
        <h1>About Us</h1>

        <article>
            <h4>MBA BURGER WALA</h4>
            <p>All our customers are family of MBA Burger Wala . MBA Burger Wala is only place in a entire world where customers are happy for our tasty Burgers at  low price.</p>
            <p>Explore the various types of foods and burgers . Click below to see the MENU</p>


            <Link to="/"><RiFindReplaceLine /></Link>
        </article>

        <div>
            <h2>Founder</h2>
            <article>
                <div>
                    <img src={me} alt="founder" />
                    <h3>Virat Kholi</h3>
                </div>

                <p>I am Virat Kholi , the Founder of MBA BURGER WALA . </p>
            </article>
        </div>
    </main>
  </section>
}

export default About;