(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[740],{73067:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var s=r(65531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s.Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},18451:function(e,t,r){Promise.resolve().then(r.bind(r,66883))},66883:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var s=r(57437),a=r(2265),n=r(86110),i=r(73067),o=r(65531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,o.Z)("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),c=(0,o.Z)("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);var m=r(61396),u=r.n(m),d=r(67529),x=r(45253),b=r(39205),f=r(31346),g=r(24235),p=r(50039),h=r(39677),y=(0,b.z)({chartName:"BarChart",GraphicalChild:f.$,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:g.K},{axisType:"yAxis",AxisComp:p.B}],formatAxisMap:h.t9}),N=r(86812),v=r(19223),w=(0,b.z)({chartName:"LineChart",GraphicalChild:v.x,axisComponents:[{axisType:"xAxis",AxisComp:g.K},{axisType:"yAxis",AxisComp:p.B}],formatAxisMap:h.t9});function j(){let[e,t]=(0,a.useState)([]),[r,o]=(0,a.useState)(d.M[0]);(0,a.useEffect)(()=>{let e=localStorage.getItem("lotto-history"),r=localStorage.getItem("lotto-language");if(e&&t(JSON.parse(e)),r){let e=d.M.find(e=>e.code===r);e&&o(e)}},[]);let m={};e.forEach(e=>{e.numbers.forEach(e=>{m[e]=(m[e]||0)+1})});let b=Object.entries(m).sort((e,t)=>{let[,r]=e,[,s]=t;return s-r}).map(e=>{let[t,r]=e;return{number:parseInt(t),frequency:r}}),h=b.slice(0,5);b.slice(-5).reverse(),e.map((e,t)=>({index:t,profit:e.gain?e.gain-e.bet:-e.bet}));let j=e.reduce((e,t,r)=>{let s=r>0?e[r-1].total:0,a=t.gain?t.gain-t.bet:-t.bet;return e.push({index:r,total:s+a}),e},[]),C=e.reduce((e,t)=>e+t.bet,0)/e.length,k=e.reduce((e,t)=>e+(t.gain||0),0)/e.length,S=Math.max(...e.map(e=>(e.gain||0)-e.bet)),G=Math.min(...e.map(e=>(e.gain||0)-e.bet));return(0,s.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 pb-20",children:(0,s.jsxs)("div",{className:"max-w-6xl mx-auto space-y-8",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)(u(),{href:"/",className:"flex items-center text-white/80 hover:text-white",children:[(0,s.jsx)(i.Z,{className:"w-5 h-5 mr-2"}),"Retour"]}),(0,s.jsx)("h1",{className:"text-3xl font-bold",children:"Statistiques d\xe9taill\xe9es"}),(0,s.jsx)("div",{className:"w-20"})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,s.jsxs)(n.Zb,{className:"p-6 bg-white/5 backdrop-blur-xl border-white/10",children:[(0,s.jsxs)("h3",{className:"text-lg font-semibold mb-4 flex items-center",children:[(0,s.jsx)(l,{className:"w-5 h-5 mr-2"}),"Num\xe9ros les plus fr\xe9quents"]}),(0,s.jsx)(x.h,{width:"100%",height:200,children:(0,s.jsxs)(y,{data:h,children:[(0,s.jsx)(g.K,{dataKey:"number",stroke:"#ffffff60"}),(0,s.jsx)(p.B,{stroke:"#ffffff60"}),(0,s.jsx)(N.u,{contentStyle:{background:"rgba(17, 24, 39, 0.95)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"8px"}}),(0,s.jsx)(f.$,{dataKey:"frequency",fill:"rgba(59, 130, 246, 0.5)"})]})})]}),(0,s.jsxs)(n.Zb,{className:"p-6 bg-white/5 backdrop-blur-xl border-white/10",children:[(0,s.jsxs)("h3",{className:"text-lg font-semibold mb-4 flex items-center",children:[(0,s.jsx)(c,{className:"w-5 h-5 mr-2"}),"\xc9volution des gains"]}),(0,s.jsx)(x.h,{width:"100%",height:200,children:(0,s.jsxs)(w,{data:j,children:[(0,s.jsx)(g.K,{dataKey:"index",stroke:"#ffffff60"}),(0,s.jsx)(p.B,{stroke:"#ffffff60"}),(0,s.jsx)(N.u,{contentStyle:{background:"rgba(17, 24, 39, 0.95)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"8px"}}),(0,s.jsx)(v.x,{type:"monotone",dataKey:"total",stroke:"#3b82f6",strokeWidth:2})]})})]}),(0,s.jsx)(n.Zb,{className:"p-6 bg-white/5 backdrop-blur-xl border-white/10 md:col-span-2",children:(0,s.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("h4",{className:"text-sm text-white/60",children:"Mise moyenne"}),(0,s.jsx)("p",{className:"text-2xl font-bold",children:r.currencyFormat(C)})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("h4",{className:"text-sm text-white/60",children:"Gain moyen"}),(0,s.jsx)("p",{className:"text-2xl font-bold",children:r.currencyFormat(k)})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("h4",{className:"text-sm text-white/60",children:"Meilleur gain"}),(0,s.jsx)("p",{className:"text-2xl font-bold text-green-400",children:r.currencyFormat(S)})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("h4",{className:"text-sm text-white/60",children:"Pire perte"}),(0,s.jsx)("p",{className:"text-2xl font-bold text-red-400",children:r.currencyFormat(Math.abs(G))})]})]})})]})]})})}},86110:function(e,t,r){"use strict";r.d(t,{Zb:function(){return i}});var s=r(57437),a=r(2265),n=r(39311);let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a})});i.displayName="Card";let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",r),...a})});o.displayName="CardHeader";let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("h3",{ref:t,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});l.displayName="CardTitle";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",r),...a})});c.displayName="CardDescription";let m=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",r),...a})});m.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",r),...a})});u.displayName="CardFooter"},67529:function(e,t,r){"use strict";r.d(t,{I:function(){return a},M:function(){return s}});let s=[{code:"fr",name:"Fran\xe7ais",flag:"\uD83C\uDDEB\uD83C\uDDF7",symbol:"€",currencyFormat:e=>new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(e)},{code:"en",name:"English",flag:"\uD83C\uDDEC\uD83C\uDDE7",symbol:"$",currencyFormat:e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)}],a={fr:{title:"LottoGen Pro",subtitle:"G\xe9n\xe9rateur de combinaisons de loterie professionnel",welcome:"Bienvenue",enterName:"Entrez votre nom",saveName:"Enregistrer",generate:"G\xe9n\xe9rer les num\xe9ros",generating:"G\xe9n\xe9ration en cours...",numberCount:"Nombre de num\xe9ros par combinaison",maxNumber:"Nombre maximum",bet:"Mise",useCustomNumbers:"Utiliser des num\xe9ros personnalis\xe9s",customNumbers:"Vos num\xe9ros (s\xe9par\xe9s par des virgules)",duplicateWarning:"Les doublons seront automatiquement supprim\xe9s",history:"Historique",noHistory:"Aucun tirage enregistr\xe9",enterGains:"Saisir les gains",stats:"Statistiques",totalBets:"Total mis\xe9",totalGains:"Total gagn\xe9",winRate:"Taux de r\xe9ussite",numberFrequency:"Fr\xe9quence des num\xe9ros",congratulations:"F\xe9licitations !",betterLuck:"Pas de chance...",gainRecorded:"Gain enregistr\xe9 :",nextTime:"La prochaine fois sera la bonne !",mostFrequent:"Num\xe9ros les plus fr\xe9quents",leastFrequent:"Num\xe9ros les moins fr\xe9quents",winningStreak:"Plus longue s\xe9rie gagnante",losingStreak:"Plus longue s\xe9rie perdante",averageBet:"Mise moyenne",averageGain:"Gain moyen",bestWin:"Meilleur gain",worstLoss:"Pire perte",profitability:"Rentabilit\xe9",profitable:"Rentable",unprofitable:"Non rentable",selected:"S\xe9lectionn\xe9",select:"S\xe9lectionner",availableCombinations:"Combinaisons disponibles",previous:"Pr\xe9c\xe9dent",next:"Suivant",lotteryType:"Type de loterie",numberRange:"Plage de num\xe9ros",combinationSize:"Taille de la combinaison",generateCombinations:"G\xe9n\xe9rer les combinaisons",showAllCombinations:"Voir toutes les combinaisons",randomCombinations:"Combinaisons al\xe9atoires",savedCombinations:"Combinaisons sauvegard\xe9es",save:"Sauvegarder",delete:"Supprimer",edit:"Modifier"},en:{title:"LottoGen Pro",subtitle:"Professional Lottery Combination Generator",welcome:"Welcome",enterName:"Enter your name",saveName:"Save",generate:"Generate numbers",generating:"Generating...",numberCount:"Numbers per combination",maxNumber:"Maximum number",bet:"Bet",useCustomNumbers:"Use custom numbers",customNumbers:"Your numbers (comma separated)",duplicateWarning:"Duplicates will be automatically removed",history:"History",noHistory:"No draws recorded",enterGains:"Enter winnings",stats:"Statistics",totalBets:"Total bets",totalGains:"Total winnings",winRate:"Win rate",numberFrequency:"Number frequency",congratulations:"Congratulations!",betterLuck:"Better luck next time...",gainRecorded:"Winnings recorded:",nextTime:"Next time will be the one!",mostFrequent:"Most frequent numbers",leastFrequent:"Least frequent numbers",winningStreak:"Longest winning streak",losingStreak:"Longest losing streak",averageBet:"Average bet",averageGain:"Average gain",bestWin:"Best win",worstLoss:"Worst loss",profitability:"Profitability",profitable:"Profitable",unprofitable:"Unprofitable",selected:"Selected",select:"Select",availableCombinations:"Available combinations",previous:"Previous",next:"Next",lotteryType:"Lottery type",numberRange:"Number range",combinationSize:"Combination size",generateCombinations:"Generate combinations",showAllCombinations:"Show all combinations",randomCombinations:"Random combinations",savedCombinations:"Saved combinations",save:"Save",delete:"Delete",edit:"Edit"}}},39311:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var s=r(57042),a=r(74769);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,s.W)(t))}}},function(e){e.O(0,[395,396,895,971,864,744],function(){return e(e.s=18451)}),_N_E=e.O()}]);