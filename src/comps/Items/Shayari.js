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
			/*background_image : 'url('.photo1.jpg')' ,*/
		},
		{
			title : 'Sad' ,
			color : 'Dodgerblue' ,
		},
		{
			title : 'Motivational' ,
			color : 'Rosybrown' ,
		},
		{
			title : 'Comedy' ,
			color : 'Blueviolet' ,
		},
		{
			title : 'Patriotic' ,
			color : 'salmon' ,
		},
		{
			title : 'Others' ,
			color : 'Dodgerblue' ,
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

