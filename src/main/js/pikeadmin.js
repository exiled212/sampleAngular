"use strict";

class Sidemenu{

  constructor(){
    this.$body = $("body");
    this.$openLeftBtn = $(".open-left");
    this.$menuItem = $("#sidebar-menu a");
  }

  init(){
    var $this  = this;

    var ua = navigator.userAgent,
      event = (ua.match(/iP/i)) ? "touchstart" : "click";

    //bind on click
    this.$openLeftBtn.on(event, function(e) {
      e.stopPropagation();
      $this.openLeftBar();
    });

    // LEFT SIDE MAIN NAVIGATION
    $this.$menuItem.on(event, $this.menuItemClick);

    // NAVIGATION HIGHLIGHT & OPEN PARENT
    $("#sidebar-menu ul li.submenu a.active").parents("li:last").children("a:first").addClass("active").trigger("click");
  }


  openLeftBar(e){
    $("#main").toggleClass("enlarged");
    $("#main").addClass("forced");

    if($("#main").hasClass("enlarged") && $("body").hasClass("adminbody")) {
      $("body").removeClass("adminbody").addClass("adminbody-void");
    } else if(!$("#main").hasClass("enlarged") && $("body").hasClass("adminbody-void")) {
      $("body").removeClass("adminbody-void").addClass("adminbody");
    }

    if($("#main").hasClass("enlarged")) {
      $(".left ul").removeAttr("style");
    } else {
      $(".subdrop").siblings("ul:first").show();
    }
  }


  menuItemClick(){
    if(!$("#main").hasClass("enlarged")){
      if(!$(this).hasClass("subdrop")) {
        // hide any open menus and remove all other classes
        $("ul",$(this).parents("ul:first")).slideUp(350);
        $("a",$(this).parents("ul:first")).removeClass("subdrop");
        $("#sidebar-menu .pull-right i").removeClass("md-remove").addClass("md-add");

        // open our new menu and add the open class
        $(this).next("ul").slideDown(350);
        $(this).addClass("subdrop");
        $(".pull-right i",$(this).parents(".submenu:last")).removeClass("md-add").addClass("md-remove");
        $(".pull-right i",$(this).siblings("ul")).removeClass("md-remove").addClass("md-add");
      }else if($(this).hasClass("subdrop")) {
        $(this).removeClass("subdrop");
        $(this).next("ul").slideUp(350);
        $(".pull-right i",$(this).parent()).removeClass("md-remove").addClass("md-add");
      }
    }
  }
}


class App{
  constructor(){
    this.pageScrollElement = "html, body",
    this.$body = $("body")
  }

  onDocReady(e){
    FastClick.attach(document.body);
    resizefunc.push("changeptype");

    $('.animate-number').each(function(){
      $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-duration")));
    });

    //RUN RESIZE ITEMS
    $(window).resize(debounce(resizeitems,100));
    $("body").trigger("resize");

    // right side-bar toggle
    $('.right-bar-toggle').on('click', function(e){

      $('#main').toggleClass('right-bar-enabled');
    });
  }

  init(){
    var $this = this;
    let sidemenu =  new Sidemenu();
    $(document).ready($this.onDocReady);
    sidemenu.init();
  }
}


function executeFunctionByName(functionName, context) {
  var args = [].slice.call(arguments).splice(2);
  var namespaces = functionName.split(".");
  var func = namespaces.pop();
  for(var i = 0; i < namespaces.length; i++) {
    context = context[namespaces[i]];
  }
  return context[func].apply(this, args);
}
var w,h,dw,dh;
var changeptype = function(){
  w = $(window).width();
  h = $(window).height();
  dw = $(document).width();
  dh = $(document).height();

  if(jQuery.browser.mobile === true){
    $("body").addClass("mobile").removeClass("adminbody");
  }

  if(!$("#main").hasClass("forced")){
    if(w > 990){
      $("body").removeClass("smallscreen").addClass("widescreen");
      $("#main").removeClass("enlarged");
    }else{
      $("body").removeClass("widescreen").addClass("smallscreen");
      $("#main").addClass("enlarged");
      $(".left ul").removeAttr("style");
    }
    if($("#main").hasClass("enlarged") && $("body").hasClass("adminbody")){
      $("body").removeClass("adminbody").addClass("adminbody-void");
    }else if(!$("#main").hasClass("enlarged") && $("body").hasClass("adminbody-void")){
      $("body").removeClass("adminbody-void").addClass("adminbody");
    }

  }

}


var debounce = function(func, wait, immediate) {
  var timeout, result;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) result = func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) result = func.apply(context, args);
    return result;
  };
}

var resizefunc = [];

function resizeitems(){
  if($.isArray(resizefunc)){
    for (let i = 0; i < resizefunc.length; i++) {
      window[resizefunc[i]]();
    }
  }
}

$( document ).ready(function() {
  let app = new App();
  app.init();
  "use strict";
});
