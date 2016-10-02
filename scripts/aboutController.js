(function(module) {

  var aboutController = {};

  aboutController.index = function() {
    //also hides footer
    $('#about').show().siblings().hide();
  };

  module.aboutController = aboutController;

})(window);
