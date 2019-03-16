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
			color : 'rgba(250,128,114,0.7)' ,
		},
		{
			title : 'Love' ,
			color : 'rgba(30,144,255,0.7)' ,
		},
		{
			title : 'Religon' ,
			color : 'rgba(188,143,143,0.7)' ,
		},
		{
			title : 'Others' ,
			color : 'rgba(148,43,226,0.7)' ,
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
	