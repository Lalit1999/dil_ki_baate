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
			title : 'Shayari' ,
			color : 'salmon' ,
		},
		{
			title : 'Quote' ,
			color : 'dodgerBlue' ,
		},
		{
			title : 'Dohe' ,
			color : 'rosyBrown' ,
		},
		{
			title : 'Poem' ,
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
