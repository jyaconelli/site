# Sparse array of key value pairs for tags and influence points


if Meteor.isClient	

	Meteor.startup ->
	
		Template.body.helpers videos: ->
			console.log 'face!!'
			Meteor.call 'getVideos', (error, data) ->
				if error
					throw new Meteor.Error error
					console.log 'error'
				else
					console.log 'sent'
				console.log 'worked'