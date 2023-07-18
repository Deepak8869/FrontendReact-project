import React from 'react'
import { MdError } from 'react-icons/md';
import {Link} from "react-router-dom";

const NotFound = () => {
  return <section className='notfound'>
    <main>
        <div>
            <MdError /> 

            <h1>404</h1>

            <p>Page not found , click below to go to home page</p>
            <Link to = "/"> Go to Home </Link>
        </div>
    </main>
  </section>
}

export default NotFound;