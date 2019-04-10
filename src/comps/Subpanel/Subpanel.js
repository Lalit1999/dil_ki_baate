import React from 'react' ;
import {Link} from 'react-router-dom' ;

import './Subpanel.css' ;
const Subpanel = (props) =>{
	let link = (window.location.pathname === '/' ? props.title : window.location.pathname + '/' + props.title) ;
	return (
		<div className={'subp ' + props.color} style={{background: props.color}}  >
			<Link to={link} className="text">
				{props.title}
			</Link>
		</div>
		) ;
}

export default Subpanel ;

