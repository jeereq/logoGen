(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{73067:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(65531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,a.Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},20684:function(e,t,r){Promise.resolve().then(r.bind(r,24904))},24904:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return R}});var a=r(57437),s=r(2265),n=r(86110),i=r(51908),o=r(95358),l=r(62621),c=r(67529),d=r(57918),u=r(73067),m=r(65531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let f=(0,m.Z)("CircleMinus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]),x=(0,m.Z)("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]),b=(0,m.Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);var g=r(61396),p=r.n(g),h=r(12609),y=r(39311);let N=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:t,className:(0,y.cn)("w-full caption-bottom text-sm",r),...s})})});N.displayName="Table";let v=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("thead",{ref:t,className:(0,y.cn)("[&_tr]:border-b",r),...s})});v.displayName="TableHeader";let w=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,y.cn)("[&_tr:last-child]:border-0",r),...s})});w.displayName="TableBody";let j=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,y.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...s})});j.displayName="TableFooter";let S=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tr",{ref:t,className:(0,y.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...s})});S.displayName="TableRow";let k=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("th",{ref:t,className:(0,y.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...s})});k.displayName="TableHead";let C=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("td",{ref:t,className:(0,y.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...s})});C.displayName="TableCell";let T=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("caption",{ref:t,className:(0,y.cn)("mt-4 text-sm text-muted-foreground",r),...s})});function R(){let[e,t]=(0,s.useState)([]),[r,m]=(0,s.useState)(c.M[0]),[g,y]=(0,s.useState)(null),[j,T]=(0,s.useState)(""),{toast:R}=(0,l.p)();(0,s.useEffect)(()=>{let e=localStorage.getItem("lotto-history"),r=localStorage.getItem("lotto-language");if(e&&t(JSON.parse(e)),r){let e=c.M.find(e=>e.code===r);e&&m(e)}},[]);let D=a=>{let s=parseFloat(j);if(!isNaN(s)){let n=e.map(e=>e.date===a.date?{...e,gain:s}:e);t(n),localStorage.setItem("lotto-history",JSON.stringify(n)),y(null),T(""),R({title:s>a.bet?"Gain enregistr\xe9 !":"Perte enregistr\xe9e",description:r.currencyFormat(s),variant:s>a.bet?"default":"destructive"})}},M=r=>{let a=e.filter(e=>e.date!==r.date);t(a),localStorage.setItem("lotto-history",JSON.stringify(a)),R({title:"Tirage supprim\xe9",variant:"destructive"})},E=e.reduce((e,t)=>e+t.bet,0),A=e.reduce((e,t)=>e+(t.gain||0),0),F=A-E;return(0,a.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 pb-20",children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto space-y-8",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)(p(),{href:"/",className:"flex items-center text-white/80 hover:text-white",children:[(0,a.jsx)(u.Z,{className:"w-5 h-5 mr-2"}),"Retour"]}),(0,a.jsx)("h1",{className:"text-3xl font-bold",children:"Historique complet"}),(0,a.jsx)("div",{className:"w-20"})," "]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,a.jsxs)(n.Zb,{className:"p-6 bg-white/5 backdrop-blur-xl border-white/10",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,a.jsx)("h3",{className:"text-sm font-medium text-white/60",children:"Total mis\xe9"}),(0,a.jsx)(f,{className:"w-4 h-4 text-red-400"})]}),(0,a.jsx)("p",{className:"text-2xl font-bold",children:r.currencyFormat(E)})]}),(0,a.jsxs)(n.Zb,{className:"p-6 bg-white/5 backdrop-blur-xl border-white/10",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,a.jsx)("h3",{className:"text-sm font-medium text-white/60",children:"Total gagn\xe9"}),(0,a.jsx)(x,{className:"w-4 h-4 text-green-400"})]}),(0,a.jsx)("p",{className:"text-2xl font-bold",children:r.currencyFormat(A)})]}),(0,a.jsxs)(n.Zb,{className:"p-6 bg-white/5 backdrop-blur-xl border-white/10",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,a.jsx)("h3",{className:"text-sm font-medium text-white/60",children:"Balance"}),F>=0?(0,a.jsx)(x,{className:"w-4 h-4 text-green-400"}):(0,a.jsx)(f,{className:"w-4 h-4 text-red-400"})]}),(0,a.jsx)("p",{className:"text-2xl font-bold ".concat(F>=0?"text-green-400":"text-red-400"),children:r.currencyFormat(Math.abs(F))})]})]}),(0,a.jsx)(n.Zb,{className:"bg-white/5 backdrop-blur-xl border-white/10",children:(0,a.jsxs)(N,{children:[(0,a.jsx)(v,{children:(0,a.jsxs)(S,{className:"hover:bg-white/5",children:[(0,a.jsx)(k,{children:"Date"}),(0,a.jsx)(k,{children:"Num\xe9ros"}),(0,a.jsx)(k,{children:"Mise"}),(0,a.jsx)(k,{children:"Gain/Perte"}),(0,a.jsx)(k,{className:"text-right",children:"Actions"})]})}),(0,a.jsx)(w,{children:e.map((e,t)=>(0,a.jsxs)(S,{className:"hover:bg-white/5",children:[(0,a.jsx)(C,{className:"font-medium",children:(0,d.ZP)(new Date(e.date),"dd/MM/yyyy HH:mm")}),(0,a.jsx)(C,{children:(0,a.jsx)("div",{className:"flex gap-2",children:e.numbers.map((e,t)=>(0,a.jsx)("div",{className:"w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-sm font-medium",children:e},t))})}),(0,a.jsx)(C,{children:r.currencyFormat(e.bet)}),(0,a.jsx)(C,{children:null!==e.gain?(0,a.jsx)("span",{className:e.gain>e.bet?"text-green-400":"text-red-400",children:r.currencyFormat(e.gain)}):"Non d\xe9fini"}),(0,a.jsx)(C,{className:"text-right",children:(0,a.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,a.jsxs)(h.Vq,{children:[(0,a.jsx)(h.hg,{asChild:!0,children:(0,a.jsx)(o.z,{variant:"ghost",className:"h-8 w-8 p-0",onClick:()=>y(e),children:(0,a.jsx)(x,{className:"h-4 w-4"})})}),(0,a.jsxs)(h.cZ,{className:"bg-gray-900/95 border-white/10",children:[(0,a.jsx)(h.fK,{children:(0,a.jsx)(h.$N,{children:"D\xe9finir le gain/perte"})}),(0,a.jsx)("div",{className:"space-y-4 pt-4",children:(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)(i.I,{type:"number",value:j,onChange:e=>T(e.target.value),placeholder:"Montant",className:"bg-white/5 border-white/10"}),(0,a.jsx)(o.z,{onClick:()=>g&&D(g),className:"bg-blue-600/80 hover:bg-blue-700/80",children:"Enregistrer"})]})})]})]}),(0,a.jsx)(o.z,{variant:"ghost",className:"h-8 w-8 p-0",onClick:()=>M(e),children:(0,a.jsx)(b,{className:"h-4 w-4 text-red-400"})})]})})]},e.date))})]})})]})})}T.displayName="TableCaption"},95358:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var a=r(57437),s=r(2265),n=r(67256),i=r(39213),o=r(39311);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:c=!1,...d}=e,u=c?n.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(l({variant:s,size:i,className:r})),ref:t,...d})});c.displayName="Button"},86110:function(e,t,r){"use strict";r.d(t,{Zb:function(){return i}});var a=r(57437),s=r(2265),n=r(39311);let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...s})});i.displayName="Card";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",r),...s})});o.displayName="CardHeader";let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("h3",{ref:t,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",r),...s})});l.displayName="CardTitle";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",r),...s})});c.displayName="CardDescription";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",r),...s})});d.displayName="CardContent";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",r),...s})});u.displayName="CardFooter"},12609:function(e,t,r){"use strict";r.d(t,{$N:function(){return x},Vq:function(){return l},cZ:function(){return m},fK:function(){return f},hg:function(){return c}});var a=r(57437),s=r(2265),n=r(28712),i=r(82549),o=r(39311);let l=n.fC,c=n.xz,d=n.h_;n.x8;let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.aV,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...s})});u.displayName=n.aV.displayName;let m=s.forwardRef((e,t)=>{let{className:r,children:s,...l}=e;return(0,a.jsxs)(d,{children:[(0,a.jsx)(u,{}),(0,a.jsxs)(n.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...l,children:[s,(0,a.jsxs)(n.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(i.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=n.VY.displayName;let f=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...r})};f.displayName="DialogHeader";let x=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",r),...s})});x.displayName=n.Dx.displayName;let b=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...s})});b.displayName=n.dk.displayName},51908:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var a=r(57437),s=r(2265),n=r(39311);let i=s.forwardRef((e,t)=>{let{className:r,type:s,...i}=e;return(0,a.jsx)("input",{type:s,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},22534:function(e,t,r){"use strict";r.d(t,{pm:function(){return m}});var a=r(2265);let s=0,n=new Map,i=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?i(r):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],c={toasts:[]};function d(e){c=o(c,e),l.forEach(e=>{e(c)})}function u(e){let{...t}=e,r=(s=(s+1)%Number.MAX_VALUE).toString(),a=()=>d({type:"DISMISS_TOAST",toastId:r});return d({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||a()}}}),{id:r,dismiss:a,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function m(){let[e,t]=a.useState(c);return a.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},62621:function(e,t,r){"use strict";r.d(t,{p:function(){return s}});var a=r(22534);let s=a.pm},67529:function(e,t,r){"use strict";r.d(t,{I:function(){return s},M:function(){return a}});let a=[{code:"fr",name:"Fran\xe7ais",flag:"\uD83C\uDDEB\uD83C\uDDF7",symbol:"€",currencyFormat:e=>new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(e)},{code:"en",name:"English",flag:"\uD83C\uDDEC\uD83C\uDDE7",symbol:"$",currencyFormat:e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)}],s={fr:{title:"LottoGen Pro",subtitle:"G\xe9n\xe9rateur de combinaisons de loterie professionnel",welcome:"Bienvenue",enterName:"Entrez votre nom",saveName:"Enregistrer",generate:"G\xe9n\xe9rer les num\xe9ros",generating:"G\xe9n\xe9ration en cours...",numberCount:"Nombre de num\xe9ros par combinaison",maxNumber:"Nombre maximum",bet:"Mise",useCustomNumbers:"Utiliser des num\xe9ros personnalis\xe9s",customNumbers:"Vos num\xe9ros (s\xe9par\xe9s par des virgules)",duplicateWarning:"Les doublons seront automatiquement supprim\xe9s",history:"Historique",noHistory:"Aucun tirage enregistr\xe9",enterGains:"Saisir les gains",stats:"Statistiques",totalBets:"Total mis\xe9",totalGains:"Total gagn\xe9",winRate:"Taux de r\xe9ussite",numberFrequency:"Fr\xe9quence des num\xe9ros",congratulations:"F\xe9licitations !",betterLuck:"Pas de chance...",gainRecorded:"Gain enregistr\xe9 :",nextTime:"La prochaine fois sera la bonne !",mostFrequent:"Num\xe9ros les plus fr\xe9quents",leastFrequent:"Num\xe9ros les moins fr\xe9quents",winningStreak:"Plus longue s\xe9rie gagnante",losingStreak:"Plus longue s\xe9rie perdante",averageBet:"Mise moyenne",averageGain:"Gain moyen",bestWin:"Meilleur gain",worstLoss:"Pire perte",profitability:"Rentabilit\xe9",profitable:"Rentable",unprofitable:"Non rentable",selected:"S\xe9lectionn\xe9",select:"S\xe9lectionner",availableCombinations:"Combinaisons disponibles",previous:"Pr\xe9c\xe9dent",next:"Suivant",lotteryType:"Type de loterie",numberRange:"Plage de num\xe9ros",combinationSize:"Taille de la combinaison",generateCombinations:"G\xe9n\xe9rer les combinaisons",showAllCombinations:"Voir toutes les combinaisons",randomCombinations:"Combinaisons al\xe9atoires",savedCombinations:"Combinaisons sauvegard\xe9es",save:"Sauvegarder",delete:"Supprimer",edit:"Modifier"},en:{title:"LottoGen Pro",subtitle:"Professional Lottery Combination Generator",welcome:"Welcome",enterName:"Enter your name",saveName:"Save",generate:"Generate numbers",generating:"Generating...",numberCount:"Numbers per combination",maxNumber:"Maximum number",bet:"Bet",useCustomNumbers:"Use custom numbers",customNumbers:"Your numbers (comma separated)",duplicateWarning:"Duplicates will be automatically removed",history:"History",noHistory:"No draws recorded",enterGains:"Enter winnings",stats:"Statistics",totalBets:"Total bets",totalGains:"Total winnings",winRate:"Win rate",numberFrequency:"Number frequency",congratulations:"Congratulations!",betterLuck:"Better luck next time...",gainRecorded:"Winnings recorded:",nextTime:"Next time will be the one!",mostFrequent:"Most frequent numbers",leastFrequent:"Least frequent numbers",winningStreak:"Longest winning streak",losingStreak:"Longest losing streak",averageBet:"Average bet",averageGain:"Average gain",bestWin:"Best win",worstLoss:"Worst loss",profitability:"Profitability",profitable:"Profitable",unprofitable:"Unprofitable",selected:"Selected",select:"Select",availableCombinations:"Available combinations",previous:"Previous",next:"Next",lotteryType:"Lottery type",numberRange:"Number range",combinationSize:"Combination size",generateCombinations:"Generate combinations",showAllCombinations:"Show all combinations",randomCombinations:"Random combinations",savedCombinations:"Saved combinations",save:"Save",delete:"Delete",edit:"Edit"}}},39311:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var a=r(57042),s=r(74769);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}}},function(e){e.O(0,[395,396,920,532,971,864,744],function(){return e(e.s=20684)}),_N_E=e.O()}]);