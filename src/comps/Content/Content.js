import React from 'react' ;
import Heading from '../Heading/Heading.js' ;

class Content extends React.Component
{	constructor()
	{
		super() ;
		this.state = {
			type : '' ,
			tag : '' ,
		} ;
	}

	componentDidMount = () =>{
		let name = window.location.pathname.split('/').slice(1) ;
		name[1] = name[1].replace('%20',' ') ;
		this.setState( { type : name[0] , tag : name[1] } ) ;
		console.log(this.state) ;
	} 

	render()
	{	console.log(this.state) ;
		return(
			<div>
				<div className = 'panel'>
					 <Heading title={this.state.tag} />
				</div>
			</div>
			) ;
	}
}

export default Content ;