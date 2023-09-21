
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import Layout from '../components/Layout'
function Patient() {
    
    const user=useSelector(selectUser)
    return (
        
        <>
            <Layout/>
            <h1><span className=' username-color pink'>{user.username} </span> is to be admitted soon </h1>

        </>
    )
}

export default Patient