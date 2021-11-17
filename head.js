/* 2021/11/17 by龙  */
(function(){
	let title = document.getElementById('headInfo').getAttribute('data-title');
	let url = document.getElementById('headInfo').getAttribute('data-url');
	title = title || document.title;
	let css =`.max_title {z-index: 10;height: 1rem;width: 100%;background: var(--themecolor, #FC3964);display: flex;align-items: center;border: none;position: fixed;top: 0;}.max_title div {display: flex;align-items: center;justify-content: center;}body{padding-top: 1rem;}.max_title_icon {width: 0.2rem;height: 0.36rem;margin-left: -1.5rem;}.flex_1 {flex: 1;}.c_h_FF {color: #FFFFFF;}.f_17 {font-size: 0.34rem;}@-webkit-keyframes HeroLoad{50%{ transform:scale(0.4); opacity:.4;}100%{ transform:scale(1); opacity:1;}}#HeroLoad {display:none;position: fixed;width: 100px;height: 100px;background: #0000009c;border-radius: 10px;top: calc(50% - 50px);left: calc(50% - 50px);z-index: 3000;box-shadow: 0px 0px 6px 3px rgb(0 0 0 / 10%);}#HeroLoad i{ display:block; width:16px;height:16px;border-radius:50%; background-color:white; position:absolute;}#HeroLoad i:nth-child(1){bottom: 8px;left: calc(50% - 8px);-webkit-animation: HeroLoad 1s ease 0s infinite;}#HeroLoad i:nth-child(2) {bottom: calc(25% - 8px);right: calc(25% - 8px);-webkit-animation: HeroLoad 1s ease -0.12s infinite;}#HeroLoad i:nth-child(3) {right: 8px;top: calc(50% - 8px);-webkit-animation: HeroLoad 1s ease -0.24s infinite;}#HeroLoad i:nth-child(4) {top: calc(25% - 8px);right: calc(25% - 8px);-webkit-animation: HeroLoad 1s ease -0.36s infinite;}#HeroLoad i:nth-child(5) {top: 8px;left: calc(50% - 8px);-webkit-animation: HeroLoad 1s ease -0.48s infinite;}#HeroLoad i:nth-child(6) {top: calc(25% - 8px);left: calc(25% - 8px);-webkit-animation: HeroLoad 1s ease -0.6s infinite;}#HeroLoad i:nth-child(7) {left: 8px;top: calc(50% - 8px);-webkit-animation: HeroLoad 1s ease -0.72s infinite;}#HeroLoad i:nth-child(8) {bottom: calc(25% - 8px);left: calc(25% - 8px);-webkit-animation: HeroLoad 1s ease -0.84s infinite;}`;
	
	let head = document.getElementsByTagName('head')[0];
	let style = document.createElement('style');
	style.type = 'text/css';
	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
	head.appendChild(style);
	window.onload = function() {
		var html =`<div class="flex_1"><svg class="max_title_icon" onclick="back()"  xmlns="http://www.w3.org/2000/svg" width="9.803" height="17.511" viewBox="0 0 9.803 17.511"><path id="路径" d="M2.394,8.826,9.509,1.711A1,1,0,0,0,8.091.294l-7.8,7.8a1,1,0,0,0,0,1.418.979.979,0,0,0,.1.081l.016.02,7.615,7.615A.979.979,0,0,0,9.408,15.84Z" fill="#fff"/></svg></div><div class="flex_1 f_17 c_h_FF">${title}</div><div class="flex_1"><a style="margin-left: 1.3rem;margin-top: 0.03rem;" href="${url}" onclick='HeroLoad.start()'><svg style="width: 0.48rem;height: 0.48rem;"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="21.475" viewBox="0 0 22 21.475"><defs><clipPath id="clip-path"><rect id="SVGID" width="22" height="21.475" fill="none"/></clipPath></defs><g id="组_629" data-name="组 629" transform="translate(-111 -88)"><g id="组_628" data-name="组 628" transform="translate(111 88)"><g id="组_627" data-name="组 627" transform="translate(0 0)" clip-path="url(#clip-path)"><path id="路径_103" data-name="路径 103" d="M132.713,97.268,122.438,89.14a.717.717,0,0,0-.889,0l-10.275,8.128a.717.717,0,1,0,.889,1.125l.465-.367v10.128a1.267,1.267,0,0,0,1.265,1.265H119.8a.717.717,0,0,0,.717-.717v-5.423h2.955V108.7a.717.717,0,0,0,.717.717h5.906a1.267,1.267,0,0,0,1.265-1.265V98.026l.465.367a.717.717,0,1,0,.889-1.125Zm-2.788,10.717H124.9v-4.875a1.267,1.267,0,0,0-1.265-1.265h-3.291a1.267,1.267,0,0,0-1.265,1.265v4.875h-5.021V96.891l7.932-6.274,7.932,6.275Zm0,0" transform="translate(-111.001 -87.986)" fill="#fff"/></g></g></g></svg></a></div><div id="HeroLoad"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>`
		var wrap = document.createElement("div");
		wrap.className = 'max_title';
		console.log('1')
		var first = document.body.firstChild; //得到页面的第一个元素
		var wraphtml = document.body.insertBefore(wrap, first);
		wrap.innerHTML = html;
	}
	
	
	

	
	!new function() {
		var a = this;
		a.width = 750, a.fontSize = 100, a.widthProportion = function() {
			var b = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0]
				.offsetWidth) / a.width;
			return b > 1 ? 1 : b
		}, a.changePage = function() {
			document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + a.widthProportion() * a
				.fontSize + "px !important")
		}, a.changePage(), window.addEventListener("resize", function() {
			a.changePage()
		}, !1)
	};
})()

	
function back() {
	if (window.history.length > 1) {
		window.history.back();
	} else {
		top.location.href = ""
	}
}

class HeroLoadFun{
	start(){document.getElementById('HeroLoad').style.display='block'}
	stop(){document.getElementById('HeroLoad').style.display='none'}
}
const HeroLoad =new HeroLoadFun();
