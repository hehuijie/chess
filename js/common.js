function getHeight()
{/*{{{*/
    if (document.documentElement)
        return document.documentElement.clientHeight;
    else
        return document.body.clientHeight;
}/*}}}*/

function getWidth()
{/*{{{*/
    if (document.documentElement)
        return document.documentElement.clientWidth;
    else
        return document.body.clientWidth;
}/*}}}*/

function getScreenTop()
{/*{{{*/
    if (document.documentElement)
        return document.documentElement.scrollTop;
    else
        return document.body.scrollTop;
}/*}}}*/

function getScreenLeft()
{/*{{{*/
    if (document.documentElement)
        return document.documentElement.scrollLeft;
    else
        return document.body.scrollLeft;
}/*}}}*/

function eventKeyCode(event)
{//按键值{{{
	return event.keyCode;
}//}}}

function getEventX(event)
{//当前鼠标所在位置的X值{{{
	if (IE)
		return window.event.clientX;
	else
		return event.clientX;
}//}}} 

function getEventY(event)
{//当前鼠标所在的位置的Y值{{{
	if (IE)
		return window.event.clientY;
	else
		return event.clientY;
}//}}} 

function removeThis(tagId)
 {//移除这个标签{{{
	var obj = get(tagId);
    if (obj)
    	obj.parentNode.removeChild(obj);
}//}}}

function clearChild(element)
{
    if (element)
    {
        for (;element.firstChild;element.removeChild(element.firstChild));
    }
    return true;
}

function get(ID)
{//取标签{{{
	return document.getElementById(ID);
}//}}}

function getElementsByName(tag , name)
{/*{{{*/
    var names = document.getElementsByName(name);
    if (names.length >0)
    {
        return names;
    }
    else
    {
        var t = new Array();
        var all = document.getElementsByTagName(tag);
        for (var i=0; i< all.length; i++)
        {
            if (name == all[i].getAttribute("name"))
            {
                t[t.length] = all[i];
            }
        }
        return t;
    }
}/*}}}*/

function closeWindow()
{
    removeThis("open_bg");
    removeThis("openbox");
}

function openWindow(element , title , width , height)
{//{{{
    var head = document.createElement("DIV");
    head.className = "tit";
    var text = document.createElement("B");
    text.innerHTML = title;
    head.appendChild(text);
    
    var close = document.createElement("A");
    close.onclick = closeWindow;
    close.title = "关闭";
    close.href="javascript:;";
    close.innerHTML = "×";
    head.appendChild(close);

    var br = document.createElement("BR");
    br.className = "clear";
    head.appendChild(br);

    var content = document.createElement("DIV");
    content.className = "openbox";
    content.id = "openbox";
    content.style.width = width+"px";
    content.style.height = height+"px";
    left = (getWidth()-width + getScreenLeft())/2;
    ctop = (getHeight()-height + getScreenTop())/2;
    content.style.left = left+"px";
    content.style.top = ctop+"px";
    content.appendChild(head);
    content.appendChild(element);
    
    var bg = document.createElement("DIV");
    bg.className = "open_bg";
    bg.id = "open_bg";
    bg.style.width = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) + "px";
    bg.style.height = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) + "px";
    document.body.appendChild(content);
    document.body.appendChild(bg);
}//}}}

function doLogout()
{
    var frm = createFrm();
    frm.src = MEMBER_DOMAIN+"/index.php?m=member&a=logout";
}

function createFrm()
{
    if (!get("post_frm"))
    {
        var frm = document.createElement("iframe");
        frm.style.width="0px";
        frm.style.height="0px";
        frm.style.display = "none";
        frm.id = "post_frm";
        frm.name = "post_frm";
        document.body.appendChild(frm);
        return frm;
    }
    else
    {
        return get("post_frm");
    }
}

function showError(input , error)
{
    var error_div = parent.document.getElementById("error_div");
    if(error_div)
    {
        if(he)
            clearInterval(he);
        error_div.parentNode.removeChild(error_div);
    }
    var element = document.getElementById(input);
    var error_div = document.createElement("div");
    error_div.id = "error_div";
    error_div.innerHTML = error;
    element.parentNode.insertBefore(error_div,  element);
    var bg = 200;
    he = setInterval(function(){
        bg -= 1;
        if (bg <100)
        {
            if (bg <=0)
            {
                error_div.parentNode.removeChild(error_div);
                clearInterval(he);
            }
            else
            {
                if (error_div.filters)
                    error_div.style.filter = "alpha(opacity="+bg+")";
                else
                    error_div.style.opacity = bg/100.0;
            }
        }
    } , 10);
}

function checkTop()
{
    if ('undefined' != typeof member_info)
    {
        var loginbox = get("top_loginbox");
        var username = member_info[1];
        loginbox.innerHTML = "欢迎您 "+username+"! <a href=\"javascript:;\" onclick=\"javascript:doLogout()\">退出</a>";
    }
}

function checkSubmit(event)
{
	if (13 == eventKeyCode(event))
		doLogin();
}

function checkRegisterSubmit(event)
{
	if (13 == eventKeyCode(event))
		doRegister();
}

function showElement(elementId)
{
	var this_div = get(elementId);
	this_div.style.display = "";
}
function hideElement(elementId)
{
	var this_div = get(elementId);
	this_div.style.display = "none";
}
