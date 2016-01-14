/** notifIt! v1.2 - https://github.com/naoxink/notifIt **/
!function(a,b){if("function"==typeof define&&define.amd)define(b);else{var c=b(a.b);a.notif=c.notif,a.notifit_dismiss=c.notifit_dismiss,a.notif_confirm=c.notif_confirm}}(this,function(){function a(a){var c=function(){return e("<span>",{id:"notifIt_close",html:"&times"})},d=function(){var a=e("<div>",{id:"ui_notifIt"}),b=e("<p>",{html:h.msg});return a.append(b),a};window.notifit_timeout=null;var e=jQuery,f=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)/2,g=["left","center","right","bottom"],h={type:"default",width:400,height:60,position:"right",autohide:1,msg:"This is my default message",opacity:1,multiline:0,fade:0,bgcolor:"",color:"",timeout:5e3,zindex:null,offset:0,callback:null,clickable:!1,animation:"slide"};if(e.extend(h,a),h.animations={},h.animations.slide={center:{css_start:{top:parseInt(0-(h.height+10)),left:f-parseInt(h.width/2)},"in":{top:parseInt(10+h.offset)},out:{start:{top:parseInt(h.height-h.height/2)},end:{top:parseInt(0-2*h.height)}}},bottom:{css_start:{top:"auto",bottom:parseInt(0-(h.height+10)),left:f-parseInt(h.width/2)},"in":{bottom:parseInt(10+h.offset)},out:{start:{bottom:parseInt(h.height-h.height/2)},end:{bottom:parseInt(0-2*h.height)}}},right:{css_start:{right:parseInt(0-(h.width+10)),right:parseInt(0-2*h.width)},"in":{right:parseInt(10+h.offset)},out:{start:{right:parseFloat(h.width-.9*h.width)},end:{right:parseInt(0-2*h.width)}}},left:{css_start:{left:parseInt(0-(h.width+10))},"in":{left:parseInt(10+h.offset)},out:{start:{left:parseFloat(h.width-.9*h.width)},end:{left:parseInt(0-2*h.width)}}}},h.animations.zoom={center:{css_start:{top:10,left:f-parseInt(h.width/2),zoom:.01},"in":{zoom:1},out:{start:{zoom:1.3},end:{zoom:.01}}},bottom:{css_start:{top:"auto",bottom:10,left:f-parseInt(h.width/2),zoom:.01},"in":{zoom:1},out:{start:{zoom:1.3},end:{zoom:.01}}},right:{css_start:{right:10,zoom:.01},"in":{right:parseInt(10+h.offset),zoom:1},out:{start:{zoom:1.3},end:{zoom:.01}}},left:{css_start:{left:10,zoom:.01},"in":{zoom:1},out:{start:{zoom:1.3},end:{zoom:.01}}}},h.available_animations=Object.keys(h.animations),!h.available_animations.length)throw new Error("No animations");if(!g.length)throw new Error("No available positions");-1===g.indexOf(h.position)&&(h.position=g[0]),-1===h.available_animations.indexOf(h.animation)&&(h.animation=h.available_animations[0]),"function"!=typeof h.callback&&(h.callback=null),h.width>0?h.width=h.width:"all"===h.width?h.width=screen.width-60:h.width=400,h.height<100&&h.height>0&&(height=h.height);var i=d();h.clickable&&i.append(c());var j=function(){e("#ui_notifIt").remove(),clearTimeout(window.notifit_timeout)};return j(),e("body").append(i),h.zindex&&e("#ui_notifIt").css("z-index",h.zindex),h.multiline?e("#ui_notifIt").css("padding",15):(e("#ui_notifIt").css("height",height),e("#ui_notifIt p").css("line-height",height+"px")),e("#ui_notifIt").css({width:h.width,opacity:h.opacity,"background-color":h.bgcolor,color:h.color}),e("#ui_notifIt").addClass(h.type),h.animations[h.animation][h.position].css_start?e("#ui_notifIt").css(h.animations[h.animation][h.position].css_start):e("#ui_notifIt").css(h.animations[h.available_animations[0]][h.position].css_start),e("#ui_notifIt").animate(h.animations[h.animation][h.position]["in"]),h.clickable||e("#ui_notifIt").click(function(a){a.stopPropagation(),b(h)}),e("body").on("click","#ui_notifIt #notifIt_close",function(){b(h)}),h.autohide&&(isNaN(h.timeout)||(window.notifit_timeout=setTimeout(function(){b(h)},h.timeout))),{destroy:j}}function b(a){if(clearTimeout(window.notifit_timeout),"fade"!=a.animation){if(a.animations&&a.animations[a.animation]&&a.animations[a.animation][a.position]&&a.animations[a.animation][a.position].out&&a.animations[a.animation][a.position].out.start&&a.animations[a.animation][a.position].out.end)animation1=a.animations[a.animation][a.position].out.start,animation2=a.animations[a.animation][a.position].out.end;else{if(!(a.animations[a.available_animations[0]]&&a.animations[a.available_animations[0]][a.position]&&a.animations[a.available_animations[0]][a.position].out&&a.animations[a.available_animations[0]][a.position].out.start&&a.animations[a.available_animations[0]][a.position].out.end))throw new Error("Invalid animation");animation1=a.animations[a.available_animations[0]][a.position].out.start,animation2=a.animations[a.available_animations[0]][a.position].out.end}$("#ui_notifIt").animate(animation1,100,function(){$("#ui_notifIt").animate(animation2,100,function(){$("#ui_notifIt").remove(),a.callback&&a.callback()})})}else $("#ui_notifIt").fadeOut("slow",function(){$("#ui_notifIt").remove(),a.callback&&a.callback()})}function c(a){function g(){if(null!==e)return e;var a=b("<button>",{"class":"notifit_confirm_accept",text:d.textaccept}),c=b("<button>",{"class":"notifit_confirm_cancel",text:d.textcancel}),g=b("<div>",{"class":"notifit_confirm_message",text:d.message});return e=b("<div>",{"class":"notifit_confirm"}),e.append(g).append(a).append(c),f=b("<div>",{"class":"notifit_confirm_bg"}),e}function h(){e&&(b("body").append(f),b("body").append(e),e.css({top:f.outerHeight()/2-e.outerHeight()/2,left:f.outerWidth()/2-e.outerWidth()/2}))}function i(){e&&e.remove(),f&&f.remove()}function j(){i();var a=null;return b(this).hasClass("notifit_confirm_accept")?a=!0:b(this).hasClass("notifit_confirm_cancel")&&(a=!1),"function"==typeof d.callback?d.callback(a):a}function k(){b("html").one("click",".notifit_confirm_accept, .notifit_confirm_cancel",j)}var b=jQuery,c={textaccept:"Accept",textcancel:"Cancel",message:"Is that what you want to do?",callback:null},d=b.extend({},c,a),e=b(".notifit_confirm")[0]||null,f=b(".notifit_confirm_bg")[0]||null;g(),h(),k()}return{notif:a,notifit_dismiss:b,notif_confirm:c}});
