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
			color : 'rgba(250,128,114,0.7)' ,
		},
		{
			title : 'Patriotic' ,
			color : 'rgba(30,144,255,0.7)' ,
		},
		{
			title : 'Motivational' ,
			color : 'rgba(188,143,143,0.7)' ,
		},
		{
			title : 'Happy' ,
			color : 'rgba(148,43,226,0.7)' ,
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
					