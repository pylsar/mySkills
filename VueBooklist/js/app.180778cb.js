(function(e){function t(t){for(var a,i,l=t[0],u=t[1],s=t[2],d=0,h=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(h.length)h.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,l=1;l<o.length;l++){var u=o[l];0!==r[u]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=o[0]))}return e}var a={},r={app:0},n=[];function i(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=a,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(o,a,function(t){return e[t]}.bind(null,a));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=u;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app",class:{dark:e.checked},attrs:{id:"app"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"theme"},[o("div",{staticClass:"theme__box",class:{theme__dark:e.checked}},[o("label",{staticClass:"theme__label",class:{theme__choose:e.checked},attrs:{for:"theme"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"theme__toggle",attrs:{id:"theme",type:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var o=e.checked,a=t.target,r=!!a.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);a.checked?i<0&&(e.checked=o.concat([n])):i>-1&&(e.checked=o.slice(0,i).concat(o.slice(i+1)))}else e.checked=r}}})])])]),o("h1",[e._v("Храните книги в порядке")]),o("Form",{on:{addBook:e.addBook}}),o("List",{attrs:{titleValue:e.titleValue,authorValue:e.authorValue,numberValue:e.numberValue,bookList:e.bookList},on:{deleteBook:e.deleteBook}})],1)])},n=[],i=(o("a434"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.addBook(t)}}},[o("div",{staticClass:"form__content"},[o("div",{staticClass:"form__item"},[o("label",{attrs:{for:"title"}},[e._v("Название")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.titleValue,expression:"titleValue"}],attrs:{type:"text",id:"title",required:""},domProps:{value:e.titleValue},on:{input:function(t){t.target.composing||(e.titleValue=t.target.value)}}})]),o("div",{staticClass:"form__item"},[o("label",{attrs:{for:"author"}},[e._v("Автор")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.authorValue,expression:"authorValue"}],attrs:{type:"text",id:"author",required:""},domProps:{value:e.authorValue},on:{input:function(t){t.target.composing||(e.authorValue=t.target.value)}}})]),o("div",{staticClass:"form__item"},[o("label",{attrs:{for:"rating"}},[e._v("Рейтинг")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.numberValue,expression:"numberValue"}],attrs:{type:"number",id:"rating",required:""},domProps:{value:e.numberValue},on:{input:function(t){t.target.composing||(e.numberValue=t.target.value)}}})])]),o("button",{staticClass:"btn__add",attrs:{type:"submit",disabled:e.numberValue<=0}},[e._v("Add Book")])])}),l=[],u={name:"Form",data:function(){return{titleValue:"",authorValue:"",numberValue:""}},methods:{addBook:function(){this.$emit("addBook",this.titleValue,this.authorValue,this.numberValue),this.titleValue="",this.authorValue="",this.numberValue=""}}},s=u,c=(o("c4e7"),o("2877")),d=Object(c["a"])(s,i,l,!1,null,null,null),h=d.exports,m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("table",{staticClass:"table"},[e._m(0),e._l(e.bookList,(function(t,a){return o("tbody",{key:a,staticClass:"book__list"},[o("td",[e._v(e._s(t.titleValue))]),o("td",[e._v(e._s(t.authorValue))]),o("td",[e._v(e._s(t.numberValue))]),o("td",[o("button",{staticClass:"btn__remove",on:{click:function(t){return e.deleteBook(a)}}},[e._v("delete")])])])}))],2)},f=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("tr",[o("th",[e._v("Title")]),o("th",[e._v("Auther")]),o("th",[e._v("Rating")]),o("th")])])}],p={name:"List",props:["titleValue","authorValue","numberValue","bookList"],methods:{deleteBook:function(e){this.$emit("deleteBook",e)}}},b=p,v=(o("59bd"),Object(c["a"])(b,m,f,!1,null,null,null)),_=v.exports,k={name:"App",components:{Form:h,List:_},data:function(){return{bookList:[],titleValue:"",authorValue:"",numberValue:"",checked:!1}},methods:{addBook:function(e,t,o){this.bookList.push({titleValue:e,authorValue:t,numberValue:o})},deleteBook:function(e){this.bookList.splice(e,1)},changeTheme:function(){this.checked=!this.checked}},mounted:function(){localStorage.getItem("bookList")&&(this.bookList=JSON.parse(localStorage.getItem("bookList"))),localStorage.booklist&&(this.booklist=JSON.parse(localStorage.booklist))},watch:{bookList:{handler:function(){localStorage.setItem("bookList",JSON.stringify(this.bookList))}}}},V=k,g=(o("5c0b"),Object(c["a"])(V,r,n,!1,null,null,null)),y=g.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(y)}}).$mount("#app")},"59bd":function(e,t,o){"use strict";o("6925")},"5c0b":function(e,t,o){"use strict";o("9c0c")},6925:function(e,t,o){},"86b4":function(e,t,o){},"9c0c":function(e,t,o){},c4e7:function(e,t,o){"use strict";o("86b4")}});
//# sourceMappingURL=app.180778cb.js.map