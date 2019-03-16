import React from 'react' ;
import {Link} from'react-router-dom' ;

import './header.css' ;

const Header = () => {
	return (
		<div className="ui secondary pointing menu" id="bar"> 
			<Link to="/" className="item link"> &hearts;&nbsp;Dil-ki-baate&nbsp;&hearts; </Link> 
			<div className = "ui right secondary menu">
				<Link className="item link" to='/'> Home </Link>
				<Link className="item link" to='/shayari'> Shayari </Link>
				<Link className="item link" to='/quote'> Quote </Link>
				<Link className="item link" to='/dohe'> Dohe </Link>
				<Link className="item link" to='/poem'> Poem </Link>

			</div>
		</div>
		) ; 
}

export default Header ;