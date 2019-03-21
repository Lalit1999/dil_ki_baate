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
			color : 'Salmon' ,
		},
		{
			title : 'Love' ,
			color : 'DodgerBlue' ,
		},
		{
			title : 'Religon' ,
			color : 'RosyBrown' ,
		},
		{
			title : 'Others' ,
			color : 'BlueViolet' ,
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
	