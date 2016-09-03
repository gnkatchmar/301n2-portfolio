var projects = [];

function Project (opts) {
  this.url = opts.url;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.lastMod = opts.lastMod;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  if (!this.lastMod) {
    $newProject.addClass('draft');
  }
  $newProject.attr('data-category', this.category);
  $newProject.find('a').attr('href', this.url);
  $newProject.find('h1:first').html(this.title);
  $newProject.find('.project-body').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.lastMod);
  $newProject.find('time[pubdate]').attr('title', this.lastMod);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.lastMod))/60/60/24/1000) + ' days ago');
  $newProject.append('<hr>');
  return $newProject;
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
