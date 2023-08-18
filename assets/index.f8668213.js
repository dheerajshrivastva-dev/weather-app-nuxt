import{d as J,r as u,k as p,l as v,m as t,z as c,t as l,A as Z,_ as L,c as b,o as ee,B as te,F as C,C as W,D as ae,E as ne,G as re,H as oe,v as E,I as F,x as ce,y as ie,J as le}from"./entry.719aa6e3.js";const se=["src"],de=J({__name:"DayWidge",props:{iconIndex:{},day:{},temp:{},selected:{type:Boolean}},setup(n){const r=n,o=u(`./images/weather/${r.iconIndex}.png`);return(d,w)=>(p(),v("div",{class:Z(r!=null&&r.selected?"day-container selected":"day-container")},[t("img",{src:c(o)},null,8,se),t("p",null,l(r.day),1),t("p",null,l(r.temp)+"°",1)],2))}});const ue=L(de,[["__scopeId","data-v-cba7489e"]]),pe="25.59408N",me="85.13563E",_e=53,ye="Asia/Kolkata",he="metric",ve={icon:"overcast",icon_num:7,summary:"Overcast",temperature:34,wind:{speed:3.2,angle:260,dir:"W"},precipitation:{total:0,type:"none"},cloud_cover:100},we={data:[{date:"2023-08-16T15:00:00",weather:"overcast",icon:7,summary:"Overcast",temperature:34,wind:{speed:3.2,dir:"W",angle:260},cloud_cover:{total:100},precipitation:{total:0,type:"none"}},{date:"2023-08-16T16:00:00",weather:"overcast",icon:7,summary:"Overcast",temperature:33,wind:{speed:2.6,dir:"W",angle:280},cloud_cover:{total:100},precipitation:{total:0,type:"none"}},{date:"2023-08-16T17:00:00",weather:"overcast",icon:7,summary:"Overcast",temperature:32.5,wind:{speed:2,dir:"WNW",angle:294},cloud_cover:{total:100},precipitation:{total:0,type:"none"}},{date:"2023-08-16T18:00:00",weather:"overcast",icon:7,summary:"Overcast",temperature:31.8,wind:{speed:2,dir:"W",angle:272},cloud_cover:{total:100},precipitation:{total:0,type:"none"}},{date:"2023-08-16T19:00:00",weather:"overcast",icon:7,summary:"Overcast",temperature:31.2,wind:{speed:2.1,dir:"W",angle:267},cloud_cover:{total:100},precipitation:{total:0,type:"none"}},{date:"2023-08-16T20:00:00",weather:"overcast",icon:7,summary:"Overcast",temperature:30.8,wind:{speed:2.1,dir:"W",angle:274},cloud_cover:{total:100},precipitation:{total:0,type:"none"}},{date:"2023-08-16T21:00:00",weather:"overcast",icon:7,summary:"Overcast",temperature:30.5,wind:{speed:2.1,dir:"WNW",angle:286},cloud_cover:{total:100},precipitation:{total:0,type:"none"}},{date:"2023-08-16T22:00:00",weather:"light_rain",icon:10,summary:"Light rain",temperature:30.2,wind:{speed:1.7,dir:"NW",angle:319},cloud_cover:{total:100},precipitation:{total:.2,type:"rain"}},{date:"2023-08-16T23:00:00",weather:"tstorm",icon:14,summary:"Thunderstorm",temperature:29.8,wind:{speed:1.5,dir:"NNW",angle:338},cloud_cover:{total:100},precipitation:{total:.2,type:"ice pellets"}},{date:"2023-08-17T00:00:00",weather:"tstorm",icon:14,summary:"Thunderstorm",temperature:29.2,wind:{speed:1.2,dir:"N",angle:5},cloud_cover:{total:100},precipitation:{total:.7,type:"rain"}},{date:"2023-08-17T01:00:00",weather:"tstorm",icon:14,summary:"Thunderstorm",temperature:28.8,wind:{speed:.7,dir:"NE",angle:42},cloud_cover:{total:100},precipitation:{total:.4,type:"rain"}},{date:"2023-08-17T02:00:00",weather:"tstorm",icon:14,summary:"Thunderstorm",temperature:28.8,wind:{speed:.6,dir:"ENE",angle:78},cloud_cover:{total:100},precipitation:{total:.2,type:"rain"}},{date:"2023-08-17T03:00:00",weather:"tstorm",icon:14,summary:"Thunderstorm",temperature:28.5,wind:{speed:.8,dir:"E",angle:92},cloud_cover:{total:100},precipitation:{total:.2,type:"rain"}},{date:"2023-08-17T04:00:00",weather:"tstorm",icon:14,summary:"Thunderstorm",temperature:28.2,wind:{speed:1.1,dir:"ESE",angle:109},cloud_cover:{total:100},precipitation:{total:.3,type:"rain"}},{date:"2023-08-17T05:00:00",weather:"tstorm",icon:14,summary:"Thunderstorm",temperature:27.8,wind:{speed:1.1,dir:"E",angle:101},cloud_cover:{total:100},precipitation:{total:.4,type:"rain"}},{date:"2023-08-17T06:00:00",weather:"tstorm",icon:14,summary:"Thunderstorm",temperature:27.8,wind:{speed:.9,dir:"ESE",angle:112},cloud_cover:{total:100},precipitation:{total:.3,type:"rain"}},{date:"2023-08-17T07:00:00",weather:"tstorm",icon:14,summary:"Thunderstorm",temperature:28.2,wind:{speed:1.1,dir:"SE",angle:134},cloud_cover:{total:100},precipitation:{total:.2,type:"rain"}},{date:"2023-08-17T08:00:00",weather:"overcast",icon:7,summary:"Overcast",temperature:28.8,wind:{speed:1.2,dir:"SSE",angle:150},cloud_cover:{total:100},precipitation:{total:0,type:"none"}},{date:"2023-08-17T09:00:00",weather:"overcast",icon:7,summary:"Overcast",temperature:29.8,wind:{speed:1.2,dir:"SE",angle:141},cloud_cover:{total:100},precipitation:{total:0,type:"none"}},{date:"2023-08-17T10:00:00",weather:"light_rain",icon:10,summary:"Light rain",temperature:30,wind:{speed:1,dir:"SE",angle:132},cloud_cover:{total:100},precipitation:{total:.2,type:"rain"}},{date:"2023-08-17T11:00:00",weather:"tstorm",icon:14,summary:"Thunderstorm",temperature:30.5,wind:{speed:.7,dir:"ESE",angle:122},cloud_cover:{total:100},precipitation:{total:.7,type:"rain"}},{date:"2023-08-17T12:00:00",weather:"tstorm",icon:14,summary:"Thunderstorm",temperature:30.2,wind:{speed:1.3,dir:"NE",angle:54},cloud_cover:{total:100},precipitation:{total:1.8,type:"rain"}},{date:"2023-08-17T13:00:00",weather:"tstorm",icon:14,summary:"Thunderstorm",temperature:29.5,wind:{speed:2.5,dir:"ENE",angle:62},cloud_cover:{total:100},precipitation:{total:7.4,type:"rain"}},{date:"2023-08-17T14:00:00",weather:"tstorm",icon:14,summary:"Thunderstorm",temperature:28.8,wind:{speed:1.9,dir:"E",angle:83},cloud_cover:{total:100},precipitation:{total:26.3,type:"rain"}}]},fe={data:[{day:"2023-08-16",weather:"overcast",icon:7,summary:"Cloudy. Temperature 28/34 °C.",all_day:{weather:"overcast",icon:7,temperature:31,temperature_min:27.8,temperature_max:34.2,wind:{speed:2.4,dir:"WNW",angle:287},cloud_cover:{total:99},precipitation:{total:.7,type:"rain"}},morning:null,afternoon:null,evening:null},{day:"2023-08-17",weather:"tstorm",icon:14,summary:"Possible rain in the morning and evening, thunderstorms in the afternoon. Temperature 28/31 °C.",all_day:{weather:"tstorm",icon:14,temperature:28.8,temperature_min:27.8,temperature_max:30.5,wind:{speed:1.3,dir:"SE",angle:124},cloud_cover:{total:99},precipitation:{total:69.8,type:"rain"}},morning:null,afternoon:null,evening:null},{day:"2023-08-18",weather:"cloudy",icon:6,summary:"Cloudy, fewer clouds in the afternoon. Temperature 27/33 °C.",all_day:{weather:"cloudy",icon:6,temperature:29.2,temperature_min:26.8,temperature_max:32.8,wind:{speed:2.4,dir:"ESE",angle:101},cloud_cover:{total:86},precipitation:{total:1.3,type:"rain"}},morning:null,afternoon:null,evening:null},{day:"2023-08-19",weather:"overcast",icon:7,summary:"Cloudy. Temperature 27/34 °C.",all_day:{weather:"overcast",icon:7,temperature:30,temperature_min:27,temperature_max:33.8,wind:{speed:3.6,dir:"ESE",angle:112},cloud_cover:{total:91},precipitation:{total:.5,type:"rain"}},morning:null,afternoon:null,evening:null},{day:"2023-08-20",weather:"rain_shower",icon:13,summary:"Possible rain changing to partly sunny in the afternoon. Temperature 27/35 °C.",all_day:{weather:"rain_shower",icon:13,temperature:30.5,temperature_min:27,temperature_max:34.8,wind:{speed:3.1,dir:"E",angle:96},cloud_cover:{total:66},precipitation:{total:.9,type:"rain"}},morning:null,afternoon:null,evening:null},{day:"2023-08-21",weather:"overcast",icon:7,summary:"Cloudy in the morning and evening, possible rain in the afternoon. Temperature 28/35 °C, but a feels-like temperature of up to 41 °C.",all_day:{weather:"overcast",icon:7,temperature:31,temperature_min:28,temperature_max:35,wind:{speed:2.2,dir:"ENE",angle:78},cloud_cover:{total:96},precipitation:{total:1.1,type:"rain"}},morning:null,afternoon:null,evening:null},{day:"2023-08-22",weather:"light_rain",icon:10,summary:"Possible rain in the morning, light ice pellets in the afternoon. Temperature 27/31 °C, but a feels-like temperature of up to 36 °C.",all_day:{weather:"light_rain",icon:10,temperature:29,temperature_min:27.2,temperature_max:31.2,wind:{speed:1.9,dir:"ENE",angle:71},cloud_cover:{total:100},precipitation:{total:13.2,type:"rain"}},morning:null,afternoon:null,evening:null}]},P={lat:pe,lon:me,elevation:_e,timezone:ye,units:he,current:ve,hourly:we,daily:fe};function xe(n){const r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=new Date(n).getDay();return r[d]}function B(n){const r=new Date(n),o=r.getHours(),w=new Date().getHours();if(o===w)return"Now";const y=o>=12?"PM":"AM";return`${o%12===0?12:o%12}:${r.getMinutes()} ${y}`}function G(){const n=new Date,r=n.getHours(),o=n.getMinutes(),d=n.getSeconds(),w=r>=12?"PM":"AM",y=r%12===0?12:r%12,i=o<10?`0${o}`:o,S=d<10?`0${d}`:d;return`${y}:${i}:${S} ${w}`}function ge(n){const r=new Date,o={weekday:"long",day:"numeric",month:"short",year:"numeric"};return new Date(n??r).toLocaleDateString(void 0,o)}function Te(n){const r=new Date,o=new Date(n??r);return be(o,new Date)?`Today ${o.getDate()}, ${z(o.getMonth())}`:`${Ee(o.getDay())} ${o.getDate()}, ${z(o.getMonth())}`}function be(n,r){return n.getDate()===r.getDate()&&n.getMonth()===r.getMonth()&&n.getFullYear()===r.getFullYear()}function z(n){return Se[n]}function Ee(n){return De[n]}const Se=["January","February","March","April","May","June","July","August","September","October","November","December"],De=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Ce=()=>{const n=new Date().getHours();return n>=5&&n<12?"Good morning":n>=12&&n<18?"Good afternoon":n>=18&&n<22?"Good evening":"Good night"},We=n=>{const r=new Date().getHours();return r>=5&&r<18?n>50?1:2:n>50?3:4},_=n=>(ce("data-v-3daa0946"),n=n(),ie(),n),ke={class:"flex bg-slate-600"},Ne={class:"bg-slate-700 weather-data text-white flex flex-row justify-end pr-8"},$e={class:"weather-data-container"},Ie={class:"text-5xl py-2"},Me={class:"text-xl py-1"},je={class:"py-5"},He=_(()=>t("span",null,null,-1)),Oe={class:"text-3xl"},Ae=_(()=>t("p",{class:"text-xl py-5"},"Hourly Forecast",-1)),Fe={class:"flex gap-2 overflow-x-auto snap-start"},Pe=_(()=>t("p",{class:"text-xl py-5"},"Weekly Forecast",-1)),Be={class:"flex gap-2 overflow-x-auto snap-start"},Ge={class:"bg-slate-800 weather-search text-white flex flex-row"},ze={class:"weather-search-container flex flex-col items-center mt-7"},Je={class:"input-container"},Le={class:"flex items-center justify-between gap-3"},Ve={key:0,class:"absolute overflow-auto search-sug"},Ke=["onClick"],Re={class:"card mt-6 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition"},Ue={class:"font-semibold text-lg mb-2 p-4"},Ye={class:"flex justify-center items-center"},Qe=["src"],qe={class:"px-4 py-6"},Xe={class:"text-center"},Ze={class:"py-6 text-center text-5xl font-bold"},et={class:"text-center pb-4"},tt={class:"flex flex-row justify-center gap-1 align-middle"},at=_(()=>t("span",{class:"w-50 text-right"},"Wind",-1)),nt=_(()=>t("span",null,"|",-1)),rt={class:"w-50"},ot={class:"flex flex-row justify-center gap-1"},ct=_(()=>t("span",{class:"w-50 text-right"},"Cloud",-1)),it=_(()=>t("span",null,"|",-1)),lt={class:"w-50"},st={class:"card-b mt-10 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition"},dt={class:"px-4 py-6"},ut={class:"flex flex-row justify-center gap-1 align-middle"},pt=_(()=>t("div",{class:"flex flex-row justify-center gap-1"},null,-1)),mt=J({__name:"index",setup(n){const r=le(),o=u(G()),d=u(ge()),w=u(Te()),y=u(P.daily.data[0]),i=u(P),S=a=>{y.value=a},V=b(()=>{var a,s;return(s=(a=i==null?void 0:i.value)==null?void 0:a.daily)==null?void 0:s.data}),K=b(()=>{var a,s;return(s=(a=i==null?void 0:i.value)==null?void 0:a.hourly)==null?void 0:s.data}),x=b(()=>{var a;return(a=i==null?void 0:i.value)==null?void 0:a.current});let k;ee(()=>{k=setInterval(()=>{o.value=G()},1e3)}),te(()=>{clearInterval(k)});const h=u(null),R=b(()=>{var a;return f.value!==""&&((a=h==null?void 0:h.value)==null?void 0:a.length)>0}),N=u("Patna"),g=u(null),U=()=>{g.value||(h.value=[]),g.value=null},Y=async a=>{f.value=[a==null?void 0:a.name,a==null?void 0:a.adm_area1,a==null?void 0:a.country].join(", "),h.value=[],g.value=a==null?void 0:a.place_id,N.value=a==null?void 0:a.name,await X(a==null?void 0:a.place_id)},f=u("Patna"),Q=async()=>{g.value||await q(f.value)},q=async a=>{const s=r.public.weatherApiSecret,m=await $fetch("https://www.meteosource.com/api/v1/free/find_places_prefix",{headers:{accept:"application/json"},params:{text:a,key:s}});console.log("",m),h.value=m},X=async a=>{const s=r.public.weatherApiSecret,m=await $fetch("https://www.meteosource.com/api/v1/free/point",{headers:{accept:"application/json"},params:{place_id:a,sections:"all",units:"metric",key:s}});console.log("",m),i.value=m};return(a,s)=>{var $,I,M,j,H,O,A;const m=ue;return p(),v("div",ke,[t("div",Ne,[t("div",$e,[t("h1",Ie,l(c(o)),1),t("p",Me,l(c(d)),1),t("div",je,[He,t("span",Oe,l(c(Ce)()),1)]),Ae,t("div",Fe,[(p(!0),v(C,null,W(c(K),e=>(p(),F(m,{key:e==null?void 0:e.date,day:c(B)(e==null?void 0:e.date),iconIndex:e==null?void 0:e.icon,temp:e==null?void 0:e.temperature,selected:c(B)(e==null?void 0:e.date)==="Now"},null,8,["day","iconIndex","temp","selected"]))),128))]),Pe,t("div",Be,[(p(!0),v(C,null,W(c(V),e=>{var T,D;return p(),F(m,{key:e==null?void 0:e.day,day:c(xe)(e==null?void 0:e.day),iconIndex:e==null?void 0:e.icon,temp:(T=e==null?void 0:e.all_day)==null?void 0:T.temperature,selected:(e==null?void 0:e.day)===((D=c(y))==null?void 0:D.day),onClick:()=>S(e)},null,8,["day","iconIndex","temp","selected","onClick"])}),128))])])]),t("div",Ge,[t("div",ze,[t("div",Je,[t("div",Le,[ae(t("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>re(f)?f.value=e:null),type:"text",class:"flex-shrink text-white border rounded px-4 py-1 focus:outline-none focus:ring focus:border-blue-300 bg-slate-800",placeholder:"Enter your search",onInput:U},null,544),[[ne,c(f)]]),t("button",{onClick:Q,class:"flex justify-center items-center border-2 button"}," Q ")]),c(R)?(p(),v("div",Ve,[t("ul",null,[(p(!0),v(C,null,W(c(h),(e,T)=>(p(),v("li",{key:T,onClick:D=>Y(e),class:"px-4 py-2 cursor-pointer hover:bg-gray-600"},l([e==null?void 0:e.name,e==null?void 0:e.adm_area1,e==null?void 0:e.country].join(",")),9,Ke))),128))])])):oe("",!0)]),t("div",Re,[t("p",Ue,l(c(N)),1),t("div",Ye,[t("img",{class:"object-cover object-center max-h-28",src:`./images/${c(We)(($=c(x))==null?void 0:$.cloud_cover)}.png`,alt:"Card image"},null,8,Qe)]),t("div",qe,[t("p",Xe,l(c(w)),1),t("p",Ze,l((I=c(x))==null?void 0:I.temperature)+"°",1),t("p",et,l((M=c(x))==null?void 0:M.summary),1),t("div",tt,[at,E(),nt,E(),t("span",rt,l((H=(j=c(x))==null?void 0:j.wind)==null?void 0:H.speed)+" m/s",1)]),t("div",ot,[ct,E(),it,E(),t("span",lt,l((O=c(x))==null?void 0:O.cloud_cover)+"%",1)])])]),t("div",st,[t("div",dt,[t("div",ut,l((A=c(y))==null?void 0:A.summary),1),pt])])])])])}}});const yt=L(mt,[["__scopeId","data-v-3daa0946"]]);export{yt as default};