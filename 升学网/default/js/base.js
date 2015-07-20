/**
 * Z系列数管制作规范 基础JS方法函数
 */
function showDiv(){
	for(var i=0,len=arguments.length;i<len;i++){
		$(arguments[i]).css('display','block');
	}
}

function showTable(){
	for(var i=0,len=arguments.length;i<len;i++){
		$(arguments[i]).css('display','');
	}
}

var hideDiv = hiddenDiv = function (){
	for(var i=0,len=arguments.length;i<len;i++){
		$(arguments[i]).css('display','none');
	}
}

function removeDiv(name){
	$(name).remove();
}

var showOnly = showSubmainbody =function(name){
	var _first = name.slice(0,1);
	var _name = (_first != '.' && _first != '#')?'#'+name:name;
	if($(_name).hasClass('z-hide')){
		$(_name).removeClass('z-hide').siblings().addClass('z-hide');
	}else{
		$(_name).show().siblings().hide();
	}
}

function toggle(){
	for(var i=0;i<arguments.length;i++){
		$(arguments[i]).toggle();
	}
}

function toggleTable(){
	for(var i=0;i<arguments.length;i++){
		if($(arguments[i]).css('display') != 'none'){
			$(arguments[i]).css('display','none');
		}else{
			$(arguments[i]).css('display','');
		}
	}
}

function addCls(obj,cls){
    $(obj).addClass(cls);
}

function removeCls(cls,name){
	if(name){
		$(name).removeClass(cls);
	}else{
		$('.'+cls).removeClass(cls);
	}
}

function toggleClass(obj,cls){
	$(obj).toggleClass(cls);
}

function toggleDisabled(obj){
    $(obj).attr('disabled',!$(obj).attr('disabled'))
}

function slideDown(name){
    $(name).slideToggle();
}

function slideUp(name){
    $(name).slideUp()
}

/* 范围内显示 */
function targetShow(range,name){
	$(range).find(name).show();
}

/* 范围内隐藏 */
function targetHide(range,name){
	$(range).find(name).hide();
}

/* 范围内切换显示状态 */
function targetToggle(range,name){
	$(range).find(name).toggle();
}

/* 范围内只显示一个 */
function targetShowOnly(range,name){
	$(range).find(name).show().silbings().hide();
}

/* 范围内点击 */
function targetOnClick(range,name){
    $(range).find(name).click();
}

function targetclick(obj){
    $(obj).click();
}

function setHeight(name,tag,h){
	$(name).height($(tag).height()+h);
}

function url(url){
    window.location = url;
}

function winOpen(url,width,height){
	var _width = width || 800 , _height = height || 600;
	window.open(url, 'newwindow', 'width='+_width+', height='+_height+', top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no')
}

function initTime(){
	var strText,strClass;	
	if(arguments.length<1){
		strText='操作成功！';
	}else{
		strText=arguments[0];
	}
	
	if(arguments.length>1){
		strClass='initTimeDiv '+arguments[1];
	}else{
		strClass='initTimeDiv';
	}
	
	//var str='<div class="'+strClass+'">'+strText+'</div>';
	
	if(arguments[0] == 'loading'){
		return;
		var _obj = $(arguments[1]);
	    var _str = '<img class="loading2" src="common/images/loading_s.gif">';
		_obj.html(_str);
		
		setTimeout(function(){
		    _obj.parents('tr').remove();
	    },3000)
	
		return;
	}
	
	
	var str='<div class="'+strClass+'">'+
                    	'<div class="initTimeDiv-top"><div class="top_box1"><div class="top_box2"></div></div></div>'+
                        '<div class="initTimeDiv-middle">'+strText+'</div>'+
                        '<div class="initTimeDiv-bottom"><div class="bottom_box1"><div class="bottom_box2"></div></div></div>'+
                    '</div>';
	
	
	$(str).appendTo(document.body);
	
	
	var _w = $('.initTimeDiv').width();
	var _h = $('.initTimeDiv').height();
	$('.initTimeDiv').css({'margin-left':(-_w/2),'margin-top':(-_h/2)});
	setTimeout(function(){
		$('.initTimeDiv').remove();
	},1000)
}

function init(){
   zBasic();
   zTree();
   zList();
   zSearch();
   zTab();
   zOper();
}

function documentClick(){
    $(document).click(function(){
		$('.sq-popDiv').each(function(){
		    if($(this).prev('.btn_ora').hasClass('current')){
			    $(this).prev('.btn_ora').removeClass('current')
			}
			$(this).hide();
		})
	})
	stopPropagation();
}

function stopPropagation(){
    $('.sq-popDiv,.btn_ora,.stopPropagation').click(function(event){
	    event.stopPropagation();
	})
}


function subAjaxloading(name,htmlURL){
	var content = '<img class="loading" src="common/images/loading.gif">';
	
	$(name).html(content);
	if(arguments[2] && arguments[2] instanceof Array){
	    var _arr = arguments[2];
	}
	
	setTimeout(function(){
        $(name).load(htmlURL,function(){
			init();
			
			if(_arr){
				 for(var i= 0,len=_arr.length;i<len;i++){
					eval(_arr[i]);
				 }   
		    }
		})
	},250)
}

$(document).ready(function(){
    init();
})

function zListRowadd(obj){
    $(obj).parents('.z-list-rowadd-top').next('.z-list-rowadd').find('.z-list-rowadd-default').css('display','');
}




function zTabGroupToggle(name){
	$(name).parents('.z-tab-form-group').find('.z-form-item-div').toggle();
	$(name).toggleClass('table-oper-open').toggleClass('table-oper-close');
}

function zTabGroupToggle(name){
	$(name).parents('.z-tab-form-group').find('.z-form-item-div').toggle();
	$(name).toggleClass('table-oper-open').toggleClass('table-oper-close');
}

function slideDownToggle(name){
    $(name).parents('.z-level-first').find('.z-level-second').slideToggle();
	$(name).toggleClass('level-tree-default').toggleClass('level-tree-active');
}


//onclick="checkObj(this,'.z-reason-show','table')"
function checkObj(obj,name){
	if($(obj).attr('checked')){
		$(name).css('display',(arguments[2] && arguments[2] == 'table')?'':'block');
	}else{
	    $(name).css('display','none');
	}
	
}




function popupBody(name){
	var _this = $(name);
	if(!_this.length){
	    return;
	}
	
	var _ht = _this.height();
	var _w=-_this.width()/2;
	var _h=-_ht/2;
	
	var _ww = $(window).width();
	var _wh = $(window).height();
	
	if(_this.hasClass('z-form') || _this.children(0).hasClass('z-form')){
	    var _step = 30;
		var _max = 830;
		var _maxscroll = _max - 82 - 15 -16;
		
		var _d = _wh - 2*_step - _ht + _this.find('.z-form-scroll').height() + 16 + 22 -40;
		
		
		_h = -(_wh - 2*_step + 16 + 22)/2 + (22 - 16)/2 + 20;
		
		if(_d > _maxscroll){
		    _d = _maxscroll;
			_h = - _max/2;
		}
		
		_this.find('.z-form-scroll').height(_d);
		
	}
	
	_this.appendTo(document.body).addClass('popUp').css({"margin-left":_w,"margin-top":_h,'display':'block','z-index':'999'});
	
	
	
	if(!$('.popupBg').length > 0){
	    var _str = '<div class="popupBg" style="width:'+_ww+'px;">&nbsp;</div>';
		$(_str).insertAfter('#wrapper');
	}else{
	    $('.popupBg').css('display', 'block');
	}
	
	if(_this.find('.z-form-head-title')){
		var _obj = _this.find('.z-form-head-title');
	    if(arguments[1]){
			_obj[0].className += ' z-form-head-'+arguments[2];
			if(arguments[2]){
		        _obj.html(arguments[1]+'<span class="'+arguments[2]+'">&nbsp;</span>');
			}else{
			    _obj.html('<span>'+arguments[1]+'</span>');
			}
	    }
	}
}


function closePopup(name){
	if($(name).hasClass('popUp')){
	    $(name).css('display','none');
	}else if(name == 'all'){
		$('.popUp').css('display','none');
	}else{
		if($(name).hasClass('z-icon-init-delay')){
		    setTimeout(function(){
			    $(name).parents('.popUp').css('display','none');
				
var _o = false;
for(var i=0;i<$('.popUp').length;i++){
    if($('.popUp').eq(i).css('display')!='none'){
        _o = true;
    }
}

if(!_o){
    $('.popupBg').css('display', 'none');
}
				
			},1200)    
		}else{
		    $(name).parents('.popUp').css('display','none');
		}
	}
	
	var _o = false;
	for(var i=0;i<$('.popUp').length;i++){
	    if($('.popUp').eq(i).css('display')!='none'){
		    _o = true;
		}
	}
	
	if(!_o){
		$('.popupBg').css('display', 'none');
	}
}
