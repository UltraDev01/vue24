(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],u=0,b=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&b.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(b.length)b.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"738244ae"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("NavBar"),a("main",{staticClass:"main"},[a("router-view")],1),a("Footer")],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",fixed:"top"}},[a("b-container",[a("b-navbar-brand",{attrs:{to:"/"}},[t._v("Вектор Инжиниринг")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{to:"/"}},[t._v("Гланая")]),a("b-nav-item-dropdown",{attrs:{text:"Сервис",right:""}},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Работы 1")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Работы 2")])],1),a("b-nav-item",{attrs:{to:"/about"}},[t._v("О нас")]),a("b-nav-item",{staticClass:"mr-3",attrs:{to:"/contact"}},[t._v("Контакты")]),a("b-nav-form",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}]},[t._v("Обратный звонок")]),a("b-modal",{attrs:{id:"modal-1",title:"Представьтесь и мы Вам перезвоним."},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("div",{staticClass:"w-100"},[a("b-button",{staticClass:"float-right",attrs:{variant:"primary"},on:{click:function(e){t.show=!1}}},[t._v(" Отправить ")])],1)]},proxy:!0}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("b-form-group",[a("b-form-input",{attrs:{type:"text",placeholder:"Ваше имя"}})],1),a("b-form-group",[a("b-form-input",{attrs:{type:"phone",placeholder:"Телефон"}})],1),a("b-form-group",[a("b-form-checkbox",[t._v(" Я согласен на обработку персональных данных ")])],1)],1)],1)],1)],1)],1)],1)],1)},i=[],l={data:function(){return{show:!1}}},c=l,u=(a("ed6b"),a("2877")),d=Object(u["a"])(c,s,i,!1,null,null,null),b=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("b-container",[a("p",{staticClass:"text-center"},[t._v('Все права защищены © Компания "Вектор Инжиниринг"')])])],1)},p=[],f=(a("760c"),{}),v=Object(u["a"])(f,m,p,!1,null,null,null),g=v.exports,h={name:"home",components:{NavBar:b,Footer:g}},_=h,x=(a("5c0b"),Object(u["a"])(_,n,o,!1,null,null,null)),w=x.exports,y=(a("d3b7"),a("8c4f")),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Carousel"),a("Service"),a("Consult")],1)},j=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carousel"},[a("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,indicators:"",background:"#ababab","img-width":"1024","img-height":"10",fade:""},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("b-carousel-slide",{attrs:{caption:'Ремонтно-строительная компания "Вектор Инжиниринг"',text:"Весь комплекс ремонтных и высотных работ.","img-src":"./img/carousel-1.jpg"}}),a("b-carousel-slide",{attrs:{caption:"Рассрочка на выгодных условиях",text:"При оформлении заказа на большие объемы работ предоставляем рассрочку с системой поэтапных платежей.","img-src":"./img/carousel-2.jpg"}})],1)],1)},S=[],k={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},E=k,P=(a("8cf1"),Object(u["a"])(E,O,S,!1,null,null,null)),$=P.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service"},[a("b-container",{staticClass:"bv-example-row"},[a("h2",[t._v("Наши услуги")]),a("p",[t._v("Компания специализируется на оказании широкого спектра услуг как для корпоративных клиентов так и для частных лиц. Профессионализм и ответственность ключевые преимущества нашей компании.")]),a("b-row",[a("b-col",{attrs:{lg:"4",md:"auto"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"Плотничьи работы","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":""}},[a("b-card-text",[t._v(" Устройство полов, потолков, перегородок, стропил, стен и ряжей, связанных с обработкой древесины. ")])],1)],1),a("b-col",{attrs:{lg:"4",md:"auto"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"Кровельные работы","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":""}},[a("b-card-text",[t._v(" Широкий спектр услуг по ремонту, замене и монтажу кровли. Доступные цены, надёжные поставщики материалов и гарантия качества. ")])],1)],1),a("b-col",{attrs:{lg:"4",md:"auto"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"Фасадные работы","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":""}},[a("b-card-text",[t._v(" Мы выполняем весь комплект фасадных работ любой сложности на жилых и промышленных объектах. ")])],1)],1)],1),a("b-row",[a("b-col",{attrs:{lg:"4",md:"auto"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"Ремонт помещений","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":""}},[a("b-card-text",[t._v(" Мы выполняем весь комплекс работ по ремонту помещений - от оштукатуривания до выполнения самых сложных работ по ремонту. ")])],1)],1),a("b-col",{attrs:{lg:"4",md:"auto"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"Клининговые работы","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":""}},[a("b-card-text",[t._v(" Промышленный клининг: уборка производственных помещений в Санкт-Петербурге. Любые клиниговые услуги для производственных компаний. ")])],1)],1),a("b-col",{attrs:{lg:"4",md:"auto"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"Отделочные работы","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":""}},[a("b-card-text",[t._v(" Применение современных материалов и высокая степень механизации отдельных процессов позволяют нам быстро выполнять работы на объектах большой площади при сохранении необходимого качества. ")])],1)],1)],1)],1)],1)},T=[],M=(a("8bca"),{}),N=Object(u["a"])(M,I,T,!1,null,null,null),B=N.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"consult bg-light"},[a("b-container",{staticClass:"bv-example-row"},[a("b-row",[a("b-col",{attrs:{lg:"9",md:"auto"}},[a("h2",[t._v("Консультация")]),a("p",[t._v("Менеджеры компании с радостью ответят на ваши вопросы и произведут расчет стоимости услуг и подготовят индивидуальное коммерческое предложение.")])]),a("b-col",[a("b-button",{staticClass:"consult-button"},[t._v("Задать вопрос")])],1)],1)],1)],1)},J=[],L=(a("5e87"),{}),q=Object(u["a"])(L,F,J,!1,null,null,null),A=q.exports,z={name:"home",components:{Carousel:$,Service:B,Consult:A}},D=z,G=Object(u["a"])(D,C,j,!1,null,null,null),H=G.exports;r["default"].use(y["a"]);var K=[{path:"/",name:"home",component:H},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Q=new y["a"]({mode:"history",base:"/",routes:K}),R=Q,U=a("5f5b");a("f9e3"),a("2dd8");r["default"].use(U["a"]),r["default"].config.productionTip=!1,new r["default"]({router:R,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"5e87":function(t,e,a){"use strict";var r=a("f82b"),n=a.n(r);n.a},"760c":function(t,e,a){"use strict";var r=a("c3f5"),n=a.n(r);n.a},"8bca":function(t,e,a){"use strict";var r=a("dbe9"),n=a.n(r);n.a},"8cf1":function(t,e,a){"use strict";var r=a("ba52"),n=a.n(r);n.a},"9c0c":function(t,e,a){},ba52:function(t,e,a){},c3f5:function(t,e,a){},d5a8:function(t,e,a){},dbe9:function(t,e,a){},ed6b:function(t,e,a){"use strict";var r=a("d5a8"),n=a.n(r);n.a},f82b:function(t,e,a){}});
//# sourceMappingURL=app.b3c5365a.js.map