var aCity = {
	11 : "北京",
	12 : "天津",
	13 : "河北",
	14 : "山西",
	15 : "内蒙古",
	21 : "辽宁",
	22 : "吉林",
	23 : "黑龙江 ",
	31 : "上海",
	32 : "江苏",
	33 : "浙江",
	34 : "安徽",
	35 : "福建",
	36 : "江西",
	37 : "山东",
	41 : "河南",
	42 : "湖北 ",
	43 : "湖南",
	44 : "广东",
	45 : "广西",
	46 : "海南",
	50 : "重庆",
	51 : "四川",
	52 : "贵州",
	53 : "云南",
	54 : "西藏 ",
	61 : "陕西",
	62 : "甘肃",
	63 : "青海",
	64 : "宁夏",
	65 : "新Unbsp;疆",
	71 : "台湾",
	81 : "香港",
	82 : "澳门",
	91 : "国外 "
}
function cidInfo(sId) {
	var iSum = 0
	var info = ""
	if (!/^\d{17}(\d|x)$/i.test(sId))
		return false;
	sId = sId.replace(/x$/i, "a");
	if (aCity[parseInt(sId.substr(0, 2))] == null)
		return false; // "Error:非法地区";

	sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-"
			+ Number(sId.substr(12, 2));
	var d = new Date(sBirthday.replace(/-/g, "/"));
	if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d
			.getDate()))
		return false; // "Error:非法生日";

	for ( var i = 17; i >= 0; i--)
		iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11)
	if (iSum % 11 != 1)
		return false; // "Error:非法证号";
	return true;
	// return
	// aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"
	// 男":"女")
}
function checkEmail(email) {
	if (email
			.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
		return true;
	else
		return false;
}
function checkRegister() {
	var username = get("username").value;
	if ("" == username) {
		showError("username", "用户名不能为空！");
		return false;
	}
	if(username.length < 4)
	{
		showError("username" , "用户名长度不能少于4位");
		return false;
	}
	var first_letter = username.slice(0,1);
	var regs = /^[A-Z-a-z]$/;
	if (!regs.test(first_letter)) {
		showError("username", "首字母只能为字母！");
		return false;
	}
	var usern = /^[a-zA-Z0-9_]{1,}$/; 
	if (!usern.test(username)) {
		showError("username", "只允许数字、字母、下划线！");
		return false;
	}
	
	var password = get("password").value;
	if (password.length < 6) {
		showError("password", "密码长度最少为6位！");
		return false;
	}
	var re_password = get("re_password").value;
	if (password != re_password) {
		showError("re_password", "两次输入的密码不一样！");
		return false;
	}
	/*
	 * var real_name = get("real_name").value; if ("" == real_name) {
	 * showError("real_name" , "请输入您的真实姓名！"); return false; } var china_id =
	 * get("china_id").value; if (!cidInfo(china_id)) { showError("china_id" ,
	 * "请输入正确的身份证号码！"); return false; }
	 */
	var agree = get("agree");
	if (!agree.checked) {
		showError("agree", "请阅读并同意《网站服务使用协议》");
		return false;
	}
	return true;
}
function doRegister() {
	if (checkRegister()) {
		var form = get("reg_form");
		var frm = createFrm();
		form.target = "post_frm";
		form.submit();
	}
}
function checkLogin() {
	return true;
}
function checkSubmit(event) {
	if (13 == eventKeyCode(event))
		doLogin();
}
function doLogin() {
	var form = get("login_form");
	var frm = createFrm();
	form.target = "post_frm";
	form.submit();
}

function checkChange() {
	var real_name = get("real_name").value;
	if ("" == real_name) {
		showError("real_name", "请输入您的真实姓名！");
		return false;
	}
	var china_id = get("china_id").value;
	if (!cidInfo(china_id)) {
		showError("china_id", "请输入正确的身份证号码！");
		return false;
	}
	var email = get("email").value;
	if (email.length > 0 && !checkEmail(email)) {
		showError("email", "请输入正确的邮箱地址！");
		return false;
	}
	return true;
}

function doChange() {
	var form = get("change_form");
	var frm = createFrm();
	form.target = "post_frm";
	form.submit();
}

function checkChangePwd() {
	var old_pwd = get("old_pwd").value;
	if (old_pwd.length < 6) {
		showError("old_pwd", "密码长度最少为6位！");
		return false;
	}
	var new_pwd = get("new_pwd").value;
	if (new_pwd.length < 6) {
		showError("new_pwd", "密码长度最少为6位！");
		return false;
	}
	var re_pwd = get("re_pwd").value;
	if (new_pwd != re_pwd) {
		showError("re_pwd", "两次输入的密码不一样！");
		return false;
	}
	return true;
}

function doChangePwd() {
	if (checkChangePwd()) {
		var old_pwd = get("old_pwd").value;
		var new_pwd = get("new_pwd").value;
		var re_pwd = get("re_pwd").value;
		var ajax = new Ajax();
		ajax.getAjax("member" , "dochangepwd" , "doChangeRes" , "&old_pwd="+old_pwd+"&new_pwd="+new_pwd+"&re_pwd="+re_pwd , MEMBER_DOMAIN);
	}
}

function doChangeRes(data){
	if(data){
		showElement("saveOk");
		setTimeout("hideElement('saveOk')" ,2000);
	}
}

function checkForget() {
	var email = get("email").value;
	var username = get("username").value;
	if ("" == username) {
		showError("username", "请输入您的帐号！");
		return false;
	}
	if (!checkEmail(email)) {
		showError("email", "请输入您的邮箱地址！");
		return false;
	}
	return true;
}

function doForget() {
	if (checkForget()) {
		var form = get("member_form");
		var frm = createFrm();
		form.target = "post_frm";
		form.submit();
	}
}

function checkReset() {
	var password = get("password").value;
	if (password.length < 6) {
		showError("password", "密码长度最少为6位！");
		return false;
	}
	var re_password = get("re_password").value;
	if (password != re_password) {
		showError("re_password", "两次输入的密码不一样！");
		return false;
	}
	return true;
}

function doReset() {
	if (checkReset()) {
		var form = get("member_form");
		var frm = createFrm();
		form.target = "post_frm";
		form.submit();
	}
}

function getCard(id) {
	var ajax = new Ajax();
	ajax.getAjax("card", "getcard", "getCarRes", "&id=" + id, MEMBER_DOMAIN);
}

function getCarRes(res) {
	if (res.status) {
		var content_div = createElement("div");
		content_div.setAttrib("class", "openboxcontent");

		var content_b = createElement("b");
		content_b.setInnerHTML("恭喜您成功领取新手卡！");
		content_div.addChild(content_b);

		var content_p_a = createElement("p");
		content_p_a.setAttrib("class", "form");
		content_p_a
				.setInnerHTML("新手卡卡号：<input name=\"\" id=\"code\" type=\"text\" value="
						+ res.code + " />");
		content_div.addChild(content_p_a);

		var content_p_b = createElement("p");
		content_p_b.setAttrib("class", "link");
		content_p_b
				.setInnerHTML("<a href=\"javascript:;\" onclick=\"javascript:copyCode();\">复制</a> <a  href="
						+ res.srv_url + " target=\"_blankk\">进入游戏使用</a>");
		content_div.addChild(content_p_b);

		var content_p_c = createElement("p");
		content_p_c.setAttrib("class", "txt");
		content_p_c.setInnerHTML("卡号已发送至您的<a href=" + res.card_url
				+ ">领卡记录</a>中，您可以在系统消息中查看！");
		content_div.addChild(content_p_c);

		openWindow(content_div, "提示", 380, 236);
	}
}

function copyCode() {
	var targetText = document.getElementById("code");
	try {
		var clipText = targetText.createTextRange();
		clipText.execCommand("Copy");
		alert('复制成功，可以按Ctrl+V粘贴');
	} catch (e) {
		alert('您的浏览器不支持剪贴板复制,请手工复制文本框内容！');
	}
}

function doPanelChange(){
	var real_name = get("real_name").value;
	var china_id = get("china_id").value;
	var email = get("email").value;
	var ajax = new Ajax();
	ajax.getAjax("member" , "dopanelchange" , "doPanelChangeRes" , "&real_name="+real_name+"&china_id="+china_id+"&email="+email , MEMBER_DOMAIN);
}

function doPanelChangeRes(data){
	if(data){
		showElement("saveOk");
		setTimeout("hideElement('saveOk')" ,2000);
	}
}

function checkSubmitPanel(event){
	if (13 == eventKeyCode(event))
		doPanelChange();
}

function checkSubmitChangePwd(event){
	if (13 == eventKeyCode(event))
		doChangePwd();
}

function cencelChangePwd(){
	get("old_pwd").value = "";
	get("new_pwd").value = "";
	get("re_pwd").value = "";
}