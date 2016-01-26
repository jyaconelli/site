Meteor.startup ->
	db = new Neo4jDB 'http://pornsite.sb02.stations.graphenedb.com:24789',
		{
			username: 'porn_site',
			password: 'ye80gUCDS00pvBUTDxRw'
		}
	Meteor.methods
		createUser: (passkey) ->
			if db.query('MATCH (n:User) WHERE User.pass_key = {passkey} RETURN n') == null
				db.query('MERGE (n:User {pass_key: {passkey}})')
				return true
			return false
		
		getVideos: ->
			cursor = db.query('MATCH (n:Video) RETURN n')
			console.log cursor.fetch()
			cursor.fetch()