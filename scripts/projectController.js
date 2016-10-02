(function(module) {

  var projectController = {};

  project.dataFetch(projectView.initIndexPage);

  projectController.index = function() {
    $('#about').hide();
    $('#projects').show();
    $('#footer').show();  //added because About now hides footer
  };

  module.projectController = projectController;

})(window);
