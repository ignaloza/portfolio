import React from 'react';
import '../App.scss';

function Banner () {
    
    return (
      <div className="banner">
          <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                    <div className="banner-text text-left mt-4">
                        <h1 className="title-font">
                           Ignacio Lozada
                            <span className="text-customer">.</span> 
                        </h1>
                    </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default Banner;