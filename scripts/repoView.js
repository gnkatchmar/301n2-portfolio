(function(module) {

  var repoView = {};

  var ui = function() {
    var $about = $('#about');
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(repoInfo) {
    var template = Handlebars.compile($('#repo-template').text());
    return template(repoInfo);
  };

  repoView.index = function() {
    ui();
    $('#about ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
