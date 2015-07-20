
/*********** 第二套非中间件表单组件 **************/
	 
function zBasic(){
   
    $(document).click(function(){
	    $('.z-basic-select-box').css('display','none');
	})
	
	$('.z-basic-select-wrap').click(function(event){
	    event.stopPropagation();
	})  
	
	$('.z-basic-trigger').click(function(){
		$('.z-basic-select-box').css('display','none');
	    var _obj = $(this).parents('.z-basic-select-wrap').eq(0).find('.z-basic-select-box');
		_obj.css('display','block');
	})
	
	/** 文本框 **/	
	$('.z-basic-input').hover(function(){
		$(this).addClass('z-basic-input-hover')
	 }, function(){
		 $(this).removeClass('z-basic-input-hover')
	}).focus(function(){
	     $(this).addClass('z-basic-input-focus')
	}).focusout(function(){
	    $(this).removeClass('z-basic-input-focus')
	})
	
	$('.z-basic-trigger .z-basic-input').hover(function(){
		$(this).parent().addClass('z-basic-trigger-hover')
	}, function(){
		 $(this).parent().removeClass('z-basic-trigger-hover')
	}).focus(function(){
		$(this).parent().addClass('z-basic-trigger-focus')
	}).focusout(function(){
	    $(this).parent().removeClass('z-basic-trigger-focus')
	})
	
	$('.z-basic-trigger .z-btn-trigger').hover(function(){
	    $(this).parent().addClass('z-basic-trigger-hover')
	}, function(){
	    $(this).parent().removeClass('z-basic-trigger-hover')
	}).focus(function(){
		$(this).parent().addClass('z-basic-trigger-focus')
	}).focusout(function(){
	    $(this).parent().removeClass('z-basic-trigger-focus')
	})
	
	
	/** 文本域 **/	
	$('.z-basic-textarea').hover(function(){
		$(this).addClass('z-basic-textarea-hover')
	 }, function(){
		 $(this).removeClass('z-basic-textarea-hover')
	}).focus(function(){
	     $(this).addClass('z-basic-textarea-focus')
	}).focusout(function(){
	    $(this).removeClass('z-basic-textarea-focus')
	})
	
	/** 下拉列表 单选 **/	
	$('.z-basic-select-wrap .z-list li a').click(function(){
		if(!$(this).parents('.z-basic-select-wrap').hasClass('z-select-box-noval')){												  
	    	var _val = $(this).text();
			$(this).parents('.z-basic-select-wrap').eq(0).find('.z-basic-input').val(_val);
			$(this).parent("li").addClass("current").siblings("li").removeClass("current");
		}
		$(this).parents('.z-basic-select-box').hide();
		return false;
	})
	
	/** 下拉列表 多选 **/	
	
	/* 部门单选 */
    $('.z-basic-organ-wrap .z-tree-leaf a').click(function(){
		var _text = $(this).text();
		var _obj = $(this).parents('.z-basic-organ-wrap').find('.z-basic-organ .z-basic-input');
		_obj.val(_text);
		$(this).parents('.z-basic-select-box').hide();
	})
	
	/* 人员单选 */
	$('.z-basic-person-wrap .z-tree-leaf a').click(function(){
		var _text = $(this).text();
		var _obj = $(this).parents('.z-basic-person-wrap').find('.z-basic-person .z-basic-input');
		_obj.val(_text);
		
		$(this).parents('.z-basic-select-box').hide();
	})
	
	
	/* 日期选择 */
	$('.z-basic-time-wrap img').click(function(){
	    $(this).parents('.z-basic-select-wrap').find('.z-basic-input').val('2011-10-12');
	})
	
	/* 季度选择 */
	$('.z-basic-quarter-wrap img').click(function(){
	    $(this).parents('.z-basic-select-wrap').find('.z-basic-input').val('第一季度');
	})
}

/* 结构树 */
function zTree(){
	/*$('.z-tree-active').css({'background-color':'red','background-position':'0'});*/
    $('.z-tree-li a').click(function(event){
		var _this = $(this);
		var _bg = _this.parents('.z-tree').find('.z-tree-bg');
		var _top = $(this).parent().position().top;
		_bg.css('top',_top);
		
		
	    if(!_this.parent().hasClass('z-tree-leaf')&&!_this.parent().hasClass('z-tree-none')){
			_this.toggleClass('z-tree-active');
		    _this.parent().next().toggle();
		}
		event.preventDefault();
	})
   }

/* 列表 */ 
function zList(){
	$(".z-list-table thead tr th:last-child").addClass('z-last');
	
	$(".z-list-table thead th").hover(function(){
		$(this).addClass("z-hover"); 
		$(this).children().children(".z-list-sort-down").show();
		$(this).children().children(".z-list-table-locking").show();
	  },function(){
		$(this).removeClass("z-hover");    
		$(this).children().children(".z-list-sort-down").hide();
		$(this).children().children(".z-list-table-locking").hide();
		
	 $(".z-list1 .z-list-table tbody tr:last-child").each(function(){
		$(this).addClass('z-bottom');														
	 })
  });
  
  //添加排序	  
	  $('.z-list-table').each(function(){
	    var _this = $(this);
		var _th = _this.find('th');
		var _num = _th.length;
		var _str1 = '<div class="z-list-table-th-title"><span>';
		var _str2 = '</span><a href="#" class="z-list-sort-down"></a></div>';
		for(var i = 0; i<_num;i++){
		    if(_th.eq(i).text() != '' && !_th.eq(i).hasClass('z-list-table-th-none')){
			    _th.eq(i).html(_str1+_th.eq(i).text()+_str2);
			}
		}
	})
	$(".z-list-sort-down").toggle(function(){
   		$(this).addClass("z-list-sort-up");},
	function(){$(this).removeClass("z-list-sort-up");}); 
	
}

/* 查询 */ 
function zSearch(){
	 $(".z-search-btn-down").click(function(){
		$(this).toggleClass('z-search-btn-up');
	var _tbody = $(this).parent().parent(".z-search-condition").children().children(".z-search-box").find('tbody');
	if($(this).hasClass('z-search-btn-up')){
	 _tbody.show();
	}else{
	 _tbody.hide();
	}											
		})
}

function zTab(){
    $(".z-tab li").click(function(){
		$(this).children('a').addClass('z-active');
		$(this).siblings().children('a').removeClass('z-active')
		var _index = $(this).index();
		$(this).parent().parent().children().children('.z-tab-box-content').eq(_index).show().siblings().hide();
	})
	$(".z-filter a").click(function(){
		$(this).addClass('z-active').siblings().removeClass('z-active');
	})
}

function zOper(){
    $(".z-oper").hover(function(){
        $(this).addClass("z-oper-hover");    
    },function(){
        $(this).removeClass("z-oper-hover");    
    }).mousedown(function(){
        $(this).addClass("z-oper-click");   
    }).mouseout(function(){
        $(this).removeClass("z-oper-click");   
    })
}