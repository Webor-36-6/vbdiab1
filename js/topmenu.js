
$(function () {
	let $topMenu = $('#s29TopMenu');
	let $topMenuMain = $topMenu.find('.s29_menu.s29_main');
	let $topMenuSubmenuContainer = $topMenu.find('.s29_submenuContainer');
	let $topMenuBack = $topMenuSubmenuContainer.find('button.s29_back');
	let $topMenuSubmenus = $topMenuSubmenuContainer.find('.s29_menu.s29_sub');
	let $topMenuPlaceholder = $topMenuMain.children('.s29_placeholder');
	let $topMenuRight = $topMenuMain.children('.s29_right');
	
	function topMenuEnterSubmenu()
	{
		let code = $(this).data('code');
		let $submenu = $topMenu.find('.s29_menu.s29_sub[data-code="' + code + '"]');
		$topMenuSubmenus.hide();
		$submenu.css('display', 'table');
		$topMenuMain.fadeOut({ complete: () => $topMenuSubmenuContainer.fadeIn() });
	}
	
	function topMenuGoBack()
	{
		$topMenuSubmenuContainer.fadeOut({ complete: () => $topMenuMain.fadeIn() });
	}
	
	function topMenuAdjust()
	{
		$topMenuRight.show().css('display', 'table-cell');
		if ($topMenuPlaceholder.width() < 1)
			$topMenuRight.hide();
	}
	
	$topMenuMain.children('button').click(topMenuEnterSubmenu);
	$topMenuBack.click(topMenuGoBack);
	
	$(window).resize(topMenuAdjust);
	topMenuAdjust();
});
