import React from 'react' ;

import Image from '../Image/Image.js' ;
import Heading from '../Heading/Heading.js' ;

class Content extends React.Component
{	constructor()
	{
		super() ;
		this.state = {
			type : '' ,
			tag : '' ,
			data : []
		} ;
	}

	componentDidMount = () =>{
		let name = window.location.pathname.split('/').slice(1) ;
		name[1] = name[1].replace('%20',' ') ;
		this.setState( { type : name[0] , tag : name[1] }, () => this.getData() ) ;
		//console.log(this.state) ;
	} 

	getData = () => {
		let t = this.state.tag.slice(0, 4) ;
		const url = 'http://dkb-api.herokuapp.com/' + this.state.type + '?type=' +  t ;
		fetch(url)
		.then( res => {
			    if ( res.ok )
	            	return res.json() ;
	            else 
	                throw Error(res.statusText)
		          } )
		.then( resp => {
	            //console.log(resp) ;
	            this.setState({data: resp});
	                	} )
	    .catch( err => console.log(err) ) ;
	}

	createImage = () => {
		if ( this.state.data.length)
		{	return this.state.data.map( (img,  i) => {
				return <Image key={i} link={img.link} type={img.type}/> ;
			}) ;
		}
	}

	render()
	{	console.log(this.state) ;
		return(
			<div>
				<div className = 'panel'>
					<Heading title={this.state.tag} />
					<div>
						{this.createImage()}
					</div>
				</div>
			</div>
			) ;
	}
}

export default Content ;