(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(4),c=n.n(s),r=n(1),a=n(5),i=n(6),o=n(8),l=n(7),u=n(2),b=n.n(u),j=(n(13),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={goods:h,showList:!1,lettersLimit:1,isReversed:!1,sortBy:"none"},t.show=function(){t.setState((function(t){return Object(r.a)(Object(r.a)({},t),{},{showList:!t.showList})}))},t.reverse=function(){t.setState((function(t){return Object(r.a)(Object(r.a)({},t),{},{isReversed:!t.isReversed})}))},t.filterByLength=function(e){var n=e.currentTarget.value;t.setState((function(t){return Object(r.a)(Object(r.a)({},t),{},{lettersLimit:Number(n)})}))},t.sortAlphabetically=function(){t.setState((function(t){return Object(r.a)(Object(r.a)({},t),{},{sortBy:"alph"})}))},t.sortByLength=function(){t.setState((function(t){return Object(r.a)(Object(r.a)({},t),{},{sortBy:"leng"})}))},t.reset=function(){t.setState((function(t){return Object(r.a)(Object(r.a)({},t),{},{sortBy:"none",isReversed:!1,lettersLimit:1})}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.showList,s=t.lettersLimit,c=t.isReversed,r=t.sortBy,a=e.filter((function(t){return t.length>=s}));switch(r){case"alph":a.sort((function(t,e){return t.localeCompare(e)}));break;case"leng":a.sort((function(t,e){return t.length-e.length}))}return c&&a.reverse(),Object(j.jsxs)("div",{className:"app",children:[!n&&Object(j.jsx)("button",{className:"app__btn",type:"button",onClick:this.show,children:"show list"}),n&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"app__list-container",children:Object(j.jsx)("ul",{className:"app__list-goods",children:a.map((function(t){return Object(j.jsx)("li",{children:t},t)}))})}),Object(j.jsxs)("div",{className:"app__sort-btn-container",children:[Object(j.jsx)("button",{className:"app__btn",type:"button",onClick:this.reverse,children:"reverse"}),Object(j.jsx)("button",{className:"app__btn",type:"button",onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(j.jsx)("button",{className:"app__btn",type:"button",onClick:this.reset,children:"reset"}),Object(j.jsx)("button",{className:"app__btn",type:"button",onClick:this.sortByLength,children:"sort by length"}),Object(j.jsxs)("select",{name:"length",className:"app__lettersCountFilter",value:s,onChange:this.filterByLength,children:[Object(j.jsx)("option",{value:"1",children:"1"}),Object(j.jsx)("option",{value:"2",children:"2"}),Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"4",children:"4"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"6",children:"6"}),Object(j.jsx)("option",{value:"7",children:"7"}),Object(j.jsx)("option",{value:"8",children:"8"}),Object(j.jsx)("option",{value:"9",children:"9"}),Object(j.jsx)("option",{value:"10",children:"10"})]})]})]})]})}}]),n}(b.a.Component);c.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1ec515ca.chunk.js.map