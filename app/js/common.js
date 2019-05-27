$(function() {

	$('.tabs-nav a').click(function() {

		//Check if the tabs menu has active class
		$('.tabs-nav li').removeClass('active');
		$(this).parent().addClass('active');
	
		// Display active tab
		var currentTab = $(this).attr('href');
		$('.tabs-content > div').hide();
		$(currentTab).show();
	
		return false;
	  });


	  var addTab = $('#addtab');
	  

	  

});
