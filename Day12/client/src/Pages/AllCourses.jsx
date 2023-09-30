import React from 'react'
import pre from '../Images/b4.webp'
import prev from '../Images/montage.jpg'
import next from '../Images/b3.webp'
import Footer from '../Components/Footer'
import tripod from '../Images/tripod.png'
import lens from '../Images/lens.png'
import studio from '../Images/studio.png'

export default function AllCourses() {


  return (
    <>
      <div className="container-fluid">
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ height: "100%", width: "70%" }}>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={pre} alt="..." style={{ height: "700px", width: "100%" }} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Creative Thinking</h5>
                    <p>Enhances the texture and Aesthetics for Photography.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={next} alt="..." style={{ height: "700px", width: "100%" }} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={prev} alt="..." style={{ height: "700px", width: "100%" }} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center' style={{ paddingTop: '5%' }}>
          <div className='col-md-3'>
            <div className="card" style={{ width: "300px" }}>
              <img src={tripod} className="card-img-top" alt="..." style={{ padding: '20%' }} />
              <div className="card-body">
                <h5 className="card-title">Camera, Exposure & Photography</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <br />
                <a href="#" className="btn btn-primary">ENROLL NOW</a>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card" style={{ width: "300px" }}>
              <img src={lens} className="card-img-top" alt="..." style={{ padding: '20%' }} />
              <div className="card-body">
                <h5 className="card-title">Fashion & Glamour Photography</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <br />
                <a href="#" className="btn btn-primary">ENROLL NOW</a>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card" style={{ width: "300px" }}>
              <img src={studio} className="card-img-top" alt="..." style={{ padding: '20%' }} />
              <div className="card-body">
                <h5 className="card-title">Introduction to Digital Photography</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <br />
                <a href="#" className="btn btn-primary">ENROLL NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '3%' }}>
        <hr />
        <Footer />
      </div>
    </>
  )
}
