!function(t){var i="mmenu",n="screenReader";t[i].addons[n]={setup:function(){var a=this,o=this.opts[n],h=this.conf[n];s=t[i].glbl,"boolean"==typeof o&&(o={aria:o,text:o}),"object"!=typeof o&&(o={}),o=this.opts[n]=t.extend(!0,{},t[i].defaults[n],o),o.aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria")}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",arguments[0])}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",arguments[0])}),this.bind("close:start",function(){this.trigger("close:start:sr-aria")}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria")}),this.bind("open:start",function(){this.trigger("open:start:sr-aria")}),this.bind("initOpened:after",function(){this.trigger("initOpened:after:sr-aria")})}),this.bind("updateListview",function(){this.$pnls.find("."+e.listview).children().each(function(){a.__sr_aria(t(this),"hidden",t(this).is("."+e.hidden))})}),this.bind("openPanel:start",function(t){var i=this.$menu.find("."+e.panel).not(t).not(t.parents("."+e.panel)),n=t.add(t.find("."+e.listitem+"_vertical ."+e.listitem+"_opened").children("."+e.panel));this.__sr_aria(i,"hidden",!0),this.__sr_aria(n,"hidden",!1)}),this.bind("closePanel",function(t){this.__sr_aria(t,"hidden",!0)}),this.bind("initPanels:after",function(i){var n=i.find("."+e.btn).each(function(){a.__sr_aria(t(this),"owns",t(this).attr("href").replace("#",""))});this.__sr_aria(n,"haspopup",!0)}),this.bind("initNavbar:after",function(t){var i=t.children("."+e.navbar);this.__sr_aria(i,"hidden",!t.hasClass(e.panel+"_has-navbar"))}),o.text&&"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(t){var i=t.children("."+e.navbar),n=!!i.children("."+e.btn+"_prev").length;this.__sr_aria(i.children("."+e.title),"hidden",n)})),o.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])}),this.bind("initBlocker:after",function(){this.trigger("initBlocker:after:sr-text")})}),this.bind("initNavbar:after",function(t){var i=t.children("."+e.navbar),n=this.i18n(h.text.closeSubmenu);i.children("."+e.btn+"_prev").html(this.__sr_text(n))}),this.bind("initListview:after",function(t){var i=t.data(r.parent);if(i&&i.length){var n=i.children("."+e.btn+"_next"),s=this.i18n(h.text[n.parent().is("."+e.listitem+"_vertical")?"toggleSubmenu":"openSubmenu"]);n.append(a.__sr_text(s))}}))},add:function(){e=t[i]._c,r=t[i]._d,a=t[i]._e,e.add("sronly")},clickAnchor:function(t,i){}},t[i].defaults[n]={aria:!0,text:!0},t[i].configuration[n]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},t[i].prototype.__sr_aria=function(t,i,n){t.prop("aria-"+i,n)[n?"attr":"removeAttr"]("aria-"+i,n)},t[i].prototype.__sr_role=function(t,i){t.prop("role",i)[i?"attr":"removeAttr"]("role",i)},t[i].prototype.__sr_text=function(t){return'<span class="'+e.sronly+'">'+t+"</span>"};var e,r,a,s}(jQuery);