App = React.createClass({
	getVideos() {
		Meteor.call('getVideos', function(error, data) {
			if (error) {
				throw new Meteor.Error(error);
			} else {
				Session.set('videos', data);
			}
		});
		console.log(Session.get('videos'));
		
		return Session.get('videos');
		
	},
	
	renderVideos(){
		return this.getVideos().map((video) => {
			return <Video key={video._id} video={video} />;
		});
	},
	
	render(){
		return(
			<div className="container">
				<header>
					<h1>Videos</h1>
				</header>
				
				<ul>
					{this.renderVideos()}
				</ul>
			</div>
		);
	}
	
});