(this.webpackJsonphouse_react_repeta=this.webpackJsonphouse_react_repeta||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"id":"id-1","text":"\u0412\u044b\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b React","completed":true},{"id":"id-2","text":"\u0420\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0441 React Router","completed":false},{"id":"id-3","text":"\u041f\u0435\u0440\u0435\u0436\u0438\u0442\u044c Redux","completed":false}]')},20:function(e,t,n){},21:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),c=n(8),r=n.n(c),s=n(12),i=n(14),l=n(2),u=n(3),d=n(5),h=n(4),j=n(10),p=n(0),b=function(e){var t=e.onIncrement,n=e.onDecrement;return Object(p.jsxs)("div",{className:"Counter__controls",children:[Object(p.jsx)("button",{type:"button",onClick:t,children:"\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043d\u0430 1"}),Object(p.jsx)("button",{type:"button",onClick:n,children:"\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043d\u0430 1"})]})},m=function(e){var t=e.value;return Object(p.jsx)("span",{className:"Counter__value",children:t})},g=(n(20),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={value:e.props.initialValue},e.handleIncrement=function(){e.setState((function(e){return{value:e.value+1}}))},e.handleDecrement=function(){console.log("\u043a\u043b\u0438\u043a-"),console.log(Object(j.a)(e)),e.setState((function(e){return{value:e.value-1}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Counter",children:[Object(p.jsx)(m,{value:this.state.value}),Object(p.jsx)(b,{onIncrement:this.handleIncrement,onDecrement:this.handleDecrement})]})}}]),n}(a.a.Component));g.defaultProps={initialValue:0};n(21);var f=function(e){var t=e.todos,n=e.onDeleteTodo,o=e.onToggleCompleted;return Object(p.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,a=e.text,c=e.completed;return Object(p.jsxs)("li",{children:[Object(p.jsx)("input",{type:"checkbox",checked:c,onChange:function(){return o(t)}}),Object(p.jsx)("p",{className:"TodoList__text",children:a}),Object(p.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t)}))})},O=n(9),x=n(6),v=n.n(x),C=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={name:"",tag:"",experience:"junior"},e.nameInputId=v.a.generate(),e.tagInputId=v.a.generate(),e.hendelChange=function(t){var n=t.target,o=n.name,a=n.value;e.setState(Object(O.a)({},o,a))},e.hendelSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",tag:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.hendelSubmit,children:[Object(p.jsxs)("label",{htmlFor:this.nameInputId,children:["\u0418\u043c\u044f ",Object(p.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.hendelChange,id:this.nameInputId})]}),Object(p.jsxs)("label",{htmlFor:this.tagInputId,children:["\u041f\u0440\u043e\u0437\u0432\u0438\u0449\u0435 ",Object(p.jsx)("input",{type:"text",name:"tag",value:this.state.tag,onChange:this.hendelChange,id:this.tagInputId})]}),Object(p.jsx)("p",{children:"\u0412\u0430\u0448 \u0443\u0440\u043e\u0432\u0435\u043d\u044c:"}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"experience",value:"junior",onChange:this.handleChange,checked:"junior"===this.state.experience}),"Junior"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"experience",value:"middle",onChange:this.handleChange,checked:"middle"===this.state.experience}),"Middle"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"experience",value:"senior",onChange:this.handleChange,checked:"senior"===this.state.experience}),"Senior"]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",children:"\u041e\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}}]),n}(o.Component),y=n(13),S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={message:""},e.handleChange=function(t){e.setState({message:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.onSubmit(e.state.message),e.setState({message:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsx)("textarea",{value:this.state.message,onChange:this.handleChange}),Object(p.jsx)("button",{type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}}]),n}(o.Component),k=function(e){var t=e.value,n=e.onChange;return Object(p.jsxs)("label",{children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438",Object(p.jsx)("input",{type:"text",value:t,onChange:n})]})},w=(n(30),document.querySelector("#modal-root")),I=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 ESC, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"),e.props.onClose())},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("Modal componentDidMount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(p.jsx)("div",{className:"Modal__backdrop",onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:"Modal__content",children:this.props.children})}),w)}}]),n}(o.Component),M=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={todos:y,filter:"",showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.addTodo=function(t){var n={id:v.a.generate(),text:t,completed:!1};e.setState((function(e){return{todos:[n].concat(Object(i.a)(e.todos))}}))},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.formSubmitHandler=function(e){console.log(e)},e.toggleCompleted=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed}):e}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleTodos=function(){var t=e.state,n=t.filter,o=t.todos,a=n.toLowerCase();return o.filter((function(e){return e.text.toLowerCase().includes(a)}))},e.calculateCompletedTodos=function(){return e.state.todos.reduce((function(e,t){return t.completed?e+1:e}),0)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("App componentDidMount");var e=localStorage.getItem("todos"),t=JSON.parse(e);t&&this.setState({todos:t})}},{key:"componentDidUpdate",value:function(e,t){console.log("App componentDidUpdate"),console.log(t),console.log(this.state);var n=this.state.todos;n!==t.todos&&(console.log("\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0435 todos, \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e todos \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"),localStorage.setItem("todos",JSON.stringify(n)))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.filter,o=e.showModal,a=t.length,c=this.calculateCompletedTodos(),r=this.getVisibleTodos();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(C,{onSubmit:this.formSubmitHandler}),Object(p.jsx)(C,{onSubmit:this.formSubmitHandler}),Object(p.jsx)(S,{onSubmit:this.addTodo}),Object(p.jsx)(k,{value:n,onChange:this.changeFilter}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b-\u0432\u043e: ",a]}),Object(p.jsxs)("p",{children:["\u041a\u043e\u043b-\u0432\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445: ",c]})]}),Object(p.jsx)(f,{todos:r,onDeleteTodo:this.deleteTodo,onToggleCompleted:this.toggleCompleted}),Object(p.jsx)("button",{type:"button",onClick:this.toggleModal,children:" \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e "}),"//this.props.onClose \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u043c",o&&Object(p.jsxs)(I,{onClose:this.toggleModal,children:[Object(p.jsx)("p",{children:"\u041f\u0440\u0438\u0432\u0435\u0442 \u044d\u0442\u043e children"}),Object(p.jsx)("button",{type:"button",onClick:this.toggleModal,children:" \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e "})]})]})}}]),n}(o.Component);r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.1e37b924.chunk.js.map