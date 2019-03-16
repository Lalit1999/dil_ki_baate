import React from 'react' ;

import Heading from '../Heading/Heading.js' ;
import SubpanelList from '../Subpanel/SubpanelList.js' ;


class Poem extends React.Component
{
	constructor()
	{
		super() ;
		this.arr = [
		{
			title : 'Children' ,
			color : 'salmon' ,
		},
		{
			title : 'Patriotic' ,
			color : 'dodgerBlue' ,
		},
		{
			title : 'Motivational' ,
			color : 'rosyBrown' ,
		},
		{
			title : 'Happy' ,
			color : 'blueViolet' ,
		},
		] ;
	}
	
	render()
	{
		return (
			<div>
				<div className="panel">
					<Heading title = "Poem" />
					<SubpanelList list = {this.arr} />

				</div>
			</div>
			) ;
	}
}

export default Poem ;
					