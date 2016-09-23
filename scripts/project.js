function Project (opts) {
  this.url = opts.url;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.lastMod = opts.lastMod;
}

Project.all = [];

Project.prototype.toHtml = function() {
  var appTemplate = $('#template').html();
  var compileTemplate = Handlebars.compile(appTemplate);
  this.daysAgo = parseInt((new Date() - new Date(this.lastMod))/60/60/24/1000);
  this.modStatus = this.lastMod ? 'Last substantial modification: ' + this.daysAgo + ' days ago' : '(draft)';
  return compileTemplate(this);
};

Project.loadAll = function(data) {
  data.sort(function(a, b) {
    return (new Date(b.lastMod)) - (new Date(a.lastMod));
  });

  data.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
};

Project.dataFetch = function() {
  $.getJSON('data/blogProjects.json', function (data) {
    Project.loadAll(data);
    projectView.initIndexPage();
  });
};
