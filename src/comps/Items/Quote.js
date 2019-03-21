import React from 'react' ;

import Heading from '../Heading/Heading.js' ;
import SubpanelList from '../Subpanel/SubpanelList.js' ;


class Quote extends React.Component
{
	constructor()
	{
		super() ;
		this.arr = [
		{
			title : 'Motivational' ,
			color : 'salmon' ,
		},
		{
			title : 'Love' ,
			color : 'Dodgerblue' ,
		},
		{
			title : 'Religon' ,
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
					<Heading title = "Quote" />
					<SubpanelList list = {this.arr} />

				</div>
			</div>
			) ;
	}
}

export default Quote ;
	