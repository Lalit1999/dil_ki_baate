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
			title : 'shayari' ,
			color : 'salmon' ,
		},
		{
			title : 'quote' ,
			color : 'dodgerBlue' ,
		},
		{
			title : 'dohe' ,
			color : 'rosyBrown' ,
		},
		{
			title : 'poem' ,
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
					