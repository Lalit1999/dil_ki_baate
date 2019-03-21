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
			color : 'Salmon' ,
		},
		{
			title : 'Sant Rahim' ,
			color : 'DodgerBlue' ,
		},
		{
			title : 'Tulsi Das' ,
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
					<Heading title = "Dohe" />
					<SubpanelList list = {this.arr} />
					
				</div>
			</div>
			) ;
	}
}

export default Dohe ;
