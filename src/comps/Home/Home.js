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
			color : 'rgba(250,128,114,0.7)' ,
		},
		{
			title : 'Quote' ,
			color : 'rgba(30,144,255,0.7)' ,
		},
		{
			title : 'Dohe' ,
			color : 'rgba(188,143,143,0.7)' ,
		},
		{
			title : 'Poem' ,
			color : 'rgba(148,43,226,0.7)' ,
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
