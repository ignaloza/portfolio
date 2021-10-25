import React from 'react';
import lkdn from "./linkedin.png";
import github from "./github.png";
import whatsapp from "./whatsapp-192.png";
import correo from "./correo.png";



const Contact = () => {
    return(
        <>
            <div className="contact section-title mt-5">
                <div className="container text-white">
                    <div className="row align-items-center">
                        <div className="col-md-7 mx-auto">
                            <div className="contact-title mb-5 mt-5">
                                <h1 className="title-font title-font-size">
                                Contacto
                                </h1>
                                <p className="mt-4 mb-4 title-font-2">
                                  Podes contactarme a traves de:<br />
                                 <a href="https://www.linkedin.com/in/ignacio-lozada/" target="_blank" rel="noopener noreferrer"> <img src={lkdn} alt="notfound" width="150px"></img></a>
                                 <br/>
                                 <a href="mailto:ignacio_lozada@hotmail.com"><img src={correo} alt="notfound" width="150px"></img></a>
                                 <br/>
                                 <a href="tel:+3467827006S"><img src={whatsapp} alt="notfound" width="150px"></img></a>
                                </p>
                                <p>Mi Github Personal:
                                <br />
                                 <a href="https://github.com/ignaloza" target="_blank" rel="noopener noreferrer"> <img src={github} alt="notfound" width="150px"></img></a>
                                 
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;