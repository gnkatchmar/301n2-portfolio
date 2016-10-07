(function(module) {

  var repoView = {};

  var ui = function() {
    var $about = $('#about');
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

//log results: Ready to Render, Repos.With but not At Render
//non-error failure point: repos.with('name').map(render) (results in empty repos.all array})

  var render = function(repoInfo) {
    console.log('At Render');
    var template = Handlebars.compile($('#repo-template').text());
    return template(repoInfo);
  };

  repoView.index = function() {
    ui();
    console.log('Ready to Render');
    $('#about ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
