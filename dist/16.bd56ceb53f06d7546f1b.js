(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0Pcb":function(t,e,i){"use strict";const n=function(){const t=window.navigator.userAgent;return window.location.href,function(t){const e={},i=t.indexOf("iPhone")>=0||t.indexOf("iPad")>=0||t.indexOf("iPod")>=0,n=t.indexOf("Android")>0;return e.ios=i,e.android=n,e.mobile=i||n,e.pc=!i&&!n,e}(t)}();e.a=n},Qb4n:function(t,e,i){"use strict";var n=i("kZAv");e.a=class{constructor(){this.el=document.createElement("canvas")}initCanvasSize(t,e){this.el.width=t,this.el.height=e,this.width=t,this.height=e}getContext(t,e){return this.el.getContext(t,e)}render(t){this.container=t;let{width:e,height:i}=t.getBoundingClientRect();this.initCanvasSize(e||n.d,i||n.b),this.container.innerHTML="",this.container.appendChild(this.el)}}},jJnk:function(t,e,i){"use strict";i.r(e);var n=i("Qb4n"),s=i("kZAv");e.default=class extends n.a{constructor(){super(),this.ctx=this.getContext("2d")}initVariable(){this.radius=Math.min(this.width,this.height)/2*.8,this.radius=Math.min(this.radius,200),this.centerRadius=10,this.marginBound=20,this.font=s.a,this.secondPointerLength=this.radius-this.marginBound,this.minutePointerLength=.8*this.secondPointerLength,this.hourPointerLength=.6*this.secondPointerLength}setCtxAttribute(){let{ctx:t}=this;t.fillStyle="#000000",t.strokeStyle="#000000",t.lineWidth=.5,t.font=this.font}drawDisc(t){t.beginPath(),t.arc(0,0,this.radius,0,2*Math.PI),t.stroke()}drawScale(t){let e,i=this.radius-this.marginBound,n=["1","2","3","4","5","6","7","8","9","10","11","12"];t.save(),t.textAlign="center",t.textBaseline="middle";for(let s=0,r=n.length;s<r;s++)e=Math.PI/6*(s-2),t.fillText(n[s],i*Math.cos(e),i*Math.sin(e));t.restore()}drawCenterArc(t){t.save(),t.fillStyle="red",t.beginPath(),t.arc(0,0,this.centerRadius,0,2*Math.PI,!1),t.closePath(),t.fill(),t.restore()}drawHourPointer(t,e){let i=Math.PI/6*(e-3);this.drawPointer(t,i,this.hourPointerLength)}drawMinutePointer(t,e){let i=Math.PI/30*(e-15);t.save(),t.fillStyle="#4286f4",t.strokeStyle="#4286f4",this.drawPointer(t,i,this.minutePointerLength),t.restore()}drawSecondPointer(t,e){let i=Math.PI/30*(e-15);t.save(),t.rotate(i),t.lineWidth=1,t.fillStyle="#ffffff",t.beginPath(),t.arc(0,0,.8*this.centerRadius,0,2*Math.PI),t.fill(),t.fillStyle="#e01619",t.beginPath(),t.arc(0,0,.6*this.centerRadius,0,2*Math.PI),t.fill(),t.strokeStyle="#a52729",t.beginPath(),t.moveTo(0,0),t.lineTo(this.secondPointerLength,0),t.stroke(),t.restore()}drawPointer(t,e,i){let n=45*Math.PI/180,s=this.centerRadius*Math.cos(n),r=this.centerRadius*Math.sin(n);t.save(),t.rotate(e),t.beginPath(),t.moveTo(s,-r),t.lineTo(i,0),t.lineTo(s,r),t.arc(0,0,this.centerRadius,n,2*Math.PI-n),t.closePath(),t.fill(),t.stroke(),t.restore()}startClock(){let{ctx:t,width:e,height:i}=this;t.clearRect(-e/2,-i/2,e,i);let n=new Date,s=n.getHours(),r=n.getMinutes(),h=n.getSeconds();this.drawDisc(t),this.drawCenterArc(t),this.drawScale(t),this.drawHourPointer(t,s),this.drawMinutePointer(t,r),this.drawSecondPointer(t,h),window.requestAnimationFrame(this.startClock.bind(this))}render(t){super.render(t),this.initVariable(),this.setCtxAttribute(),this.ctx.translate(this.width/2,this.height/2),this.startClock()}}},kZAv:function(t,e,i){"use strict";i.d(e,"d",function(){return n}),i.d(e,"b",function(){return s}),i.d(e,"a",function(){return r}),i.d(e,"c",function(){return h});const n=500,s=500,r=`${i("0Pcb").a.pc?24:16}px sans-serif`,h="https://snayan.github.io/canvas-demo/"}}]);