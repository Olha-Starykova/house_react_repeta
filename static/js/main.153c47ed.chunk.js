(this.webpackJsonphouse_react_repeta=this.webpackJsonphouse_react_repeta||[]).push([[0],{12:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var r=o(1),c=o.n(r),n=o(3),a=o.n(n),i=o(4),l=o(5),s=o(7),b=o(6),u=(o(12),o(0)),p=function(e){Object(s.a)(o,e);var t=Object(b.a)(o);function o(){var e;Object(i.a)(this,o);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={activeOptionIdx:0},e.setActiveIdx=function(t){e.setState({activeOptionIdx:t})},e.makeOptionClassName=function(t){var o=["ColorPicker__option"];return t===e.state.activeOptionIdx&&o.push("ColorPicker__option--active"),o.join(" ")},e}return Object(l.a)(o,[{key:"render",value:function(){var e=this,t=this.state.activeOptionIdx,o=this.props.options,r=o[t].label;return console.log({label:r}),Object(u.jsxs)("div",{className:"ColorPicker",children:[Object(u.jsx)("h2",{className:"ColorPicker__title",children:"Color Picker"}),"//\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u043b\u043e\u0432\u043e \u0438\u0437 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u043f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435==============================",Object(u.jsxs)("p",{children:["\u0412\u044b\u0431\u0440\u0430\u043d \u0446\u0432\u0435\u0442: ",r]}),Object(u.jsx)("div",{children:o.map((function(t,o){var r=t.label,c=t.color;return Object(u.jsx)("button",{className:e.makeOptionClassName(o),style:{backgroundColor:c},onClick:function(){return e.setActiveIdx(o)}},r)}))})]})}}]),o}(r.Component),j=[{label:"red",color:"#F44336"},{label:"green",color:"#4CAF50"},{label:"blue",color:"#2196F3"},{label:"grey",color:"#607D8B"},{label:"pink",color:"#E91E63"},{label:"indigo",color:"#3F51B5"}],d=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),Object(u.jsx)(p,{options:j})]})};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.153c47ed.chunk.js.map