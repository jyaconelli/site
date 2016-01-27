Video = React.createClass({
	propTypes: {
		video: React.PropTypes.object.isRequired
	},
	
	render(){
		return (
			<li><a href="{this.props.video.url}">{this.props.video.title}</a>{this.props.video.tags}</li>
		);
	}

});