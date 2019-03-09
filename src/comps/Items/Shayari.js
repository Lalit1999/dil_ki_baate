import React from 'react' ;

import Heading from '../Heading/Heading.js' ;
import SubpanelList from '../Subpanel/SubpanelList.js' ;


class Shayari extends React.Component
{	
	constructor()
	{
		super() ;
		this.arr = [
		{
			title : 'Romantic' ,
			color : 'salmon' ,
		},
		{
			title : 'Sad' ,
			color : 'dodgerBlue' ,
		},
		{
			title : 'Motivational' ,
			color : 'rosyBrown' ,
		},
		{
			title : 'Comedy' ,
			color : 'blueViolet' ,
		},
		{
			title : 'Patriotic' ,
			color : 'salmon' ,
		},
		{
			title : 'Others' ,
			color : 'dodgerBlue' ,
		},
		
		] ;
	}
	render()
	{
		return (
			<div>
				<div className="panel">
					<Heading title = "Shayari" />
					<SubpanelList list = {this.arr} />

				</div>
			</div>
			) ;
	}
}

export default Shayari ;

