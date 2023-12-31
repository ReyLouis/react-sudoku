(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,n,t){"use strict";t(174);var r=t(154);t.d(n,"a",function(){return r.a})},154:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(1),i=t.n(o),u=t(97),l=t(7),s=t.n(l);function d(){var e=s()(["\n  display: flex;\n  transition: all 0.3s;\n  align-items: center;\n  font-family: 'Titillium Web', sans-serif;\n  font-weight: bold;\n  font-size: 25px;\n  user-select: none;\n  justify-content: center;\n  height: 40px;\n  width: 40px;\n  background-color: ",";\n  color: ",";\n  border: ",";\n  border-radius: 50%;\n  margin: 5px;\n  &:hover {\n    cursor: pointer;\n    color: ",";\n  }\n"]);return d=function(){return e},e}var c=t(8).b.div(d(),function(e){var n=e.enabled,t=e.theme;return n&&t.primary},function(e){var n=e.theme;return"1px solid ".concat(n.secondary)},function(e){var n=e.theme;return"2px solid ".concat(n.primary)},function(e){var n=e.theme,t=e.enabled;return"".concat(t?n.background:n.primary)}),f=function(e){var n=e.onClick,t=e.value,r=e.enabled,o=e.children,i=e.className,l=e.title;return a.a.createElement(c,{title:l,className:i,onClick:function(){return n(t)},enabled:r},o||t||a.a.createElement(u.MdClear,{size:"0.75em"}))};f.propTypes={onClick:i.a.func.isRequired,enabled:i.a.bool,value:i.a.node,children:i.a.node,className:i.a.string,title:i.a.string},f.defaultProps={enabled:!0};n.a=f;f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{enabled:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},onClick:{type:{name:"func"},required:!0,description:""},value:{type:{name:"node"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},title:{type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\button\\button.js"]={name:"Button",docgenInfo:f.__docgenInfo,path:"src\\button\\button.js"})},174:function(e,n,t){"use strict";var r=t(5),a=t.n(r),o=t(6),i=t.n(o),u=t(10),l=t.n(u),s=t(11),d=t.n(s),c=t(12),f=t.n(c),m=t(4),p=t.n(m),v=t(3),h=t.n(v),y=t(0),b=t.n(y),g=t(1),x=t.n(g),C=t(97),S=t(154),E=t(7),k=t.n(E),O=t(8);function R(){var e=k()(["\n  color: ",";\n  display: flex;\n  justify-content: space-around;\n"]);return R=function(){return e},e}function I(){var e=k()(["\n  color: ",";\n  display: flex;\n"]);return I=function(){return e},e}function w(){var e=k()(["\n  color: ",";\n  display: flex;\n"]);return w=function(){return e},e}function B(){var e=k()(["\n  display: flex;\n  flex-direction: column;\n  z-index: 99;\n"]);return B=function(){return e},e}var _=O.b.div(B()),A=O.b.div(w(),function(e){var n=e.theme;return"".concat(n.inverted)}),T=O.b.div(I(),function(e){var n=e.theme;return"".concat(n.inverted)}),q=O.b.div(R(),function(e){var n=e.theme;return"".concat(n.inverted)}),V=[1,2,3,4,5],j=[6,7,8,9,null],M=["reset","undo","validate","notes"],L={notes:C.MdEdit,undo:C.MdUndo,reset:C.MdReplay,validate:C.MdDone},K=function(e){function n(){var e,t;a()(this,n);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=l()(this,(e=d()(n)).call.apply(e,[this].concat(o))),h()(p()(p()(t)),"buildButton",function(e){var n=t.props,r=n.onClick,a=n.enabledButtons;return b.a.createElement(S.a,{key:e,onClick:r,value:e,enabled:a.includes(e)})}),h()(p()(p()(t)),"buildIconButton",function(e){var n=t.props,r=n.onClick,a=n.enabledButtons,o=L[e];return b.a.createElement(S.a,{title:e,key:e,onClick:r,value:e,enabled:a.includes(e)},b.a.createElement(o,{title:e,size:"0.75em"}))}),t}return f()(n,e),i()(n,[{key:"render",value:function(){return b.a.createElement(_,null,b.a.createElement(A,null,V.map(this.buildButton)),b.a.createElement(T,null,j.map(this.buildButton)),b.a.createElement(q,null,M.map(this.buildIconButton)))}}]),n}(b.a.Component);h()(K,"propTypes",{enabledButtons:x.a.array.isRequired,onClick:x.a.func.isRequired});n.a=K;K.__docgenInfo={description:"",methods:[{name:"buildButton",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null},{name:"buildIconButton",docblock:null,modifiers:[],params:[{name:"iconName",type:null}],returns:null}],displayName:"ButtonBar",props:{enabledButtons:{type:{name:"array"},required:!0,description:""},onClick:{type:{name:"func"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\button\\button-bar.js"]={name:"ButtonBar",docgenInfo:K.__docgenInfo,path:"src\\button\\button-bar.js"})},176:function(e,n,t){"use strict";var r=t(5),a=t.n(r),o=t(6),i=t.n(o),u=t(10),l=t.n(u),s=t(11),d=t.n(s),c=t(12),f=t.n(c),m=t(3),p=t.n(m),v=t(0),h=t.n(v),y=t(1),b=t.n(y),g=t(7),x=t.n(g),C=t(8),S=t(112);function E(){var e=x()(["\n  display: flex;\n"]);return E=function(){return e},e}function k(){var e=x()(["\n  width: 90px;\n  font-size: 16px;\n  background-color: transparent;\n  border-radius: 8px;\n  border-color: ",";\n  font-family: 'Montserrat', sans-serif;\n  &:hover {\n    color: ",";\n  }\n"]);return k=function(){return e},e}function O(){var e=x()(["\n  width: 90px;\n  font-size: 16px;\n  font-family: 'Montserrat', sans-serif;\n  border-radius: 8px;\n  border-color: ",";\n  &:hover {\n    color: ",";\n  }\n  background-color: transparent;\n"]);return O=function(){return e},e}function R(){var e=x()(["\n  font-size: small;\n  font-family: 'Montserrat', sans-serif;\n  color: ",";\n"]);return R=function(){return e},e}function I(){var e=x()(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  width: 350px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 150px;\n  border: ",";\n  border-radius: 8px;\n  background-color: ",";\n  z-index: 100;\n"]);return I=function(){return e},e}var w=C.b.div(I(),function(e){var n=e.theme;return"solid 1px ".concat(n.board)},function(e){return e.theme.background}),B=C.b.p(R(),function(e){return e.theme.primary}),_=Object(C.b)(S.a)(O(),function(e){return e.theme.primary},function(e){return e.theme.primary}),A=Object(C.b)(S.a)(k(),function(e){return e.theme.inverted},function(e){return e.theme.primary}),T=C.b.div(E()),q=function(e){function n(){return a()(this,n),l()(this,d()(n).apply(this,arguments))}return f()(n,e),i()(n,[{key:"render",value:function(){var e=this.props,n=e.primaryAction,t=e.cancelAction;return h.a.createElement(w,null,h.a.createElement(B,null,"Would like to reset the game?"),h.a.createElement(T,null,h.a.createElement(A,{onClick:t},"No"),h.a.createElement(_,{onClick:n},"Yes")))}}]),n}(h.a.Component);p()(q,"propTypes",{onAction:b.a.func.isRequired,onClose:b.a.func.isRequired}),q.__docgenInfo={description:"",methods:[],displayName:"Reset",props:{onAction:{type:{name:"func"},required:!0,description:""},onClose:{type:{name:"func"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\reset\\reset.js"]={name:"Reset",docgenInfo:q.__docgenInfo,path:"src\\reset\\reset.js"}),t.d(n,"a",function(){return q})},387:function(e,n,t){"use strict";(function(e){var n=t(43),r=t.n(n),a=t(5),o=t.n(a),i=t(6),u=t.n(i),l=t(10),s=t.n(l),d=t(11),c=t.n(d),f=t(12),m=t.n(f),p=t(4),v=t.n(p),h=t(3),y=t.n(h),b=t(0),g=t.n(b),x=t(111),C=t(110),S=t(467),E=function(e){function n(){var e,t;o()(this,n);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=s()(this,(e=c()(n)).call.apply(e,[this].concat(a))),y()(v()(v()(t)),"state",{difficulty:"easy",hide:!1}),t}return m()(n,e),u()(n,[{key:"render",value:function(){var e=this;return g.a.createElement("div",null,g.a.createElement("button",{onClick:function(){return e.setState({difficulty:"easy"})}},"Easy"),g.a.createElement("button",{onClick:function(){return e.setState({difficulty:"medium"})}},"Medium"),g.a.createElement("button",{onClick:function(){return e.setState({difficulty:"hard"})}},"Hard"),g.a.createElement("button",{onClick:function(){return e.setState({hide:!e.state.hide})}},this.state.hide?"Reveal":"Hide"),g.a.createElement(S.a,r()({difficulty:this.state.difficulty,onComplete:Object(C.action)("done"),hide:this.state.hide},this.props)))}}]),n}(g.a.Component);g.a.Component;Object(x.storiesOf)("Game",e).add("default",function(){return g.a.createElement(E,null)}).add("Custom Restart ",function(){return g.a.createElement(E,{CustomResetModal:function(e){var n=e.primaryAction,t=e.cancelAction;return g.a.createElement("div",null,"Custom reason modal primaryAction ",n?"":"not"," ","defined. cancelAction",t?"":"not"," defined.")}})}).add("Custom Validate ",function(){return g.a.createElement(E,{CustomValidateModal:function(e){var n=e.primaryAction,t=e.cancelAction;return g.a.createElement("div",null,"Custom validate modal primaryAction ",n?"":"not"," ","defined. cancelAction",t?"":"not"," defined.")}})})}).call(this,t(135)(e))},388:function(e,n,t){"use strict";(function(e){var n=t(0),r=t.n(n),a=t(111),o=(t(110),t(176));Object(a.storiesOf)("Reset",e).add("default",function(){return r.a.createElement(o.a,{onAction:function(){return null},onClose:function(){return null}})})}).call(this,t(135)(e))},467:function(e,n,t){"use strict";var r=t(5),a=t.n(r),o=t(6),i=t.n(o),u=t(10),l=t.n(u),s=t(11),d=t.n(s),c=t(12),f=t.n(c),m=t(4),p=t.n(m),v=t(3),h=t.n(v),y=t(7),b=t.n(y),g=t(0),x=t.n(g),C=t(8);function S(){var e=b()(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return S=function(){return e},e}var E=C.b.div(S()),k=t(23),O=t.n(k),R=t(43),I=t.n(R),w=t(13),B=t.n(w),_=t(1),A=t.n(_),T=t(177),q=t(153);function V(){var e=b()(["\n  position: relative;\n  width: 50px;\n  height: 50px;\n  border-right: ",";\n  border-bottom: ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    width: 51px;\n    height: 51px;\n    left: 0;\n    top: 0;\n    background-color: ",";\n  }\n"]);return V=function(){return e},e}var j=C.b.div(V(),function(e){var n=e.isThickRight,t=e.isLastColumn,r=e.theme;return n?"solid 4px ".concat(r.board):t?"":"solid 1px ".concat(r.board)},function(e){var n=e.isThickBottom,t=e.isLastRow,r=e.theme;return n?"solid 4px ".concat(r.board):t?"":"solid 1px ".concat(r.board)},function(e){var n=e.isSelectedBoardIndex,t=e.isSelected,r=e.theme;return n?"":t?"".concat(r.overlay):""}),M=t(95),L=t.n(M);function K(){var e=b()(["\n  transition: all 0.5s;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  color: ",";\n  justify-content: center;\n  font-family: 'Titillium Web', sans-serif;\n  font-weight: bold;\n  font-size: 25px;\n  align-items: center;\n"]);return K=function(){return e},e}function Y(){var e=b()(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]);return Y=function(){return e},e}var N=C.b.div(Y()),z=C.b.div(K(),function(e){var n=e.isOriginal,t=e.theme,r=e.hasError;return n?t.original:r?"red":t.primary}),D=function(e){var n=e.value,t=L()(e,["value"]);return x.a.createElement(N,null,x.a.createElement(z,t,n))};D.propTypes={value:A.a.number};var W=D;function H(){var e=b()(["\n  transition: all 0.5s;\n  font-family: 'Titillium Web', sans-serif;\n  font-weight: bold;\n  font-size: 15px;\n  color: ",";\n"]);return H=function(){return e},e}function P(){var e=b()(["\n  display: flex;\n  align-items: top left;\n  justify-content: flex-start;\n  flex-direction: row;\n  flex-wrap: wrap;\n  flex-flow: row wrap;\n  align-content: flex-start;\n  width: 100%;\n  height: 100%;\n"]);return P=function(){return e},e}D.__docgenInfo={description:"",methods:[],displayName:"ValueWrapper",props:{value:{type:{name:"number"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\game-square\\value-wrapper.js"]={name:"ValueWrapper",docgenInfo:D.__docgenInfo,path:"src\\game-square\\value-wrapper.js"});var U=C.b.div(P()),J=C.b.span(H(),function(e){var n=e.isOriginal,t=e.theme;return n?t.original:t.secondary}),F=function(e){var n=e.values;return x.a.createElement(U,null,n.map(function(e){return x.a.createElement(J,{key:"note_".concat(e)},e)}))};F.propTypes={values:A.a.array.isRequired};var G=F;F.__docgenInfo={description:"",methods:[],displayName:"NotesWrapper",props:{values:{type:{name:"array"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\game-square\\notes-wrapper.js"]={name:"NotesWrapper",docgenInfo:F.__docgenInfo,path:"src\\game-square\\notes-wrapper.js"});var Q=function(e){function n(e){var t;a()(this,n),t=l()(this,d()(n).call(this,e)),h()(p()(p()(t)),"state",{originalValue:null}),h()(p()(p()(t)),"isOriginal",function(){return null!==t.state.originalValue}),h()(p()(p()(t)),"isHighlighted",function(){var e=t.props,n=e.selectedIndex,r=e.rowIndex,a=e.selectedRowIndex;return n===e.index||r===a});var r=t.props.initialValue;return t.state.originalValue=r,t}return f()(n,e),i()(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.setValue,t=e.answer;n(e.boardIndex,{value:e.initialValue,answer:t,isOriginal:this.isOriginal()})}},{key:"render",value:function(){var e=this.props,n=e.value,t=e.rowIndex,r=e.boardIndex,a=e.index,o=e.selectedBoardIndex,i=e.setSelectedBoardIndexes,u=e.initialValue,l=e.theme,s=e.notes,d=e.hasError,c=e.hide;return x.a.createElement(j,{isSelected:this.isHighlighted()?1:0,isLastColumn:9===a?1:0,isLastRow:9===t?1:0,isThickRight:3===a||6===a?1:0,isThickBottom:3===t||6===t?1:0,isSelectedBoardIndex:o===r?1:0,theme:l,onClick:function(){return i({selectedBoardIndex:r,selectedIndex:a,selectedRowIndex:t})}},c?null:s.length?x.a.createElement(G,{values:s}):x.a.createElement(W,{theme:l,hasError:d,isOriginal:this.isOriginal()?1:0,isHighlighted:this.isHighlighted()?1:0,isSelectedBoardIndex:o===r?1:0,value:u||n,smaller:0<s.length}))}}]),n}(x.a.Component);h()(Q,"propTypes",{setSelectedBoardIndexes:A.a.func.isRequired,setValue:A.a.func.isRequired,notes:A.a.array.isRequired,value:A.a.number,initialValue:A.a.number,answer:A.a.number,rowIndex:A.a.number,boardIndex:A.a.number,index:A.a.number,selectedIndex:A.a.number,selectedRowIndex:A.a.number,selectedBoardIndex:A.a.number});var X=Q;Q.__docgenInfo={description:"",methods:[{name:"isOriginal",docblock:null,modifiers:[],params:[],returns:null},{name:"isHighlighted",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SudokuSquare",props:{setSelectedBoardIndexes:{type:{name:"func"},required:!0,description:""},setValue:{type:{name:"func"},required:!0,description:""},notes:{type:{name:"array"},required:!0,description:""},value:{type:{name:"number"},required:!1,description:""},initialValue:{type:{name:"number"},required:!1,description:""},answer:{type:{name:"number"},required:!1,description:""},rowIndex:{type:{name:"number"},required:!1,description:""},boardIndex:{type:{name:"number"},required:!1,description:""},index:{type:{name:"number"},required:!1,description:""},selectedIndex:{type:{name:"number"},required:!1,description:""},selectedRowIndex:{type:{name:"number"},required:!1,description:""},selectedBoardIndex:{type:{name:"number"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\game-square\\sudoku-square.js"]={name:"SudokuSquare",docgenInfo:Q.__docgenInfo,path:"src\\game-square\\sudoku-square.js"});var Z=t(174);function $(){var e=b()(["\n  display: flex;\n"]);return $=function(){return e},e}function ee(){var e=b()(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n\n  width: 460px;\n  overflow: hidden;\n  color: ",";\n"]);return ee=function(){return e},e}var ne=C.b.div(ee(),function(e){var n=e.theme;return"".concat(n.background)},function(e){var n=e.theme;return"".concat(n.inverted)}),te=C.b.div($()),re=t(176),ae=t(112);function oe(){var e=b()(["\n  display: flex;\n"]);return oe=function(){return e},e}function ie(){var e=b()(["\n  width: 90px;\n  font-size: 16px;\n  background-color: transparent;\n  border-radius: 8px;\n  border-color: ",";\n  font-family: 'Montserrat', sans-serif;\n  &:hover {\n    color: ",";\n  }\n"]);return ie=function(){return e},e}function ue(){var e=b()(["\n  width: 90px;\n  font-size: 16px;\n  font-family: 'Montserrat', sans-serif;\n  border-radius: 8px;\n  border-color: ",";\n  &:hover {\n    color: ",";\n  }\n  background-color: transparent;\n"]);return ue=function(){return e},e}function le(){var e=b()(["\n  font-size: small;\n  font-family: 'Montserrat', sans-serif;\n  color: ",";\n"]);return le=function(){return e},e}function se(){var e=b()(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  width: 350px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 150px;\n  border: ",";\n  border-radius: 8px;\n  background-color: ",";\n  z-index: 100;\n"]);return se=function(){return e},e}var de=C.b.div(se(),function(e){var n=e.theme;return"solid 1px ".concat(n.board)},function(e){return e.theme.background}),ce=C.b.p(le(),function(e){return e.theme.primary}),fe=Object(C.b)(ae.a)(ue(),function(e){return e.theme.primary},function(e){return e.theme.primary}),me=Object(C.b)(ae.a)(ie(),function(e){return e.theme.inverted},function(e){return e.theme.primary}),pe=C.b.div(oe()),ve=function(e){function n(){return a()(this,n),l()(this,d()(n).apply(this,arguments))}return f()(n,e),i()(n,[{key:"render",value:function(){var e=this.props,n=e.primaryAction,t=e.cancelAction;return x.a.createElement(de,null,x.a.createElement(ce,null,"Validating your sudoku board will disqualify your score. Do you still wish to validate your board?"),x.a.createElement(pe,null,x.a.createElement(me,{onClick:t},"No"),x.a.createElement(fe,{onClick:n},"Yes")))}}]),n}(x.a.Component);h()(ve,"propTypes",{onAction:A.a.func.isRequired,onClose:A.a.func.isRequired}),ve.__docgenInfo={description:"",methods:[],displayName:"Reset",props:{onAction:{type:{name:"func"},required:!0,description:""},onClose:{type:{name:"func"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\validate\\validate.js"]={name:"Reset",docgenInfo:ve.__docgenInfo,path:"src\\validate\\validate.js"});var he=new q.EventEmitter,ye={easy:T.easy,medium:T.medium,hard:T.hard},be={startDate:Date.now(),selectedBoardIndex:null,values:{},board:[],done:!1,selectedRowIndex:null,selectedIndex:null,openDialog:!1,notes:{},noteEnabled:!1,history:[],moveCount:0,showReset:!1,showValidate:!1,hasValidated:!1},ge=function(e){function n(){var e,t;a()(this,n);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=l()(this,(e=d()(n)).call.apply(e,[this].concat(o))),h()(p()(p()(t)),"state",B()({},be,{difficulty:t.props.difficulty})),h()(p()(p()(t)),"onKeypress",function(e){var n="number"==typeof e.which?e.which:e.keyCode,r=n-48;0<r&&9>=r&&t.handleButtonPress(r),(27===n||8===n)&&t.handleButtonPress(null)}),h()(p()(p()(t)),"setSelectedBoardIndexes",function(e){var n=I()({},e);return t.setState(B()({},n))}),h()(p()(p()(t)),"setValue",function(e,n){var r=t.state,a=r.values,o=r.notes;t.setState({values:Object.assign(a,h()({},"".concat(e),n))}),t.setState({notes:B()({},o,h()({},e,[]))}),t.isDone()}),h()(p()(p()(t)),"isDone",function(){var e=t.state.values,n=!0;0===Object.keys(e).length||(Object.keys(e).forEach(function(t){(""===e[t].value||null===e[t].value)&&(n=!1)}),n&&t.setState({done:n},function(){return t.validate()}))}),h()(p()(p()(t)),"getBoardIndex",function(e,n){return 9*n-(9-e)}),h()(p()(p()(t)),"toggleValidate",function(){return t.setState({showValidate:!t.state.showValidate})}),h()(p()(p()(t)),"handleButtonPress",function(e){var n=t.state,r=n.selectedBoardIndex,a=n.values,o=n.notes,i=n.noteEnabled,u=n.history,l=n.moveCount,s=a[r],d=["notes","undo","reset","validate"];if("undo"===e&&t.undoLastMove(),"reset"===e&&t.toggleReset(),"validate"===e&&t.toggleValidate(),null!==r&&!s.isOriginal)if(i||d.includes(e)||t.setState({history:[{boardIndex:r,value:e}].concat(O()(u)),moveCount:l+1}),i&&!d.includes(e)){var c=e&&o[r]||[];t.setState({notes:B()({},o,h()({},r,c.includes(e)?c.filter(function(n){return n!==e}):O()(c).concat([e]).filter(function(e){return e}).sort())),values:Object.assign(a,h()({},"".concat(r),Object.assign(s,{value:null})))})}else if("notes"===e)t.setState({noteEnabled:!i});else if(!d.includes(e)){var f=s.error,m=s.answer;t.setValue(r,Object.assign(s,{value:e,error:f&&m!==e}))}}),h()(p()(p()(t)),"validate",function(){var e=t.state,n=e.done,r=e.values,a=(e.startDate,e.moveCount),o=e.hasValidated,i=t.props.onComplete,u=!1;Object.values(r).forEach(function(e){e.value!==e.answer&&(u=!0)}),n&&!u&&i({moves:a,hasValidated:o})}),h()(p()(p()(t)),"getValue",function(e){var n=t.state.values[e];return n&&n.value}),h()(p()(p()(t)),"buildRow",function(e){return function(n,r){var a=n.value,o=n.answer,i=t.state,u=i.notes,l=i.difficulty,s=i.values,d=t.state,c=d.selectedBoardIndex,f=d.selectedIndex,m=d.selectedRowIndex,p=t.props.hide,v=t.getBoardIndex(r+1,e+1),h=t.getValue(v);return x.a.createElement(X,{key:"".concat(l,"-").concat((e+1)*r+10),value:h,hasError:(s[v]||{}).error,initialValue:a,answer:o,rowIndex:e+1,boardIndex:v,index:r+1,hide:p,selectedIndex:f,selectedRowIndex:m,selectedBoardIndex:c,setSelectedBoardIndexes:t.setSelectedBoardIndexes,setValue:t.setValue,notes:u[v]||[]})}}),h()(p()(p()(t)),"undoLastMove",function(){var e=t.state.history;if(e.length){var n=e.shift(),r=(e.find(function(e){return e.boardIndex===n.boardIndex})||{}).value;t.setState(function(e){var t=e.values,a=e.moveCount;return t[n.boardIndex]=B()({},t[n.boardIndex],{value:r||null}),{values:t,moveCount:++a}})}}),h()(p()(p()(t)),"toggleReset",function(){return t.setState({showReset:!t.state.showReset})}),h()(p()(p()(t)),"resetBoard",function(){var e=t.state,n=e.history,r=e.values,a=e.moveCount;if(!n.length)return t.toggleReset();var o=O()(new Set(n.map(function(e){return e.boardIndex.toString()}))),i=Object.keys(r).reduce(function(e,n){return e[n]=o.includes(n)?B()({},r[n],{value:null}):r[n],e},{});t.setState({values:i,moveCount:a+1,history:[]},function(){return t.toggleReset()})}),h()(p()(p()(t)),"validateCurrentBoard",function(){var e=t.state.values,n=Object.keys(e).reduce(function(n,t){var r=e[t];return n[t]=r.isOriginal||null===r.value||r.answer===r.value?r.error&&r.answer===r.value?B()({},r,{error:!1}):r:B()({},r,{error:!0}),n},{});t.setState({values:n,showValidate:!1,moveCount:t.state.moveCount+1,hasValidated:!0})}),h()(p()(p()(t)),"buildBoard",function(e,n){return x.a.createElement(te,{key:n},e.map(t.buildRow(n)))}),t}return f()(n,e),i()(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keyup",this.onKeypress),he.on("reset",function(n){e.setState(B()({},be,{startDate:Date.now(),board:ye[n](),difficulty:n}))}),he.emit("reset",this.props.difficulty)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.onKeypress),he.removeAllListeners("reset")}},{key:"componentDidUpdate",value:function(e){e.difficulty!==this.props.difficulty&&he.emit("reset",this.props.difficulty)}},{key:"buildResetModal",value:function(){var e=this.props.CustomResetModal,n={primaryAction:this.resetBoard,cancelAction:this.toggleReset};return e?e(n):x.a.createElement(re.a,n)}},{key:"buildValidateModal",value:function(){var e=this.props.CustomValidateModal,n={primaryAction:this.validateCurrentBoard,cancelAction:this.toggleValidate};return e?e(n):x.a.createElement(ve,n)}},{key:"render",value:function(){var e=this.state,n=e.noteEnabled,t=e.selectedBoardIndex,r=e.notes,a=e.board,o=e.showValidate,i=e.showReset;return x.a.createElement(g.Fragment,null,i&&this.buildResetModal(),o&&this.buildValidateModal(),x.a.createElement(ne,null,a.map(this.buildBoard)),x.a.createElement(Z.a,{onClick:this.handleButtonPress,enabledButtons:n?["notes"].concat(O()(r[t]||[])):[]}))}}]),n}(x.a.Component);h()(ge,"propTypes",{difficulty:A.a.oneOf(["easy","medium","hard"]),onComplete:A.a.func,CustomResetModal:A.a.oneOfType([A.a.symbol,A.a.func]),CustomValidateModal:A.a.oneOfType([A.a.symbol,A.a.func])}),h()(ge,"defaultProps",{difficulty:"easy",onComplete:function(){return null}});var xe=ge;function Ce(){var e=b()(["\n @import url('https://fonts.googleapis.com/css?family=Montserrat|Titillium+Web');\n"]);return Ce=function(){return e},e}ge.__docgenInfo={description:"",methods:[{name:"onKeypress",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"setSelectedBoardIndexes",docblock:null,modifiers:[],params:[{name:"{ ...indexes }",type:null}],returns:null},{name:"setValue",docblock:null,modifiers:[],params:[{name:"boardIndex",type:null},{name:"value",type:null}],returns:null},{name:"isDone",docblock:null,modifiers:[],params:[],returns:null},{name:"getBoardIndex",docblock:null,modifiers:[],params:[{name:"index",type:null},{name:"rowIndex",type:null}],returns:null},{name:"buildResetModal",docblock:null,modifiers:[],params:[],returns:null},{name:"buildValidateModal",docblock:null,modifiers:[],params:[],returns:null},{name:"toggleValidate",docblock:null,modifiers:[],params:[],returns:null},{name:"handleButtonPress",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null},{name:"validate",docblock:null,modifiers:[],params:[],returns:null},{name:"getValue",docblock:null,modifiers:[],params:[{name:"boardIndex",type:null}],returns:null},{name:"buildRow",docblock:null,modifiers:[],params:[{name:"rowIndex",type:null}],returns:null},{name:"undoLastMove",docblock:null,modifiers:[],params:[],returns:null},{name:"toggleReset",docblock:null,modifiers:[],params:[],returns:null},{name:"resetBoard",docblock:null,modifiers:[],params:[],returns:null},{name:"validateCurrentBoard",docblock:null,modifiers:[],params:[],returns:null},{name:"buildBoard",docblock:null,modifiers:[],params:[{name:"x",type:null},{name:"i",type:null}],returns:null}],displayName:"Sudoku",props:{difficulty:{defaultValue:{value:"'easy'",computed:!1},type:{name:"enum",value:[{value:"'easy'",computed:!1},{value:"'medium'",computed:!1},{value:"'hard'",computed:!1}]},required:!1,description:""},onComplete:{defaultValue:{value:"() => null",computed:!1},type:{name:"func"},required:!1,description:""},CustomResetModal:{type:{name:"union",value:[{name:"symbol"},{name:"func"}]},required:!1,description:""},CustomValidateModal:{type:{name:"union",value:[{name:"symbol"},{name:"func"}]},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\game\\sudoku.js"]={name:"Sudoku",docgenInfo:ge.__docgenInfo,path:"src\\game\\sudoku.js"}),Object(C.c)(Ce());var Se=function(e){function n(){var e,t;a()(this,n);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=l()(this,(e=d()(n)).call.apply(e,[this].concat(o))),h()(p()(p()(t)),"state",{theme:{name:"Light Orange",primary:"rgba(255,90,0,1)",secondary:"rgba(0,0,0,1)",board:"rgba(255,90,0,0.7)",overlay:"rgba(255,90,0,0.2)",background:"white",original:"rgba(102, 102, 102,1)",inverted:"black"}}),t}return f()(n,e),i()(n,[{key:"render",value:function(){var e=this.state.theme,n=this.props,t=n.onComplete,r=n.difficulty,a=n.hide,o=n.CustomResetModal,i=n.CustomValidateModal;return x.a.createElement(C.a,{theme:e},x.a.createElement(E,null,x.a.createElement(xe,{hide:a,onComplete:t,difficulty:r,CustomResetModal:o,CustomValidateModal:i})))}}]),n}(g.Component);n.a=Se;Se.__docgenInfo={description:"",methods:[],displayName:"App"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\app.js"]={name:"App",docgenInfo:Se.__docgenInfo,path:"src\\app.js"})},468:function(e,n,t){t(178),t(469),e.exports=t(470)},470:function(e,n,t){"use strict";t.r(n),function(e){var n=t(7),r=t.n(n),a=t(111),o=t(8);function i(){var e=r()(["\n  @import url('https://fonts.googleapis.com/css?family=Montserrat|Titillium+Web');\n"]);return i=function(){return e},e}Object(o.c)(i()),Object(a.configure)(function(){t(484)},e)}.call(this,t(135)(e))},484:function(e,n,t){"use strict";t.r(n);t(387),t(388)}},[[468,3,2]]]);
//# sourceMappingURL=iframe.8db16d006ea982b459f0.bundle.js.map