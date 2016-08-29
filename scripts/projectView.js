var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      // var val =  $(this).find('address a').text();
      // var optionTag = "<option value='" + val + "'>" + val + "</option>";
      // $('#author-filter').append(optionTag);
      var val = $(this).attr('data-category');
      optionTag = "<option value='" + val + "'>" + val + "</option>";
      if ($("#category-filter option[value='" + val + "']").length === 0 ) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleCategoryFilter = function() {
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

articleView.handleMainNav = function() {
  $('.main-nav .tab').on('click', function(){
    var tab_id = $(this).attr('data-content');
    var selectedTab = $('#' + tab_id);
    $('section.tab-content').hide();
    selectedTab.show();
  });

  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('section#articles .read-on').on('click', function (e) {
    e.preventDefault();
    var readOnLink = $(e.target);
    readOnLink.hide();
    readOnLink.parent().find('p').show();
    readOnLink.parent().find('p').fadeIn(500);
  });
};

$(document).ready(function() {
	articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
//
});
