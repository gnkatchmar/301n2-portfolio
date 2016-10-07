(function(module) {
  var repos = {};

  repos.all = [];

  //Retrieve my GitHub repository JSON via API
  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/gnkatchmar/repos',
      type: 'GET',
      success: function(data){
        repos.all = data;  //added as repos.with('name').map(render) stopped working and could not fix
        callback();
      },
      error: function() {
        console.log('Error. Could not access GitHub repositories.');
      }
    	});
  };

  //filter of repositories based on attr - set to name (which all have by default)
  repos.with = function(attr) {
    console.log('Repos.With');
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
