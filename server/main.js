Meteor.startup(function() {
  var db;
  db = new Neo4jDB('http://pornsite.sb02.stations.graphenedb.com:24789', {
	username: 'porn_site',
	password: 'ye80gUCDS00pvBUTDxRw'
  });
  return Meteor.methods({
	createUser: function(passkey) {
	  if (db.query('MATCH (n:User) WHERE User.pass_key = {passkey} RETURN n') === null) {
		db.query('MERGE (n:User {pass_key: {passkey}})');
		return true;
	  }
	  return false;
	},
	getVideos: function() {
		
		cursor = db.query(' MATCH (a:Video)-[r:HAS_TAG]-(b:Tag) RETURN a, collect(b)');
		var cursor;
		console.log(cursor.fetch());
		
		var videos = [];
		cursor.each(function(data, i, cursor){
			videos.push({title:data.n.properties.get('title'), url:data.n.properties.get('url'), tags:data.m.properties.get('name'), _id:data.n.properties.get('id')});
		});
		
		console.log(videos);
	  return videos;
	}
  });
});