import React from 'react' ;
import './Home.css' ;
import Heading from '../Heading/Heading.js' ;
import SubpanelList from '../Subpanel/SubpanelList.js' ;

class Home extends React.Component 
{	constructor()
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
		return(
			<div>
				<div className="panel">
					<Heading title = "Dil &nbsp;&nbsp;-&nbsp;&nbsp; ki &nbsp;&nbsp;- &nbsp;&nbsp;Baate" />
					<SubpanelList list = {this.arr} />
				</div>
			</div>
		) ;
	}
}

export default Home ;
