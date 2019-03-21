import React from 'react' ;

import Heading from '../Heading/Heading.js' ;
import SubpanelList from '../Subpanel/SubpanelList.js' ;


class Dohe extends React.Component
{	
	constructor()
	{
		super() ;
		this.arr = [
		{
			title : 'Sant Kabir' ,
			color : 'salmon' ,
		},
		{
			title : 'Sant Rahim' ,
			color : 'Dodgerblue' ,
		},
		{
			title : 'Tulsi Das' ,
			color : 'Rosybrown' ,
		},
		{
			title : 'Others' ,
			color : 'Blueviolet' ,
		},
		] ;
	}
	
	render()
	{
		return (
			<div>
				<div className="panel">
					<Heading title = "Dohe" />
					<SubpanelList list = {this.arr} />
					
				</div>
			</div>
			) ;
	}
}

export default Dohe ;
