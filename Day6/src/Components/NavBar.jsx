import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function NavBar() {
    const user = useSelector(state => state.user.value);
    let navigate = useNavigate();

    return (
        <>
            <div>
                <div className='row'>
                    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#b3cee5", height: '12' }}>
                        <div className='col-9 d-flex justify-content-start'>
                            <form
                                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group" style={{ width: '400px', left: '8%', padding: '1%' }}>
                                    <input type="text" className="form-control bg-light border-0 small " placeholder="Search for..."
                                        aria-label="Search" aria-describedby="basic-addon2"
                                    />
                                    <button className="btn btn-secondary" type="button">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className='col-3 d-flex justify-content-end'>
                            <div className="btn-group " style={{ right: '20%' }}>
                                <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className='bi bi-person f5-4'></i> {user.username}
                                </button>
                                <div className="dropdown-menu">
                                   
                                    <button className="dropdown-item" >
                                        <i class="bi bi-person f5-4"
                                            onClick={() => { navigate('/profile') }} style={{ fontSize: '90%', padding: '5%' }}> PROFILE</i>
                                    </button>
                                    <button className="dropdown-item" >
                                        <i class="bi bi-box-arrow-left"
                                            onClick={() => { navigate('/') }} style={{ fontSize: '90%', padding: '5%' }}> LOGOUT</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>

        </>
    );
}

export default NavBar;
