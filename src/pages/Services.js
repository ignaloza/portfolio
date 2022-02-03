import React from 'react';
import LetsWork from '../components/LetsWorkTogether';

// service icons 

import mail from '../img/services/mail.png';
import seo from '../img/services/seo.png';
import content from '../img/services/content.png';
import share from '../img/services/share.png';
import web from '../img/services/web.png';


const Services = () => {

    const serviceIcons = [
        {
            "id": "1",
            "title": "Web Design & Development",
            "image": web,
            "description": "Mis servicios de diseño y desarrollo web incluyen desde diseño gráfico hasta UX."
        },

        {
            "id": "2",
            "title": "Email Marketing",
            "image": mail,
            "description": "Manténgase en la mente con una de las campañas de marketing por correo electrónico más creativas."
        },
        {
            "id": "3",
            "title": "Search Engine Optimization",
            "image": seo,
            "description": "Posicionese en los primeros lugares de los motores de búsqueda. SEO local, construcción de enlaces y más"
        },
        {
            "id": "4",
            "title": "Content Marketing Services",
            "image": content,
            "description": "Podemos ser la voz de tu empresa con contenido de calidad. Mi capacidad y calidad de redacción le dará a su marca la voz que necesita para sobresalir."
        },
        {
            "id": "5",
            "title": "Social Media Paid Advertising",
            "image": share,
            "description": "Desde campañas de reconocimiento de marca hasta embudos de clientes potenciales, tengo las herramientas para crear los anuncios adecuados para su negocio."
        }

    ]

    return(
        <>
        <div className="services section-title mt-5">
            <div className="container text-white">
                <div className="row align-items-center">
                    <div className="col-md-7 mx-auto">
                        <div className="services-title mb-5 mt-5">
                            <h1 className="title-font title-font-size">
                                Services
                            </h1>
                            <p className="title-text mt-4 mb-4 title-font-2">
                                Our services are built for your business needs
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    {
                        serviceIcons.map(service => (
                            <div className="col-12 col-lg-6" key={service.id}>
                                <div className="service-boxes">
                                    <div className="service-icon">
                                    <img className="service-icon-img mb-3" src={service.image} alt="instagram"/>
                                    </div>
                                    <div className="service-info-title">
                                        <h3 className="service-name title-font-2">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <div className="service-info">
                                        <p className="service-description text-left title-font-2 mt-3">
                                        {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
            
        <LetsWork/>
        </>
    );
}

export default Services;