import { Link } from 'react-router-dom';

const Home = () => {

    return(       
        <header className='header'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>            
        </header>
        
    )
}


export default Home
