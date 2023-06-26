(function(){var e={8680:function(e,t,n){"use strict";var a=n(9242),r=n(3396),o=n(7139),i=n(4870),l=n(4775),s=(n(4293),n(9591),n(5255)),c=(n(600),n(3577)),d=n(6960),u=n(8514),p=n(7066),v=n(5522),g=n(9879),f=n(4446),m=n(2262);const w=e=>((0,r.dD)("data-v-3052ae52"),e=e(),(0,r.Cn)(),e),P={id:"reco"},h=w((()=>(0,r._)("h2",null,"Scan Sequence",-1))),y=w((()=>(0,r._)("div",{class:"context"},null,-1)));var _={emits:["change_frame_id"],setup(e,{expose:t,emit:n}){const a=1,o=(0,i.iH)(1),w=(0,i.iH)(a),_=(0,i.iH)(null),b=(0,i.iH)(0),I=(0,i.iH)(0);let Z=null;const O=(0,i.iH)("Loading");function C(){const e=c.ZP.newInstance(),t=d.ZP.newInstance();e.addRenderer(t);const n=p.ZP.newInstance(),a=document.querySelector(".context");n.setContainer(a),e.addView(n);const r=a.getBoundingClientRect();n.setSize(r.width,r.height);const o=u.ZP.newInstance();o.setView(n),o.initialize(),o.bindEvents(a);const i=m.ZP.newInstance(),l=f.ZP.newInstance(),s=g.ZP.newInstance(),w=v.ZP.newInstance();_.value={renderWindow:e,renderer:t,openGlRenderWindow:n,interactor:o,actor:w,mapper:s,reslice:l,reader:i,container:a}}let S=!1;function W(){const{reader:e,reslice:t,mapper:n,actor:r,renderer:i,renderWindow:l}=_.value;I.value=0;const c=e=>{e.lengthComputable?(I.value=Math.floor(100*e.loaded/e.total),I.value<100&&(O.value="Loading "+I.value+"%")):I.value=100};s.Z.fetchBinary("/data/frame_"+b.value+".vti",{progressCallback:c}).then((s=>{e.parseAsArrayBuffer(s);const c=e.getOutputData(0),d=c.getExtent();w.value=a,o.value=d[1]+1,t.setInputData(c),n.setInputConnection(t.getOutputPort()),n.setISlice(w.value-1),n.onModified((()=>{l.render()})),r.setMapper(n),i.addActor(r),S||(i.getActiveCamera().setPosition(-1,0,0),S=!0),i.getActiveCamera().setViewUp(0,-1,0),i.getActiveCamera().setParallelProjection(!0),i.resetCamera(),l.render(),R()}))}function D(){const{container:e}=_.value;null===Z&&(Z=l.kN.service({target:e,lock:!0,text:O,background:"rgba(0, 0, 0, 0.7)"}))}function R(){null!==Z&&(Z.close(),Z=null)}function x(){if(_.value){const{renderWindow:e,renderer:t,openGlRenderWindow:n,interactor:a,actor:r,mapper:o,reslice:i,reader:l}=_.value;l.delete(),i.delete(),o.delete(),r.delete(),a.delete(),n.delete(),t.delete(),e.delete(),_.value=null}}function k(e){const{mapper:t}=_.value;t.setISlice(e-1),n("change_frame_id",e)}function M(e){if(b.value=e,_.value){const{actor:e,mapper:t,reslice:n,reader:a}=_.value;a.delete(),n.delete(),t.delete(),e.delete()}const t=m.ZP.newInstance(),n=f.ZP.newInstance(),a=g.ZP.newInstance(),r=v.ZP.newInstance(),{renderWindow:o,renderer:i,openGlRenderWindow:l,interactor:s,container:c}=_.value;i.removeAllActors(),_.value={renderWindow:o,renderer:i,openGlRenderWindow:l,interactor:s,actor:r,mapper:a,reslice:n,reader:t,container:c},D(),W()}return(0,r.bv)((()=>{C(),D(),W()})),(0,r.Jd)((()=>{x()})),t({data_id_change:M,data_id:b}),(e,t)=>{const n=(0,r.up)("el-slider");return(0,r.wg)(),(0,r.iD)("div",P,[h,y,(0,r.Wm)(n,{modelValue:w.value,"onUpdate:modelValue":t[0]||(t[0]=e=>w.value=e),min:a,max:o.value,onInput:k,"show-input":""},null,8,["modelValue","max"])])}}},b=n(89);const I=(0,b.Z)(_,[["__scopeId","data-v-3052ae52"]]);var Z=I,O=(n(9629),n(4527)),C=n(787),S=n(680),W=n(6439),D=n(7819),R=n(5356),x=n(6265),k=n.n(x),M=n(4876),A=n(4173),G=n(907),H=n(9547);const B=e=>((0,r.dD)("data-v-51615316"),e=e(),(0,r.Cn)(),e),U={id:"reco"},L=B((()=>(0,r._)("h2",null,"Ground Truth",-1))),V=B((()=>(0,r._)("div",{class:"con1"},null,-1))),z=[L,V];var T={setup(e,{expose:t}){const n=1,a=(0,i.iH)(1),o=(0,i.iH)(n),v=(0,i.iH)(null),g=(0,i.iH)(0),f=(0,i.iH)(0);let w=null,P=!1,h=!1;const y=(0,i.iH)("Loading"),_=M.ZP.newInstance();_.addRGBPoint(0,85/255,0,0),_.addRGBPoint(95,1,1,1),_.addRGBPoint(225,.66,.66,.5),_.addRGBPoint(255,.3,1,.5);const b=A.ZP.newInstance();b.addPoint(0,0),b.addPoint(255,1);let I={};function Z(e,t){const n=[2*e[t][0][0]-e[t][2][0],2*e[t][0][1]-e[t][2][1],2*e[t][0][2]-e[t][2][2]],a=[e[t][1][0],e[t][1][1],e[t][1][2]],r=[2*e[t][0][0]-e[t][1][0],2*e[t][0][1]-e[t][1][1],2*e[t][0][2]-e[t][1][2]];return[n,a,r]}function x(){const e=c.ZP.newInstance();I.renderWindow=e;const t=d.ZP.newInstance();e.addRenderer(t);const n=p.ZP.newInstance(),a=document.querySelector(".con1");n.setContainer(a),e.addView(n);const r=a.getBoundingClientRect();n.setSize(r.width,r.height);const o=u.ZP.newInstance();o.setView(n),o.initialize(),o.bindEvents(a),o.setInteractorStyle(O.ZP.newInstance());const i=m.ZP.newInstance(),l=S.ZP.newInstance(),s=C.ZP.newInstance();v.value={renderWindow:e,renderer:t,openGlRenderWindow:n,interactor:o,actor:s,mapper:l,reader:i,container:a}}function B(){P=!0;const{reader:e,mapper:t,actor:n,renderWindow:a,renderer:r}=v.value;f.value=0;const o=e=>{e.lengthComputable?(f.value=Math.floor(100*e.loaded/e.total),f.value<100&&(y.value="Loading "+f.value+"%")):f.value=100};s.Z.fetchBinary("/data/volume_"+g.value+".vti",{progressCallback:o}).then((o=>{e.parseAsArrayBuffer(o);const i=e.getOutputData(0),l=i.getPointData().getScalars()||i.getPointData().getArrays()[0],s=l.getRange();t.setInputData(i);const c=.7*Math.sqrt(i.getSpacing().map((e=>e*e)).reduce(((e,t)=>e+t),0));t.setSampleDistance(c),n.setMapper(t),n.getProperty().setRGBTransferFunction(0,_),n.getProperty().setScalarOpacity(0,b),n.getProperty().setInterpolationTypeToLinear(),n.getProperty().setScalarOpacityUnitDistance(0,G.ZP.getDiagonalLength(i.getBounds())/Math.max(...i.getDimensions())),n.getProperty().setGradientOpacityMinimumValue(0,0),n.getProperty().setGradientOpacityMaximumValue(0,.05*(s[1]-s[0])),n.getProperty().setShade(!0),n.getProperty().setUseGradientOpacity(0,!0),n.getProperty().setGradientOpacityMinimumOpacity(0,0),n.getProperty().setGradientOpacityMaximumOpacity(0,1),n.getProperty().setAmbient(.2),n.getProperty().setDiffuse(.7),n.getProperty().setSpecular(.3),n.getProperty().setSpecularPower(8),r.addVolume(n);const d=H.ZP.newInstance();d.setCamera(r.getActiveCamera()),d.setDataBounds(n.getBounds()),r.addActor(d),r.resetCamera(),a.render(),P=!1,T()}))}function L(){h=!0,k().get("/data/series_"+g.value+".json").then((e=>{if(0===e.data.code){const t=e.data.data;I.series=t,o.value=n,a.value=t.length;const r=W.ZP.newInstance();I.plane=r;const[i,l,s]=Z(t,0);r.setOrigin(i),r.setPoint1(l),r.setPoint2(s);const c=D.ZP.newInstance(),d=R.ZP.newInstance();c.setInputConnection(r.getOutputPort()),d.setMapper(c),d.getProperty().setColor([.25,.5,1]);const{renderWindow:u,renderer:p}=v.value;p.addActor(d),p.resetCamera(),u.render(),h=!1,T()}}))}function V(){const{container:e}=v.value;null===w&&(w=l.kN.service({target:e,lock:!0,text:y,background:"rgba(0, 0, 0, 0.7)"}))}function T(){null===w||P||h||(w.close(),w=null)}function j(){if(v.value){const{renderWindow:e,renderer:t,openGlRenderWindow:n,interactor:a,actor:r,mapper:o,reader:i}=v.value;i.delete(),o.delete(),r.delete(),a.delete(),n.delete(),t.delete(),e.delete(),v.value=null}}function q(e){const[t,n,a]=Z(I.series,e-1);I.plane.setOrigin(t),I.plane.setPoint1(n),I.plane.setPoint2(a),I.renderWindow.render()}function F(e){if(g.value=e,v.value){const{actor:e,mapper:t,reader:n}=v.value;n.delete(),t.delete(),e.delete()}const t=m.ZP.newInstance(),n=S.ZP.newInstance(),a=C.ZP.newInstance(),{renderWindow:r,renderer:o,openGlRenderWindow:i,interactor:l,container:s}=v.value;o.removeAllActors(),v.value={renderWindow:r,renderer:o,openGlRenderWindow:i,interactor:l,actor:a,mapper:n,reader:t,container:s},V(),B(),L()}return(0,r.bv)((()=>{x(),V(),B(),L()})),(0,r.Jd)((()=>{j()})),t({value_change:q,value:o,data_id_change:F,data_id:g}),(e,t)=>((0,r.wg)(),(0,r.iD)("div",U,z))}};const j=(0,b.Z)(T,[["__scopeId","data-v-51615316"]]);var q=j;const F=e=>((0,r.dD)("data-v-9b54dfee"),e=e(),(0,r.Cn)(),e),N={id:"reco"},E=F((()=>(0,r._)("h2",null,"Reconstructed Volume",-1))),J=F((()=>(0,r._)("div",{class:"con2"},null,-1))),K=(0,r.Uk)("Online Reconstruction");var Y={emits:["reconstructing"],setup(e,{expose:t,emit:n}){const a=1,o=(0,i.iH)(1),v=(0,i.iH)(a),g=(0,i.iH)(null),f=(0,i.iH)(0),w=(0,i.iH)(0);let P=null,h=!1,y=!1;const _=(0,i.iH)("Pending ...");let b=null;const I=(0,i.iH)(!1),Z=M.ZP.newInstance();Z.addRGBPoint(0,85/255,0,0),Z.addRGBPoint(95,1,1,1),Z.addRGBPoint(225,.66,.66,.5),Z.addRGBPoint(255,.3,1,.5);const x=A.ZP.newInstance();x.addPoint(0,0),x.addPoint(255,1);let B={};function U(e,t){const n=[2*e[t][0][0]-e[t][2][0],2*e[t][0][1]-e[t][2][1],2*e[t][0][2]-e[t][2][2]],a=[e[t][1][0],e[t][1][1],e[t][1][2]],r=[2*e[t][0][0]-e[t][1][0],2*e[t][0][1]-e[t][1][1],2*e[t][0][2]-e[t][1][2]];return[n,a,r]}function L(){const e=c.ZP.newInstance();B.renderWindow=e;const t=d.ZP.newInstance();e.addRenderer(t);const n=p.ZP.newInstance(),a=document.querySelector(".con2");n.setContainer(a),e.addView(n);const r=a.getBoundingClientRect();n.setSize(r.width,r.height);const o=u.ZP.newInstance();o.setView(n),o.initialize(),o.bindEvents(a),o.setInteractorStyle(O.ZP.newInstance());const i=m.ZP.newInstance(),l=S.ZP.newInstance(),s=C.ZP.newInstance();g.value={renderWindow:e,renderer:t,openGlRenderWindow:n,interactor:o,actor:s,mapper:l,reader:i,container:a}}function V(){h=!0;const{reader:e,mapper:t,actor:n,renderWindow:a,renderer:r}=g.value;w.value=0;const o=e=>{e.lengthComputable?(w.value=Math.floor(100*e.loaded/e.total),w.value<100&&(_.value="Loading "+w.value+"%")):w.value=100};s.Z.fetchBinary("/data/reco_volume_"+f.value+".vti",{progressCallback:o}).then((o=>{e.parseAsArrayBuffer(o);const i=e.getOutputData(0),l=i.getPointData().getScalars()||i.getPointData().getArrays()[0],s=l.getRange();t.setInputData(i);const c=.7*Math.sqrt(i.getSpacing().map((e=>e*e)).reduce(((e,t)=>e+t),0));t.setSampleDistance(c),n.setMapper(t),n.getProperty().setRGBTransferFunction(0,Z),n.getProperty().setScalarOpacity(0,x),n.getProperty().setInterpolationTypeToLinear(),n.getProperty().setScalarOpacityUnitDistance(0,G.ZP.getDiagonalLength(i.getBounds())/Math.max(...i.getDimensions())),n.getProperty().setGradientOpacityMinimumValue(0,0),n.getProperty().setGradientOpacityMaximumValue(0,.05*(s[1]-s[0])),n.getProperty().setShade(!0),n.getProperty().setUseGradientOpacity(0,!0),n.getProperty().setGradientOpacityMinimumOpacity(0,0),n.getProperty().setGradientOpacityMaximumOpacity(0,1),n.getProperty().setAmbient(.2),n.getProperty().setDiffuse(.7),n.getProperty().setSpecular(.3),n.getProperty().setSpecularPower(8),r.addVolume(n);const d=H.ZP.newInstance();d.setCamera(r.getActiveCamera()),d.setDataBounds(n.getBounds()),r.addActor(d),r.resetCamera(),a.render(),h=!1,j()}))}function z(){y=!0,k().get("/data/reco_series_"+f.value+".json").then((e=>{if(0===e.data.code){const t=e.data.data;B.series=t,v.value=a,o.value=t.length;const n=W.ZP.newInstance();B.plane=n;const[r,i,l]=U(t,0);n.setOrigin(r),n.setPoint1(i),n.setPoint2(l);const s=D.ZP.newInstance(),c=R.ZP.newInstance();s.setInputConnection(n.getOutputPort()),c.setMapper(s),c.getProperty().setColor([.25,.5,1]);const{renderWindow:d,renderer:u}=g.value;u.addActor(c),u.resetCamera(),d.render(),y=!1,j()}}))}function T(){const{container:e}=g.value;null===P&&(P=l.kN.service({target:e,lock:!0,text:_,background:"rgba(0, 0, 0, 0.7)"}))}function j(){null===P||h||y||(P.close(),P=null,I.value=!1,n("reconstructing",!1))}function q(){if(g.value){const{actor:e,mapper:t,reader:n}=g.value;n.delete(),t.delete(),e.delete()}const e=m.ZP.newInstance(),t=S.ZP.newInstance(),n=C.ZP.newInstance(),{renderWindow:a,renderer:r,openGlRenderWindow:o,interactor:i,container:l}=g.value;r.removeAllActors(),a.render(),g.value={renderWindow:a,renderer:r,openGlRenderWindow:o,interactor:i,actor:n,mapper:t,reader:e,container:l}}function F(){if(g.value){const{renderWindow:e,renderer:t,openGlRenderWindow:n,interactor:a,actor:r,mapper:o,reader:i}=g.value;i.delete(),o.delete(),r.delete(),a.delete(),n.delete(),t.delete(),e.delete(),g.value=null}}function Y(e){const[t,n,a]=U(B.series,e-1);B.plane.setOrigin(t),B.plane.setPoint1(n),B.plane.setPoint2(a),B.renderWindow.render()}function $(e){f.value=e,q()}function Q(){k().get("/api/message/"+sessionStorage.getItem("sid")).then((e=>{0===e.data.code&&("Finished!"===e.data.data?(clearInterval(b),b=null,V(),z()):_.value=e.data.data)}))}function X(){k().get("/api/online/volume/"+sessionStorage.getItem("sid")+"/"+f.value).then((e=>{0===e.data.code&&(b=setInterval(Q,1e3))}))}function ee(){I.value=!0,n("reconstructing",!0),q(),_.value="Pending ...",T(),X()}return(0,r.bv)((()=>{L()})),(0,r.Jd)((()=>{F()})),t({value_change:Y,value:v,data_id_change:$,data_id:f}),(e,t)=>{const n=(0,r.up)("el-button");return(0,r.wg)(),(0,r.iD)("div",N,[E,J,(0,r.Wm)(n,{type:"primary",size:"large",onClick:ee,disabled:I.value},{default:(0,r.w5)((()=>[K])),_:1},8,["disabled"])])}}};const $=(0,b.Z)(Y,[["__scopeId","data-v-9b54dfee"]]);var Q=$;const X=e=>((0,r.dD)("data-v-20faf732"),e=e(),(0,r.Cn)(),e),ee={class:"display"},te={class:"tm"},ne={class:"render"},ae={class:"r1"},re={class:"r2"},oe={class:"r3"},ie=X((()=>(0,r._)("div",{class:"tips"},[(0,r._)("p",null,[(0,r.Uk)(' Hello and welcome to RecON Demo! This is a demo of our paper "RecON: Online Learning for Sensorless Freehand 3D Ultrasound Reconstruction" submitted to '),(0,r._)("i",null,"Medical Image Analysis"),(0,r.Uk)(". The following steps can help you utilize this demo more effectively. ")]),(0,r._)("ol",null,[(0,r._)("li",null,"Choose an ultrasound scan from the left-hand list."),(0,r._)("li",null,"Move the slider below the scan sequence to examine the sequence images."),(0,r._)("li",null,'Click the "Online Reconstruction" button below the reconstructed volume to start online reconstruction.'),(0,r._)("li",null,"Move the mouse to interactively view the 3D volume.")])],-1)));var le={emits:["reconstructing"],setup(e,{expose:t,emit:n}){const a=(0,i.iH)("DDH Case 1 (linear, loop, sector, and fast-slow strategies)"),l=(0,i.iH)(),s=(0,i.iH)(),c=(0,i.iH)();function d(e){s.value.value_change(e),s.value.value=e,c.value.value_change(e),c.value.value=e}function u(e,t){a.value=e,l.value.data_id_change(t),l.value.data_id=t,s.value.data_id_change(t),s.value.data_id=t,c.value.data_id_change(t),c.value.data_id=t}function p(e){n("reconstructing",e)}return t({data_id_change:u}),(e,t)=>((0,r.wg)(),(0,r.iD)("div",ee,[(0,r._)("div",te,[(0,r._)("h1",null,"Data: "+(0,o.zw)(a.value),1)]),(0,r._)("div",ne,[(0,r._)("div",ae,[(0,r.Wm)((0,i.SU)(Z),{ref_key:"frame",ref:l,onChange_frame_id:d},null,512)]),(0,r._)("div",re,[(0,r.Wm)((0,i.SU)(q),{ref_key:"actual",ref:s},null,512)]),(0,r._)("div",oe,[(0,r.Wm)((0,i.SU)(Q),{ref_key:"reco",ref:c,onReconstructing:p},null,512)])]),ie]))}};const se=(0,b.Z)(le,[["__scopeId","data-v-20faf732"]]);var ce=se,de=n(7178);const ue=(0,r._)("div",{class:"title"},[(0,r._)("h1",null,"RecON Demo"),(0,r._)("h3",null,"RecON: Online Learning for Sensorless Freehand 3D Ultrasound Reconstruction")],-1),pe=["onClick"],ve={class:"img_title"},ge=(0,r._)("div",{class:"foot"},[(0,r._)("h3",null,"© Medical Ultrasound Image Computing Laboratory (MUSIC Lab) of Shenzhen University, China. All rights reserved.")],-1);var fe={setup(e){const t=(0,i.iH)(),n=(0,i.iH)(),a=(0,i.iH)(null);let l=0;const s=(0,i.iH)(!1);function c(e,r){if(r!==l)if(s.value){const e=a.value[l];de.z8.error("Reconstructing ("+e.slice(0,e.indexOf("(")-1)+") in progress!")}else n.value[l].style.border="2px solid black",n.value[l].style.background="",n.value[r].style.border="4px solid rgb(64, 128, 255)",n.value[r].style.background="#ccc",t.value.data_id_change(e,r),l=r}function d(e){s.value=e}function u({container:e=document.body,width:t="400px",height:n="300px",textAlign:a="center",textBaseline:r="middle",font:o="20px Microsoft Yahei",fillStyle:i="rgba(184, 184, 184, 0.4)",content:l="MUSIC Lab @ SZU",rotate:s="30",zIndex:c=1e3}={}){const d=arguments[0],p=document.createElement("canvas");p.setAttribute("width",t),p.setAttribute("height",n);const v=p.getContext("2d");v.textAlign=a,v.textBaseline=r,v.font=o,v.fillStyle=i,v.rotate(Math.PI/180*s),v.fillText(l,parseFloat(t)/2,parseFloat(n)/2);const g=p.toDataURL(),f=document.querySelector(".__wm"),m=f||document.createElement("div"),w=`\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    z-index:${c};\n    pointer-events:none;\n    background-repeat:repeat;\n    background-image:url('${g}')`;m.setAttribute("style",w),m.classList.add("__wm"),f||(e.style.position="relative",e.insertBefore(m,e.firstChild));const P=window.MutationObserver||window.WebKitMutationObserver;if(P){let t=new P((function(){const e=document.querySelector(".__wm");(e&&e.getAttribute("style")!==w||!e)&&(t.disconnect(),t=null,u(JSON.parse(JSON.stringify(d))))}));t.observe(e,{attributes:!0,subtree:!0,childList:!0})}}return(0,r.bv)((()=>{let e=setInterval((()=>{"undefined"!=typeof n.value&&(clearInterval(e),e=null,n.value[l].style.border="4px solid rgb(64, 128, 255)",n.value[l].style.background="#ccc")}),100)})),a.value=["DDH Case 1 (linear, loop, sector, and fast-slow strategies)","DDH Case 2 (linear, loop, sector, and fast-slow strategies)","Fetus Case 1 (linear, loop, sector, and fast-slow strategies)","Fetus Case 2 (linear, loop, sector, and fast-slow strategies)","Spine Case 1 (linear strategy)","Spine Case 2 (linear strategy)"],u({content:"MUSIC Lab @ SZU"}),(e,l)=>{const s=(0,r.up)("el-header"),u=(0,r.up)("el-image"),p=(0,r.up)("el-scrollbar"),v=(0,r.up)("el-aside"),g=(0,r.up)("el-main"),f=(0,r.up)("el-footer"),m=(0,r.up)("el-container");return(0,r.wg)(),(0,r.j4)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[ue])),_:1}),(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{class:"aside_file"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.value,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"aside_block",ref_for:!0,ref_key:"img_list",ref:n,key:t,onClick:n=>c(e,t)},[(0,r._)("div",ve,(0,o.zw)(e.slice(0,e.indexOf("(")-1)),1),(0,r.Wm)(u,{src:"/data/image_"+t+".png",lazy:""},null,8,["src"])],8,pe)))),128))])),_:1})])),_:1}),(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[(0,r.Wm)((0,i.SU)(ce),{ref_key:"reco",ref:t,onReconstructing:d},null,512)])),_:1}),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[ge])),_:1})])),_:1})])),_:1})])),_:1})}}};const me=fe;var we=me,Pe=n(678);const he=[{path:"/",name:"home",component:ce}],ye=(0,Pe.p7)({history:(0,Pe.r5)("/RecON/"),routes:he});var _e=ye,be=n(65),Ie=(0,be.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),Ze=n(6726);n(4415);(0,a.ri)(we).use(Ie).use(_e).use(Ze.Z).mount("#app")},5042:function(){}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){n.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){n.amdO={}}(),function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],r=e[d][1],o=e[d][2];for(var l=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],l=a[1],s=a[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var d=s(n)}for(t&&t(a);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},a=self["webpackChunkrecon_web"]=self["webpackChunkrecon_web"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8680)}));a=n.O(a)})();