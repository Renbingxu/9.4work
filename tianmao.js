//动画算法
            /*
		    Linear：无缓动效果(匀速运动)；
			Quad：二次方的缓动；
			Cubic：三次方的缓动
			Quartic：四次方的缓动；
			Quintic：五次方的缓动；
			Sinusoidal：正弦曲线的缓动；
			Exponential：指数曲线的缓动；
			Circular：圆形曲线的缓动；
			Elastic：指数衰减的正弦曲线缓动；
			Back：超过范围的三次方缓动）；
			Bounce：指数衰减的反弹缓动。
			

			每个效果都分三个缓动方式（方法），分别是：
			easeIn：从0开始加速的运动；
			easeOut：减速到0的运动；
			easeInOut：前半段从0开始加速，后半段减速到0的运动。
			


			函数的四个参数分别代表：

				t--- current time（当前时间）；
				b--- beginning value（初始值）；
				c--- change in value（变化量）
				d---duration（持续时间)
		


             运算的结果就是当前的运动路程。
            
          */
  
         Tween = {  
            Linear: function(t,b,c,d){ return c*t/d + b; },
            Quad: {
                easeIn: function(t,b,c,d){ 
                    return c*(t/=d)*t + b;
                      
                },
                easeOut: function(t,b,c,d){
                    return -c*(t/=d)*(t-2) + b;
                },
                easeInOut: function(t,b,c,d){
                    if ((t/=d/2) < 1) return c/2*t*t + b;
                    return -c/2 * ((--t)*(t-2) - 1) + b;
                }
            },
            Cubic: {
                easeIn: function(t,b,c,d){
                    return c*(t/=d)*t*t + b;
                },
                easeOut: function(t,b,c,d){
                    return c*((t=t/d-1)*t*t + 1) + b;
                },
                easeInOut: function(t,b,c,d){
                    if ((t/=d/2) < 1) return c/2*t*t*t + b;
                    return c/2*((t-=2)*t*t + 2) + b;
                }
            },
            Quart: {
                easeIn: function(t,b,c,d){
                    return c*(t/=d)*t*t*t + b;
                },
                easeOut: function(t,b,c,d){
                    return -c * ((t=t/d-1)*t*t*t - 1) + b;
                },
                easeInOut: function(t,b,c,d){
                    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
                    return -c/2 * ((t-=2)*t*t*t - 2) + b;
                }
            },
            Quint: {
                easeIn: function(t,b,c,d){
                    return c*(t/=d)*t*t*t*t + b;
                },
                easeOut: function(t,b,c,d){
                    return c*((t=t/d-1)*t*t*t*t + 1) + b;
                },
                easeInOut: function(t,b,c,d){
                    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
                    return c/2*((t-=2)*t*t*t*t + 2) + b;
                }
            },
            Sine: {
                easeIn: function(t,b,c,d){
                    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
                },
                easeOut: function(t,b,c,d){
                    return c * Math.sin(t/d * (Math.PI/2)) + b;
                },
                easeInOut: function(t,b,c,d){
                    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
                }
            },
            Expo: {
                easeIn: function(t,b,c,d){
                    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
                },
                easeOut: function(t,b,c,d){
                    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
                },
                easeInOut: function(t,b,c,d){
                    if (t==0) return b;
                    if (t==d) return b+c;
                    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
                    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
                }
            },
            Circ: {
                easeIn: function(t,b,c,d){
                    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
                },
                easeOut: function(t,b,c,d){
                    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
                },
                easeInOut: function(t,b,c,d){
                    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
                    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
                }
            },
            Elastic: {
                easeIn: function(t,b,c,d,a,p){
                    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                    if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
                    else var s = p/(2*Math.PI) * Math.asin (c/a);
                    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
                },
                easeOut: function(t,b,c,d,a,p){
                    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                    if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
                    else var s = p/(2*Math.PI) * Math.asin (c/a);
                    return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
                },
                easeInOut: function(t,b,c,d,a,p){
                    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
                    if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
                    else var s = p/(2*Math.PI) * Math.asin (c/a);
                    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
                    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
                }
            },
            Back: {
                easeIn: function(t,b,c,d,s){
                    if (s == undefined) s = 1.70158;
                    return c*(t/=d)*t*((s+1)*t - s) + b;
                },
                easeOut: function(t,b,c,d,s){
                    if (s == undefined) s = 1.70158;
                    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
                },
                easeInOut: function(t,b,c,d,s){
                    if (s == undefined) s = 1.70158; 
                    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
                    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
                }
            },
            Bounce: {
                easeIn: function(t,b,c,d){
                    return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
                },
                easeOut: function(t,b,c,d){
                    if ((t/=d) < (1/2.75)) {
                        return c*(7.5625*t*t) + b;
                    } else if (t < (2/2.75)) {
                        return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
                    } else if (t < (2.5/2.75)) {
                        return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
                    } else {
                        return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
                    }
                },
                easeInOut: function(t,b,c,d){
                    if (t < d/2) return Tween.Bounce.easeIn(t*2, 0, c, d) * .5 + b;
                    else return Tween.Bounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
                }
            }
         }

function ani(obj,arrt,duration,runStyle,callback){
    var start={};                                                                      // 设置变量 用来储存各个属性的开始值
    var end={};                                                                        // 设置变量 用来储存各个属性的结束值
    var change={};                                                                     // 设置变量 用来储存各个属性的变化值
    for(var i in arrt){                                                                // 遍历输入的属性和结束值的数组
        if(i=="scrollTop"){
            
            start[i]=obj.scrollTop;
        }else{
            start[i]=parseInt(getComputedStyle(obj,null)[i]);                                  // 将对象的各个属性的开始值对应的存储到start中
        }
         end[i]=arrt[i];                                                               // 将对象的各个属性的结束值对应的存储到end中
         change[i]=end[i]-start[i];                                                    // 将对象各个属性的变化值对应的存储到change中
        }
        var time=0;                                                                    // 设置运行时间，一开始为0
        var t=setInterval(function(){                                                  // 设置定时器
            time+=50;                                                                  // 运行时间每次加50毫秒
            if(time>duration){                                                         // 当运行时间大于动画执行时间时
                clearInterval(t);                                                      // 清除计时器
                for(var i in arrt){                                                    // 遍历输入的属性
                    if(i=="opacity"){
                        obj.style[i]=end[i];
                    }else if(i=="scrollTop"){
                        obj.scrollTop=end[i];
                    }
                    else{
                        obj.style[i]=end[i]+"px";                                      // 并将存储在end中的各个属性相对应的结束值赋值给obj对象的相应属性
                    }
                }
                if(callback){
                    callback();
                }
                flag=true;
            }else{                                                                     // 当运行时间在动画执行时间范围之内时
                for(var i in arrt){                                                    // 遍历输入的属性
                    if(i=="opacity"){
                        obj.style[i]=runStyle(time,start[i],change[i],duration);      // t/d*c+b=匀速运动的公式  表示在t时刻，对象obj的i属性的值
                    }else if(i=="scrollTop"){
                        obj.scrollTop=runStyle(time,start[i],change[i],duration);
                    }
                    else{
                        obj.style[i]=runStyle(time,start[i],change[i],duration)+"px";
                    }
                }                                                                      // 因此将过程中每个时刻相对应的值赋值给对象obj的对应属性
            }
        },50)
}





var mytaoboo=document.querySelector("nav .container .menu .mytaobao");
var mytaobooItem=document.querySelector("nav .container .menu .mytaobao .item")
var favorite=document.querySelector("nav .container .menu .favorite");
var favoriteItem=document.querySelector("nav .container .menu .favorite .item");
var mobile=document.querySelector("nav .container .menu .mobile");
var mobileItem=document.querySelector("nav .container .menu .mobile .item")
var seller=document.querySelector("nav .container .menu .seller");
var sellerItem=document.querySelector("nav .container .menu .seller .item");
var imgs=document.querySelectorAll(".banner .banner-box .img");
var banner=document.querySelector(".banner .banner-box");
var btns=document.querySelectorAll(".banner .slider-nav li");
var num=0;
var navBtns=document.querySelectorAll(".banner .menu-nav-box .menu-nav ul .second");
var navCons=document.querySelectorAll(".banner .menu-nav-box .menu-nav .nav-list-box .nav-list");
var a=document.querySelectorAll(".banner .menu-nav-box .menu-nav ul .second a");
var navMenu=document.querySelector(".banner .menu-nav-box .menu-nav");
var navList=document.querySelector(".banner .menu-nav-box .menu-nav ul .nav-list-box")
var navIcon=document.querySelectorAll(".banner .menu-nav-box .menu-nav ul .second i")
var menu=document.querySelectorAll(".floor-line .floor-body .floor-item1 .box .top .head");
var cons=document.querySelectorAll(".floor-line .floor-body .floor-item1 .box .bottom .cons");
var flag=true;
/** 给最上方的导航栏添加鼠标移入、移出事件*/
/**mytaoboo */
mytaoboo.onmouseover=function(){
    mytaobooItem.style.display="block";
    mytaoboo.style.background="#fff"
}
mytaoboo.onmouseout=function(){
    mytaobooItem.style.display="none";
    mytaoboo.style.background="none"
}
/**favorite */
favorite.onmouseover=function(){
    favoriteItem.style.display="block";
    favorite.style.background="#fff"
}
favorite.onmouseout=function(){
    favoriteItem.style.display="none";
    favorite.style.background="none"
}
/**mobile */
mobile.onmouseover=function(){
    mobileItem.style.display="block";
}
mobile.onmouseout=function(){
    mobileItem.style.display="none";
}
/**seller */
seller.onmouseover=function(){
    sellerItem.style.display="block";
    seller.style.background="#fff"
}
seller.onmouseout=function(){
    sellerItem.style.display="none";
    seller.style.background="none"
}
/** 鼠标移出banner时，让轮播图继续自己执行**/
banner.onmouseout=function(){
    t=setInterval(move,3000);
}
/** 鼠标移入banner时，让轮播图停止自动执行**/
banner.onmouseover=function(){
    clearInterval(t);
}
/** 给轮播图和轮播点添加自动播放**/

function move(){
    num++;
    if(num==imgs.length){
        num=0;
    }
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.opacity=0;
    }
    ani(imgs[num],{opacity:1},500,Tween.Linear);
    for(var k=0;k<btns.length;k++){
        btns[k].style.background="#999";
    }
    btns[num].style.background="white";
}
var t=setInterval(move,3000);
/** 给轮播点添加鼠标移入事件**/
for(var i=0;i<btns.length;i++){
    btns[i].index=i;
    btns[i].onmouseover=function(){
        if(!flag){
            return;
        }
        flag=false;
        num=this.index;
        for(var j=0;j<imgs.length;j++){
            imgs[j].style.opacity=0;
            btns[j].style.background="#999"
        }
        ani(imgs[num],{opacity:1},300,Tween.Linear);
        btns[num].style.background="white";
    }
}

    

/**  侧边导航栏**/
for(var i=0;i<navBtns.length;i++){
    navBtns[i].index=i;
    navBtns[i].onmouseover=function(){
        for(var k=0;k<navBtns.length;k++){
            navBtns[k].style["background-color"]="rgba(0,0,0,.55)";
            a[k].style.color="white";
            navCons[k].style.display="none";
            navIcon[k].style.color="white";
        }
        navBtns[this.index].style.background="white";
        a[this.index].style.color="#e54077";
        navCons[this.index].style.display="block";
        navList.style.display="block";
        navIcon[this.index].style.color="#e54077";
    }
}
navMenu.onmouseout=function(){
    for(var i=0;i<navBtns.length;i++){
        navBtns[i].style["background-color"]="rgba(0,0,0,.55)";
        a[i].style.color="white";
        navCons[i].style.display="none";
        navIcon[i].style.color="white";
    }
    navList.style.display="none";
}
/** 天猫超市 选项卡添加 */
for(var i=0;i<menu.length;i++){
    menu[i].index=i;
    menu[i].onmouseover=function(){
        for(var k=0;k<menu.length;k++){
            menu[k].style.background="none";
            menu[k].style.color="#000";
            cons[k].style.display="none";
        }
        menu[this.index].style.background="#00b262";
        menu[this.index].style.color="white";
        cons[this.index].style.display="block";
    }
}
// var a=setInterval(function(){
//     num++;
//     if(num==menu.length){
//         num=0;
//     }
//     for(var i=0;i<menu.length;i++){
//         menu[i].style.background="none"; 
//         cons[i].style.display="none";
//         menu[i].style.color="#000";
//     }
//     menu[num].style.background="#00b262";
//     menu[num].style.color="white";
//     cons[num].style.display="block";
// },1000)
/** 给顶部搜索栏添加滚动条滚动事件*/
/** 给屏幕左下方固定导航栏添加滚动条滚动事件*/
/** 滚动条滑动到某个位置时，导航栏对应模块变色*/
var fixHead=document.querySelector(".fix-head");
var navWarpper=document.querySelector(".nav-warpper");
var ads=document.querySelectorAll(".ad");
window.onscroll=function(){
    if(document.documentElement.scrollTop<800){
        fixHead.style.height=0;
        navWarpper.style.transform="scale(0,0)";
        navWarpper.style.opacity=0;
    }else{
        fixHead.style.height=60+"px";
        navWarpper.style.transform="scale(1,1)";
        navWarpper.style.opacity=1;
    }
    for(var i=0;i<floorBtns.length;i++){
        if(document.documentElement.scrollTop>=floorBtns[i].top-1&&document.documentElement.scrollTop<floorBtns[i].top+floorBtns[i].height){
            for(var k=0;k<floorBtns.length;k++){
                floorBtns[k].style.background="rgba(0,0,0,0.6)";
            }
            floorBtns[i].style.background=floorBtns[i].getAttribute("color");
        }else{
            floorBtns[i].style.background="rgba(0,0,0,0.6)";
        }
    }
    /**floor加载 */
    for(var i=0;i<floorBtns.length;i++){
        var floorImgs=floors[i].querySelectorAll("img");
        if(document.documentElement.scrollTop>=floorBtns[i].top){
            for(var k=0;k<floorImgs.length;k++){
                floorImgs[k].src=floorImgs[k].getAttribute("address");   
            } 
        }
    }
    /**广告加载 */
    for(var i=0;i<ads.length;i++){
        var adImgs=ads[i].querySelectorAll("img");
        if(document.documentElement.scrollTop>=ads[i].offsetTop){
            for(var k=0;k<adImgs.length;k++){
                adImgs[k].src=adImgs[k].getAttribute("address");   
            } 
        }
    }
}
/** 给屏幕左下角导航栏添加点击事件*/
var floorBtns=document.querySelectorAll(".nav-warpper .data-spm .list");
var floors=document.querySelectorAll(".floor");
for(var i=0;i<floorBtns.length;i++){
    floorBtns[i].top=floors[i].offsetTop;
    floorBtns[i].height=floors[i].offsetHeight;
    floorBtns[i].onclick=function(){
        ani(document.documentElement,{scrollTop:this.top},500,Tween.Linear);
    }
}






