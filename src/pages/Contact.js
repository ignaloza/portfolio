import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import lkdn from "./linkedin.png";
import github from "./github.png";
import whatsapp from "./whatsapp-192.png";
import correo from "./correo.png";

export const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_uwvhzsc',
       'template_an85u3n', 
       form.current,
        'user_CrXUviM3Sk8byhqwnNyXp')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
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
                                <div className="col-lg-8 mx-auto text-white">
       <div className="contact-form mb-5 mt-5">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                  <div className="col-12">
                      <input type="text" className="form-control border border-dark rounded" placeholder="Name" name="user_name" />
                  </div>
              </div>
              <div className="form-group">
                  <div className="col-12">
                      <input type="email" className="form-control border border-dark rounded" placeholder="Email" name="user_email" />
                  </div>
              </div>
              <div className="form-group">
                  <div className="col-12">
                      <textarea className="form-control col-md border rounded" placeholder="Message" rows="4" name="message" />
                  </div>
              </div>
              <input type="submit" value="Send Message" className="form-control d-inline w-50 p-2 text-white border border-dark rounded hover-overlay ripple shadow-1-strong"/>
          </form>
          </div>
        </div>
                                <p className="mt-4 mb-4 title-font-2">
                                  Ademas, puedes contactarme a traves de:<br />
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