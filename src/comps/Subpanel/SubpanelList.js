import React from 'react' ;
import Subpanel from './Subpanel.js' ;

class SubpanelList extends React.Component
{	createPanels = () =>{
		return this.props.list.map( (subp, i) => <Subpanel title ={subp.title} color ={subp.color} key={i} />) ;
	}	
	render()
	{
		return (
			<div>
				{this.createPanels()}
			</div>
		) ;
	}
 }

 export default SubpanelList ;
 