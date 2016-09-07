var projects = [];

function Project (opts) {
  this.url = opts.url;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.lastMod = opts.lastMod;
}

Project.prototype.toHtml = function() {
  var appTemplate = $('#template').html();
  var compileTemplate = Handlebars.compile(appTemplate);
  this.daysAgo = parseInt((new Date() - new Date(this.lastMod))/60/60/24/1000);
  this.modStatus = this.lastMod ? 'Last substantial modification: ' + this.daysAgo + ' days ago' : '(draft)';
  return compileTemplate(this);
};

rawData.sort(function(a,b) {
  return (new Date(b.lastMod)) - (new Date(a.lastMod));
});

rawData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
