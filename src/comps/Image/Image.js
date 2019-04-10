import React from 'react' ;

import './image.css' ;

class Image extends React.Component
{
	render()
	{	const {link, type} = this.props ;
		return (
			<div className="img-con"> 
				<img src={link} alt={type}/>
			 </div>
			) ;
	}
	
}

export default Image ;