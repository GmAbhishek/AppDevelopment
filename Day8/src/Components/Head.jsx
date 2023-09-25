import React from "react"
import '../CSS/Head.css'

const Head = () => {

    return (
        <>
            <section className='head'>
                <div className="row">
                    <div className="col-9" style={{display:'flex'}}>
                        <div className='logo' >
                            <h1>CAMCRAFT</h1>
                            <h6>ONLINE PHOTOGRAPHY LEARNING PLATFORM & COMMUNITY</h6>
                        </div>
                    </div>

                    <div className="col-3" >
                        <div className='social' >
                            <i className='bi bi-facebook' style={{ padding: '3%', fontSize: '175%',color:'#1eb2a6' }}></i>
                            <i className='bi bi-instagram' style={{ padding: '3%', fontSize: '175%',color:'#1eb2a6' }}></i>
                            <i className='bi bi-twitter' style={{ padding: '3%', fontSize: '175%',color:'#1eb2a6' }}></i>
                            <i className='bi bi-youtube' style={{ padding: '3%', fontSize: '175%',color:'#1eb2a6' }}></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head