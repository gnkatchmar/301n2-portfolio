(function(module) {

  var projectController = {};

  projectController.index = function(ctx, next) {
    projectView.index(ctx.projects);
  };

  projectController.loadAll = function(ctx, next) {
    var projectData = function(allProjects) {
      ctx.projects = project.all;
      next();
    };

    if (project.all.length) {
      ctx.projects = project.all;
      next();
    } else {
      project.dataFetch(projectData);
    }
  };

  project.dataFetch(projectView.initIndexPage);

  projectController.index = function() {
    // $('#about').hide();
    $('#projects').show();
    // $('#footer').show();  //added because About now hides footer
  };

  module.projectController = projectController;

})(window);
