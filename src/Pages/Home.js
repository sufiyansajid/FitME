import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            
            <div className="hero-section bg-light py-5">
                <div className="container text-center">
                    <h1 className="display-4 fw-bold">Welcome to FitME</h1>
                    <p className="lead">Your one-stop destination for trendy and comfortable clothing.</p>
                    
                </div>
            </div>

            
            <div className="container my-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                <div className="row">
                   
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img
                                src="https://pk.sapphireonline.pk/dw/image/v2/BKSB_PRD/on/demandware.static/-/Sites-sapphire-master-catalog/default/dwdfb25ffb/images/27febfrop25/MSTE2P25V312_SLM_2.JPG?sw=1000&sh=1200"
                                className="card-img-top"
                                alt="Product 1"
                            />
                            <div className="card-body">
                                <h5 className="card-title">SLIM_FIR DOBBY SUIT</h5>
                                <p className="card-text">Comfortable and stylish Mens for everyday wear.</p>
                                <p className="card-text fw-bold">Rs 5999</p>
                                
                                <Link to="/mens" className="btn bg-secondary btn-outline-dark text-light">
                                    View Collection
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img
                                src="https://pk.sapphireonline.pk/dw/image/v2/BKSB_PRD/on/demandware.static/-/Sites-sapphire-master-catalog/default/dw5796f0ac/images/27febfrop25/3PRSES25V29D_2.JPG?sw=1000&sh=1200"
                                className="card-img-top"
                                alt="Product 2"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Women's Cotton 3 Piece Suit</h5>
                                <p className="card-text">Elegant dress perfect for any occasion Ramzan Volume.</p>
                                <p className="card-text fw-bold">Rs 6599</p>
                                <Link to="/womens" className="btn bg-secondary btn-outline-dark text-light">
                                    View Collection
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img
                                src="https://edenrobe.com/cdn/shop/files/0N9A0333_EBTK25-3997_thumbnail_375x_crop_center.webp?v=1740401862 "
                                className="card-img-top"
                                alt="Product 3"
                                style={{ height: "500px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title"> Junior Cloths</h5>
                                <p className="card-text">Textured Embroided Mahroon Kurta with white Trouser.</p>
                                <p className="card-text fw-bold">Rs 5499</p>
                                <Link to="/kids" className="btn bg-secondary btn-outline-dark text-light">
                                    View Collection
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;