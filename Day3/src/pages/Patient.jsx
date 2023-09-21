
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import Layout from '../components/Layout'
function Patient() {
    
    const user=useSelector(selectUser)
    return (
        
        <>

            <Layout/>
            <h1> Welcome <span className=' username-color'>{user.username} </span> ! </h1>

        </>
    )
}

export default Patient