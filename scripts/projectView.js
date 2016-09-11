var projectView = {};

projectView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0 ) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

projectView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      var $selectedCategory = $('article[data-category="' + $(this).val() + '"]');
      $('article').hide();
      $selectedCategory.fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

projectView.handleMainNav = function() {
  $('.main-nav .tab').on('click', function(){
    var tab_id = $(this).attr('data-content');
    var selectedTab = $('#' + tab_id);
    $('section.tab-content').hide();
    selectedTab.show();
  });

  $('.main-nav .tab:first').click();
};

projectView.setTeasers = function() {
  $('.proect-body *:nth-of-type(n+2)').hide();
  $('section#proejcts .read-on').on('click', function (e) {
    e.preventDefault();
    var readOnLink = $(e.target);
    readOnLink.hide();
    readOnLink.parent().find('p').show();
    readOnLink.parent().find('p').fadeIn(500);
  });
};

$(document).ready(function() {
  projectView.populateFilters();
  projectView.handleCategoryFilter();
  projectView.handleMainNav();
  projectView.setTeasers();
//
});
