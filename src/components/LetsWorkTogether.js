import React from 'react';
import { Link } from 'react-router-dom';

const LetsWorkTogether = () => {
    return( 
        <section className="lead">
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="lead-title text-white mb-5 mt-4">
                            <h1 className="title-font">
                            Trabajemos juntos
                            </h1>
                            <Link to="/contact">
                                <button className="btn text-white">
                                    Contacto
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LetsWorkTogether