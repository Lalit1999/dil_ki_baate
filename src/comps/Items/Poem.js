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
			color : 'Salmon' ,
		},
		{
			title : 'Patriotic' ,
			color : 'DodgerBlue' ,
		},
		{
			title : 'Motivational' ,
			color : 'RosyBrown' ,
		},
		{
			title : 'Happy' ,
			color : 'BlueViolet' ,
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
					