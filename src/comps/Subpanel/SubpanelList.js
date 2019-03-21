import React from 'react' ;
import Subpanel from './Subpanel.js' ;

class SubpanelList extends React.Component
{	createPanels = () =>{
		return this.props.list.map( (subp, i) => <Subpanel title ={subp.title} color ={subp.color} background_image ={subp.background_image} key={i} />) ;
	}	
	render()
	{
		return (
			<div >

				{this.createPanels()}
			</div>
		) ;
	}
 }

 export default SubpanelList ;
 