(function ($) {
	"use strict";

	/*--------------------------
	 auto-size Active Class
	---------------------------- */
	$(".auto-size")[0] && autosize($(".auto-size"));

	/*--------------------------
	 Button BTN Left
	---------------------------- */

	$(".nk-int-st")[0] && ($("body").on("focus", ".nk-int-st .form-control", function () {
		$(this).closest(".nk-int-st").addClass("nk-toggled")
	}), $("body").on("blur", ".form-control", function () {
		var p = $(this).closest(".form-group, .input-group"),
			i = p.find(".form-control").val();
		p.hasClass("fg-float") ? 0 == i.length && $(this).closest(".nk-int-st").removeClass("nk-toggled") : $(this).closest(".nk-int-st").removeClass("nk-toggled")
	})), $(".fg-float")[0] && $(".fg-float .form-control").each(function () {
		var i = $(this).val();
		0 == !i.length && $(this).closest(".nk-int-st").addClass("nk-toggled")
	});

	/*----------------------------
	 jQuery MeanMenu
	------------------------------ */
	jQuery('nav#dropdown').meanmenu();


})(jQuery); 