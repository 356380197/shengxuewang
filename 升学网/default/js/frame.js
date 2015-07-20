$(document).ready(function(){
	ftop();
	sTree();
	resize();
})

$(window).resize(function(){
    resize();
})

function resize(){
	var _winHeight = $(window).height();
    $('#main').height(_winHeight - 50 - 20);
}

function ftop(){
    $('#topbtn .close').click(function(){
	    $('#top').slideUp();
	})
}

function module(){
    $('.module-view').click(function(){
		var _index = $(this).index();
		$(this).toggleClass('module-view-active').siblings('.module-view').removeClass('module-view-active');
		$(this).siblings('.module-code').eq(_index).toggle().siblings('.module-code').hide();
	})
}
//init.add('module()');


function sTree(){
    $('.s-tree-li a').click(function(event){
	    var _this = $(this);
	    var _bg = _this.parents('.s-tree').find('.s-tree-bg');
	    var _top = $(this).parent().position().top;
	    _bg.css('top',_top);
	
	    if(!_this.parent().hasClass('s-tree-leaf')&&!_this.parent().hasClass('s-tree-none')){
		    _this.toggleClass('s-tree-active');
		    _this.parent().next().toggle();
	    }
	    event.preventDefault();
    })
}






















