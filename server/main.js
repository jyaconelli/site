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
		cursor = db.query('MATCH (n:Video)-[r:HAS]-(m:Tag) RETURN DISTINCT n, m');
		var cursor;
		console.log(cursor.fetch());
		
		var videos = [];
		cursor.each(function(data, i, cursor){
			videos.push({title:data.n.properties.get('title'), url:data.n.properties.get('url'), tags:data.m.properties.get('name')});
		});
		
		/*for(i = 0; i < cursor.length; i++){
			videos.push({title:cursor[i].n.title, url:cursor[i].n.url});
		}*/
		console.log(videos);
	  return videos;
	}
  });
});