(self.webpackChunk=self.webpackChunk||[]).push([[4449],{18522:(e,t,n)=>{n.r(t),n.d(t,{PerceptionMetricsSurveyView:()=>g});var a=n(27378),l=n(29131),r=n(81281),i=n(35984),o=n(12187),c=n(18517);const s={headerText:"Your feedback helps us improve!",acknowledgment:"Your feedback helps us improve.",acknowledgmentTitle:"Thank you!",title:"How useful is Grammarly when writing this document?"},u=({texts:e,maxRating:t,ratingLabels:n,onSelectRating:u,onClose:m})=>{const{headerText:g=s.headerText,acknowledgment:d=s.acknowledgment,acknowledgmentTitle:p=s.acknowledgmentTitle,title:S=s.title}=e,[v,b]=a.useState(!1),y=v?null:a.createElement("div",{className:c.documentRatingHeader},g),h=a.createElement("div",{...(0,o.Sh)(c.documentRatingContent,v?c.documentRatingContentSubmitted:null)},a.createElement("div",{className:c.documentRatingContentTitle},v?p:S),v?a.createElement(a.Fragment,null,a.createElement("div",{className:c.documentRatingContentSubtitle},d),a.createElement(l.z,{className:c.documentRatingContentDoneButton,onClick:m},"Done")):a.createElement(i.i,{maxRating:t,ratingLabels:n,className:c.documentRatingContentRadioGroup,onChange:e=>{u(e),b(!0)},ariaLabel:S}));return a.createElement(r.X,{headerIcon:"logo",headerContent:y,mainContent:h,dataGrammarlyPart:"surveys-document-rating",onClose:m})};var m=n(80800);const g=({survey:e,onSurveyResult:t,onClose:n})=>{const[l,r]=a.useState(null);return e.type===m.v0.Survey.Data.ScoreSurvey.type?a.createElement(u,{texts:{acknowledgment:e.acknowledgment,acknowledgmentTitle:e.acknowledgment_title,headerText:e.box_text,title:e.title},maxRating:e.max_score,ratingLabels:e.score_labels,onSelectRating:n=>{r({placement:e.placement,type:e.type,score:n}),t({placement:e.placement,type:e.type,score:n})},onClose:()=>{null===l&&(r({placement:e.placement,type:e.type,score:m.v0.Survey.Data.ScoreSurvey.Score.declined}),t({placement:e.placement,type:e.type,score:m.v0.Survey.Data.ScoreSurvey.Score.declined})),n()}}):null}},35984:(e,t,n)=>{n.d(t,{i:()=>i});var a=n(27378),l=n(12187),r=n(10526);const i=({maxRating:e=5,ratingLabels:t=["Not at all useful","Slightly useful","Somewhat useful","Very useful","Extremely useful"],onChange:n,value:i,ariaLabel:o="Rating",className:c,ratingStarsClassName:s,ratingLegendClassName:u,ratingLabelsClassName:m})=>{const[g,d]=a.useState(i),[p,S]=a.useState(void 0);a.useEffect((()=>{d(i)}),[i]),a.useEffect((()=>{void 0!==g&&n(g)}),[g]);const v=[...Array(e).keys()].map((e=>e+1)),b=void 0!==p?p:g;return a.createElement("div",{"data-grammarly-part":"ui-kit-rating",role:"radiogroup","aria-label":o,...(0,l.Sh)(r.rating,c)},a.createElement("div",{...(0,l.Sh)(r.ratingStars,s),onMouseLeave:()=>S(void 0)},v.map((e=>{const t=void 0!==b&&b>=e;return a.createElement("input",{key:`rating-${e}`,id:`rating-${e}`,type:"radio",name:"rating",checked:g===e,onChange:e=>d(parseInt(e.target.value,10)),value:e,onMouseEnter:e=>{const t=e.target;S(parseInt(t.value,10))},...(0,l.Sh)(r.ratingStar,t?r.ratingStarFilled:null)})}))),a.createElement("div",{...(0,l.Sh)(r.ratingLabels,m)},v.map((e=>a.createElement("label",{key:`rating-label-${e}`,htmlFor:`rating-${e}`,...(0,l.Sh)(b===e?r.ratingLabelVisible:r.ratingLabelNotVisible)},t[e-1])))),void 0!==b?null:a.createElement("div",{...(0,l.Sh)(r.ratingLegend,u)},a.createElement("div",null,t[0]),a.createElement("div",null,t[v.length-1])))}},10526:e=>{e.exports={rating:"OgcOL",ratingStars:"bnJtV",ratingStar:"AFzJ8",ratingStarFilled:"OomgT",ratingLabels:"k3A3G",ratingLabelVisible:"s3Oeu",ratingLabelNotVisible:"eYSEV",ratingLegend:"XTsZ_",spin:"boZXL"}},18517:e=>{e.exports={documentRatingHeader:"VcwpX",documentRatingContent:"Gir0T",documentRatingContentSubmitted:"p9Aqz",documentRatingContentTitle:"ox_hc",documentRatingContentSubtitle:"T8eaa",documentRatingContentRadioGroup:"BbMuf",documentRatingContentDoneButton:"H7SSn"}}}]);