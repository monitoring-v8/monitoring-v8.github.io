"use strict";(self.webpackChunkmonitoring=self.webpackChunkmonitoring||[]).push([[658],{4658:(no,xe,p)=>{p.r(xe),p.d(xe,{MonitoringMapModule:()=>to});var A=p(8583),ke=p(630),i=p(639);class Bt{constructor(n,e,o){this.lat=n,this.lng=e,this.towers=o}}class J{constructor(n,e,o,r){this.name=n,this.height=e,this.power=o,this.coverage=r}getIconSize(){return this.height>200?35:this.height>100?30:25}static getThreshold(n){let e=50;return e=n<7?50:7===n?10:8===n?1:9===n?.1:10===n?.05:11===n?.001:0,e}}let D=(()=>{class t{static getTowerIcon(e){return{url:t.towerIcon,scaledSize:new window.google.maps.Size(e,e),labelOrigin:new window.google.maps.Point(e/2,e+10)}}static getTowerInfoDiv(e,o){const r=document.createElement("div");r.classList.add("tower-info");const s=document.createElement("div");s.classList.add("prev-tower"),s.addEventListener("click",()=>{const l=document.getElementById("currentTower"),g=null==l?void 0:l.textContent;if(g){let f=parseInt(g)-1;f<1&&(f=e.towers.length);const _=document.querySelectorAll('*[id^="tower-"]');_.forEach(c=>c.classList.add("hidden"));for(let c=0;c<_.length;c++)if(c+1===f&&l){for(_[c].classList.remove("hidden");l.firstChild;)l.removeChild(l.firstChild);l.innerHTML=f.toString()}}});const a=document.createElement("img");a.src=this.prevTowerIcon,s.appendChild(a);const u=document.createElement("div");u.classList.add("next-tower"),u.addEventListener("click",()=>{const l=document.getElementById("currentTower"),g=null==l?void 0:l.textContent;if(g){let f=parseInt(g)+1;f>e.towers.length&&(f=1);const _=document.querySelectorAll('*[id^="tower-"]');_.forEach(c=>c.classList.add("hidden"));for(let c=0;c<_.length;c++)if(c+1===f&&l){for(_[c].classList.remove("hidden");l.firstChild;)l.removeChild(l.firstChild);l.innerHTML=f.toString()}}});const y=document.createElement("img");y.src=this.nextTowerIcon,u.appendChild(y);const C=document.createElement("div");C.classList.add("count");const m=document.createElement("div");m.classList.add("current-tower"),m.innerText="1",m.id="currentTower";const N=document.createElement("div");N.classList.add("slash"),N.innerText="/";const T=document.createElement("div");T.classList.add("total-towers"),T.innerText=e.towers.length.toString(),C.appendChild(m),C.appendChild(N),C.appendChild(T),r.appendChild(C),r.appendChild(s);for(let l=0;l<e.towers.length;l++){const g=document.createElement("div");g.classList.add("content"),l>0&&g.classList.add("hidden"),g.id="tower-"+(l+1);const k=e.towers[l],f=document.createElement("div");f.classList.add("info","name");const _=document.createElement("div");_.classList.add("value"),_.innerText=k.name,f.appendChild(_);const c=document.createElement("div");c.classList.add("info","height");const ve=document.createElement("div");ve.classList.add("label"),ve.innerText="Tower height:";const ye=document.createElement("div");ye.classList.add("value"),ye.innerText=k.height.toString();const Ce=document.createElement("div");Ce.classList.add("unit"),Ce.innerText="m",c.appendChild(ve),c.appendChild(ye),c.appendChild(Ce);const G=document.createElement("div");G.classList.add("info","power");const Me=document.createElement("div");Me.classList.add("label"),Me.innerText="Transmitter power:";const we=document.createElement("div");we.classList.add("value"),we.innerText=k.power.toString();const be=document.createElement("div");be.classList.add("unit"),be.innerText="kw",G.appendChild(Me),G.appendChild(we),G.appendChild(be);const I=document.createElement("div");I.classList.add("info","coverage");const Ve=document.createElement("div");Ve.classList.add("label"),Ve.innerText="Network coverage:";const Ae=document.createElement("div");Ae.classList.add("value"),Ae.innerText=k.coverage.toString();const Oe=document.createElement("div");Oe.classList.add("unit"),Oe.innerText="kw",I.appendChild(Ve),I.appendChild(Ae),I.appendChild(Oe),g.appendChild(f),g.appendChild(c),g.appendChild(G),g.appendChild(I),r.appendChild(g)}return r.appendChild(u),r}static getHeatmapOpacity(e){return e<12?.2:12===e?.3:13===e?.4:14===e?.5:15===e?.6:16===e?.7:17===e?.8:18===e?.9:1}static getPosition(e,o){return new window.google.maps.LatLng(e,o)}static getBoundsCords(e){const o=e.getNorthEast(),r=e.getSouthWest(),s=o.lat(),a=r.lat(),u=o.lng();return{minLat:a,maxLat:s,minLng:r.lng(),maxLng:u}}}return t.towerIcon="assets/icons/signal_black_light.png",t.prevTowerIcon="assets/icons/chevron_left_black.svg",t.nextTowerIcon="assets/icons/chevron_right_black.svg",t})();var De=p(2340),Ee=p(8049),Pe=p(1841);let Lt=(()=>{class t{constructor(e){this.http=e,this.locations=[],this.markers=[],this.locationsInitialized=!1,this.http.get(De.N.REST_API_URL+"/towers/all").pipe((0,Ee.P)()).subscribe(o=>{o.forEach(r=>{const s=this.locations.find(a=>a.lat===r.lat&&a.lng===r.lng);s?s.towers.push(new J(r.name,r.height,r.power,r.coverage)):this.locations.push(new Bt(r.lat,r.lng,[new J(r.name,r.height,r.power,r.coverage)]))}),this.initLocations(),this.map&&this.loadLocations(this.map.getZoom(),this.map.getBounds())})}setMap(e){this.map=e}setLocations(e){this.locations=e.slice()}initLocations(){this.locationsInitialized||this.map&&this.locations&&this.locations.length>0&&this.locations.forEach(e=>{const o=D.getTowerIcon(e.towers[0].getIconSize()),r=new window.google.maps.Marker({position:new window.google.maps.LatLng(e.lat,e.lng),icon:o,map:null,title:e.towers.length>1?e.towers[0].name+"*":e.towers[0].name,label:{text:e.towers.length>1?e.towers[0].name+"*":e.towers[0].name,className:"tower-marker-label"}});this.getInfoWindow(e,r),this.markers.push({location:e,marker:r}),this.locationsInitialized=!0})}getInfoWindow(e,o){const r=new window.google.maps.InfoWindow({content:D.getTowerInfoDiv(e,o),opened:!1});r.addListener("closeclick",()=>{r.opened=!1}),o.addListener("click",()=>{if(r.opened)return r.close(),void(r.opened=!1);r.open({anchor:o,map:this.map,shouldFocus:!1}),r.opened=!0})}loadLocations(e,o){if(this.valid())if(this.markers.forEach(r=>r.marker.setMap(null)),o&&e<7){let r=200;this.markers.filter(s=>o.contains(s.marker.getPosition())&&s.location.towers[0].power>=r).forEach(s=>s.marker.setMap(this.map))}else if(o){let r=J.getThreshold(e);this.markers.filter(s=>o.contains(s.marker.getPosition())&&s.location.towers[0].power>=r).forEach(s=>s.marker.setMap(this.map))}}clearLocations(){this.markers.forEach(e=>e.marker.setMap(null))}valid(){return this.locationsInitialized&&this.map&&this.locations&&this.locations.length>0}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(Pe.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Zt=(()=>{class t{constructor(e){this.http=e}getSpectrums(e,o){return this.http.get(De.N.REST_API_URL+"/spectrums",{params:{minLat:e.minLat,maxLat:e.maxLat,minLng:e.minLng,maxLng:e.maxLng,zoom:o}})}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(Pe.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Se=(()=>{class t{constructor(e){this.spectrumService=e,this.factor=10,this.heatmapAvlData=[]}loadAvailability(e,o,r){if(!e||!r)return;const s=D.getBoundsCords(r);this.spectrumService.getSpectrums(s,o).pipe((0,Ee.P)()).subscribe(a=>{this.setHeatmapData(a),this.loadHeatmap(e,o)},a=>console.log(a))}clearAvailability(){this.heatmapAvlData=[],this.heatmapAvl&&this.heatmapAvl.setMap(null)}setHeatmapData(e){this.heatmapAvlData=[];for(let o=0;o<e.length;o++){const r=e[o];this.heatmapAvlData.push({location:D.getPosition(r.lat,r.lng),weight:r.avl/this.factor})}}loadHeatmap(e,o){this.setHeatmapOpacity(o),(!this.heatmapAvl||!this.heatmapAvl.getMap())&&(this.heatmapAvl=new window.google.maps.visualization.HeatmapLayer({data:this.heatmapAvlData}),this.heatmapAvl.setMap(e))}setHeatmapOpacity(e){if(this.heatmapAvl){let o=D.getHeatmapOpacity(e);this.heatmapAvl.set("gradient",this.getHeatmapGradientAvl(o))}}getHeatmapGradientAvl(e){return["rgba(0, 255, 255, 0)","rgba(0, 191, 255, "+e+" )","rgba(0, 127, 255, "+e+" )","rgba(0, 63, 255, "+e+" )","rgba(0, 0, 255, "+e+" )","rgba(0, 0, 223, "+e+" )","rgba(0, 0, 191, "+e+" )","rgba(0, 0, 159, "+e+" )","rgba(0, 0, 127, "+e+" )","rgba(63, 0, 91, "+e+" )","rgba(127, 0, 63, "+e+" )","rgba(191, 0, 31, "+e+" )","rgba(255, 0, 0, 0.3)"]}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(Zt))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var W=p(6215);let Fe=(()=>{class t{constructor(){this.towerChecked=new W.X(!1),this.networkCoverageChecked=new W.X(!1),this.spectrumsAvailabilityChecked=new W.X(!1)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Rt=["mapElement"];let Ne=(()=>{class t{constructor(e,o,r){this.locationService=e,this.availabilityService=o,this.keyOptionsService=r,this.spectrumAvailabilityCheck=!1,this.occupacy=!1,this.lat=51.4832988402089,this.lng=-.38141397330019755,this.initZoom=10,this.zoomStep=1,this.keepZooming=!1,this.keepMoving=!1,this.mapReady=!1}ngOnInit(){this.keyOptionsService.spectrumsAvailabilityChecked.subscribe(e=>{this.spectrumAvailabilityCheck=e,e?this.availabilityService.loadAvailability(this.map,this.map.getZoom(),this.map.getBounds()):this.availabilityService.clearAvailability()})}ngAfterViewInit(){this.map=new window.google.maps.Map(this.mapElement.nativeElement,{center:{lat:this.lat,lng:this.lng},zoom:this.initZoom,disableDefaultUI:!0,styles:[{featureType:"all",elementType:"labels",stylers:[{visibility:"off"}]}]}),this.map&&(this.map.addListener("idle",()=>{if(this.map.getZoom()<3)return this.locationService.clearLocations(),void this.availabilityService.clearAvailability();clearTimeout(this.waitForIdle),this.waitForIdle=setTimeout(()=>{const e=this.map.getBounds(),o=e.getNorthEast(),r=e.getSouthWest();console.log("bounds: ",r.lat(),o.lat(),r.lng(),o.lng()),console.log("zoom: ",this.map.getZoom()),this.locationService.locationsInitialized&&this.locationService.loadLocations(this.map.getZoom(),this.map.getBounds()),this.spectrumAvailabilityCheck&&this.availabilityService.loadAvailability(this.map,this.map.getZoom(),this.map.getBounds());const s=this.map.getCenter();this.lat=s.lat(),this.lng=s.lng()},300)}),this.map.addListener("click",e=>{console.log(JSON.stringify(e.latLng.toJSON(),null,2))}),this.mapReady=!0,this.locationService.setMap(this.map),this.locationService.locationsInitialized||this.locationService.initLocations(),this.locationService.loadLocations(this.map.getZoom(),this.map.getBounds()),this.spectrumAvailabilityCheck&&this.availabilityService.loadAvailability(this.map,this.map.getZoom(),this.map.getBounds()))}keepMovingUp(){this.keepMoving||(this.keepMoving=!0,this.panMap(0,this.getPanStep()))}keepMovingDown(){this.keepMoving||(this.keepMoving=!0,this.panMap(0,-1*this.getPanStep()))}keepMovingRight(){this.keepMoving||(this.keepMoving=!0,this.panMap(this.getPanStep(),0))}keepMovingLeft(){this.keepMoving||(this.keepMoving=!0,this.panMap(-1*this.getPanStep(),0))}stopMoving(){this.keepMoving=!1}panMap(e,o){!this.keepMoving||(this.lat=this.lat+o,this.lng=this.lng+e,this.map.panTo({lat:this.lat,lng:this.lng}),setTimeout(()=>{this.panMap.bind(this),this.panMap(e,o)},50))}zoomIn(){this.zoomMap(this.zoomStep)}zoomOut(){this.zoomMap(-1*this.zoomStep)}zoomMap(e){const o=this.map.getZoom()+e;o>=0&&o<23&&this.map.setZoom(o)}getPanStep(){return.01}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(Lt),i.Y36(Se),i.Y36(Fe))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-map"]],viewQuery:function(e,o){if(1&e&&i.Gf(Rt,5),2&e){let r;i.iGM(r=i.CRH())&&(o.mapElement=r.first)}},decls:2,vars:0,consts:[[1,"map-css"],["mapElement",""]],template:function(e,o){1&e&&i._UZ(0,"div",0,1)},styles:[".map-css{width:100%;height:100vh}.gm-ui-hover-effect{top:0px!important;right:0px!important}.tower-marker-label{font-size:10px!important}.tower-info{display:grid;grid-template-columns:20px 180px 20px;grid-template-rows:auto;grid-column-gap:10px;column-gap:10px}.tower-info .hidden{visibility:hidden}.tower-info .prev-tower{grid-column:1/2;grid-row:1/2;display:flex;justify-content:flex-start;align-items:center;width:100%;height:100%;opacity:.3;cursor:pointer}.tower-info .prev-tower.disabled{cursor:default;opacity:.1}.tower-info .prev-tower:hover{opacity:.5}.tower-info .next-tower{grid-column:3/4;grid-row:1/2;display:flex;justify-content:flex-end;align-items:center;width:100%;height:100%;opacity:.3;cursor:pointer}.tower-info .next-tower.disabled{cursor:default;opacity:.1}.tower-info .next-tower:hover{opacity:.5}.tower-info .count{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;position:absolute;top:0px;left:10px;width:80px;height:30px}.tower-info .content{grid-column:2/3;grid-row:1/2;margin:0 auto 10px;width:100%;height:100%;box-sizing:border-box;padding:5px 0}.tower-info .content .info{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:100%;margin:3px auto}.tower-info .content .name{display:flex;justify-content:center;align-items:center;margin-bottom:1px}.tower-info .content .name .value{text-align:center;margin-bottom:10px;font-size:16px}.tower-info .content .value{margin-left:5px}.tower-info .content .unit{margin-left:2px}\n"],encapsulation:2,changeDetection:0}),t})(),Te=(()=>{class t{constructor(){this.id="",this.check=!0,this.checked=new i.vpe,this.disabled=!1,this.label="",this.sub=!1}ngOnInit(){}onChange(e){this.check=e,this.checked.emit(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-checkbox"]],inputs:{id:"id",check:"check",disabled:"disabled",label:"label",sub:"sub"},outputs:{checked:"checked"},decls:4,vars:9,consts:[[1,"container"],["type","checkbox",3,"id","disabled","checked","change"],[3,"for","click"]],template:function(e,o){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"input",1),i.NdJ("change",function(s){return o.onChange(s.target.checked)}),i.qZA(),i.TgZ(2,"label",2),i.NdJ("click",function(){return o.onChange(!o.check)}),i._uU(3),i.qZA(),i.qZA()),2&e&&(i.ekj("sub",o.sub),i.xp6(1),i.Q6J("id",o.id)("disabled",o.disabled)("checked",o.check),i.xp6(1),i.ekj("disabled",o.disabled),i.Q6J("for",o.id),i.xp6(1),i.hij(" ",o.label," "))},styles:['@charset "UTF-8";.container[_ngcontent-%COMP%]{font-family:sans-serif;width:100%;color:#00f;font-weight:bold;font-size:18px;margin-left:10px;margin-top:10px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:white;border-radius:2px;box-sizing:border-box;position:relative;box-sizing:content-box;width:21px;height:21px;border-width:1px;transition:all 50ms linear;border-color:#6b90df;border-style:solid}.container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked{background-color:#067eb3}.container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus{box-shadow:none}.container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled{background-color:#ececec;cursor:default}.container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked:after{content:"\\2714";text-align:center;margin:0 auto;color:#fff;top:-1px;left:4px;position:absolute;font-size:16px}.container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:after{content:"";text-align:center;margin:0 auto;color:#fff;top:-1px;left:4px;position:absolute;font-size:16px;cursor:default}.container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-left:5px;margin-top:-2px;cursor:pointer}.container[_ngcontent-%COMP%]   label.disabled[_ngcontent-%COMP%]{color:#8d8dd3;cursor:default}.container.sub[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;margin-top:0}']}),t})(),Ut=(()=>{class t{constructor(){this.check=!0,this.checkedNetworkCoverage=!0}ngOnInit(){}onCheck(e){this.check=e}onCheckNetworkCoverage(e){this.checkedNetworkCoverage=e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-tower-key"]],decls:3,vars:4,consts:[["label","Tower","id","checked",3,"check","checked"],[1,"sub"],["label","Network Coverage","id","checkedNetworkCoverage",3,"sub","disabled","check","checked"]],template:function(e,o){1&e&&(i.TgZ(0,"app-checkbox",0),i.NdJ("checked",function(s){return o.onCheck(s)}),i.qZA(),i.TgZ(1,"div",1),i.TgZ(2,"app-checkbox",2),i.NdJ("checked",function(s){return o.onCheckNetworkCoverage(s)}),i.qZA(),i.qZA()),2&e&&(i.Q6J("check",o.check),i.xp6(2),i.Q6J("sub",!0)("disabled",!o.check)("check",o.checkedNetworkCoverage))},directives:[Te],styles:[".sub[_ngcontent-%COMP%]{width:80%;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;margin-left:30px}.sub[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.sub[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#00f;font-family:sans-serif;cursor:pointer}"]}),t})(),qt=(()=>{class t{constructor(){this.gradient=[]}ngOnInit(){}getBackground(){if(this.gradient.length<1)return"";let e="linear-gradient(";return this.gradient.forEach(o=>{e+=o+", "}),e=e.substr(0,e.length-2),e+=")",console.log(e),e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-gradient-rectangle"]],inputs:{gradient:"gradient"},decls:1,vars:2,consts:[[1,"container"]],template:function(e,o){1&e&&i._UZ(0,"div",0),2&e&&i.Udp("background",o.getBackground())},styles:[".container[_ngcontent-%COMP%]{width:100%;height:30px}"]}),t})();function jt(t,n){if(1&t&&i._UZ(0,"app-gradient-rectangle",2),2&t){const e=i.oxw();i.Q6J("gradient",e.gradient)}}let Ht=(()=>{class t{constructor(e,o){this.availabilityService=e,this.keyOptionsService=o,this.gradient=[],this.check=!1}ngOnInit(){this.gradient=this.availabilityService.getHeatmapGradientAvl(1)}onCheck(e){this.check=e,this.keyOptionsService.spectrumsAvailabilityChecked.next(e)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(Se),i.Y36(Fe))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-availability-key"]],decls:2,vars:2,consts:[["label","Availability","id","checked",3,"check","checked"],[3,"gradient",4,"ngIf"],[3,"gradient"]],template:function(e,o){1&e&&(i.TgZ(0,"app-checkbox",0),i.NdJ("checked",function(s){return o.onCheck(s)}),i.qZA(),i.YNc(1,jt,1,1,"app-gradient-rectangle",1)),2&e&&(i.Q6J("check",o.check),i.xp6(1),i.Q6J("ngIf",o.check))},directives:[Te,A.O5,qt],styles:["app-gradient-rectangle[_ngcontent-%COMP%]{margin-left:45px;margin-right:14px;display:block}"]}),t})();function zt(t,n){if(1&t){const e=i.EpF();i.TgZ(0,"div",2),i.NdJ("click",function(){return i.CHM(e),i.oxw().open=!0}),i.TgZ(1,"div"),i._uU(2," Key & options "),i.qZA(),i._UZ(3,"img",3),i.qZA()}}function Yt(t,n){if(1&t){const e=i.EpF();i.TgZ(0,"div",4),i.TgZ(1,"div",5),i._UZ(2,"app-tower-key"),i._UZ(3,"hr",6),i._UZ(4,"app-availability-key"),i._UZ(5,"hr",6),i.qZA(),i.TgZ(6,"div",7),i.NdJ("click",function(){return i.CHM(e),i.oxw().open=!1}),i.TgZ(7,"div"),i._uU(8," Hide key & options "),i.qZA(),i._UZ(9,"img",8),i.qZA(),i.qZA()}}let Jt=(()=>{class t{constructor(){this.open=!1,this.availabilityCheck=!0,this.occupancy=!0,this.interference=!0,this.utilisation=!0,this.frequencyCheck=new i.vpe,this.availabilityChecked=new i.vpe,this.occupacyCheck=new i.vpe,this.interferenceCheck=new i.vpe,this.utilisationCheck=new i.vpe}ngOnInit(){}ngAfterViewInit(){}onAvailabilityCheck(e){this.availabilityCheck=e,this.availabilityChecked.emit(e)}onOccupacyCheck(e){this.occupancy=e,this.occupacyCheck.emit(e)}onInterferenceCheck(e){this.interference=e,this.interferenceCheck.emit(e)}onUtilisationCheck(e){this.utilisation=e,this.utilisationCheck.emit(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-key-options"]],outputs:{frequencyCheck:"frequencyCheck",availabilityChecked:"availabilityChecked",occupacyCheck:"occupacyCheck",interferenceCheck:"interferenceCheck",utilisationCheck:"utilisationCheck"},decls:2,vars:2,consts:[["class","show-key-options",3,"click",4,"ngIf"],["class","container",4,"ngIf"],[1,"show-key-options",3,"click"],["src","assets/icons/expand_more.svg"],[1,"container"],[1,"key-options"],[1,"divider"],[1,"hide-key-options",3,"click"],["src","assets/icons/expand_less.svg"]],template:function(e,o){1&e&&(i.YNc(0,zt,4,0,"div",0),i.YNc(1,Yt,10,0,"div",1)),2&e&&(i.Q6J("ngIf",!o.open),i.xp6(1),i.Q6J("ngIf",o.open))},directives:[A.O5,Ut,Ht],styles:[".show-key-options[_ngcontent-%COMP%]{width:140px;height:20px;background-color:#067eb3;cursor:pointer;display:flex;justify-content:space-evenly;align-items:center;color:#fff;font-family:Arial,Helvetica,sans-serif;border-radius:2px;padding:5px}.show-key-options[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px}.container[_ngcontent-%COMP%]{width:300px;height:520px;background-color:#ece7fffc;border-radius:2px;position:relative;overflow-y:auto;overflow-x:hidden;box-sizing:border-box;display:flex;flex-direction:column;border:1px solid gray}.container[_ngcontent-%COMP%]   .key-options[_ngcontent-%COMP%]{width:100%;height:calc(100% - 30px);padding-bottom:20px;border-radius:2px;position:relative;overflow-y:auto;overflow-x:hidden;box-sizing:border-box}.container[_ngcontent-%COMP%]   .hide-key-options[_ngcontent-%COMP%]{width:calc(100% - 20px);height:20px;display:flex;justify-content:space-between;align-items:center;background-color:#067eb3;color:#fff;font-family:Arial,Helvetica,sans-serif;padding:5px 10px;cursor:pointer;border-bottom-left-radius:2px;border-bottom-right-radius:2px;position:absolute;bottom:0px;left:0px}.container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:sans-serif;width:100%;color:#00f;font-weight:bold;font-size:18px;margin-left:10px;margin-top:10px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;cursor:pointer}.container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-left:5px;margin-top:-2px;cursor:pointer}.container[_ngcontent-%COMP%]   .frequency[_ngcontent-%COMP%]{height:140px}.container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{width:90%;margin:10px auto;color:#d3d3d3;opacity:.5}"],changeDetection:0}),t})(),Wt=(()=>{class t{constructor(){this.up=new i.vpe,this.down=new i.vpe,this.right=new i.vpe,this.left=new i.vpe,this.zoomIn=new i.vpe,this.zoomOut=new i.vpe}ngOnInit(){}moveUp(e){this.up.emit(e)}moveDown(e){this.down.emit(e)}moveRight(e){this.right.emit(e)}moveLeft(e){this.left.emit(e)}onZoomIn(){this.zoomIn.emit()}onZoomOut(){this.zoomOut.emit()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-zoom"]],outputs:{up:"up",down:"down",right:"right",left:"left",zoomIn:"zoomIn",zoomOut:"zoomOut"},decls:15,vars:0,consts:[[1,"container"],[1,"zoom"],[1,"zoom-in",3,"click"],["src","assets/icons/plus.svg"],[1,"zoom-out",3,"click"],["src","assets/icons/minus.svg"],[1,"move"],[1,"move-up",3,"mousedown","mouseup"],["src","assets/icons/expand_less.svg"],[1,"move-down",3,"mousedown","mouseup"],["src","assets/icons/expand_more.svg"],[1,"move-right",3,"mousedown","mouseup"],["src","assets/icons/chevron_right.svg"],[1,"move-left",3,"mousedown","mouseup"],["src","assets/icons/chevron_left.svg"]],template:function(e,o){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.NdJ("click",function(){return o.onZoomIn()}),i._UZ(3,"img",3),i.qZA(),i.TgZ(4,"div",4),i.NdJ("click",function(){return o.onZoomOut()}),i._UZ(5,"img",5),i.qZA(),i.qZA(),i.TgZ(6,"div",6),i.TgZ(7,"div",7),i.NdJ("mousedown",function(){return o.moveUp(!0)})("mouseup",function(){return o.moveUp(!1)}),i._UZ(8,"img",8),i.qZA(),i.TgZ(9,"div",9),i.NdJ("mousedown",function(){return o.moveDown(!0)})("mouseup",function(){return o.moveDown(!1)}),i._UZ(10,"img",10),i.qZA(),i.TgZ(11,"div",11),i.NdJ("mousedown",function(){return o.moveRight(!0)})("mouseup",function(){return o.moveRight(!1)}),i._UZ(12,"img",12),i.qZA(),i.TgZ(13,"div",13),i.NdJ("mousedown",function(){return o.moveLeft(!0)})("mouseup",function(){return o.moveLeft(!1)}),i._UZ(14,"img",14),i.qZA(),i.qZA(),i.qZA())},styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100px;height:170px}.container[_ngcontent-%COMP%]   .zoom[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;background-color:#25252580;padding:10px;border-radius:2px}.container[_ngcontent-%COMP%]   .zoom-in[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .zoom-out[_ngcontent-%COMP%]{width:25px;height:25px;background-color:#3e59f3;display:flex;justify-content:center;align-items:center;border-radius:2px;cursor:pointer}.container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{background-color:#25252580;padding:10px;border-radius:2px;position:relative;margin-top:10px;width:80px;height:80px;display:grid;grid-template-rows:repeat(3,1fr);grid-template-columns:repeat(3,1fr)}.container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]   .move-up[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]   .move-down[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]   .move-left[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]   .move-right[_ngcontent-%COMP%]{width:25px;height:25px;background-color:#3e59f3;display:flex;justify-content:center;align-items:center;border-radius:2px;cursor:pointer}.container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]   .move-up[_ngcontent-%COMP%]{grid-column:2/3;grid-row:1/1}.container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]   .move-down[_ngcontent-%COMP%]{grid-column:2/3;grid-row:3/4}.container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]   .move-right[_ngcontent-%COMP%]{grid-column:3/4;grid-row:2/3}.container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]   .move-left[_ngcontent-%COMP%]{grid-column:1/2;grid-row:2/3}"]}),t})(),$t=(()=>{class t{constructor(){this.playing=!1}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-time-line"]],inputs:{playing:"playing"},decls:2,vars:0,template:function(e,o){1&e&&(i.TgZ(0,"p"),i._uU(1,"time-line works!"),i.qZA())},styles:[""]}),t})();function Kt(t,n){1&t&&i._UZ(0,"img",3)}function Qt(t,n){1&t&&i._UZ(0,"img",4)}let Xt=(()=>{class t{constructor(){this.play=new i.vpe,this.playing=!1}ngOnInit(){}onPlay(){this.playing=!this.playing,this.play.emit(this.playing)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-play-button"]],outputs:{play:"play"},decls:3,vars:2,consts:[[1,"container",3,"click"],["class","play","src","assets/icons/play.svg",4,"ngIf"],["class","pause","src","assets/icons/pause.svg",4,"ngIf"],["src","assets/icons/play.svg",1,"play"],["src","assets/icons/pause.svg",1,"pause"]],template:function(e,o){1&e&&(i.TgZ(0,"div",0),i.NdJ("click",function(){return o.onPlay()}),i.YNc(1,Kt,1,0,"img",1),i.YNc(2,Qt,1,0,"img",2),i.qZA()),2&e&&(i.xp6(1),i.Q6J("ngIf",!o.playing),i.xp6(1),i.Q6J("ngIf",o.playing))},directives:[A.O5],styles:[".container[_ngcontent-%COMP%]{width:60px;height:60px;display:flex;justify-content:center;align-items:center;background-color:#2c2727;box-sizing:border-box;cursor:pointer}.container[_ngcontent-%COMP%]:hover{background-color:#4042ce}.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;box-sizing:border-box}.container[_ngcontent-%COMP%]   img.play[_ngcontent-%COMP%]{padding:5px}.container[_ngcontent-%COMP%]   img.pause[_ngcontent-%COMP%]{padding:10px}"]}),t})(),en=(()=>{class t{constructor(){this.playing=!1,this.play=new i.vpe,this.currentTime=new Date}ngOnInit(){this.interval=setInterval(()=>{this.currentTime=new Date},1e4)}ngOnDestroy(){this.interval&&clearInterval(this.interval)}onPlay(e){this.playing=e,this.play.emit(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-player"]],outputs:{play:"play"},decls:12,vars:9,consts:[[1,"container"],[1,"current-time"],[1,"time-line"],[1,"current-tab"],[3,"playing"],[1,"play"],[3,"play"]],template:function(e,o){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i._uU(2),i.ALo(3,"date"),i.TgZ(4,"span"),i._uU(5),i.ALo(6,"date"),i.qZA(),i.qZA(),i.TgZ(7,"div",2),i.TgZ(8,"div",3),i._UZ(9,"app-time-line",4),i.qZA(),i.TgZ(10,"div",5),i.TgZ(11,"app-play-button",6),i.NdJ("play",function(s){return o.onPlay(s)}),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(2),i.hij(" ",i.xi3(3,3,o.currentTime,"hh:mm")+" "," "),i.xp6(3),i.hij(" ",i.xi3(6,6,o.currentTime,"EEEE")," "),i.xp6(4),i.Q6J("playing",o.playing))},directives:[$t,Xt],pipes:[A.uU],styles:[".container[_ngcontent-%COMP%]{width:100%;height:100px;min-width:300px;max-width:1912px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.container[_ngcontent-%COMP%]   .current-time[_ngcontent-%COMP%]{width:150px;height:20px;background-color:#0006;color:#fff;font-weight:bold;font-family:Arial,Helvetica,sans-serif;padding:10px;font-size:large;text-align:center;visibility:hidden}.container[_ngcontent-%COMP%]   .current-time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:normal}@media (min-width: 768px){.container[_ngcontent-%COMP%]   .current-time[_ngcontent-%COMP%]{visibility:visible}}.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]{width:100%;min-width:300px;height:60px;position:relative}.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{position:absolute;width:230px;height:30px;display:flex;flex-direction:row;top:-40px}@media (max-width: 767){.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{left:0px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{right:0px}}.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{width:70px;height:40px;background-color:#6e6d6d;color:#fff;text-align:center;line-height:30px;font-family:sans-serif;font-size:15px;cursor:pointer;padding:5px;box-sizing:border-box}.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .long-forecast[_ngcontent-%COMP%]{width:170px}.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .observations[_ngcontent-%COMP%]{width:160px}.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#1e4bc7;background-color:#fff;font-weight:bold}.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .current-tab[_ngcontent-%COMP%]{width:calc(100% - 60px);margin-left:60px;padding:5px;background-color:#fff;box-sizing:border-box}.container[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%]{width:60px;height:60px;position:absolute;left:0px;bottom:0px}"]}),t})();const tn=[{path:"",component:(()=>{class t{ngOnInit(){}onUp(e){e?this.map.keepMovingUp():this.map.stopMoving()}onDown(e){e?this.map.keepMovingDown():this.map.stopMoving()}onRight(e){e?this.map.keepMovingRight():this.map.stopMoving()}onLeft(e){e?this.map.keepMovingLeft():this.map.stopMoving()}onZoomIn(){this.map.zoomIn()}onZoomOut(){this.map.zoomOut()}onPlay(e){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-monitoring"]],viewQuery:function(e,o){if(1&e&&i.Gf(Ne,5),2&e){let r;i.iGM(r=i.CRH())&&(o.map=r.first)}},decls:4,vars:0,consts:[[3,"zoomIn","zoomOut","up","down","right","left"],[3,"play"]],template:function(e,o){1&e&&(i._UZ(0,"app-key-options"),i._UZ(1,"app-map"),i.TgZ(2,"app-zoom",0),i.NdJ("zoomIn",function(){return o.onZoomIn()})("zoomOut",function(){return o.onZoomOut()})("up",function(s){return o.onUp(s)})("down",function(s){return o.onDown(s)})("right",function(s){return o.onRight(s)})("left",function(s){return o.onLeft(s)}),i.qZA(),i.TgZ(3,"app-player",1),i.NdJ("play",function(s){return o.onPlay(s)}),i.qZA())},directives:[Jt,Ne,Wt,en],styles:["app-key-options[_ngcontent-%COMP%]{position:absolute;top:20px;left:15px;z-index:100}app-zoom[_ngcontent-%COMP%]{position:absolute;bottom:10px;left:15px;z-index:99;visibility:hidden}@media (min-width: 768px){app-zoom[_ngcontent-%COMP%]{visibility:visible}}app-player[_ngcontent-%COMP%]{position:absolute;bottom:30px;right:10px;z-index:100;min-width:300px;width:80%;max-width:768px}.loading[_ngcontent-%COMP%]{width:56px;height:56px;position:absolute;background-color:transparent;top:20px;right:30px}"]}),t})()}];let nn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[ke.Bz.forChild(tn)],ke.Bz]}),t})();p(4402),p(7574),p(9796),p(8002),p(1555);let Ct=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({}),t})(),It=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[Ct]]}),t})(),eo=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[It]}),t})(),to=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[A.ez,nn,eo]]}),t})()}}]);