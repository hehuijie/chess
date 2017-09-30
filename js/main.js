function checkSubmit(event)
{
    if (13 == eventKeyCode(event))
        doLogin();
}
function doLogin()
{
    var form = get("login_form");
    var frm = createFrm();
    form.target = "post_frm";
    form.submit();
}

function showSwf(id)
{
	var picicon = document.getElementById("focusno");
	var piccontent = document.getElementById("focus");
	var divs = piccontent.getElementsByTagName("LI");
	var icons = picicon.getElementsByTagName("A");
	for (var i=0; i< divs.length; i ++)
	{
		var am = i+1;
		if (id == am)	
		{
			divs[i].style.display = "";	
			icons[i].className = "active";
		}
		else
		{
			divs[i].style.display = "none";	
			icons[i].className = "";
		}
	}
	currentPic = id;
	clearInterval(pic1Int);
	pic1Int = setInterval("swfPic()" , 5000);
}

function swfPic()
{
	var picicon = document.getElementById("focusno");
	var icons = picicon.getElementsByTagName("A");
	if (icons.length == currentPic)
	 currentPic = 0;
	currentPic ++;
	showSwf(currentPic);
}

function checkLogin()
{
    if ('undefined' != typeof member_info)
    {
        var loginbox = get("login_box");
        var username = member_info[1];
        var li_html = "";
        for (var i=0; i< member_srv.length; i ++)
        {
            li_html += "<li><span><a href=\""+member_srv[i].srv_link+"\" target=\"_blank\">进入</a></span><a href=\""+member_srv[i].game_link+"\">"+member_srv[i].game_name+" - 【"+member_srv[i].srv_name+"】</a></li>";
        }
        var html = "<div class=\"formbox2\">";
        html += "<div class=\"log_userinfo\"><b>欢迎您!"+username+"</b><a href=\"javascript:;\" onclick=\"javascript:doLogout()\">退出</a></div>";
        html += "<div class=\"playedgame\">";
        html +="<div class=\"tit\"><b>最近玩过的游戏</b><a href=\""+links.my_game+"\">更多 &gt;</a><br class=\"clear\" /></div>";
        html += "<div class=\"list\">";
        html +="<ul>";
        html += li_html;
        html += "</ul></div></div>";
        html += "<div class=\"log_optian\">";
        html += "<a class=\"pay css3\" href=\""+links.charge+"\">充值</a><a class=\"usercenter css3\" href=\""+links.panel+"\">个人中心</a><a class=\"mygame css3\" href=\""+links.my_game+"\">我的游戏</a>";
        html += "</div></div>";
        loginbox.innerHTML = html;
    }
}

function overSrvList(element)
{
    var as = getElementsByName("A" , "srv_a");
    for(var i=0; i< as.length; i++)
    {
        if (as[i] == element)
            as[i].className = "current";
        else
            as[i].className = "";
    }
}
function changeTab(id)
{
    var element = get("tabs");
    var lis = element.getElementsByTagName("LI");
    for (var i=0; i< lis.length; i++)
    {
        if (i == id)
        {
            lis[i].firstChild.className = "active";
        }
        else
            lis[i].firstChild.className = "";
    }
    var content = getElementsByName("div" , "content");
    for (var i=0; i< content.length; i++)
    {
        for (var i=0;i < content.length; i++)
        {
            if (id == i)
                content[i].style.display = "";
            else
                content[i].style.display = "none";
        }
    }
}
