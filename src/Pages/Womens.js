import React from 'react';
import WomenData from '../Data/WomenData';
import { Link } from 'react-router-dom';

const Womens = () => {
    return (
        <>
            <h1 className='text-center m-5'>Womens Ready to Wear </h1>

            <div className="product-container">
                {WomenData.map((ele, index) => (
                    <div key={index} className="card" style={{ width: '18rem' }}>
                        <img src={ele.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{ele.title}</h5>
                            <p className="card-text">{ele.description}</p>
                            <p className="card-test"> Rs {ele.price}</p>
                            <Link to={`/Cart/${ele.title}`} className="btn btn-secondary">Buy Now</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Womens;