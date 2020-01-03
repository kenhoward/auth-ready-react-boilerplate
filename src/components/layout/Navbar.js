import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';

const NavBar = () => {
	return (
		<nav className='nav-wrapper grey darken-3'>
			<div className='container'>
				<Link to='/' className='brand-logo'>
					LSTBYS
				</Link>
				<GoogleAuth />
			</div>
		</nav>
	);
};

export default NavBar;
