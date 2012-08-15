/*
=require foundation/modernizr.foundation
=require foundation/jquery.placeholder
=require foundation/jquery.foundation.alerts
=require foundation/jquery.foundation.accordion
=require foundation/jquery.foundation.buttons
=require foundation/jquery.foundation.tooltips
=require foundation/jquery.foundation.forms
=require foundation/jquery.foundation.tabs
=require foundation/jquery.foundation.navigation
=require foundation/jquery.foundation.reveal
=require foundation/jquery.foundation.orbit
=require foundation/jquery.foundation.mediaQueryToggle
*/
(function ($) {
  $(function() {
    $(document).foundationAlerts();
    $(document).foundationButtons();
    $(document).foundationAccordion();
    $(document).foundationNavigation();
    $(document).foundationCustomForms();
    $(document).foundationMediaQueryViewer();
    $(document).foundationTabs({callback:$.foundation.customForms.appendCustomMarkup});
    
    $(document).tooltips();
    $('input, textarea').placeholder();
    
    // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
    // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
    // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
    // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
    // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});
  });
})(jQuery);
