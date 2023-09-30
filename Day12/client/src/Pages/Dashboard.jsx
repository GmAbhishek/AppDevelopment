import React from 'react'
import NavBar from '../Components/NavBar'
import { useSelector } from 'react-redux'
import '../CSS/Dashboard.css'
import Records from "../Data/Overview";
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import SideNavBar from '../Components/SideNavBar';

export default function Dashboard() {

  const user = useSelector(state => state.user.value)

  return (
    <div>
      <div className='navbar-container'>
        <NavBar />
      </div>
      <div>
        <SideNavBar />
      </div>

      <div className='dashboard-container'>

        <div className='row'>
          <div className='col-md-3'>
            <h4 style={{ display: 'flex' }}>HELLO {user.username} !</h4>
            <p style={{ display: 'flex' }}>Let's Learn something new</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-3'>
            <br />
            <h4 style={{ display: 'flex' }}>OVERVIEW</h4>
            <br />
          </div>
        </div>
        <div className='row'>
          {
            Records && Records.map((element) => {
              return (
                <div className='col-md-3'>
                  <div key={element.id}>

                    <div className="Card" >
                      <Card
                        sx={{
                          display:'flex',
                          maxWidth: 250,
                          maxHeight: 200,
                          bgcolor: "#005A9C",
                        }}
                      >
                        
                        <CardMedia
                        component="img"            
                        image={require('../Images/'+ element.imagePath)}
                          sx={{ width: 90, height:80 ,marginTop:'12%',paddingLeft:'4%'}} />
                        <CardContent>
                          <Typography
                            variant="h3"
                            color={"white"}
                          >
                            {element.numbers}
                          </Typography>
                          <Typography
                            variant="h6"
                            color={"white"}
                          >
                            {element.content}
                          </Typography>
                        </CardContent>
                      </Card>

                      <br />

                    </div>
                  </div>
                </div>
              );
            })
          }

        </div>
      </div>

      <div className='footer-common'>

      </div>
    </div>
  )
}
