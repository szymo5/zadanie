import { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom'


const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const location = useLocation();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [location])


    return ( 
        <div className="navbar-container flex">
            <div className="navbar-box flex">
                <Link to="/">
                    <div className="logo">My App</div>
                </Link>
                <div className='flex' style={{justifyContent: 'space-around', width: '100px', cursor: 'pointer'}}>
                    {user?.root && (
                        <span className="material-symbols-outlined" style={{fontSize: '28px', color: '#555'}} title="admin mode">school</span>
                        )
                    }
                    {user ? (
                            <div className="avatar">
                                {user.username.split('')[0].toUpperCase()}
                            </div>
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