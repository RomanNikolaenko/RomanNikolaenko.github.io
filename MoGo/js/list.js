$(function () {
	$('.newscontent').hide();
	$('h3.newstitle').click(function () {
		$(this).next().slideToggle('slow').siblings('div.newscontent:visible').slideUp('slow');
	});
});