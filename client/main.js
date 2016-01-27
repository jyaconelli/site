Template.body.helpers({
	videos: function() {
		Meteor.call('getVideos', function(error, data) {
			if (error) {
				throw new Meteor.Error(error);
			} else {
				Session.set('videos', data);
			}
		});
		return Session.get('videos');
	}
});