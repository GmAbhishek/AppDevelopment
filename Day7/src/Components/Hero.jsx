import React from "react"
import "../CSS/Hero.css"
import { useNavigate } from "react-router-dom"

const Hero = () => {

    let navigate = useNavigate();
    return (
        <>
                <div className='hero'>
                    <div className='row' >
                        <div id='heading'>
                            <h3>WELCOME TO CAMCRAFT </h3>
                            <h1>Best Online Education Expertise</h1>                        
                            <div>
                                <button className='hero-btn' onClick={()=>{navigate('signup')}}>
                                    GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                                </button>
                                <button className='hero-btn' onClick={()=>{navigate('courses')}}>
                                    VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Hero