!function(){var a=$("h1"),b=$("h2"),c=$(".arrow"),d=$("nav>a");$.stellar(),a.css({"-webkit-animation":"header .75s linear .75s forwards",animation:"header .75s linear .75s forwards"}),b.css({"-webkit-animation":"header .75s linear .75s forwards",animation:"header .75s linear .75s forwards"}),c.css({"-webkit-animation":"header .75s linear 2s forwards",animation:"header .75s linear 2s forwards"}),d.css({"-webkit-animation":"anav .75s linear 1.75s forwards",animation:"anav .75s linear 1.75s forwards"});var e=$("[href]");e.on("click",function(){e.preventDefault();var a=parseInt($($(this).attr("href")).offset().top,10)+2;$("html, body").animate({scrollTop:a,easing:"linear"},1800)})}();