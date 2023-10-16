import React from 'react';
import '../Assert/css/front.css';
import FrontNav from './FrontNav';

export default function Front() {
  window.onscroll = function () {
    const mainNav = document.getElementById('roto');
    if (mainNav) {
      if (window.pageYOffset > 1) {
        mainNav.classList.add("active");
      } else {
        mainNav.classList.remove("active");
      }
    }
  };

  return (
    <div>
      <section id="roto">
      <FrontNav/>
        <div id="rotoTransition" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slide">
                <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="slide-1" className="mainImage" />
                <div className="roundOuter"><img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="slide-1" /></div>
                <div className="roundInner"><img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="slide-1" /></div>
                <div className="slideText">
                  <h1 className="animate__animated animate__fadeInUp">DelightInn</h1>
                  <p className="animate__animated animate__fadeInUp">INDIA</p>
                  <div className="buttonNav animate__animated animate__fadeInDown">
                    {/* Add Font Awesome icons here */}
                    <button type="button" data-bs-target="#rotoTransition" data-bs-slide="prev">
                      <i className="fas fa-arrow-left"></i> {/* Replace with the appropriate Font Awesome class */}
                    </button>
                    <span></span>
                    <button type="button" data-bs-target="#rotoTransition" data-bs-slide="next">
                      <i className="fas fa-arrow-right"></i> {/* Replace with the appropriate Font Awesome class */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
