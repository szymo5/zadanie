import { useState, useEffect } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom'



const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [location])

    const logout = () => {
        localStorage.clear();
        navigate('/auth');
    }


    return ( 
        <div className="navbar-container flex">
            <div className="navbar-box flex">
                <Link to="/">
                    <div className="logo">My App</div>
                </Link>
                <div className='flex' style={{justifyContent: 'space-between', width: user?.root ? '125px' : '80px'}}>
                    {user?.root && (
                        <span className="material-symbols-outlined" style={{fontSize: '28px', color: '#555'}} title="admin mode">school</span>
                        )
                    }
                    {user ? (
                            <>
                                <div className="avatar">
                                    {user.username.split('')[0].toUpperCase()}
                                </div>
                                <span className="material-symbols-outlined" style={{cursor: "pointer"}} onClick={logout}>
                                    logout
                                </span>
                            </>
                    ) : (
                        <Link to="/auth">
                            <span className="material-symbols-outlined" style={{fontSize: '32px', marginRight: '20px', color: '#555'}}>
                                account_circle
                            </span>
                        </Link>
                    )}
                </div>
            </div>
        </div> 
    );
}
 
export default Navbar;