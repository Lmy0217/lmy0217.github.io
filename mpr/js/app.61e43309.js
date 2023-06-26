(function(){var e={7890:function(e,t,n){"use strict";var o=n(9242),r=n(3396),i=(n(7658),n(7139)),c=n(4870),a=(n(9587),n(5356)),l=n(6861),s=n(5303),d=n(4347),u=n(8138),g=n(6417),p=n(5522),m=n(504),v=n(5421),h=n(7572),f=n(281),w=n(2200),b=n(1017),y=n(6),I=n(1625),E=n(3235),P=n(9058),S=n(8383),_=n(1763),M=(n(5255),n(680)),k=n(787),x=n(907),A=n(4876),B=n(4173),L=n(3912),O=n(4081),W=n(4775);n(6227);const C=e=>((0,r.dD)("data-v-3a6e7206"),e=e(),(0,r.Cn)(),e),R={class:"con"},Z={class:"config"},T=C((()=>(0,r._)("td",null,[(0,r._)("input",{type:"file",id:"file",accept:".vti",hidden:""}),(0,r._)("button",{class:"btn btn-info",id:"btnLoad"},"Choose file")],-1))),D={class:"label"},F=C((()=>(0,r._)("tr",null,[(0,r._)("td",null,"Allow translation:"),(0,r._)("td",null,[(0,r._)("input",{type:"checkbox",id:"checkboxTranslation",checked:""})])],-1))),V=C((()=>(0,r._)("tr",null,[(0,r._)("td",null,"Show rotation:"),(0,r._)("td",null,[(0,r._)("input",{type:"checkbox",id:"checkboxShowRotation",checked:""})])],-1))),N=C((()=>(0,r._)("tr",null,[(0,r._)("td",null,"Allow rotation:"),(0,r._)("td",null,[(0,r._)("input",{type:"checkbox",id:"checkboxRotation",checked:""})])],-1))),G=C((()=>(0,r._)("tr",null,[(0,r._)("td",null,"Keep orthogonality:"),(0,r._)("td",null,[(0,r._)("input",{type:"checkbox",id:"checkboxOrthogonality",checked:""})])],-1))),j=C((()=>(0,r._)("tr",null,[(0,r._)("td",null,"Scale in pixels:"),(0,r._)("td",null,[(0,r._)("input",{type:"checkbox",id:"checkboxScaleInPixels",checked:""})])],-1))),H=C((()=>(0,r._)("tr",null,[(0,r._)("td",null,"Opacity:"),(0,r._)("td",null,[(0,r._)("input",{id:"opacity",type:"range",min:"0",max:"255",step:"1",value:"255",style:{width:"100px"}})]),(0,r._)("td",{id:"opacityValue"},"255")],-1))),U=C((()=>(0,r._)("tr",null,[(0,r._)("td",null,"Slab Mode:"),(0,r._)("td",null,[(0,r._)("select",{id:"slabMode"},[(0,r._)("option",{id:"slabModeMin"},"MIN"),(0,r._)("option",{id:"slabModeMax"},"MAX"),(0,r._)("option",{id:"slabModeMean",selected:"selected"},"MEAN"),(0,r._)("option",{id:"slabModeSum"},"SUM")])])],-1))),z=C((()=>(0,r._)("tr",null,[(0,r._)("td",null,"Slab Number of Slices:"),(0,r._)("td",null,[(0,r._)("input",{id:"slabNumber",type:"range",min:"1",max:"100",step:"1",value:"1",style:{width:"100px"}})]),(0,r._)("td",{id:"slabNumberValue"},"1")],-1))),X=C((()=>(0,r._)("tr",null,[(0,r._)("td",null,"Interpolation mode:"),(0,r._)("td",null,[(0,r._)("select",{id:"selectInterpolation"},[(0,r._)("option",{id:"nearest",selected:"selected"},"Nearest"),(0,r._)("option",{id:"linear"},"Linear")])])],-1))),Y=C((()=>(0,r._)("tr",null,[(0,r._)("td",null,"Window Level:"),(0,r._)("td",null,[(0,r._)("input",{type:"checkbox",id:"checkboxWindowLevel",checked:""})])],-1))),$=C((()=>(0,r._)("tr",null,[(0,r._)("td",null,[(0,r._)("button",{id:"buttonReset"},"Reset views")])],-1))),Q=C((()=>(0,r._)("tr",null,[(0,r._)("td",null,"Shape:"),(0,r._)("td",{id:"shapeValue"},"null")],-1))),J=C((()=>(0,r._)("tr",null,[(0,r._)("td",null,"Spacing-X:"),(0,r._)("td",{id:"spacingXValue"},"null")],-1))),K=C((()=>(0,r._)("tr",null,[(0,r._)("td",null,"Spacing-Y:"),(0,r._)("td",{id:"spacingYValue"},"null")],-1))),q=C((()=>(0,r._)("tr",null,[(0,r._)("td",null,"Spacing-Z:"),(0,r._)("td",{id:"spacingZValue"},"null")],-1))),ee=(0,r.uE)('<div class="render" data-v-3a6e7206><div id="v1" class="view" data-v-3a6e7206></div><div id="v2" class="view" data-v-3a6e7206></div><div id="v3" class="view" data-v-3a6e7206></div><div id="v4" class="view" data-v-3a6e7206></div></div>',1),te=4096,ne=2048;var oe={__name:"MPR",setup(e){let t=null,n=null;function o(){t=null,n&&(n.close(),n=null)}const C=[[1,0,0],[0,1,0],[0,0,1],[.5,.5,.5]],oe=A.ZP.newInstance();oe.addRGBPoint(0,85/255,0,0),oe.addRGBPoint(95,1,1,1),oe.addRGBPoint(225,.66,.66,.5),oe.addRGBPoint(255,.3,1,.5);const re=B.ZP.newInstance();re.addPoint(0,0),re.addPoint(255,1);const ie=A.ZP.newInstance();ie.addRGBSegment(0,0,0,1,255,1,1,1);const ce=B.ZP.newInstance();function ae(e){return 3!==e.length?"rgb(0, 0, 0)":`rgb(${(255*e[0]).toString()}, ${(255*e[1]).toString()}, ${(255*e[2]).toString()})`}ce.addSegment(ne-.5*te,0,ne+.5*te,1);const le=(0,c.iH)(null);let se=null;const de=(0,c.iH)("Loading ...");let ue=(0,c.iH)("No file chosen");function ge(){const{viewAttributes:e}=le.value,t=document.getElementById("checkboxTranslation");e.forEach((e=>e.widgetInstance.setEnableTranslation(t.checked)))}function pe(){const e=document.getElementById("checkboxOrthogonality"),{viewAttributes:t}=le.value;t.forEach((t=>t.widgetInstance.setKeepOrthogonality(e.checked)))}function me(){const e=document.getElementById("checkboxRotation"),t=document.getElementById("checkboxOrthogonality"),{viewAttributes:n}=le.value;n.forEach((t=>t.widgetInstance.setEnableRotation(e.checked))),t.disabled=!e.checked,t.dispatchEvent(new Event("change"))}function ve(){const{widgetState:e,viewAttributes:t}=le.value,n=document.getElementById("checkboxShowRotation"),o=document.getElementById("checkboxRotation");e.getStatesWithLabel("rotation").forEach((e=>e.setVisible(n.checked))),t.forEach((e=>{e.interactor.render()})),o.checked=n.checked,o.disabled=!n.checked,o.dispatchEvent(new Event("change"))}function he(){const{widget:e,viewAttributes:t}=le.value,n=document.getElementById("checkboxScaleInPixels");e.setScaleInPixels(n.checked),t.forEach((e=>{e.interactor.render()}))}function fe(e){const{widget:t,viewAttributes:n}=le.value,o=document.getElementById("opacityValue");o.innerHTML=e.target.value,t.getWidgetState().getStatesWithLabel("handles").forEach((t=>t.setOpacity(e.target.value))),n.forEach((e=>{e.interactor.render()}))}function we(e){const{viewAttributes:t}=le.value;t.forEach((t=>{t.reslice.setSlabMode(Number(e.target.value))})),xe()}function be(e){const{viewAttributes:t}=le.value,n=document.getElementById("slabNumberValue");n.innerHTML=e.target.value,t.forEach((t=>{t.reslice.setSlabNumberOfSlices(e.target.value)})),xe()}function ye(e){const{viewAttributes:t}=le.value;t.forEach((t=>{t.reslice.setInterpolationMode(Number(e.target.selectedIndex))})),xe()}function Ie(){const{widget:e,widgetState:t,initialPlanesState:n}=le.value;t.setPlanes({...n}),e.setCenter(e.getWidgetState().getImage().getCenter()),xe()}function Ee(){const e=document.getElementById("checkboxWindowLevel"),{viewAttributes:t}=le.value;t.forEach(((t,n)=>{n<3&&t.interactor.setInteractorStyle(e.checked?m.ZP.newInstance():v.ZP.newInstance())}))}function Pe(){document.getElementById("file").click()}function Se(){const e=document.getElementById("checkboxTranslation");e.addEventListener("change",ge);const t=document.getElementById("checkboxOrthogonality");t.addEventListener("change",pe);const n=document.getElementById("checkboxRotation");n.addEventListener("change",me);const o=document.getElementById("checkboxShowRotation");o.addEventListener("change",ve);const r=document.getElementById("checkboxScaleInPixels");r.addEventListener("change",he);const i=document.getElementById("opacity");i.addEventListener("input",fe);const c=document.getElementById("slabModeMin");c.value=S.Q.MIN;const a=document.getElementById("slabModeMax");a.value=S.Q.MAX;const l=document.getElementById("slabModeMean");l.value=S.Q.MEAN;const s=document.getElementById("slabModeSum");s.value=S.Q.SUM;const d=document.getElementById("slabMode");d.addEventListener("change",we);const u=document.getElementById("slabNumber");u.addEventListener("change",be);const g=document.getElementById("selectInterpolation");g.addEventListener("change",ye);const p=document.getElementById("buttonReset");p.addEventListener("click",Ie);const m=document.getElementById("checkboxWindowLevel");m.addEventListener("change",Ee);const v=document.getElementById("file");v.addEventListener("change",We);const h=document.getElementById("btnLoad");h.addEventListener("click",Pe)}function _e(){const e=document.getElementById("checkboxTranslation");e.removeEventListener("change",ge);const t=document.getElementById("checkboxOrthogonality");t.removeEventListener("change",pe);const n=document.getElementById("checkboxRotation");n.removeEventListener("change",me);const o=document.getElementById("checkboxShowRotation");o.removeEventListener("change",ve);const r=document.getElementById("checkboxScaleInPixels");r.removeEventListener("change",he);const i=document.getElementById("opacity");i.removeEventListener("input",fe);const c=document.getElementById("slabMode");c.removeEventListener("change",we);const a=document.getElementById("slabNumber");a.removeEventListener("change",be);const l=document.getElementById("selectInterpolation");l.removeEventListener("change",ye);const s=document.getElementById("buttonReset");s.removeEventListener("click",Ie);const d=document.getElementById("checkboxWindowLevel");d.removeEventListener("change",Ee);const u=document.getElementById("file");u.removeEventListener("change",We);const g=document.getElementById("btnLoad");g.removeEventListener("click",Pe)}function Me(){const e=[],t=b.ZP.newInstance(),n=t.getWidgetState();n.getStatesWithLabel("sphere").forEach((e=>e.setScale1(20)));const o=!0,r={...n.getPlanes()};let i=null;for(let c=0;c<4;c++){const n=document.getElementById(`v${c+1}`),r=d.ZP.newInstance();r.setContainer(n),r.resize();const s={grw:r,renderWindow:r.getRenderWindow(),renderer:r.getRenderer(),GLWindow:r.getOpenGLRenderWindow(),interactor:r.getInteractor(),widgetManager:y.ZP.newInstance(),orientationWidget:null};s.renderer.getActiveCamera().setParallelProjection(!0),s.renderer.setBackground(...C[c]),s.renderWindow.addRenderer(s.renderer),s.renderWindow.addView(s.GLWindow),s.interactor.setView(s.GLWindow),s.interactor.initialize(),s.interactor.bindEvents(n),s.renderWindow.setInteractor(s.interactor),s.widgetManager.setRenderer(s.renderer),c<3?(s.interactor.setInteractorStyle(m.ZP.newInstance()),s.widgetInstance=s.widgetManager.addWidget(t,_.oJ[c]),s.widgetInstance.setScaleInPixels(!0),s.widgetInstance.setKeepOrthogonality(!0),s.widgetManager.enablePicking(),s.widgetManager.setCaptureOn(E.iN.MOUSE_MOVE)):s.interactor.setInteractorStyle(v.ZP.newInstance()),s.reslice=g.ZP.newInstance(),s.reslice.setSlabMode(S.Q.MEAN),s.reslice.setSlabNumberOfSlices(1),s.reslice.setTransformInputSampling(!1),s.reslice.setAutoCropOutput(!0),s.reslice.setOutputDimensionality(2),s.resliceMapper=u.ZP.newInstance(),s.resliceMapper.setInputConnection(s.reslice.getOutputPort()),s.resliceActor=p.ZP.newInstance(),s.resliceActor.setMapper(s.resliceMapper),s.sphereSources=[],s.sphereMappers=[],s.sphereActors=[];for(let e=0;e<3;e++){const e=I.ZP.newInstance();e.setRadius(10);const t=h.ZP.newInstance();t.setInputConnection(e.getOutputPort());const n=a.ZP.newInstance();n.setMapper(t),n.getProperty().setColor(...C[c]),n.setVisibility(o),s.sphereSources.push(e),s.sphereMappers.push(t),s.sphereActors.push(n)}c<3?e.push(s):i=s;const f=l.ZP.newInstance();f.setDefaultStyle({text:"+X",fontStyle:"bold",fontFamily:"Arial",fontColor:"black",fontSizeScale:e=>e/2,faceColor:ae(C[0]),faceRotation:0,edgeThickness:.1,edgeColor:"black",resolution:400}),f.setXMinusFaceProperty({text:"-X",faceColor:ae(C[0])}),f.setYPlusFaceProperty({text:"+Y",faceColor:ae(C[1])}),f.setYMinusFaceProperty({text:"-Y",faceColor:ae(C[1])}),f.setZPlusFaceProperty({text:"+Z",faceColor:ae(C[2])}),f.setZMinusFaceProperty({text:"-Z",faceColor:ae(C[2])}),s.orientationAxes=f,s.orientationWidget=w.ZP.newInstance({actor:f,interactor:s.renderWindow.getInteractor()}),s.orientationWidget.setEnabled(!0),s.orientationWidget.setViewportCorner(w.ZP.Corners.BOTTOM_RIGHT),s.orientationWidget.setViewportSize(.15),s.orientationWidget.setMinPixelSize(50),s.orientationWidget.setMaxPixelSize(150)}Se(),le.value={widget:t,widgetState:n,initialPlanesState:r,viewAttributes:e,view3D:i}}function ke(e={viewType:"",reslice:null,actor:null,renderer:null,resetFocalPoint:!1,keepFocalPointPosition:!1,computeFocalPointOffset:!1,spheres:null}){const{widget:t,view3D:n}=le.value,o=t.updateReslicePlane(e.reslice,e.viewType);return o.modified&&(e.actor.setUserMatrix(e.reslice.getResliceAxes()),e.sphereSources[0].setCenter(...o.origin),e.sphereSources[1].setCenter(...o.point1),e.sphereSources[2].setCenter(...o.point2)),t.updateCameraPoints(e.renderer,e.viewType,e.resetFocalPoint,e.keepFocalPointPosition,e.computeFocalPointOffset),n.renderWindow.render(),o.modified}function xe(){const{viewAttributes:e,view3D:t}=le.value;e.forEach(((e,t)=>{ke({viewType:_.oJ[t],reslice:e.reslice,actor:e.resliceActor,renderer:e.renderer,resetFocalPoint:!0,keepFocalPointPosition:!1,computeFocalPointOffset:!0,sphereSources:e.sphereSources,resetViewUp:!0}),e.renderWindow.render()})),t.renderer.resetCamera(),t.renderer.resetCameraClippingRange()}function Ae(e,t,n){const{widget:o,viewAttributes:r,view3D:i}=le.value;o.setImage(e);const c=e.getDimensions(),l=e.getSpacing(),s=document.getElementById("shapeValue");s.innerHTML="("+c[0]+", "+c[1]+", "+c[2]+")";const d=document.getElementById("spacingXValue");d.innerHTML=l[0].toFixed(4);const u=document.getElementById("spacingYValue");u.innerHTML=l[1].toFixed(4);const g=document.getElementById("spacingZValue");g.innerHTML=l[2].toFixed(4);const p=M.ZP.newInstance();p.setInputData(e);const m=.7*Math.sqrt(e.getSpacing().map((e=>e*e)).reduce(((e,t)=>e+t),0));p.setSampleDistance(m);const v=k.ZP.newInstance();v.setMapper(p),v.getProperty().setRGBTransferFunction(0,t),v.getProperty().setScalarOpacity(0,n),v.getProperty().setInterpolationTypeToLinear(),v.getProperty().setScalarOpacityUnitDistance(0,x.ZP.getDiagonalLength(e.getBounds())/Math.max(...e.getDimensions())),v.getProperty().setGradientOpacityMinimumValue(0,0);const w=e.getPointData().getScalars()||e.getPointData().getArrays()[0],b=w.getRange();v.getProperty().setGradientOpacityMaximumValue(0,.05*(b[1]-b[0])),v.getProperty().setShade(!0),v.getProperty().setUseGradientOpacity(0,!0),v.getProperty().setGradientOpacityMinimumOpacity(0,0),v.getProperty().setGradientOpacityMaximumOpacity(0,1),v.getProperty().setAmbient(.2),v.getProperty().setDiffuse(.7),v.getProperty().setSpecular(.3),v.getProperty().setSpecularPower(8),i.renderer.addVolume(v),i.image=e,i.volumeMapper=p,i.volumeActor=v;const y=f.ZP.newInstance();y.setInputData(e);const I=h.ZP.newInstance();I.setInputData(y.getOutputData());const E=a.ZP.newInstance();E.setMapper(I),i.renderer.addActor(E),i.outline=y,i.outlineMapper=I,i.outlineActor=E,r.forEach(((t,n)=>{t.reslice.setInputData(e),t.renderer.addActor(t.resliceActor),i.renderer.addActor(t.resliceActor),t.sphereSources.forEach((t=>{t.setRadius((0,O.uH)(e.getBounds())/36)})),t.sphereActors.forEach((e=>{t.renderer.addActor(e),i.renderer.addActor(e)}));const c=t.reslice,a=_.oJ[n];r.forEach((e=>{e.widgetInstance.onInteractionEvent((({computeFocalPointOffset:e,canUpdateFocalPoint:n})=>{const r=o.getWidgetState().getActiveViewType(),i=r!==a&&n;ke({viewType:a,reslice:c,actor:t.resliceActor,renderer:t.renderer,resetFocalPoint:!1,keepFocalPointPosition:i,computeFocalPointOffset:e,sphereSources:t.sphereSources})}))})),ke({viewType:a,reslice:c,actor:t.resliceActor,renderer:t.renderer,resetFocalPoint:!0,keepFocalPointPosition:!1,computeFocalPointOffset:!0,sphereSources:t.sphereSources}),t.interactor.render()})),i.renderer.resetCamera(),i.renderer.resetCameraClippingRange();const S=P.length(e.getDimensions());document.getElementById("slabNumber").max=S}function Be(){Ce();const e=s.ZP.newInstance({fetchGzip:!0});e.setProgressCallback((e=>{if(e.lengthComputable){const t=Math.floor(100*e.loaded/e.total);de.value=`Loading ... ${t}%`}})),e.setUrl("https://kitware.github.io/vtk-js/data/volume/LIDC2.vti").then((()=>{e.loadData().then((()=>{Ae(e.getOutputData(),oe,re),Re()}))}))}let Le=!1;function Oe(e){const t=L.ZP.newInstance();t.parseAsArrayBuffer(e),Le&&(Te(),Me()),Ae(t.getOutputData(),ie,ce),Le=!0}function We(e){e.preventDefault();const n=e.dataTransfer,o=e.target.files||n.files;if(1===o.length){ue.value=o[0].name,Ce();const e=new FileReader;e.onload=function(){ue.value.endsWith(".vti")?(Oe(e.result),Re()):t.receive_data(ue.value+","+e.result,(e=>{const t=new TextEncoder;Oe(t.encode(e)),Re()}))},e.onprogress=function(e){if(e.lengthComputable){const t=Math.floor(100*e.loaded/e.total);de.value=`Loading ... ${t}%`}},ue.value.endsWith(".vti")?e.readAsArrayBuffer(o[0]):e.readAsDataURL(o[0])}}function Ce(){if(null===se){de.value="Loading ...";const e=document.querySelector(".render");se=W.kN.service({target:e,lock:!0,text:de,background:"rgba(0, 0, 0, 0.7)"})}}function Re(){null!==se&&(se.close(),se=null)}function Ze(e){e.orientationWidget.delete(),e.orientationAxes.delete(),e.sphereActors.forEach((e=>{e.delete()})),e.sphereMappers.forEach((e=>{e.delete()})),e.sphereSources.forEach((e=>{e.delete()})),e.resliceActor.delete(),e.resliceMapper.delete(),e.reslice.delete(),e.widgetManager.delete(),e.renderer.removeAllActors(),e.renderer.removeAllVolumes(),e.renderer.delete(),e.renderWindow.removeRenderer(e.renderer),e.renderWindow.removeView(e.GLWindow),e.renderWindow.render(),e.renderWindow.delete(),e.grw.setContainer(null),e.grw.delete(),e.interactor.delete()}function Te(){if(le.value){const{widget:e,widgetState:t,viewAttributes:n,view3D:o}=le.value;_e(),n.forEach((e=>{Ze(e)})),Ze(o),o.image.delete(),o.volumeMapper.delete(),o.volumeActor.delete(),o.outline.delete(),o.outlineMapper.delete(),o.outlineActor.delete(),e.delete(),t.unbindAll(),t.delete(),le.value=null}}return(0,r.bv)((()=>{Me(),Be()})),(0,r.Jd)((()=>{o(),Te()})),(e,t)=>((0,r.wg)(),(0,r.iD)("div",R,[(0,r._)("div",Z,[(0,r._)("table",null,[(0,r._)("tr",null,[T,(0,r._)("td",null,[(0,r._)("label",D,(0,i.zw)((0,c.SU)(ue)),1)])]),F,V,N,G,j,H,U,z,X,Y,$,Q,J,K,q])]),ee]))}},re=n(89);const ie=(0,re.Z)(oe,[["__scopeId","data-v-3a6e7206"]]);var ce=ie;const ae={class:"display"};var le={__name:"MainView",setup(e){return(e,t)=>((0,r.wg)(),(0,r.iD)("div",ae,[(0,r.Wm)(ce,{ref:"mpr"},null,512)]))}};const se=(0,re.Z)(le,[["__scopeId","data-v-76f6abce"]]);var de=se,ue={__name:"App",setup(e){return(e,t)=>((0,r.wg)(),(0,r.j4)(de))}};const ge=ue;var pe=ge,me=n(65),ve=(0,me.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),he=n(2483);const fe=[{path:"/",name:"home",component:de}],we=(0,he.p7)({history:(0,he.r5)("/mpr/"),routes:fe});var be=we,ye=n(1885);n(4415);(0,o.ri)(pe).use(be).use(ve).use(ye.Z).mount("#app")},5042:function(){}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,r,i){if(!o){var c=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var a=!0,l=0;l<o.length;l++)(!1&i||c>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(a=!1,i<c&&(c=i));if(a){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,c=o[0],a=o[1],l=o[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var d=l(n)}for(t&&t(o);s<c.length;s++)i=c[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkmpr"]=self["webpackChunkmpr"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7890)}));o=n.O(o)})();