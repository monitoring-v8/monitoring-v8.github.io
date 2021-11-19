"use strict";(self.webpackChunkmonitoring=self.webpackChunkmonitoring||[]).push([[694],{694:(oi,Dt,f)=>{f.r(Dt),f.d(Dt,{MonitoringMapModule:()=>ii});var A=f(583),Et=f(630),o=f(639);class Le{constructor(n,t,i){this.lat=n,this.lng=t,this.towers=i}}class ${constructor(n,t,i,r){this.name=n,this.height=t,this.power=i,this.coverage=r}getIconSize(){return this.height>200?35:this.height>100?30:25}static getThreshold(n){let t=50;return t=n<7?50:7===n?10:8===n?1:9===n?.1:10===n?.05:11===n?.001:0,t}}let b=(()=>{class e{static getTowerIcon(t){return{url:e.towerIcon,scaledSize:new window.google.maps.Size(t,t),labelOrigin:new window.google.maps.Point(t/2,t+10)}}static getCircleOptions(){return{fillOpacity:.5,strokeOpacity:1}}static getTowerInfoDiv(t,i){const r=document.createElement("div");r.classList.add("tower-info");const s=document.createElement("div");s.classList.add("prev-tower"),s.addEventListener("click",()=>{const l=document.getElementById("currentTower"),g=null==l?void 0:l.textContent;if(g){let m=parseInt(g)-1;m<1&&(m=t.towers.length);const v=document.querySelectorAll('*[id^="tower-"]');v.forEach(u=>u.classList.add("hidden"));for(let u=0;u<v.length;u++)if(u+1===m&&l){for(v[u].classList.remove("hidden");l.firstChild;)l.removeChild(l.firstChild);l.innerHTML=m.toString()}}});const a=document.createElement("img");a.src=this.prevTowerIcon,s.appendChild(a);const c=document.createElement("div");c.classList.add("next-tower"),c.addEventListener("click",()=>{const l=document.getElementById("currentTower"),g=null==l?void 0:l.textContent;if(g){let m=parseInt(g)+1;m>t.towers.length&&(m=1);const v=document.querySelectorAll('*[id^="tower-"]');v.forEach(u=>u.classList.add("hidden"));for(let u=0;u<v.length;u++)if(u+1===m&&l){for(v[u].classList.remove("hidden");l.firstChild;)l.removeChild(l.firstChild);l.innerHTML=m.toString()}}});const p=document.createElement("img");p.src=this.nextTowerIcon,c.appendChild(p);const C=document.createElement("div");C.classList.add("count");const _=document.createElement("div");_.classList.add("current-tower"),_.innerText="1",_.id="currentTower";const N=document.createElement("div");N.classList.add("slash"),N.innerText="/";const G=document.createElement("div");G.classList.add("total-towers"),G.innerText=t.towers.length.toString(),C.appendChild(_),C.appendChild(N),C.appendChild(G),r.appendChild(C),r.appendChild(s);for(let l=0;l<t.towers.length;l++){const g=document.createElement("div");g.classList.add("content"),l>0&&g.classList.add("hidden"),g.id="tower-"+(l+1);const D=t.towers[l],m=document.createElement("div");m.classList.add("info","name");const v=document.createElement("div");v.classList.add("value"),v.innerText=D.name,m.appendChild(v);const u=document.createElement("div");u.classList.add("info","height");const Ct=document.createElement("div");Ct.classList.add("label"),Ct.innerText="Tower height:";const bt=document.createElement("div");bt.classList.add("value"),bt.innerText=D.height.toString();const Mt=document.createElement("div");Mt.classList.add("unit"),Mt.innerText="m",u.appendChild(Ct),u.appendChild(bt),u.appendChild(Mt);const I=document.createElement("div");I.classList.add("info","power");const wt=document.createElement("div");wt.classList.add("label"),wt.innerText="Transmitter power:";const Vt=document.createElement("div");Vt.classList.add("value"),Vt.innerText=D.power.toString();const Ot=document.createElement("div");Ot.classList.add("unit"),Ot.innerText="kw",I.appendChild(wt),I.appendChild(Vt),I.appendChild(Ot);const B=document.createElement("div");B.classList.add("info","coverage");const At=document.createElement("div");At.classList.add("label"),At.innerText="Network coverage:";const xt=document.createElement("div");xt.classList.add("value"),xt.innerText=D.coverage.toString();const kt=document.createElement("div");kt.classList.add("unit"),kt.innerText="kw",B.appendChild(At),B.appendChild(xt),B.appendChild(kt),g.appendChild(m),g.appendChild(u),g.appendChild(I),g.appendChild(B),r.appendChild(g)}return r.appendChild(c),r}static getHeatmapOpacity(t){return t<10?.5:10===t?.55:11===t?.6:12===t?.65:13===t?.7:14===t?.75:1}static getPosition(t,i){return new window.google.maps.LatLng(t,i)}static getBoundsCords(t){const i=t.getNorthEast(),r=t.getSouthWest(),s=i.lat(),a=r.lat(),c=i.lng();return{minLat:a,maxLat:s,minLng:r.lng(),maxLng:c}}static consoleLogBounds(t){const i=t.getNorthEast(),r=t.getSouthWest();console.log("bounds: ",r.lat(),i.lat(),r.lng(),i.lng())}}return e.towerIcon="assets/icons/signal_black_light.png",e.prevTowerIcon="assets/icons/chevron_left_black.svg",e.nextTowerIcon="assets/icons/chevron_right_black.svg",e})();var St=f(49),Pt=f(841),L=f(215);class Ze{constructor(n,t,i){this.tower=n,this.coverage=t,this.availability=i}}let E=(()=>{class e{constructor(){this.keyOptions=new Ze(!0,!1,!1),this.optionsChanged=new L.X({tower:!0,coverage:!1,availability:!1})}setTower(t){this.keyOptions.tower=t,this.optionsChanged.next(this.keyOptions)}setCoverage(t){this.keyOptions.coverage=t,this.optionsChanged.next(this.keyOptions)}setAvailability(t){this.keyOptions.availability=t,this.optionsChanged.next(this.keyOptions)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Re=(()=>{class e{constructor(t,i){this.http=t,this.keyOptionsService=i,this.locations=[],this.markers=[],this.locationsInitialized=!1,this.circlesInitialized=!1,this.coverageCheck=!1,this.http.get("assets/data/towers.json").pipe((0,St.P)()).subscribe(r=>{r.forEach(s=>{const a=this.locations.find(c=>c.lat===s.lat&&c.lng===s.lng);a?a.towers.push(new $(s.name,s.height,s.power,s.coverage)):this.locations.push(new Le(s.lat,s.lng,[new $(s.name,s.height,s.power,s.coverage)]))}),this.initLocations(),this.map&&this.loadLocations(this.map.getZoom(),this.map.getBounds())}),this.keyOptionsService.optionsChanged.subscribe(r=>this.coverageCheck=r.coverage)}setMap(t){this.map=t}setLocations(t){this.locations=t.slice()}getMaxCoverage(t){let i=0;for(let r=0;r<t.length;r++)t[r].coverage>i&&(i=t[r].coverage);return i}initLocations(){this.locationsInitialized||this.map&&this.locations&&this.locations.length>0&&this.locations.forEach(t=>{const i=b.getTowerIcon(t.towers[0].getIconSize()),r=new window.google.maps.Marker({position:new window.google.maps.LatLng(t.lat,t.lng),icon:i,map:null,title:t.towers.length>1?t.towers[0].name+"*":t.towers[0].name,label:{text:t.towers.length>1?t.towers[0].name+"*":t.towers[0].name,className:"tower-marker-label"}});this.getInfoWindow(t,r),this.markers.push({location:t,marker:r,circle:null,visible:!1}),this.locationsInitialized=!0})}initCircles(){!this.locationsInitialized||this.circlesInitialized||(this.markers.forEach(t=>{t.circle=this.drawCircle(this.getMaxCoverage(t.location.towers),b.getPosition(t.location.lat,t.location.lng)),t.visible||t.circle.setOptions({fillOpacity:0,strokeOpacity:0})}),this.circlesInitialized=!0)}loadCircles(){this.circlesInitialized&&(this.map.getBounds(),this.markers.forEach(i=>{i.circle&&i.visible&&i.circle.setOptions({fillOpacity:.5,strokeOpacity:1})}))}clearCirlces(){!this.circlesInitialized||this.markers.forEach(t=>{t.circle.setOptions({fillOpacity:0,strokeOpacity:0})})}drawCircle(t,i){return new window.google.maps.Circle({map:this.map,radius:100*t,strokeColor:"blue",strokeOpacity:0,strokeWeight:1,fillColor:"lightblue",fillOpacity:0,center:i})}getInfoWindow(t,i){const r=new window.google.maps.InfoWindow({content:b.getTowerInfoDiv(t,i),opened:!1});r.addListener("closeclick",()=>{r.opened=!1}),i.addListener("click",()=>{if(r.opened)return r.close(),void(r.opened=!1);r.open({anchor:i,map:this.map,shouldFocus:!1}),r.opened=!0})}loadLocations(t,i){if(this.valid())if(this.markers.forEach(r=>{r.visible=!1,r.marker.setMap(null),r.circle&&this.coverageCheck&&r.circle.setOptions({fillOpacity:0,strokeOpacity:0})}),i&&t<7){let r=200;this.markers.filter(s=>i.contains(s.marker.getPosition())&&s.location.towers[0].power>=r).forEach(s=>{if(s.visible=!0,s.marker.setMap(this.map),s.circle&&this.coverageCheck){const a=b.getCircleOptions();s.circle.setOptions({fillOpacity:a.fillOpacity,strokeOpacity:a.strokeOpacity})}})}else if(i){let r=$.getThreshold(t);this.markers.filter(s=>i.contains(s.marker.getPosition())&&s.location.towers[0].power>=r).forEach(s=>{if(s.visible=!0,s.marker.setMap(this.map),s.circle&&this.coverageCheck){const a=b.getCircleOptions();s.circle.setOptions({fillOpacity:a.fillOpacity,strokeOpacity:a.strokeOpacity})}})}}clearLocations(){this.markers.forEach(t=>{t.marker.setMap(null),t.visible=!1,t.circle&&t.circle.setOptions({fillOpacity:0,strokeOpacity:0})})}valid(){return this.locationsInitialized&&this.map&&this.locations&&this.locations.length>0}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(Pt.eN),o.LFG(E))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),ze=(()=>{class e{constructor(t){this.http=t}getSpectrums(t,i=0){return this.http.get(`assets/data/availability-${i+1}.json`)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(Pt.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),K=(()=>{class e{constructor(t){this.spectrumService=t,this.sub=[],this.heatmapAvl=[],this.heatmapAvlData=[],this.availabilityInitialized=[]}loadAvailabilityForAnimation(t){this.initializeAvailability(this.map,this.zoom,this.bounds,t,!1)}initializeAvailability(t,i,r,s,a){if(this.availabilityInitialized[s]||!t||!r)return;this.map=t,this.zoom=i,this.bounds=r;const c=b.getBoundsCords(r);this.spectrumService.getSpectrums(c,s).pipe((0,St.P)()).subscribe(p=>{this.setHeatmapData(p,s),this.loadHeatmap(t,i,s,a),this.availabilityInitialized[s]=!0},p=>console.log(p))}loadAvailability(t){if(!this.availabilityInitialized[t])return;let i=this.heatmapAvl[t];i&&i.set("opacity",1)}showHeatmapLayer(t){this.clearAvailability(),console.log(t),this.heatmapAvl[t].set("opacity",1)}clearAvailability(){this.heatmapAvl.forEach(t=>{t.set("opacity",0)})}setHeatmapData(t,i){this.heatmapAvlData[i]=[];for(let r=0;r<t.length;r++){const s=t[r];this.heatmapAvlData[i].push({location:b.getPosition(s.lat,s.lng),weight:s.avl/10})}}loadHeatmap(t,i,r,s){(!this.heatmapAvl[r]||!this.heatmapAvl[r].getMap())&&(this.heatmapAvl[r]=new window.google.maps.visualization.HeatmapLayer({data:this.heatmapAvlData[r],radius:50}),this.heatmapAvl[r].setOptions({radius:20}),this.heatmapAvl[r].setMap(t),this.heatmapAvl[r].set("opacity",s?1:0)),this.setHeatmapOpacity(i,r)}setHeatmapOpacity(t,i){this.heatmapAvl[i]&&b.getHeatmapOpacity(t)}getHeatmapGradientAvl(t){return["rgba(169, 244, 16, 0)","rgba(169, 244, 16, 1)"]}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(ze))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Ft=(()=>{class e{constructor(){this.positionChanged=new L.X(0)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Tt=(()=>{class e{constructor(t,i){this.timelineService=t,this.keyOptionsService=i,this.position=0,this.availability=!1,this.coverage=!1,this.started=!1,this.animationStarted=new L.X(this.started),this.indexChanged=new L.X(1),this.timelineService.positionChanged.subscribe(r=>this.position=r),this.keyOptionsService.optionsChanged.subscribe(r=>{this.availability=r.availability,this.coverage=r.coverage})}startAnimation(){this.started=!0,this.animationStarted.next(this.started)}setIndex(t){this.indexChanged.next(t)}stopAnimation(){this.started=!1,this.animationStarted.next(this.started)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(Ft),o.LFG(E))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ue=["mapElement"];let Nt=(()=>{class e{constructor(t,i,r,s){this.locationService=t,this.availabilityService=i,this.keyOptionsService=r,this.animationService=s,this.index=1,this.availabilityCheck=!1,this.networkCoverageCheck=!0,this.occupacy=!1,this.lat=51.4832988402089,this.lng=-.38141397330019755,this.initZoom=9,this.zoomStep=1,this.keepZooming=!1,this.keepMoving=!1,this.mapReady=!1}ngOnInit(){this.keyOptionsService.optionsChanged.subscribe(t=>{this.availabilityCheck=t.availability,this.availabilityCheck?this.availabilityService.availabilityInitialized[this.index]?this.availabilityService.loadAvailability(this.index):this.availabilityService.initializeAvailability(this.map,this.map.getZoom(),this.map.getBounds(),this.index,!0):this.availabilityService.clearAvailability(),this.networkCoverageCheck=t.coverage,this.networkCoverageCheck?this.locationService.circlesInitialized||(this.locationService.initCircles(),this.locationService.loadCircles()):this.locationService.clearCirlces()}),this.animationService.animationStarted.subscribe(t=>{t?(clearInterval(this.animationInterval),this.animationInterval=setInterval(()=>{this.animateMap()},50)):clearInterval(this.animationInterval)})}animateMap(){this.index++,this.index>9&&(this.index=0),this.availabilityService.showHeatmapLayer(this.index)}ngAfterViewInit(){this.map=new window.google.maps.Map(this.mapElement.nativeElement,{center:{lat:this.lat,lng:this.lng},zoom:this.initZoom,disableDefaultUI:!0,styles:[{featureType:"all",elementType:"labels",stylers:[{visibility:"off"}]}]}),this.map&&(this.map.addListener("idle",()=>{if(this.map.getZoom()<3)return this.locationService.clearLocations(),void this.availabilityService.clearAvailability();clearTimeout(this.waitForIdle),this.waitForIdle=setTimeout(()=>{console.log("zoom: ",this.map.getZoom()),this.locationService.locationsInitialized&&this.locationService.loadLocations(this.map.getZoom(),this.map.getBounds()),this.availabilityCheck&&(this.availabilityService.availabilityInitialized[this.index]?this.availabilityService.loadAvailability(this.index):this.availabilityService.initializeAvailability(this.map,this.map.getZoom(),this.map.getBounds(),this.index,!0));const t=this.map.getCenter();this.lat=t.lat(),this.lng=t.lng()},300)}),this.mapReady=!0,this.locationService.setMap(this.map),this.locationService.locationsInitialized||this.locationService.initLocations(),this.locationService.loadLocations(this.map.getZoom(),this.map.getBounds()),this.availabilityCheck&&(this.availabilityService.availabilityInitialized[this.index]?this.availabilityService.loadAvailability(this.index):this.availabilityService.initializeAvailability(this.map,this.map.getZoom(),this.map.getBounds(),this.index,!0)),this.networkCoverageCheck&&(this.locationService.circlesInitialized||this.locationService.initCircles(),this.locationService.loadCircles()))}keepMovingUp(){this.keepMoving||(this.keepMoving=!0,this.panMap(0,this.getPanStep()))}keepMovingDown(){this.keepMoving||(this.keepMoving=!0,this.panMap(0,-1*this.getPanStep()))}keepMovingRight(){this.keepMoving||(this.keepMoving=!0,this.panMap(this.getPanStep(),0))}keepMovingLeft(){this.keepMoving||(this.keepMoving=!0,this.panMap(-1*this.getPanStep(),0))}stopMoving(){this.keepMoving=!1}panMap(t,i){!this.keepMoving||(this.lat=this.lat+i,this.lng=this.lng+t,this.map.panTo({lat:this.lat,lng:this.lng}),setTimeout(()=>{this.panMap.bind(this),this.panMap(t,i)},50))}zoomIn(){this.zoomMap(this.zoomStep)}zoomOut(){this.zoomMap(-1*this.zoomStep)}zoomMap(t){const i=this.map.getZoom()+t;i>=0&&i<23&&this.map.setZoom(i)}getPanStep(){return.01}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(Re),o.Y36(K),o.Y36(E),o.Y36(Tt))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-map"]],viewQuery:function(t,i){if(1&t&&o.Gf(Ue,5),2&t){let r;o.iGM(r=o.CRH())&&(i.mapElement=r.first)}},decls:2,vars:0,consts:[[1,"map-css"],["mapElement",""]],template:function(t,i){1&t&&o._UZ(0,"div",0,1)},styles:[".map-css{width:100%;height:100vh}.gm-ui-hover-effect{top:0px!important;right:0px!important}.tower-marker-label{font-size:10px!important}.tower-info{display:grid;grid-template-columns:20px 180px 20px;grid-template-rows:auto;grid-column-gap:10px;column-gap:10px}.tower-info .hidden{visibility:hidden}.tower-info .prev-tower{grid-column:1/2;grid-row:1/2;display:flex;justify-content:flex-start;align-items:center;width:100%;height:100%;opacity:.3;cursor:pointer}.tower-info .prev-tower.disabled{cursor:default;opacity:.1}.tower-info .prev-tower:hover{opacity:.5}.tower-info .next-tower{grid-column:3/4;grid-row:1/2;display:flex;justify-content:flex-end;align-items:center;width:100%;height:100%;opacity:.3;cursor:pointer}.tower-info .next-tower.disabled{cursor:default;opacity:.1}.tower-info .next-tower:hover{opacity:.5}.tower-info .count{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;position:absolute;top:0px;left:10px;width:80px;height:30px}.tower-info .content{grid-column:2/3;grid-row:1/2;margin:0 auto 10px;width:100%;height:100%;box-sizing:border-box;padding:5px 0}.tower-info .content .info{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:100%;margin:3px auto}.tower-info .content .name{display:flex;justify-content:center;align-items:center;margin-bottom:1px}.tower-info .content .name .value{text-align:center;margin-bottom:10px;font-size:16px}.tower-info .content .value{margin-left:5px}.tower-info .content .unit{margin-left:2px}\n"],encapsulation:2,changeDetection:0}),e})(),Gt=(()=>{class e{constructor(){this.id="",this.check=!0,this.checked=new o.vpe,this.disabled=!1,this.label="",this.sub=!1}ngOnInit(){}onChange(t){this.check=t,this.checked.emit(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-checkbox"]],inputs:{id:"id",check:"check",disabled:"disabled",label:"label",sub:"sub"},outputs:{checked:"checked"},decls:4,vars:9,consts:[[1,"container"],["type","checkbox",3,"id","disabled","checked","change"],[3,"for","click"]],template:function(t,i){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"input",1),o.NdJ("change",function(s){return i.onChange(s.target.checked)}),o.qZA(),o.TgZ(2,"label",2),o.NdJ("click",function(){return i.onChange(!i.check)}),o._uU(3),o.qZA(),o.qZA()),2&t&&(o.ekj("sub",i.sub),o.xp6(1),o.Q6J("id",i.id)("disabled",i.disabled)("checked",i.check),o.xp6(1),o.ekj("disabled",i.disabled),o.Q6J("for",i.id),o.xp6(1),o.hij(" ",i.label," "))},styles:['@charset "UTF-8";.container[_ngcontent-%COMP%]{font-family:sans-serif;width:100%;color:#00f;font-weight:bold;font-size:18px;margin-left:10px;margin-top:10px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:white;border-radius:2px;box-sizing:border-box;position:relative;box-sizing:content-box;width:21px;height:21px;border-width:1px;transition:all 50ms linear;border-color:#6b90df;border-style:solid}.container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked{background-color:#067eb3}.container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus{box-shadow:none}.container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled{background-color:#ececec;cursor:default}.container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked:after{content:"\\2714";text-align:center;margin:0 auto;color:#fff;top:-1px;left:4px;position:absolute;font-size:16px}.container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:after{content:"";text-align:center;margin:0 auto;color:#fff;top:-1px;left:4px;position:absolute;font-size:16px;cursor:default}.container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-left:5px;margin-top:-2px;cursor:pointer}.container[_ngcontent-%COMP%]   label.disabled[_ngcontent-%COMP%]{color:#8d8dd3;cursor:default}.container.sub[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;margin-top:0}']}),e})(),je=(()=>{class e{constructor(t){this.keyOptionsService=t,this.check=!0,this.networkCoverageCheck=!0}ngOnInit(){this.keyOptionsService.optionsChanged.subscribe(t=>{this.check=t.tower,this.networkCoverageCheck=t.coverage})}onCheck(t){this.check=t}onNetworkCoverageCheck(t){this.networkCoverageCheck=t,this.keyOptionsService.setCoverage(t)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(E))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-tower-key"]],decls:3,vars:4,consts:[["label","Tower","id","towerChecked",3,"check","checked"],[1,"sub"],["label","Network Coverage","id","networkCoverageCheck",3,"sub","disabled","check","checked"]],template:function(t,i){1&t&&(o.TgZ(0,"app-checkbox",0),o.NdJ("checked",function(s){return i.onCheck(s)}),o.qZA(),o.TgZ(1,"div",1),o.TgZ(2,"app-checkbox",2),o.NdJ("checked",function(s){return i.onNetworkCoverageCheck(s)}),o.qZA(),o.qZA()),2&t&&(o.Q6J("check",i.check),o.xp6(2),o.Q6J("sub",!0)("disabled",!i.check)("check",i.networkCoverageCheck))},directives:[Gt],styles:[".sub[_ngcontent-%COMP%]{width:80%;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;margin-left:30px}.sub[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.sub[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#00f;font-family:sans-serif;cursor:pointer}"]}),e})(),He=(()=>{class e{constructor(){this.gradient=[]}ngOnInit(){}getBackground(){if(this.gradient.length<1)return"";let t="linear-gradient(to right,";return this.gradient.forEach(i=>{t+=i+", "}),t=t.substr(0,t.length-2),t+=")",t}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-gradient-rectangle"]],inputs:{gradient:"gradient"},decls:1,vars:2,consts:[[1,"container"]],template:function(t,i){1&t&&o._UZ(0,"div",0),2&t&&o.Udp("background",i.getBackground())},styles:[".container[_ngcontent-%COMP%]{width:100%;height:30px;border:1px solid blue}"]}),e})();function qe(e,n){if(1&e&&o._UZ(0,"app-gradient-rectangle",2),2&e){const t=o.oxw();o.Q6J("gradient",t.gradient)}}let Ye=(()=>{class e{constructor(t,i){this.availabilityService=t,this.keyOptionsService=i,this.gradient=[],this.check=!1}ngOnInit(){this.gradient=this.availabilityService.getHeatmapGradientAvl(1),this.sub=this.keyOptionsService.optionsChanged.subscribe(t=>this.check=t.availability)}onCheck(t){this.check=t,this.keyOptionsService.setAvailability(t)}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(K),o.Y36(E))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-availability-key"]],decls:2,vars:2,consts:[["label","Availability","id","availability-check",3,"check","checked"],[3,"gradient",4,"ngIf"],[3,"gradient"]],template:function(t,i){1&t&&(o.TgZ(0,"app-checkbox",0),o.NdJ("checked",function(s){return i.onCheck(s)}),o.qZA(),o.YNc(1,qe,1,1,"app-gradient-rectangle",1)),2&t&&(o.Q6J("check",i.check),o.xp6(1),o.Q6J("ngIf",i.check))},directives:[Gt,A.O5,He],styles:["app-gradient-rectangle[_ngcontent-%COMP%]{margin-left:45px;margin-right:14px;display:block;opacity:.5}"]}),e})();function Je(e,n){if(1&e){const t=o.EpF();o.TgZ(0,"div",2),o.NdJ("click",function(){return o.CHM(t),o.oxw().open=!0}),o.TgZ(1,"div"),o._uU(2," Key & options "),o.qZA(),o._UZ(3,"img",3),o.qZA()}}function We(e,n){if(1&e){const t=o.EpF();o.TgZ(0,"div",4),o.TgZ(1,"div",5),o._UZ(2,"app-tower-key"),o._UZ(3,"hr",6),o._UZ(4,"app-availability-key"),o._UZ(5,"hr",6),o.qZA(),o.TgZ(6,"div",7),o.NdJ("click",function(){return o.CHM(t),o.oxw().open=!1}),o.TgZ(7,"div"),o._uU(8," Hide key & options "),o.qZA(),o._UZ(9,"img",8),o.qZA(),o.qZA()}}let $e=(()=>{class e{constructor(){this.open=!1,this.availabilityCheck=!0,this.occupancy=!0,this.interference=!0,this.utilisation=!0,this.frequencyCheck=new o.vpe,this.availabilityChecked=new o.vpe,this.occupacyCheck=new o.vpe,this.interferenceCheck=new o.vpe,this.utilisationCheck=new o.vpe}ngOnInit(){}ngAfterViewInit(){}onAvailabilityCheck(t){this.availabilityCheck=t,this.availabilityChecked.emit(t)}onOccupacyCheck(t){this.occupancy=t,this.occupacyCheck.emit(t)}onInterferenceCheck(t){this.interference=t,this.interferenceCheck.emit(t)}onUtilisationCheck(t){this.utilisation=t,this.utilisationCheck.emit(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-key-options"]],outputs:{frequencyCheck:"frequencyCheck",availabilityChecked:"availabilityChecked",occupacyCheck:"occupacyCheck",interferenceCheck:"interferenceCheck",utilisationCheck:"utilisationCheck"},decls:2,vars:2,consts:[["class","show-key-options",3,"click",4,"ngIf"],["class","container",4,"ngIf"],[1,"show-key-options",3,"click"],["src","assets/icons/expand_more.svg"],[1,"container"],[1,"key-options"],[1,"divider"],[1,"hide-key-options",3,"click"],["src","assets/icons/expand_less.svg"]],template:function(t,i){1&t&&(o.YNc(0,Je,4,0,"div",0),o.YNc(1,We,10,0,"div",1)),2&t&&(o.Q6J("ngIf",!i.open),o.xp6(1),o.Q6J("ngIf",i.open))},directives:[A.O5,je,Ye],styles:[".show-key-options[_ngcontent-%COMP%]{width:140px;height:20px;background-color:#067eb3;cursor:pointer;display:flex;justify-content:space-evenly;align-items:center;color:#fff;font-family:Arial,Helvetica,sans-serif;border-radius:2px;padding:5px}.show-key-options[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px}.container[_ngcontent-%COMP%]{width:300px;height:520px;background-color:#ece7fffc;border-radius:2px;position:relative;overflow-y:auto;overflow-x:hidden;box-sizing:border-box;display:flex;flex-direction:column;border:1px solid gray}.container[_ngcontent-%COMP%]   .key-options[_ngcontent-%COMP%]{width:100%;height:calc(100% - 30px);padding-bottom:20px;border-radius:2px;position:relative;overflow-y:auto;overflow-x:hidden;box-sizing:border-box}.container[_ngcontent-%COMP%]   .hide-key-options[_ngcontent-%COMP%]{width:calc(100% - 20px);height:20px;display:flex;justify-content:space-between;align-items:center;background-color:#067eb3;color:#fff;font-family:Arial,Helvetica,sans-serif;padding:5px 10px;cursor:pointer;border-bottom-left-radius:2px;border-bottom-right-radius:2px;position:absolute;bottom:0px;left:0px}.container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:sans-serif;width:100%;color:#00f;font-weight:bold;font-size:18px;margin-left:10px;margin-top:10px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;cursor:pointer}.container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-left:5px;margin-top:-2px;cursor:pointer}.container[_ngcontent-%COMP%]   .frequency[_ngcontent-%COMP%]{height:140px}.container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{width:90%;margin:10px auto;color:#d3d3d3;opacity:.5}"],changeDetection:0}),e})(),Ke=(()=>{class e{constructor(){this.up=new o.vpe,this.down=new o.vpe,this.right=new o.vpe,this.left=new o.vpe,this.zoomIn=new o.vpe,this.zoomOut=new o.vpe}ngOnInit(){}moveUp(t){this.up.emit(t)}moveDown(t){this.down.emit(t)}moveRight(t){this.right.emit(t)}moveLeft(t){this.left.emit(t)}onZoomIn(){this.zoomIn.emit()}onZoomOut(){this.zoomOut.emit()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-zoom"]],outputs:{up:"up",down:"down",right:"right",left:"left",zoomIn:"zoomIn",zoomOut:"zoomOut"},decls:15,vars:0,consts:[[1,"container"],[1,"zoom"],[1,"zoom-in",3,"click"],["src","assets/icons/plus.svg"],[1,"zoom-out",3,"click"],["src","assets/icons/minus.svg"],[1,"move"],[1,"move-up",3,"mousedown","mouseup"],["src","assets/icons/expand_less.svg"],[1,"move-down",3,"mousedown","mouseup"],["src","assets/icons/expand_more.svg"],[1,"move-right",3,"mousedown","mouseup"],["src","assets/icons/chevron_right.svg"],[1,"move-left",3,"mousedown","mouseup"],["src","assets/icons/chevron_left.svg"]],template:function(t,i){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.NdJ("click",function(){return i.onZoomIn()}),o._UZ(3,"img",3),o.qZA(),o.TgZ(4,"div",4),o.NdJ("click",function(){return i.onZoomOut()}),o._UZ(5,"img",5),o.qZA(),o.qZA(),o.TgZ(6,"div",6),o.TgZ(7,"div",7),o.NdJ("mousedown",function(){return i.moveUp(!0)})("mouseup",function(){return i.moveUp(!1)}),o._UZ(8,"img",8),o.qZA(),o.TgZ(9,"div",9),o.NdJ("mousedown",function(){return i.moveDown(!0)})("mouseup",function(){return i.moveDown(!1)}),o._UZ(10,"img",10),o.qZA(),o.TgZ(11,"div",11),o.NdJ("mousedown",function(){return i.moveRight(!0)})("mouseup",function(){return i.moveRight(!1)}),o._UZ(12,"img",12),o.qZA(),o.TgZ(13,"div",13),o.NdJ("mousedown",function(){return i.moveLeft(!0)})("mouseup",function(){return i.moveLeft(!1)}),o._UZ(14,"img",14),o.qZA(),o.qZA(),o.qZA())},styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100px;height:170px}.container[_ngcontent-%COMP%]   .zoom[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;background-color:#25252580;padding:10px;border-radius:2px}.container[_ngcontent-%COMP%]   .zoom-in[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .zoom-out[_ngcontent-%COMP%]{width:25px;height:25px;background-color:#3e59f3;display:flex;justify-content:center;align-items:center;border-radius:2px;cursor:pointer}.container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{background-color:#25252580;padding:10px;border-radius:2px;position:relative;margin-top:10px;width:80px;height:80px;display:grid;grid-template-rows:repeat(3,1fr);grid-template-columns:repeat(3,1fr)}.container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]   .move-up[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]   .move-down[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]   .move-left[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]   .move-right[_ngcontent-%COMP%]{width:25px;height:25px;background-color:#3e59f3;display:flex;justify-content:center;align-items:center;border-radius:2px;cursor:pointer}.container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]   .move-up[_ngcontent-%COMP%]{grid-column:2/3;grid-row:1/1}.container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]   .move-down[_ngcontent-%COMP%]{grid-column:2/3;grid-row:3/4}.container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]   .move-right[_ngcontent-%COMP%]{grid-column:3/4;grid-row:2/3}.container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]   .move-left[_ngcontent-%COMP%]{grid-column:1/2;grid-row:2/3}"]}),e})(),Qe=(()=>{class e{constructor(t){this.timelineService=t,this.position=0,this.playing=!1}ngOnInit(){this.sub=this.timelineService.positionChanged.subscribe(t=>this.position)}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(Ft))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-time-line"]],inputs:{playing:"playing"},decls:2,vars:0,template:function(t,i){1&t&&(o.TgZ(0,"p"),o._uU(1,"time-line works!"),o.qZA())},styles:[""]}),e})();function Xe(e,n){1&e&&o._UZ(0,"img",3)}function tn(e,n){1&e&&o._UZ(0,"img",4)}let en=(()=>{class e{constructor(t,i){this.availabilityService=t,this.animationService=i,this.playing=!1}ngOnInit(){}onPlay(){for(let t=0;t<10;t++)this.availabilityService.loadAvailabilityForAnimation(t);this.playing=!this.playing,this.playing?this.animationService.startAnimation():this.animationService.stopAnimation()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(K),o.Y36(Tt))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-play-button"]],decls:3,vars:2,consts:[[1,"container",3,"click"],["class","play","src","assets/icons/play.svg",4,"ngIf"],["class","pause","src","assets/icons/pause.svg",4,"ngIf"],["src","assets/icons/play.svg",1,"play"],["src","assets/icons/pause.svg",1,"pause"]],template:function(t,i){1&t&&(o.TgZ(0,"div",0),o.NdJ("click",function(){return i.onPlay()}),o.YNc(1,Xe,1,0,"img",1),o.YNc(2,tn,1,0,"img",2),o.qZA()),2&t&&(o.xp6(1),o.Q6J("ngIf",!i.playing),o.xp6(1),o.Q6J("ngIf",i.playing))},directives:[A.O5],styles:[".container[_ngcontent-%COMP%]{width:60px;height:60px;display:flex;justify-content:center;align-items:center;background-color:#2c2727;box-sizing:border-box;cursor:pointer}.container[_ngcontent-%COMP%]:hover{background-color:#4042ce}.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;box-sizing:border-box}.container[_ngcontent-%COMP%]   img.play[_ngcontent-%COMP%]{padding:5px}.container[_ngcontent-%COMP%]   img.pause[_ngcontent-%COMP%]{padding:10px}"]}),e})(),nn=(()=>{class e{constructor(){this.currentTime=new Date}ngOnInit(){this.interval=setInterval(()=>{this.currentTime=new Date},1e4)}ngOnDestroy(){this.interval&&clearInterval(this.interval)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-player"]],decls:12,vars:8,consts:[[1,"container"],[1,"current-time"],[1,"time-line"],[1,"current-tab"],[1,"play"]],template:function(t,i){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o._uU(2),o.ALo(3,"date"),o.TgZ(4,"span"),o._uU(5),o.ALo(6,"date"),o.qZA(),o.qZA(),o.TgZ(7,"div",2),o.TgZ(8,"div",3),o._UZ(9,"app-time-line"),o.qZA(),o.TgZ(10,"div",4),o._UZ(11,"app-play-button"),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(2),o.hij(" ",o.xi3(3,2,i.currentTime,"hh:mm")+" "," "),o.xp6(3),o.hij(" ",o.xi3(6,5,i.currentTime,"EEEE")," "))},directives:[Qe,en],pipes:[A.uU],styles:[".container[_ngcontent-%COMP%]{width:100%;height:100px;min-width:300px;max-width:1912px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.container[_ngcontent-%COMP%]   .current-time[_ngcontent-%COMP%]{width:150px;height:20px;background-color:#0006;color:#fff;font-weight:bold;font-family:Arial,Helvetica,sans-serif;padding:10px;font-size:large;text-align:center;visibility:hidden}.container[_ngcontent-%COMP%]   .current-time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:normal}@media (min-width: 768px){.container[_ngcontent-%COMP%]   .current-time[_ngcontent-%COMP%]{visibility:visible}}.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]{width:100%;min-width:300px;height:60px;position:relative}.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{position:absolute;width:230px;height:30px;display:flex;flex-direction:row;top:-40px}@media (max-width: 767){.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{left:0px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{right:0px}}.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{width:70px;height:40px;background-color:#6e6d6d;color:#fff;text-align:center;line-height:30px;font-family:sans-serif;font-size:15px;cursor:pointer;padding:5px;box-sizing:border-box}.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .long-forecast[_ngcontent-%COMP%]{width:170px}.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .observations[_ngcontent-%COMP%]{width:160px}.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#1e4bc7;background-color:#fff;font-weight:bold}.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .current-tab[_ngcontent-%COMP%]{width:calc(100% - 60px);margin-left:60px;padding:5px;background-color:#fff;box-sizing:border-box}.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%]{width:60px;height:60px;position:absolute;left:0px;bottom:0px}"]}),e})();const on=[{path:"",component:(()=>{class e{ngOnInit(){}onUp(t){t?this.map.keepMovingUp():this.map.stopMoving()}onDown(t){t?this.map.keepMovingDown():this.map.stopMoving()}onRight(t){t?this.map.keepMovingRight():this.map.stopMoving()}onLeft(t){t?this.map.keepMovingLeft():this.map.stopMoving()}onZoomIn(){this.map.zoomIn()}onZoomOut(){this.map.zoomOut()}onPlay(t){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-monitoring"]],viewQuery:function(t,i){if(1&t&&o.Gf(Nt,5),2&t){let r;o.iGM(r=o.CRH())&&(i.map=r.first)}},decls:4,vars:0,consts:[[3,"zoomIn","zoomOut","up","down","right","left"]],template:function(t,i){1&t&&(o._UZ(0,"app-key-options"),o._UZ(1,"app-map"),o.TgZ(2,"app-zoom",0),o.NdJ("zoomIn",function(){return i.onZoomIn()})("zoomOut",function(){return i.onZoomOut()})("up",function(s){return i.onUp(s)})("down",function(s){return i.onDown(s)})("right",function(s){return i.onRight(s)})("left",function(s){return i.onLeft(s)}),o.qZA(),o._UZ(3,"app-player"))},directives:[$e,Nt,Ke,nn],styles:["app-key-options[_ngcontent-%COMP%]{position:absolute;top:20px;left:15px;z-index:100}app-zoom[_ngcontent-%COMP%]{position:absolute;bottom:10px;left:15px;z-index:99;visibility:hidden}@media (min-width: 768px){app-zoom[_ngcontent-%COMP%]{visibility:visible}}app-player[_ngcontent-%COMP%]{position:absolute;bottom:30px;right:10px;z-index:100;min-width:300px;width:80%;max-width:768px}.loading[_ngcontent-%COMP%]{width:56px;height:56px;position:absolute;background-color:transparent;top:20px;right:30px}"]}),e})()}];let rn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[Et.Bz.forChild(on)],Et.Bz]}),e})();f(402),f(574),f(796),f(2),f(555);let be=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({}),e})(),Be=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[be]]}),e})(),ni=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[Be]}),e})(),ii=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[A.ez,rn,ni]]}),e})()}}]);