(function(module){

  function Project (opts) {
    this.url = opts.url;
    this.title = opts.title;
    this.category = opts.category;
    this.body = opts.body;
    this.lastMod = opts.lastMod;
  }

  Project.all = [];

//Handlebars template generation
  Project.prototype.toHtml = function() {
    var appTemplate = $('#template').html();
    var compileTemplate = Handlebars.compile(appTemplate);
    this.modStatus = this.lastMod ? 'Last substantial modification: ' + this.lastMod : '(draft)';
    return compileTemplate(this);
  };

//Load all projects in descending order of modification dates
  Project.loadAll = function(data) {
    data.sort(function(a, b) {
      return (new Date(b.lastMod)) - (new Date(a.lastMod));
    });

    //this mapped chunklet is called by projectView.initIndexPage
    Project.all = data.map(function(ele) {
      return new Project(ele);
    });
  };

//Grabs the JSON project data, sends to Project.loadAll
  Project.dataFetch = function(callback) {
    $.getJSON('data/blogProjects.json', function (data) {
      Project.loadAll(data);
      callback();
    });
  };

//Provides rough count of total words of all project bodies
  Project.numWordsAll = function() {
    return Project.all.map(function(project) {
      return project.body.split(' ').length;
    })
   .reduce(function(accum, index) {
     return accum + index;
   });
  };

  module.project = Project;

})(window);
