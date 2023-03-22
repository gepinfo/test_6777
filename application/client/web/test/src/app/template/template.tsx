
    import React from "react";
    import {Link } from 'react-router-dom';
    import "./template.scss";


    class Template extends React.Component {
      render (){
        return(
          <>
    <div id="template-iswjn" className="">
var items = document.querySelectorAll('#template-iak8e');
   for (var i = 0, len = items.length; i < len; i++) {
     (function(){
       var e,t=0,n=function(){
         var e,t=document.createElement("void"),n={
           transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};
         for(e in n)if(void 0!==t.style[e])return n[e]}
       (),r=function(e){
         var t=window.getComputedStyle(e),n=t.display,r=(t.position,t.visibility,t.height,parseInt(t["max-height"]));
         if("none"!==n&&"0"!==r)return e.offsetHeight;
         e.style.height="auto",e.style.display="block",e.style.position="absolute",e.style.visibility="hidden";
         var i=e.offsetHeight;
         return e.style.height="",e.style.display="",e.style.position="",e.style.visibility="",i}
       ,i=function(e){
         t=1;
         var n=r(e),i=e.style;
         i.display="block",i.transition="max-height 0.25s ease-in-out",i.overflowY="hidden",""==i["max-height"]&&(i["max-height"]=0),0==parseInt(i["max-height"])?(i["max-height"]="0",setTimeout(function(){
           i["max-height"]=n+"px"}
 ,10)):i["max-height"]="0"}
       ,a=function(r){
         if(r.preventDefault(),!t){
           var a=this.closest("[data-gjs=navbar]"),o=a.querySelector("[data-gjs=navbar-items]");
           i(o),e||(o.addEventListener(n,function(){
             t=0;
             var e=o.style;
             0==parseInt(e["max-height"])&&(e.display="",e["max-height"]="")}
                                      ),e=1)}
       };
       "gjs-collapse"in this||this.addEventListener("click",a),this["gjs-collapse"]=1
     }
      .bind(items[i]))();
   }
 </div>
 
            
    <section id="main" className="rows ">
<div id="template-i8yhw" className="gjs-cell">
<img id="template-ia1ec" src="https://grapesjs-images.s3.amazonaws.com/grapesjsimages/black_tea.jpg" className=""/>
</div>
</section>
 
            </>
          );
        };
      };
      export default Template;
    