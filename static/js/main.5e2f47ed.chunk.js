(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),o=n(3),i=n.n(o),r=(n(18),n(4)),u=n(5),c=n(6),l=n(11),h=n(7),d=n(10),p=n(1),w=n(8),f=n.n(w);n(19);var m=function(e){return a.a.createElement("h2",{className:"question"},e.content)},y=[{question:"What faction would you support during the 2nd Galactic Civil War?",answers:[{type:"Galactic Empire",content:"Sith"},{type:"Confederacy",content:"Seperatists"},{type:"Galactic Senate",content:"Jedi"}]},{question:"Which Hero would you like to fight with?",answers:[{type:"Sith",content:"Emperor Palpatine"},{type:"Seperatists",content:"General Grevious"},{type:"Jedi",content:"Yoda"}]},{question:"Which of these films is best?",answers:[{type:"Prequel",content:"Revenge of the Sith"},{type:"Original",content:"The Empire Strikes Back"},{type:"Sequel",content:"Don't be stupid"}]},{question:"Who is the strongest Jedi",answers:[{type:"Swordsman",content:"Mace Windu"},{type:"Force",content:"Yoda"},{type:"Strategist",content:"Obi-Wan Kenobi"}]},{question:"Why does Ryan Johnson destroy that which is beautiful?",answers:[{type:"Sadomasochism",content:"Killing Snoke off without explanation"},{type:"Mental Retardation",content:"Not providing Rey with a backstory"},{type:"Pychopathy",content:"Not having 1 lightsabre duel"}]}];var v=function(e){return a.a.createElement("div",{className:"result"},"You prefer ",a.a.createElement("strong",null,e.quizResult),"!")},g=n(9),q=n.n(g),S=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).handleAnswerSelected=n.handleAnswerSelected.bind(Object(p.a)(Object(p.a)(n))),n.state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{nintendo:0,microsoft:0,sony:0},result:""},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=y.map(function(t){return e.shuffleArray(t.answers)});this.setState({question:y[0].question,answerOptions:t[0]})}},{key:"shuffleArray",value:function(e){for(var t,n,s=e.length;0!==s;)n=Math.floor(Math.random()*s),t=e[s-=1],e[s]=e[n],e[n]=t;return e}},{key:"setUserAnswer",value:function(e){var t=q()(this.state.answersCount,Object(r.a)({},e,{$apply:function(e){return e+1}}));this.setState({answersCount:t,answer:e})}},{key:"setNextQuestion",value:function(){var e=this.state.counter+1,t=this.state.questionId+1;this.setState({counter:e,questionId:t,question:y[e].question,answerOptions:y[e].answers,answer:""})}},{key:"handleAnswerSelected",value:function(e){var t=this;this.setUserAnswer(e.currentTarget.value),this.state.questionId<y.length?setTimeout(function(){return t.setNextQuestion()},300):setTimeout(function(){return t.setResults(t.getResults())},300)}},{key:"getResults",value:function(){var e=this.state.answersCount,t=Object.keys(e),n=t.map(function(t){return e[t]}),s=Math.max.apply(null,n);return t.filter(function(t){return e[t]===s})}},{key:"setResults",value:function(e){1===e.length?this.setState({result:e[0]}):this.setState({result:"Undetermined"})}},{key:"renderQuiz",value:function(){return a.a.createElement("quizQuestions",{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:y.length,onAnswerSelected:this.handleAnswerSelected})}},{key:"renderResult",value:function(){return a.a.createElement(v,{quizResult:this.state.result})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App-header"},a.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),a.a.createElement("h2",null,"Thom's Big Fat Quiz of the Year!")),a.a.createElement(m,{content:"Fundamental Questions on the Star Wars Universe!"}),this.state.result?this.renderResult():this.renderQuiz())}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.5e2f47ed.chunk.js.map