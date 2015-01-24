// ==UserScript==
// @name       dmhyBangumiAddLink
// @namespace  http://dmhyBangumiAddLink.JMNSY/
// @version    0.2
// @description  番组表的图片监听左键单击，直接在当前页跳转不符合本人浏览习惯，故对每一张图片覆盖上一个链接元素
// @match      http://share.dmhy.org/cms/page/name/programme.html
// @copyright  2015.01.25, JMNSY
// ==/UserScript==
jQuery().ready(function(){
    jQuery(".weekly_list_b").each(function(){
        var now = jQuery(this);
        var temp = now.clone();
        jQuery("<a/>").attr("href",temp.attr("onclick").toString().match(/(?:\/).*(?=')/)).append(temp.removeAttr("onclick")).insertAfter(now);
        now.remove();
    });
});
