import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className="navbar-container flex">
            <div className="navbar-box flex">
                <Link to="/">
                    <div className="logo">My App</div>
                </Link>
                <Link to="/auth">
                    <span className="material-symbols-outlined" style={{fontSize: '32px', marginRight: '20px', color: '#555'}}>
                        account_circle
                    </span>
                </Link>
            </div>
        </div> 
    );
}
 
export default Navbar;