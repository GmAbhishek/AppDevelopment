
import Sidebar from './Sidebar'
import Nav from './nav'

function Layout() {
  return (
    <>
    <div className='Appbar'>
        <Nav/>
        <Sidebar/>
    </div>
    </>
  )
}

export default Layout