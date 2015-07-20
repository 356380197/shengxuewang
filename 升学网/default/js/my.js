// JavaScript Document
$(document).ready(function(){				   
			$(".Gtrss").click(function(){
				var gjxs=$(".GjDiv").css('display');
				var none="none";
				    if(gjxs==none){
							$(".GjDiv").show("normal");	
							$(this).text("︾收起高级搜索")
							}else{
								$(".GjDiv").hide("normal");
								$(this).text("︽展开高级搜索")	
								}
					        })
	        $(".ssgz").click(function(){
				$("#gzdiv").attr("class","tcbrowseCnt")
				$(".inforBtn").show();
				})
			$(".btnSpan").click(function(){
				$("#gzdiv").attr("class","browseCnt")
				$(".inforBtn").hide();
				})
			$(".pcntCnt span").click(function(){
				var myclass=$(this).attr("class");
				if(myclass=="pNok"){
					$(this).attr("class","pNno")
					}else{
						$(this).attr("class","pNok")
						}
				})
			 $(".ycmy").click( function(){
				 $(this).parent().parent().hide("normal")
				 })
			 })

function switchmodTag(modtag,modcontent,modk,num) {
	for(i=0; i <num; i++) {
		if (i==modk) {
		document.getElementById(modtag+i).className=modtag+"ok";document.getElementById(modcontent+i).className=modcontent+"ok";}
		else {
		document.getElementById(modtag+i).className=modtag+"no";document.getElementById(modcontent+i).className=modcontent+"no";}
	}
	
}
function divSH(myid,youid){
	            if(myid=='none'){
				var youid=document.getElementById(youid);
				youid.style.display="none";
				}else if(youid=='none'){
					var myid=document.getElementById(myid);
					myid.style.display="block";
					}else{
						var myid=document.getElementById(myid);
					    myid.style.display="block";
						var youid=document.getElementById(youid);
				        youid.style.display="none";
						}
				}

function showDiv( divid){    //点击隐藏;
		if($("#"+divid).css('display')=="none"){
			$("#"+divid).show(300);
		}else{
			$("#"+divid).hide(300);
		}
}


function scrollDoor(){
}
scrollDoor.prototype = {
	sd : function(menus,divs,openClass,closeClass){
		var _this = this;
		if(menus.length != divs.length)
		{
			alert("菜单层数量和内容层数量不一样!");
			return false;
		}				
		for(var i = 0 ; i < menus.length ; i++)
		{	
			_this.$(menus[i]).value = i;				
			_this.$(menus[i]).onmouseover = function(){
					
				for(var j = 0 ; j < menus.length ; j++)
				{						
					_this.$(menus[j]).className = closeClass;
					_this.$(divs[j]).style.display = "none";
				}
				_this.$(menus[this.value]).className = openClass;	
				_this.$(divs[this.value]).style.display = "block";				
			}
		}
		},
	$ : function(oid){
		if(typeof(oid) == "string")
		return document.getElementById(oid);
		return oid;
	}
}
window.onload = function(){
	var SDmodel = new scrollDoor();
	SDmodel.sd(["m01","m02","m03"],["c01","c02","c03"],"alctive","alSty");
}
//班级选项卡
//初始化
var def="1";
function mover(object){
  //主菜单
  var mm=document.getElementById("m_"+object);
  mm.className="trSPspan_a";
  //初始主菜单隐藏效果
  if(def!=0){
    var mdef=document.getElementById("m_"+def);
    mdef.className="trSPspan";
  }
  //子菜单
  var ss=document.getElementById("s_"+object);
  ss.style.display="block";
  //初始子菜单隐藏效果
  if(def!=0){
    var sdef=document.getElementById("s_"+def);
    sdef.style.display="none";
  }
}

function mout(object){
  //主菜单
  var mm=document.getElementById("m_"+object);
  mm.className="trSPspan";
  //初始主菜单
  if(def!=0){
    var mdef=document.getElementById("m_"+def);
    mdef.className="trSPspan_a";
  }
  //子菜单
  var ss=document.getElementById("s_"+object);
  ss.style.display="none";
  //初始子菜单
  if(def!=0){
    var sdef=document.getElementById("s_"+def);
    sdef.style.display="block";
  }
}