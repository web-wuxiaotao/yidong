$(function(){
	var banBottom=$('.ban-bottom')[0]
	var banImg=$('.img',banBottom)[0]
	var pic=$('.pic',banImg)
	var circle=$('#circle')
	var cir=$('.circle',circle)
	var ImgLeft=$('.Img-left',banBottom)[0]
	var ImgRight=$('.Img-right',banBottom)[0]
	var width=parseInt(getStyle(banImg,'width'))
	var n=0;
	var next=0;
	var flag=true;
	var t=setInterval(move,3000);
	function move(type){
			var type=type||'l'
				if(!flag){
				return;
			}
			flag=false;
			if(type=='l'){
				next=n+1;
				if(next>=pic.length){
					next=0;
				}
				pic[next].style.left=width+'px'
				animate(pic[n],{left:-width},500)
				animate(pic[next],{left:0},500,Tween.Linear,function(){
					flag=true;
				})
			}else if(type=='r'){
				next=n-1;
				if(next<0){
					next=pic.length-1;
				}
				pic[next].style.left=-width+'px'
				animate(pic[n],{left:width},500)
				animate(pic[next],{left:0},500,Tween.Linear,function(){
					flag=true;
				})
			}
			for(var i=0;i<cir.length;i++){
				cir[i].style.background="#e3e2e0"
			}
			cir[next].style.background="#e72487"
			n=next;
		}
	ImgRight.onclick=function(){
		move('l')
	}
	ImgLeft.onclick=function(){
		move('r')
	}
	banImg.onmouseover=function(){
		clearInterval(t)
	}
	banImg.onmouseout=function(){
		t=setInterval(move,3000)
	}
	for(var i=0;i<cir.length;i++){
		cir[i].index=i;
		cir[i].onclick=function(){
			if(!flag){
				return
			}
			flag=false;
			if(this.index>n){
				pic[this.index].style.left=width+'px';
				animate(pic[n],{left:-width},500)
				animate(pic[this.index],{left:0},500,Tween.Linear,function(){
					flag=true;
				})
			}else if(this.index<n){
				pic[this.index].style.left=-width+'px';
				animate(pic[n],{left:width},500)
				animate(pic[this.index],{left:0},500,Tween.Linear,function(){
					flag=true;
				})
			}
			for(var i=0;i<cir.length;i++){
				cir[i].style.background='#e3e2e0';
			}
			cir[this.index].style.background='#e72487'
			n=this.index;
		}
	}	

	//充值
	var money=$('#money');
	var now;
	var mMoney=$('.money',money);
	for(var i=0;i<mMoney.length;i++){
		mMoney[i].index=i;
		if(i==1){
			mMoney[i].style.color="#fff";
			mMoney[i].style.background="#e40077"
			now=i
		}
		mMoney[i].onclick=function(){
			for(var i=0;i<mMoney.length;i++){
				mMoney[i].style.color='#a3a3a3'
				mMoney[i].style.background='#fff'
			}
			this.style.color='#fff'
			this.style.background='#e40077'
			now=this.index
		}
		hover(mMoney[i],function(){
			this.style.cssText='color:#fff;background:#e40077';
		},function(){
			if(this.index==now){
				return
			}
			this.style.cssText='color:#a3a3a3;background:#fff';
		})		
	}

	

	//节点轮播图
	var images=$('.images')[0]
	var lunbo=$('.lunbo')[0]
	var links=$('.links',lunbo)[0]
	var link=$('.I-link',links)
	var linkLeft=$('.I-left',images)[0]
	var linkRight=$('.I-right',images)[0]
	var a='a'
	var s=setInterval(linkImg,3000)
	function linkImg(){
		if(a=='b'){
			return;
		}
		a='b';
		animate(links,{left:-295},500,function(){
			var linksFirst=getFirst(links)
			links.appendChild(linksFirst)
			links.style.left='0px'
			a='a'
		})
	}
	lunbo.onmouseover=function(){
		clearInterval(s)
	}
	lunbo.onmouseout=function(){
		s=setInterval(linkImg,3000)
	}
	linkRight.onclick=function(){
		linkImg()
	}
	linkLeft.onclick=function(){
		if(a=='b'){
			return;
		}
		a='b'
		var linksFirst=getFirst(links)
		var linksLast=getLast(links)
		insertBefore(linksLast,linksFirst)
		links.style.left=-295+'px'
		animate(links,{left:0},500,function(){
			a='a'
		})
	}	



	// 导航栏
	function nav(){
		var banner=$('.banner')[0]
		var banTop=$('.ban-top')[0]
		var nav=$('.nav',banTop)
		var ban_nav=$('.a',banTop)
		for(var i=0;i<nav.length;i++){
			if(i==0){
				continue;
			}
			hover(nav[i],function(){
				var ul=$('ul',this)[0]
				ul.style.display='block'
				if(ul.style.display='block'){
					this.style.cssText="background: #f3f3f3;color: #0085d0"
				}						
			},function(){
				var ul=$('ul',this)[0]
				ul.style.display='none'
				this.style.cssText="background: #e4e4e4;color: #666"
			})
		}
	}
	nav()	

	function left(obj){
		var obj=obj
		var bottom=$('.bottom',obj)[0]
		var img=$('.img',bottom)
		for(var i=0;i<img.length;i++){			
			hover(img[i],function(){
				animate(this,{right:11},100)
			},function(){
				animate(this,{right:1},100)
			})
		}
	}
	left($('.G-link')[0])
	left($('.buy')[0])
	left($('.business')[0])

	function big(){
		var right=$('.right',banBottom)[0]
		var top=$('.right-top',right)[0]
		var R_link=$('.R-link',top)
		for(var i=0;i<R_link.length;i++){
			if(i<5){
				hover(R_link[i],function(){								
					var img=$('img',this)[0]
					animate(img,{height:30},100)			
				},function(){			
					var img=$('img',this)[0]
					animate(img,{height:27},100)							
				})
				hover(R_link[5],function(){
					var img=$('img',this)[0]
					animate(img,{height:43},100)
				},function(){
					var img=$('img',this)[0]
					animate(img,{height:40},100)
				})
				
			}	
				
		}
		
	}
	big()


	function input(obj){
		var obj=obj
		var val=obj.value
		obj.onfocus=function(){
			obj.value=""
			obj.style.color="#333"
		}
		obj.onblur=function(){
			var value=this.value
			if(value==""||value==val){
				obj.value=val
				obj.style.color="#999"
			}else{
				obj.value=value
				obj.style.color="#999"
			}			
		}
	}
	input($('input')[0])
	input($('input')[2])


	//顶部下拉框
	function botOn(){
		var head=$('.head')[0]
		var right=$('.right',head)[0]
		var on=$('.on',right)[0]
		var a=$('a',on)[0]
		var bot=$('.bot',on)[0]
		hover(on,function(){
			a.style.color='#25b2ef'
			a.style.background="#fff"
			a.style.cssText="box-shadow:0 0 12px rgba(0,0,0,0.176)"
			bot.style.display='block'
		},function(){
			a.style.color='#e30077'
			a.style.background="none"
			a.style.cssText="box-shadow:none"
			bot.style.display='none'
		})
	}
	botOn()

	function botPh(){
		var head=$('.head')[0]
		var right=$('.right',head)[0]
		var ph=$('.ph',right)[0]
		var a=$('a',ph)[0]
		var bot=$('.bot',ph)[0]
		hover(ph,function(){
			a.style.color='#25b2ef'
			a.style.background="#fff"
			a.style.cssText="box-shadow:0 0 12px rgba(0,0,0,0.176)"
			bot.style.display='block'
		},function(){
			a.style.color='#333'
			bot.style.display='none'
			a.style.background="none"
			a.style.cssText="box-shadow:none"
		})
	}
	botPh()


	//公告栏轮播效果
	function notice(){
		var not=$('.notice')[0]
		var ul=$('ul',not)
		var gt=$('.gt',not)[0]
		var lt=$('.lt',not)[0]
		var n=0;
		var flag=true
		var t=setInterval(move,2000)
		function move(){
			n++
			if(n>=ul.length){
				n=0
			}
			if(!flag){
				return
			}
			flag=false
			for(var i=0;i<ul.length;i++){
				ul[i].style.display='none'
			}
			ul[n].style.display='block'
			flag=true
		}
		lt.onclick=function(){
			move()
		}
		gt.onclick=function(){
			n--
			if(n<0){
				n=ul.length-1
			}
			if(!flag){
				return
			}
			flag=false
			for(var i=0;i<ul.length;i++){
				ul[i].style.display='none'
			}
			ul[n].style.display='block'
			flag=true
		}
		hover(not,function(){
			clearInterval(t)
		},function(){
			t=setInterval(move,2000)
		})
	}
	notice()


	//logo部分下拉框
	function select(){
		var logo=$('.logo')[0]
		var body=$('body')[0]
		var left=$('.left',logo)[0]
		var select=$('.select',left)[0]
		var first=$('.first',select)[0]
		var address=$('.address',select)[0]
		first.onclick=function(){
			address.style.display="block"
		}
		body.onclick=function(e){
			var e=e||window.event
			var obj=e.target||e.srcElement
			if(obj.className!="first"&&obj.className!="address"&&obj.className!="add-top"&&obj.className!="add-bot"){
				address.style.display="none"
			}
		}
	}
	select()















})






