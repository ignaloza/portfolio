import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import '../App.scss';



const Body = () => {

    return(
        <>
            <section className="about-us-area text-white">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="about-us-text-area mb-5 mt-5">
                                <h2 className="about-us-text title-font-3">
                                    💻 Full-Stack Developer
                                    <br/> 📍 Actualmente en Barcelona, España.
                                    
                                </h2>
                                <p className="mt-4 mb-4 title-font-2">
                                    Decidido a cambiar el rumbo de mi vida, en 2020 decidi incursionar en el desarrollo web.
                                    <br/>
                                   En el bootcamp HENRY, ademas de conocimientos tecnicos en las tecnologias mas utilizadas y las metodologias de trabajo, 
                                   <br/>
                                   conoci una gran comunidad.
                                   </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Portfolio/>

            <section className="lead">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="lead-title text-white mb-5 mt-4">
                                <h1 className="title-font">
                                Trabajemos juntos!
                                </h1>
                                <p className="mt-4 mb-4 title-font-2">
                                
                                </p>
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
        </>
    );
}

export default Body;