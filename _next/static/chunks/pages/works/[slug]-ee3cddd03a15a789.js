(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{6202:function(o,e,s){"use strict";s.d(e,{Z:function(){return Related_Related}});var c,u,l=s(218);s(7294);var a=s(9288),n=(0,a.zo)("section",{padding:"$gr4 0"}),t=s(9499);s(4614);var d=s(9897),i=(0,a.zo)("div",(c={marginBottom:"$gr5","@xs":{"& > div > div":{alignItems:"center",textAlign:"center","& > div":{"&:last-child":{paddingTop:"$gr2"}}}}},(0,t.Z)(c,"& .clover-slider-header-label",{fontSize:"$gr6",fontFamily:"$sans",fontWeight:"300 !important",letterSpacing:"-0.01em"}),(0,t.Z)(c,"& .clover-slider-header-summary",{display:"block",fontSize:"$gr3 !important",color:"$slate11 "}),(0,t.Z)(c,"& .clover-slider-header-view-all",{color:"$slate1"}),(0,t.Z)(c,".swiper-slide",{a:{"> div":{borderRadius:"3px",overflow:"hidden"}}}),(0,t.Z)(c,"figure",{"> div":{borderRadius:"3px",overflow:"hidden",boxShadow:"2px 2px 5px #0001"}}),(0,t.Z)(c,"figcaption",{margin:"$gr1 0","> span":{textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"3",overflow:"hidden",whiteSpace:"normal",fontWeight:"400",fontSize:"$gr4",fontFamily:"$sans",textDecoration:"none !important"}}),(0,t.Z)(c,"& a figcaption, & a:visited figcaption",{color:"$slate12"}),(0,t.Z)(c,"& a:hover figcaption, & a:focus figcaption",{color:"$indigo11"}),c)),r=s(4430),g=s(5049),v=s(7668),_=s(5893),spaceBetween=function(o){return g.hO*(0,r.gr)(o)},m=(u={},(0,t.Z)(u,v.b.xxs,{slidesPerView:2,slidesPerGroup:2,spaceBetween:spaceBetween(1)}),(0,t.Z)(u,v.b.xs,{slidesPerView:2,slidesPerGroup:2,spaceBetween:spaceBetween(1)}),(0,t.Z)(u,v.b.sm,{slidesPerView:3,slidesPerGroup:3,spaceBetween:spaceBetween(1)}),(0,t.Z)(u,v.b.md,{slidesPerView:3,slidesPerGroup:3,spaceBetween:spaceBetween(2)}),(0,t.Z)(u,v.b.lg,{slidesPerView:5,slidesPerGroup:5,spaceBetween:spaceBetween(2)}),(0,t.Z)(u,v.b.xl,{slidesPerView:5,slidesPerGroup:5,spaceBetween:spaceBetween(2)}),u),Viewer_Slider=function(o){var e=o.collectionId;return(0,_.jsx)(i,{children:(0,_.jsx)(d.default,{iiifContent:e,options:{breakpoints:m}})})},Related_Related=function(o){var e=o.collections,s=o.title,c=void 0===s?"Related Works":s;return(0,_.jsxs)(n,{children:[c&&(0,_.jsx)(l.Z,{as:"h2",children:c}),e.map(function(o){return(0,_.jsx)(Viewer_Slider,{collectionId:o},o)})]})}},1098:function(o,e,s){"use strict";s.r(e),s.d(e,{__N_SSG:function(){return h},default:function(){return Work}});var c=s(4729),u=s(7843),l=s(6202),a=s(1522),n=s(1830),t=s(9288),d=(0,t.zo)("div",{}),i=(0,t.zo)("section",{maxWidth:"1280px",margin:"auto",position:"relative",paddingTop:"$gr3",".work-summary":{fontSize:"$gr5",fontFamily:"$sans",fontWeight:"300",color:"$slate11",marginBottom:"$gr4","@sm":{fontSize:"$gr4",marginBottom:"$gr4"}},"dl, .work-summary":{img:{maxHeight:"$gr5 !important",margin:"$gr1 0","@sm":{maxHeight:"$gr4 !important"}}}}),r=(0,t.zo)("div",{dl:{dt:{padding:"$gr3 0 $gr2",fontFamily:"$display"},dd:{padding:"0 0 $gr1",margin:"0"}}}),g=s(7058),v=s(218),_=s(1664),m=s.n(_),p=s(5893),Work_ManifestId=function(o){var e=o.manifestId;return(0,p.jsxs)("dl",{children:[(0,p.jsx)("dt",{children:"IIIF Manifest"}),(0,p.jsx)("dd",{style:{wordBreak:"break-word"},children:(0,p.jsx)(m(),{href:e,children:e})})]})};s(7294);var ValueAsListItem=function(o){var e=o.searchParam,s=o.searchValues,c=o.value;if(!c)return(0,p.jsx)(p.Fragment,{});var u=null==s?void 0:s.find(function(o){return o.value===c});return(0,p.jsx)(m(),{href:"/search?".concat(e,"=").concat(encodeURIComponent(null==u?void 0:u.slug)),children:(0,p.jsx)("span",{dangerouslySetInnerHTML:{__html:c}})})},Inner=function(o){var e=o.manifest,s=e.id,c=e.label,u=e.metadata,l=e.requiredStatement,a=e.summary,t=g.map(function(o){return{Content:(0,p.jsx)(ValueAsListItem,{searchParam:o.slug,searchValues:o.values}),matchingLabel:{none:[o.label]}}});return(0,p.jsx)(i,{children:(0,p.jsxs)(d,{children:[(0,p.jsx)(v.Z,{as:"h1",children:(0,p.jsx)(n.Label,{label:c,as:"span"})}),a&&(0,p.jsx)(n.Summary,{summary:a,as:"p",className:"work-summary"}),(0,p.jsxs)(r,{children:[u&&(0,p.jsx)(n.Metadata,{customValueContent:t,metadata:u}),l&&(0,p.jsx)(n.RequiredStatement,{requiredStatement:l}),(0,p.jsx)(Work_ManifestId,{manifestId:s})]})]})})},h=!0;function Work(o){var e=o.manifest,s=o.related,n=e.id;return(0,p.jsxs)(u.Z,{children:[(0,p.jsx)(a.Z,{iiifContent:n}),(0,p.jsxs)(c.Z,{children:[(0,p.jsx)(Inner,{manifest:e}),(0,p.jsx)(l.Z,{collections:s})]})]})}},9529:function(o,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/[slug]",function(){return s(1098)}])},4614:function(){},7058:function(o){"use strict";o.exports=JSON.parse('[{"label":"Subjects","slug":"subjects","values":[{"value":"Art","slug":"art","doc_count":255,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254]},{"value":"Slogans","slug":"slogans","doc_count":62,"docs":[5,7,8,17,18,22,24,26,35,37,42,46,50,57,61,62,64,69,76,79,80,84,89,96,102,106,108,110,114,117,119,120,133,139,141,143,144,151,153,155,161,168,169,170,173,175,182,189,190,191,197,202,205,206,219,224,237,240,242,245,253,254]},{"value":"Earth","slug":"earth","doc_count":53,"docs":[4,7,14,18,20,21,22,33,42,46,47,57,61,62,65,73,84,90,94,97,104,109,116,120,123,131,134,139,143,144,147,154,159,160,167,168,171,179,180,183,187,189,190,191,192,204,212,213,216,232,239,243,246]},{"value":"Posters","slug":"posters","doc_count":53,"docs":[0,13,15,24,28,30,38,40,52,65,67,69,71,77,78,79,87,89,94,96,98,99,107,109,111,117,123,127,128,129,132,133,135,140,144,149,163,164,175,184,188,209,216,221,223,225,233,234,238,240,247,248,253]},{"value":"Elements","slug":"elements","doc_count":48,"docs":[7,18,21,22,26,32,36,38,40,46,57,60,61,62,70,73,81,84,90,94,96,104,106,110,112,115,139,143,147,154,160,165,167,168,171,172,176,179,180,191,198,204,212,216,223,226,232,246]},{"value":"Police Imagery","slug":"police-imagery","doc_count":44,"docs":[1,6,7,13,14,18,19,22,23,34,36,45,46,56,57,60,61,62,64,72,74,76,90,94,105,121,139,152,158,165,168,170,171,174,197,212,218,226,227,231,237,239,243,247]},{"value":"Environment","slug":"environment","doc_count":39,"docs":[4,7,18,21,22,27,30,33,38,46,52,57,61,62,70,73,84,94,97,104,106,109,111,112,113,123,134,139,143,147,154,168,171,179,180,193,204,216,232]},{"value":"Carceral Imagery","slug":"carceral-imagery","doc_count":38,"docs":[4,7,9,18,19,22,27,29,32,43,46,48,57,61,62,83,93,94,123,125,130,137,138,139,150,152,154,166,168,171,172,175,177,183,186,195,220,241]},{"value":"Community","slug":"community","doc_count":36,"docs":[0,3,11,23,28,41,49,53,71,75,77,82,85,87,91,97,103,113,119,124,128,134,152,156,157,176,182,205,208,209,211,224,235,238,249,253]},{"value":"Fire","slug":"fire","doc_count":32,"docs":[18,22,32,34,36,39,46,56,57,60,62,70,72,76,81,84,94,101,112,115,137,139,151,163,165,168,198,204,223,226,246,250]},{"value":"Protests/Marches","slug":"protestsmarches","doc_count":26,"docs":[39,50,60,68,77,79,81,92,101,106,108,110,115,125,131,136,161,164,176,182,190,198,201,209,220,236]},{"value":"Car","slug":"car","doc_count":23,"docs":[7,18,22,23,34,46,56,57,62,72,90,94,139,165,168,171,174,197,212,218,226,239,243]},{"value":"RJ/TJ","slug":"rjtj","doc_count":22,"docs":[0,49,53,54,67,71,75,87,91,97,98,107,124,128,156,196,200,208,214,234,238,251]},{"value":"World-building","slug":"world-building","doc_count":22,"docs":[26,27,28,69,83,85,99,111,112,116,119,156,162,175,192,197,204,209,212,213,218,233]},{"value":"Graffiti","slug":"graffiti","doc_count":21,"docs":[5,60,78,81,95,102,114,122,138,155,169,173,178,185,202,203,230,237,242,245,250]},{"value":"Animals","slug":"animals","doc_count":20,"docs":[4,20,47,73,79,89,104,120,143,147,154,160,180,183,187,189,191,204,225,246]},{"value":"Painting","slug":"painting","doc_count":19,"docs":[7,18,22,46,57,61,62,73,84,112,130,136,139,168,171,180,199,204,232]},{"value":"No Jails/Bail","slug":"no-jailsbail","doc_count":18,"docs":[24,41,42,43,52,79,89,125,144,153,162,192,206,207,236,240,250,253]},{"value":"Growth","slug":"growth","doc_count":17,"docs":[42,52,90,94,116,134,144,159,162,167,171,190,212,213,218,239,243]},{"value":"Prison Imagery","slug":"prison-imagery","doc_count":17,"docs":[27,29,42,48,83,91,123,127,130,138,154,172,177,186,195,220,241]},{"value":"Sky/Void","slug":"skyvoid","doc_count":16,"docs":[16,18,20,22,45,46,57,62,113,123,126,129,139,168,172,240]},{"value":"Infrastructure/Needs","slug":"infrastructureneeds","doc_count":15,"docs":[1,6,41,43,75,79,82,85,99,119,132,209,233,235,241]},{"value":"BLM","slug":"blm","doc_count":14,"docs":[12,15,50,55,108,122,133,135,161,205,229,242,244,248]},{"value":"Humor","slug":"humor","doc_count":14,"docs":[5,37,60,105,119,121,137,147,151,185,188,198,227,231]},{"value":"Water","slug":"water","doc_count":14,"docs":[27,38,40,47,72,96,106,109,110,160,176,179,180,223]},{"value":"Birds","slug":"birds","doc_count":13,"docs":[73,79,89,131,154,179,180,183,187,204,216,225,246]},{"value":"Flowers/Plants","slug":"flowersplants","doc_count":13,"docs":[7,18,22,46,57,61,62,84,123,139,168,171,180]},{"value":"Bars","slug":"bars","doc_count":12,"docs":[27,42,48,123,127,130,154,166,177,195,220,225]},{"value":"Police Violence","slug":"police-violence","doc_count":11,"docs":[2,20,21,32,38,55,71,74,164,174,198]},{"value":"Mural","slug":"mural","doc_count":10,"docs":[14,37,44,47,81,97,179,192,215,219]},{"value":"Knoxville","slug":"knoxville","doc_count":9,"docs":[44,50,99,108,132,155,179,205,233]},{"value":"Queer","slug":"queer","doc_count":9,"docs":[16,18,22,46,48,57,62,139,149]},{"value":"Barb Wire/Fences/Walls","slug":"barb-wirefenceswalls","doc_count":8,"docs":[4,103,123,125,152,172,183,187]},{"value":"Safety","slug":"safety","doc_count":8,"docs":[19,28,43,70,82,85,134,235]},{"value":"Accountability","slug":"accountability","doc_count":7,"docs":[0,67,71,98,128,235,238]},{"value":"Air","slug":"air","doc_count":7,"docs":[20,24,32,129,154,167,172]},{"value":"Defund The Police","slug":"defund-the-police","doc_count":7,"docs":[18,22,46,57,62,139,168]},{"value":"Peace","slug":"peace","doc_count":7,"docs":[10,25,73,129,153,228,236]},{"value":"Stickers","slug":"stickers","doc_count":7,"docs":[34,80,88,105,158,217,227]},{"value":"2010s","slug":"2010s","doc_count":6,"docs":[5,13,25,68,118,127]},{"value":"ACAB","slug":"acab","doc_count":6,"docs":[8,84,143,155,219,221]},{"value":"Butterflies","slug":"butterflies","doc_count":6,"docs":[4,120,179,189,191,213]},{"value":"DDD","slug":"ddd","doc_count":6,"docs":[137,197,202,203,230,254]},{"value":"Land Back/Pipelines","slug":"land-backpipelines","doc_count":6,"docs":[30,33,109,180,189,193]},{"value":"Megaphone","slug":"megaphone","doc_count":6,"docs":[140,176,182,193,206,209]},{"value":"Power Fist","slug":"power-fist","doc_count":6,"docs":[48,136,149,200,209,245]},{"value":"Trayvon Martin","slug":"trayvon-martin","doc_count":6,"docs":[15,55,133,135,244,248]},{"value":"Events","slug":"events","doc_count":5,"docs":[111,118,148,216,225]},{"value":"FTP","slug":"ftp","doc_count":5,"docs":[8,61,80,102,173]},{"value":"Handwritten","slug":"handwritten","doc_count":5,"docs":[99,132,146,196,233]},{"value":"Mamas and Motherhood","slug":"mamas-and-motherhood","doc_count":5,"docs":[15,144,240,252,253]},{"value":"Minneapolis","slug":"minneapolis","doc_count":5,"docs":[60,90,111,185,239]},{"value":"Organizations","slug":"organizations","doc_count":5,"docs":[3,11,131,156,211]},{"value":"Rainbows","slug":"rainbows","doc_count":5,"docs":[8,56,127,181,189]},{"value":"2020s","slug":"2020s","doc_count":4,"docs":[50,108,205,241]},{"value":"Labor","slug":"labor","doc_count":4,"docs":[9,70,81,188]},{"value":"Mapping","slug":"mapping","doc_count":4,"docs":[99,146,196,233]},{"value":"Ricardo Levins Morales","slug":"ricardo-levins-morales","doc_count":4,"docs":[15,25,142,213]},{"value":"Schools","slug":"schools","doc_count":4,"docs":[14,19,111,140]},{"value":"Academia","slug":"academia","doc_count":3,"docs":[5,97,140]},{"value":"Chains","slug":"chains","doc_count":3,"docs":[93,130,150]},{"value":"Handcuffs","slug":"handcuffs","doc_count":3,"docs":[13,138,211]},{"value":"ICE","slug":"ice","doc_count":3,"docs":[14,61,152]},{"value":"MPD150","slug":"mpd150","doc_count":3,"docs":[90,156,214]},{"value":"SONG","slug":"song","doc_count":3,"docs":[3,11,211]},{"value":"Vancouver","slug":"vancouver","doc_count":3,"docs":[65,102,225]},{"value":"Viv Swayne","slug":"viv-swayne","doc_count":3,"docs":[103,146,224]},{"value":"1312","slug":"1312","doc_count":2,"docs":[84,143]},{"value":"1970s","slug":"1970s","doc_count":2,"docs":[73,104]},{"value":"Archival/Era","slug":"archivalera","doc_count":2,"docs":[73,104]},{"value":"Artists","slug":"artists","doc_count":2,"docs":[184,199]},{"value":"Be Gay Do Crime","slug":"be-gay-do-crime","doc_count":2,"docs":[114,217]},{"value":"Chicago","slug":"chicago","doc_count":2,"docs":[148,173]},{"value":"Clouds","slug":"clouds","doc_count":2,"docs":[20,129]},{"value":"Crime/Law Breaking","slug":"crimelaw-breaking","doc_count":2,"docs":[59,101]},{"value":"Critical Resistance","slug":"critical-resistance","doc_count":2,"docs":[79,131]},{"value":"MI","slug":"mi","doc_count":2,"docs":[178,217]},{"value":"Montreal","slug":"montreal","doc_count":2,"docs":[202,203]},{"value":"New York City","slug":"new-york-city","doc_count":2,"docs":[64,221]},{"value":"No One Is Illegal","slug":"no-one-is-illegal","doc_count":2,"docs":[14,141]},{"value":"Pigs","slug":"pigs","doc_count":2,"docs":[6,147]},{"value":"Racism","slug":"racism","doc_count":2,"docs":[80,166]},{"value":"Snake","slug":"snake","doc_count":2,"docs":[47,160]},{"value":"1990s","slug":"1990s","doc_count":1,"docs":[115]},{"value":"Abolish The Police","slug":"abolish-the-police","doc_count":1,"docs":[166]},{"value":"Abolish The War On Drugs","slug":"abolish-the-war-on-drugs","doc_count":1,"docs":[7]},{"value":"Artisits","slug":"artisits","doc_count":1,"docs":[15]},{"value":"Asia","slug":"asia","doc_count":1,"docs":[104]},{"value":"Border Wall Art","slug":"border-wall-art","doc_count":1,"docs":[95]},{"value":"Brett Story","slug":"brett-story","doc_count":1,"docs":[186]},{"value":"Cats","slug":"cats","doc_count":1,"docs":[104]},{"value":"Chattanooga","slug":"chattanooga","doc_count":1,"docs":[41]},{"value":"Dignidad Rebelde","slug":"dignidad-rebelde","doc_count":1,"docs":[140]},{"value":"Drawing","slug":"drawing","doc_count":1,"docs":[143]},{"value":"Eric Garner","slug":"eric-garner","doc_count":1,"docs":[124]},{"value":"Ferguson","slug":"ferguson","doc_count":1,"docs":[178]},{"value":"Flags","slug":"flags","doc_count":1,"docs":[145]},{"value":"Geography","slug":"geography","doc_count":1,"docs":[104]},{"value":"Germany","slug":"germany","doc_count":1,"docs":[37]},{"value":"Gun Violence","slug":"gun-violence","doc_count":1,"docs":[25]},{"value":"Highlander","slug":"highlander","doc_count":1,"docs":[196]},{"value":"Lansing","slug":"lansing","doc_count":1,"docs":[217]},{"value":"Molotov","slug":"molotov","doc_count":1,"docs":[84]},{"value":"Monica Trinidad","slug":"monica-trinidad","doc_count":1,"docs":[26]},{"value":"Pennsylvania","slug":"pennsylvania","doc_count":1,"docs":[251]},{"value":"Pride","slug":"pride","doc_count":1,"docs":[226]},{"value":"Prison Abolition","slug":"prison-abolition","doc_count":1,"docs":[137]},{"value":"Prison Art","slug":"prison-art","doc_count":1,"docs":[104]},{"value":"Protest signs and signs of protest","slug":"protest-signs-and-signs-of-protest","doc_count":1,"docs":[132]},{"value":"Rights","slug":"rights","doc_count":1,"docs":[99]},{"value":"Scholars","slug":"scholars","doc_count":1,"docs":[97]},{"value":"Sweden","slug":"sweden","doc_count":1,"docs":[68]},{"value":"TN","slug":"tn","doc_count":1,"docs":[41]},{"value":"Tennessee","slug":"tennessee","doc_count":1,"docs":[249]},{"value":"Thin Blue Line TBL","slug":"thin-blue-line-tbl","doc_count":1,"docs":[231]},{"value":"Toronto","slug":"toronto","doc_count":1,"docs":[167]},{"value":"UK","slug":"uk","doc_count":1,"docs":[242]},{"value":"UT","slug":"ut","doc_count":1,"docs":[5]},{"value":"UTK Campus","slug":"utk-campus","doc_count":1,"docs":[5]},{"value":"Wall","slug":"wall","doc_count":1,"docs":[122]},{"value":"Whales","slug":"whales","doc_count":1,"docs":[4]}]}]')}},function(o){o.O(0,[412,409,971,897,41,995,774,888,179],function(){return o(o.s=9529)}),_N_E=o.O()}]);