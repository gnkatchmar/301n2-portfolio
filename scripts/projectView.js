(function(module){

  var projectView = {};

//Displays partial project body; when link clicked, full body displays
  projectView.setTeasers = function() {
    $('.project-body *:nth-of-type(n+2)').hide();
    $('section#projects .read-on').on('click', function (e) {
      e.preventDefault();
      var readOnLink = $(e.target);
      readOnLink.hide();
      readOnLink.parent().find('p').show().fadeIn(500);
      readOnLink.parent().find('img').show().fadeIn(500);  //added to reveal hidden 2nd image on some entries
    });
  };

//Creates index page content, including total word count for footer
  projectView.initIndexPage = function() {
    project.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
    projectView.setTeasers();
    $('footer').text(project.numWordsAll() + ' total words in blog');
  };

  module.projectView = projectView;

})(window);
