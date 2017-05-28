 //轮播图
 $(function(){
        // 轮播
        var index = 0;
        function getIndexNext(){
            return index>=$(".banner .banner_img_a").length-1?0:index+1;
        }
        function getIndexPrev(){
            return index<=0?$(".banner .banner_img_a").length-1:index-1;
        }
        var showNextImg = function(){
            index = getIndexNext();
            showSliderImg();
        };
        var showPrevImg = function(){
            index = getIndexPrev();
            showSliderImg();
        };
        var sliderTimer = window.setInterval(showNextImg,2000);
        function showSliderImg(){
            $(".banner .banner_img_a").eq(index).show();
            $(".banner .banner_img_a").eq(index).siblings(".banner_img_a").hide();
            $('.banner .indicator span').removeClass("cur");
            $('.banner .indicator span').eq(index).addClass("cur");
        }
        // slider hover状态
        $('.banner .indicator span').hover(function(){
            window.clearInterval(sliderTimer);
            index = $('.banner .indicator span').index(this);
            showSliderImg();
        },function(){
            sliderTimer = window.setInterval(showNextImg,2000);
        }) ;
        // previous next
        $('.banner .page span').hover(function(){
            window.clearInterval(sliderTimer);
        },function(){
            sliderTimer = window.setInterval(showNextImg,2000);
        }) ;
        $('.banner .page .prev').click(function(){
            showPrevImg();
        });
        $('.banner .page .next').click(function(){
            showNextImg();
        });
    })
 //背景切换
 $(function(){
       $('.wmnz-sk ul li').hover(function(){
       		$(this).css('background-image','url(images/zh_red.png)')
       		$(this).find('p').css('color','#f27e83')
       },function(){
       		$(this).css('background-image','url(images/zh_gray.png)')
       		$(this).find('p').css('color','#000')
       })
       
    })
 //遮罩层
$(function(){
        //ul里头的li中的keep，text都是绝对定位，要遮住img这个图片，keep是个遮罩层，text是遮罩层内的文字
        //big里头的bigKeep是遮罩层，透明度为0
        var oBig = $('.zzc-fri .big');
        var oBigKeep = oBig.find('.bigKeep');
        var aLi = $('.zzc-fri ul li');
        oBig.hover(function(){
            oBigKeep.stop().animate({
                opacity:1
            },500);
        },function(){
            oBigKeep.stop().animate({
                opacity:0
            },500);

        })
        var oKeep,oText;
        aLi.hover(function(){
            oKeep = $(this).find('.keep');
            oText = $(this).find('.text');
            oKeep.stop().animate({
                opacity:0.8
            },300);
            oText.stop().animate({
                left:0,
                opacity:1
            },200);
        },function(){
            oKeep.stop().animate({
                opacity:0
            },300);
            oText.stop().animate({
                left:-344,
                opacity:0
            },200);

        })

    });
    $(function(){
        //ul里头的li中的keep，text都是绝对定位，要遮住img这个图片，keep是个遮罩层，text是遮罩层内的文字
        //big里头的bigKeep是遮罩层，透明度为0
        var oBig = $('.mxz-fri .big');
        var oBigKeep = oBig.find('.bigKeep');
        var aLi = $('.mxz-fri ul li');
        oBig.hover(function(){
            oBigKeep.stop().animate({
                opacity:1
            },500);
        },function(){
            oBigKeep.stop().animate({
                opacity:0
            },500);

        })
        var oKeep,oText;
        aLi.hover(function(){
            oKeep = $(this).find('.keep');
            oText = $(this).find('.text');
            oKeep.stop().animate({
                opacity:0.8
            },300);
            oText.stop().animate({
                left:0,
                opacity:1
            },200);
        },function(){
            oKeep.stop().animate({
                opacity:0
            },300);
            oText.stop().animate({
                left:-344,
                opacity:0
            },200);

        })

    });
    //
     $(function(){
        //ul里头的li中的keep，text都是绝对定位，要遮住img这个图片，keep是个遮罩层，text是遮罩层内的文字
        //big里头的bigKeep是遮罩层，透明度为0
        var oBig = $('.xwdt-fri .big');
        var oBigKeep = oBig.find('.bigKeep');
        var aLi = $('.xwdt-fri ul li');
        oBig.hover(function(){
            oBigKeep.stop().animate({
                opacity:1
            },500);
        },function(){
            oBigKeep.stop().animate({
                opacity:0
            },500);

        })
        var oKeep,oText;
        aLi.hover(function(){
            oKeep = $(this).find('.keep');
            oText = $(this).find('.text');
            oKeep.stop().animate({
                opacity:0.8
            },300);
            oText.stop().animate({
                left:0,
                opacity:1
            },200);
        },function(){
            oKeep.stop().animate({
                opacity:0
            },300);
            oText.stop().animate({
                left:-344,
                opacity:0
            },200);

        })

    });
//tab切换
$(function(){
	$('.qiehuan li').hover(function(){
		var j = $(this).index()
		$(this).addClass('bacolor').siblings().removeClass('bacolor')
		$('.zzc-fri').eq(j).addClass('xscl').siblings().removeClass('xscl')
	})
})
//无缝轮播
$(function(){
        var aLi = $('#brand .bd-box li');
        var aImg = $('#brand .bd-box li img');
        var aSpan = $('#brand .bd-box li span');
        aLi.each(function(index){
            $(this).mouseover(function(){
                aSpan.eq(index).stop();
                aImg.eq(index).stop();
                aImg.eq(index).css({zIndex:1}).animate({
                    left:52,
                    width:0
                },150,'',function(){
                    $(this).hide();
                    aSpan.eq(index).show().css({zIndex:2}).animate({
                        left:0,
                        width:216
                    },150)
                })
            });
            $(this).mouseout(function(){
                aSpan.eq(index).stop();
                aImg.eq(index).stop();
                aSpan.eq(index).css({zIndex:1}).animate({
                    left:52,
                    width:0
                },150,'',function(){
                    $(this).hide();
                    aImg.eq(index).show().css({zIndex:2}).animate({
                        left:0,
                        width:216
                    },150)
                })
            })
        })
       var t;    
       var speed = 0;    	 
       	   $('#tt').width($('#tt li').width()*$('#tt li').length);
       	   
       	   var fun=function(){
       	   t = setInterval (function ()    
           {    
                speed--;  
                $('#tt').css('left',speed+'px');
                if(speed<-1200){    
                speed=0;   
                $('#tt').css('left',0);
                }
              }, 20);
       	   }
       	   fun();
           $("#tt").hover(function(){
   				clearInterval(t);
		   },function(){
   				fun();
		});	
  })

$(function(){
        var aLi = $('#brand1 .bd-box li');
        var aImg = $('#brand1 .bd-box li img');
        var aSpan = $('#brand1 .bd-box li span');
        aLi.each(function(index){
            $(this).mouseover(function(){
                aSpan.eq(index).stop();
                aImg.eq(index).stop();
                aImg.eq(index).css({zIndex:1}).animate({
                    left:52,
                    width:0
                },150,'',function(){
                    $(this).hide();
                    aSpan.eq(index).show().css({zIndex:2}).animate({
                        left:0,
                        width:216
                    },150)
                })
            });
            $(this).mouseout(function(){
                aSpan.eq(index).stop();
                aImg.eq(index).stop();
                aSpan.eq(index).css({zIndex:1}).animate({
                    left:52,
                    width:0
                },150,'',function(){
                    $(this).hide();
                    aImg.eq(index).show().css({zIndex:2}).animate({
                        left:0,
                        width:216
                    },150)
                })
            })
        })
       var t;    
       var speed = 0;    	 
       	   $('#ff').width($('#ff li').width()*$('#ff li').length);
       	   
       	   var fun=function(){
       	   t = setInterval (function ()    
           {    
                speed--;  
                $('#ff').css('left',speed+'px');
                if(speed<-1200){    
                speed=0;   
                $('#ff').css('left',0);
                }
              }, 20);
       	   }
       	   fun();
           $("#ff").hover(function(){
   				clearInterval(t);
		   },function(){
   				fun();
		});	
  })

$(function(){
        var aLi = $('#brand2 .bd-box li');
        var aImg = $('#brand2 .bd-box li img');
        var aSpan = $('#brand2 .bd-box li span');
        aLi.each(function(index){
            $(this).mouseover(function(){
                aSpan.eq(index).stop();
                aImg.eq(index).stop();
                aImg.eq(index).css({zIndex:1}).animate({
                    left:52,
                    width:0
                },150,'',function(){
                    $(this).hide();
                    aSpan.eq(index).show().css({zIndex:2}).animate({
                        left:0,
                        width:216
                    },150)
                })
            });
            $(this).mouseout(function(){
                aSpan.eq(index).stop();
                aImg.eq(index).stop();
                aSpan.eq(index).css({zIndex:1}).animate({
                    left:52,
                    width:0
                },150,'',function(){
                    $(this).hide();
                    aImg.eq(index).show().css({zIndex:2}).animate({
                        left:0,
                        width:216
                    },150)
                })
            })
        })
       var t;    
       var speed = 0;    	 
       	   $('#gg').width($('#gg li').width()*$('#gg li').length);
       	   
       	   var fun=function(){
       	   t = setInterval (function ()    
           {    
                speed--;  
                $('#gg').css('left',speed+'px');
                if(speed<-1200){    
                speed=0;   
                $('#gg').css('left',0);
                }
              }, 20);
       	   }
       	   fun();
           $("#gg").hover(function(){
   				clearInterval(t);
		   },function(){
   				fun();
		});	
  })
//折叠三级菜单
function ShowMenu(obj,n){
 var Nav = obj.parentNode;
 if(!Nav.id){
  var BName = Nav.getElementsByTagName("ul");
  var HName = Nav.getElementsByTagName("h2");
  var t = 2;
 }else{
  var BName = document.getElementById(Nav.id).getElementsByTagName("span");
  var HName = document.getElementById(Nav.id).getElementsByTagName("h1");
  var t = 1;
 }
 for(var i=0; i<HName.length;i++){
  HName[i].innerHTML = HName[i].innerHTML.replace("-","+");
  HName[i].className = "";
 }
 obj.className = "h" + t;
 for(var i=0; i<BName.length; i++){if(i!=n){BName[i].className = "no";}}
 if(BName[n].className == "no"){
  BName[n].className = "";
  obj.innerHTML = obj.innerHTML.replace("+","-");
 }else{
  BName[n].className = "no";
  obj.className = "";
  obj.innerHTML = obj.innerHTML.replace("-","+");
 }
}