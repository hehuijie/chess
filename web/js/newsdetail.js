$(function() {
	var firstpic = $(".detail_picbot_mid ul li").first().find("img");
	var firstsrc = firstpic.attr("bigimg");
	$("#pic1").attr("src", firstsrc);
	firstpic.addClass("selectpic");

	$("#preArrow_B").click(function() {
		preclick()
	});
	$("#nextArrow_B").click(function() {
		nextclick()
	});
	//上一个
	function preclick() {
		var currrentindex = parseFloat($("#pic1").attr("curindex"));
		console.log(currrentindex);
		if(currrentindex != 0) {
			var curli = $(".detail_picbot_mid ul li").eq(currrentindex);
			var length = $(".detail_picbot_mid ul li").length;
			if(currrentindex <= (length - 3)) {
				$(".detail_picbot_mid ul li").eq(currrentindex + 2).css("display", "none");
				$(".detail_picbot_mid ul li").eq(currrentindex - 1).css("width", "138px").css("display", "block")
			}
			var curnextli = $(".detail_picbot_mid ul li").eq(currrentindex - 1);
			var curnextsrc = curnextli.find("img").attr("bigimg");
			curli.find("img").removeClass("selectpic");
			curnextli.find("img").addClass("selectpic");
			$("#pic1").attr("src", curnextsrc);
			$("#pic1").attr("curindex", currrentindex - 1)
		}
	};
	//下一个
	function nextclick() {
		var currrentindex = parseFloat($("#pic1").attr("curindex"));

		var length = $(".detail_picbot_mid ul li").length;
		console.log(currrentindex + "////" + length);
		if(currrentindex != (length-1)) {
			var curli = $(".detail_picbot_mid ul li").eq(currrentindex);
			if(currrentindex > 1) {
				$(".detail_picbot_mid ul li").eq(currrentindex - 2).css("display", "none");
				$(".detail_picbot_mid ul li").eq(currrentindex + 1).css("width", "138px").css("display", "block")
			}
			var curnextli = $(".detail_picbot_mid ul li").eq(currrentindex + 1);
			var curnextsrc = curnextli.find("img").attr("bigimg");
			curli.find("img").removeClass("selectpic");
			curnextli.find("img").addClass("selectpic");
			$("#pic1").attr("src", curnextsrc);
			$("#pic1").attr("curindex", currrentindex + 1);
		}
		
	}
	//小图的点击
	$(".detail_picbot_mid ul li").click(function() {
		var currentliindex = $(this).index(".detail_picbot_mid ul li");
		$(".detail_picbot_mid ul li img[class='selectpic']").removeClass("selectpic");
		var currentli = $(".detail_picbot_mid ul li").eq(currentliindex);
		currentli.find("img").addClass("selectpic");
		var bigimgsrc = currentli.find("img").attr("bigimg");
		var curnexttxt = currentli.find("img").attr("text");
		$("#pic1").attr("src", bigimgsrc);
		$("#pic1").attr("curindex", currentliindex);
	});
	setblock();

	function setblock() {
		var left = $(window).width() / 2 - 300;
		$(".firsttop").css("left", left);
		$(".endtop").css("left", left)
	}
	$(window).resize(function() {
		setblock()
	});
	
});