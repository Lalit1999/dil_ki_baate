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
			color : 'Salmon' ,
			// background_image : './photo1.jpg' ,
		},
		{
			title : 'Sad' ,
			color : 'DodgerBlue' ,
		},
		{
			title : 'Motivational' ,
			color : 'RosyBrown' ,
		},
		{
			title : 'Comedy' ,
			color : 'Blueviolet' ,
		},
		{
			title : 'Patriotic' ,
			color : 'Salmon' ,
		},
		{
			title : 'Inspirational' ,
			color : 'DodgerBlue' ,
		},
		{
			title : 'Life' ,
			color : 'RosyBrown' ,
		},
		{
			title : 'Moral' ,
			color : 'BlueViolet' ,
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

