(function(module){

  var projectView = {};

//Event handler for navigation
  projectView.handleMainNav = function() {
    $('.main-nav .tab').on('click', function(){
      var tab_id = $(this).attr('data-content');
      var selectedTab = $('#' + tab_id);
      $('section.tab-content').hide();
      selectedTab.show();
    });
    //initial default choice
    $('.main-nav .tab:first').click();
  };

//Displays partial project body; when link clicked, full body displays
  projectView.setTeasers = function() {
    $('.project-body *:nth-of-type(n+2)').hide();
    $('section#projects .read-on').on('click', function (e) {
      e.preventDefault();
      var readOnLink = $(e.target);
      readOnLink.hide();
      readOnLink.parent().find('p').show();
      readOnLink.parent().find('p').fadeIn(500);
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

  $(document).ready(function() {
    project.dataFetch(projectView.initIndexPage);
    projectView.handleMainNav();
  });

  module.projectView = projectView;

})(window);
