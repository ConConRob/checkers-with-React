(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(n,t,e){n.exports=e(34)},24:function(n,t,e){},31:function(n,t,e){},32:function(n,t,e){},33:function(n,t,e){},34:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e.n(r),i=e(9),o=e.n(i),u=(e(24),e(4)),c=e(5),s=e(7),l=e(6),f=e(8),p=e(3),d=e(2),h=e(17);function m(){var n=Object(p.a)(["\n    width: 100px;\n    height: 100px;\n    background: ",";\n    border-radius: 100px;\n    margin:10px;\n    opacity: 1;\n    position: absolute;\n    @media (max-width:840px) {\n            margin:5px;\n            width:50px; height:50px;\n        }\n"]);return m=function(){return n},n}var b=d.a.div(m(),function(n){return 1===n.stateOfPosition?"green":"red"}),v=function(n){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,n),Object(c.a)(t,[{key:"componentDidMount",value:function(){h.a.fromTo(this.coin,.8,{top:-1e3},{top:0})}},{key:"render",value:function(){var n=this;return a.a.createElement(b,{ref:function(t){return n.coin=t},stateOfPosition:this.props.stateOfPosition})}}]),t}(a.a.Component);function w(){var n=Object(p.a)(["\n        position:relative;\n        width:120px; height:120px;\n        @media (max-width:840px) {\n            width:60px; height:60px;\n        }\n        margin:0;\n        overflow: hidden;\n    &:after{\n        content:'';\n        position:absolute;\n        left:10px; top:10px;\n        border-radius:100%;\n        width:100px; height:100px;\n        @media (max-width:840px) {\n            left: 5px;\n            top: 5px;\n            width:50px; height:50px;\n        }\n        box-shadow: 0px 0px 0px 500px yellow;\n        z-index: 2;\n    }\n    \n"]);return w=function(){return n},n}var x=d.a.div(w());function y(n){var t=n.stateOfPosition;return a.a.createElement("div",{className:"relative"},a.a.createElement(x,null),0!==t&&a.a.createElement(v,{stateOfPosition:t}))}function g(){var n=Object(p.a)(["\n    flex:1;\n    &:hover{\n        background: ","\n    }\n"]);return g=function(){return n},n}function O(){var n=Object(p.a)(["\n    position: absolute;\n    width:100%;\n    height: 100%;\n    top:0;\n    display: flex;\n    justify-content: flex;\n    z-index:3;\n\n"]);return O=function(){return n},n}var k=d.a.div(O()),j=d.a.div(g(),function(n){return n.disabled?"none":"rgba(0,255,0,.3)"});function E(n){var t=n.possiblePlays,e=n.playATurn;return a.a.createElement(k,null,t.map(function(n,t){return a.a.createElement(j,{onClick:function(){return r=t,void(n&&e(r));var r},key:t,className:"play-column",disabled:!n})}))}function P(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: space-evenly;\n"]);return P=function(){return n},n}function A(){var n=Object(p.a)(["\n  box-shadow: 2px 2px 1px black;\n"]);return A=function(){return n},n}var T=d.a.div(A()),C=d.a.div(P());function S(n){var t=n.boardState,e=n.possiblePlays,r=n.playATurn;return console.log(e),a.a.createElement(T,null,t.map(function(n,t){return a.a.createElement(C,{key:t},n.map(function(n,t){return a.a.createElement(y,{key:t,stateOfPosition:n})}))}),a.a.createElement(E,{possiblePlays:e,playATurn:r}))}var H=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];e(31);function R(n){var t=n.winner,e=n.resetGame;return 0!==t&&a.a.createElement("div",{className:"winner-display"},a.a.createElement("h2",{className:"winner-header winner".concat(t)},"Player ".concat(t," Won!")),a.a.createElement("button",{onClick:e,className:"winner-reset-button"},"Play Again!"))}var W=2,N=1,G=3,M=1,z=2,B=9999,I=2,J=.5,D=2,F=999,$=1,q=1,K=2,L=2;e(32);function Q(){var n=Object(p.a)(["\n  margin: 0 auto;\n  width: 840px;\n  @media (max-width:840px) {\n    width: 420px;\n  }\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"]);return Q=function(){return n},n}var U={board:H,possiblePlays:[!0,!0,!0,!0,!0,!0,!0],currentHeightofRows:[5,5,5,5,5,5,5],winner:0},V=d.a.div(Q()),X=function(n){function t(){var n,e;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=Object(s.a)(this,(n=Object(l.a)(t)).call.apply(n,[this].concat(a)))).state=U,e.playATurn=function(n){e.disableTakingATurn(),e.makeAMove(n,1,e.computersTurn)},e.computersTurn=function(n){setTimeout(function(){var t=function(n){function t(t,e,r){return n[t][e+1]===r}function e(t,e,r){return n[t][e-1]===r}function r(t,e,r){return!(!n[t+1]||n[t+1][e]!==r)}function a(t,e,r){return!(!n[t-1]||n[t-1][e+1]!==r)}function i(t,e,r){return!(!n[t-1]||n[t-1][e-1]!==r)}function o(t,e,r){return!(!n[t+1]||n[t+1][e+1]!==r)}function u(t,e,r){return!(!n[t+1]||n[t+1][e-1]!==r)}function c(n,t,e,r){return 1===n?t:2===n?e:n>=3?r:0}var s=n.map(function(n,t){return n.map(function(n,e){return 0!==n?-99999:r(t,e,0)?-99999:l(e,t,W,G,M,z,B)+l(e,t,N,I,J,D,F)+l(e,t,0,$,q,K,L)})});function l(n,s,l,f,p,d,h){var m=0;e(s,n,l)&&(m=1,e(s,n-1,l)&&(m=2,e(s,n-2,l)&&(m=3)));var b=0;t(s,n,l)&&(b=1,t(s,n+1,l)&&(b=2,t(s,n+2,l)&&(b=3)));var v=c(b+m,p,d,h),w=0;r(s,n,l)&&(w=1,r(s+1,n,l)&&(w=2,r(s+2,n,l)&&(w=3)));var x=c(w,p,d,h),y=0;a(s,n,l)&&(y=1,a(s-1,n+1,l)&&(y=2,a(s-2,n+2,l)&&(y=3)));var g=0;u(s,n,l)&&(g=1,u(s+1,n-1,l)&&(g=2,u(s+2,n-2,l)&&(g=3)));var O=c(y+g,p,d,h),k=0;i(s,n,l)&&(k=1,i(s-1,n-1,l)&&(k=2,i(s-2,n-2,l)&&(k=3)));var j=0;return o(s,n,l)&&(j=1,o(s+1,n+1,l)&&(j=2,o(s+2,n+2,l)&&(j=3))),x*f+v*f+O*f+c(k+j,p,d,h)*f}console.table(s);var f,p=0;return s.forEach(function(n,t){return n.forEach(function(n,t){-99999!==n&&n>=p&&(p=n,f=t)})}),console.log(f),f}(n);e.makeAMove(t,2),e.updatePossiblePlays()},500)},e.isWinner=function(n,t,r){var a=0,i=0,o=e.state.board;return o[t][n-1]===r&&(a=1,o[t][n-2]===r&&(a=2,o[t][n-3]===r&&(a=3))),o[t][n+1]===r&&(i=1,o[t][n+2]===r&&(i=2,o[t][n+3]===r&&(i=3))),a+i>=3?r:t<=2&&o[t+1][n]===r&&o[t+2][n]===r&&o[t+3][n]===r?r:(a=0,i=0,o[t-1]&&o[t-1][n+1]===r&&(a=1,o[t-2]&&o[t-2][n+2]===r&&(a=2,o[t-3]&&o[t-3][n+3]===r&&(a=3))),o[t+1]&&o[t+1][n-1]===r&&(i=1,o[t+2]&&o[t+2][n-2]===r&&(i=2,o[t+3]&&o[t+3][n-3]===r&&(i=3))),a+i>=3?r:(a=0,i=0,o[t-1]&&o[t-1][n-1]===r&&(a=1,o[t-2]&&o[t-2][n-2]===r&&(a=2,o[t-3]&&o[t-3][n-3]===r&&(a=3))),o[t+1]&&o[t+1][n+1]===r&&(i=1,o[t+2]&&o[t+2][n+2]===r&&(i=2,o[t+3]&&o[t+3][n+3]===r&&(i=3))),a+i>=3?r:0))},e.makeAMove=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},a=e.state.currentHeightofRows[n];e.setState(function(r){return{board:r.board.map(function(e,a){return a===r.currentHeightofRows[n]?e.map(function(e,r){return r===n?t:e}):e}),currentHeightofRows:r.currentHeightofRows.map(function(t,e){return e===n?t-1:t}),winner:e.isWinner(n,a,t)}},function(){0===e.state.winner&&r(e.state.board,e.state.possiblePlays)})},e.updatePossiblePlays=function(){e.setState(function(n){return{possiblePlays:n.possiblePlays.map(function(t,e){return!(n.currentHeightofRows[e]<0)})}})},e.resetGame=function(){e.setState(U)},e.disableTakingATurn=function(){e.setState({possiblePlays:[!1,!1,!1,!1,!1,!1,!1]})},e}return Object(f.a)(t,n),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(V,null,a.a.createElement(S,{boardState:this.state.board,possiblePlays:this.state.possiblePlays,playATurn:this.playATurn}),a.a.createElement(R,{winner:this.state.winner,resetGame:this.resetGame}))}}]),t}(a.a.Component);e(33);function Y(){var n=Object(p.a)(["\n  background: #6441A5;  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to right, #2a0845, #6441A5);  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #2a0845, #6441A5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  min-width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n"]);return Y=function(){return n},n}var Z=d.a.div(Y()),_=function(n){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,n),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(Z,null,a.a.createElement(X,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.1bf988b9.chunk.js.map