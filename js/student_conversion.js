	// 抽奖代码
	$("#play_on").click(function(){
		// 1:100坚果	
		// 2:一年卡
		// 3:一月卡
		// 4:10坚果
		// 5:全家游
		// 6:70坚果
		// 7:半年卡
		// 8:30坚果
		// 9:三月卡
		// 10:50坚果
		// 11:好可惜
		// 12:20坚果
		// gl目前用的随机1-12，提取服务器返回中奖结果可根据中将结果设置1-12的值
		var gl = parseInt(Math.random()*12+1);
		console.log(gl)
		// 获取旋转大转盘元素
		var zp_img = $('.zp_img')
		// 还原上一次抽过奖转盘位置
		zp_img.removeClass()
		// 设置转盘位置
		zp_img.addClass('zp_img');
		// 添加缓冲转动效果 此过程1S
		zp_img.addClass('zp_gd');
		// 按钮变灰色
		$(this).addClass('btn_alert_gray')
		switch(gl){
			case 1 :
			// 100坚果
			jp_result(1,{
				ele: '.jp_nut50t',
				text1: '100',
				text2: '手气duangduang的，坚果达人原来是你~~'
			})
			break;
			case 2:
			// 一年卡
			jp_result(2,{
				ele: '.jp_card',
				text1: '1年充值卡',
				text2: '这手气，上辈子一定是拯救了银河系~'
			})
			break;
			case 3:
			// 一月卡
			jp_result(3,{
				ele: '.jp_card',
				text1: '1个月充值卡',
				text2: '手气不是盖的~'
			})
			break;
			case 4:
			// 10坚果
			jp_result(4,{
				ele: '.jp_nut50b',
				text1: '10',
				text2: '蚂蚱再小也是肉哇，先收了吧~'
			})
			break;
			case 5:
			// 全家游
			jp_result(5,{
				ele: '.cj_result_yh',
				text1: '全家游',
				text2: '显示效果未定'
			})
			break;
			case 6:
			// 70坚果
			jp_result(6,{
				ele: '.jp_nut50t',
				text1: '70',
				text2: '咻~的一下，轻松到手！'
			})
			break;
			case 7:
			// 半年卡
			jp_result(7,{
				ele: '.jp_card',
				text1: '半年充值卡',
				text2: '哇噻！不要太牛了吧！'
			})
			break;
			case 8:
			// 30坚果
			jp_result(8,{
				ele: '.jp_nut50b',
				text1: '30',
				text2: '矮油还不错哦，再接再厉吧。'
			})
			break;
			case 9:
			// 三月卡
			jp_result(9,{
				ele: '.jp_card',
				text1: '3个月充值卡',
				text2: '好让人羡慕呀~'
			})
			break;
			case 10:
			// 50坚果				
			jp_result(10,{
				ele: '.jp_nut50b',
				text1: '50',
				text2: '手气还不错哦~'
			})
			break;
			case 11:
			// 好可惜
			jp_result(11,{
				ele: '.cj_result_yh'
			})
			break;
			case 12:
			// 20坚果
			jp_result(12,{
				ele: '.jp_nut50b',
				text1: '20',
				text2: '那么多人拿大奖的，你也可以~'
			})
			break;
		}
		function jp_result(gl,jh) {
			// @gl:表示抽中的第几个奖品
			// jh: 获得奖品显示的信息
			// {ele:显示的元素,text1: 显示的第一行文字,text2: 显示的第二行文字}
			// 缓冲转盘效果1S后，慢速转到中奖位置
			setTimeout(function(){
				zp_img.addClass('jp' + gl)					
			},1000)
			// 7秒后显示中奖提示信息
			setTimeout(function(){
				$('.alert_result').hide()
				$('.inner_position').show();
				$(jh.ele).show();
				$(jh.ele).find('.text1').html(jh.text1);
				$(jh.ele).find('.text2').html(jh.text2);
				// 按钮变回桔色
				$('#play_on').removeClass('btn_alert_gray')
			},7000)	
		}
	})
	// 抽奖细则点击事件
	$(".cjxz_input").click(function(){
		$(".position_all").show()			
		$(".nut_zzz").show()
		$(".inner_position").show()
		$(".cjxz_text").show()
	})
	// 再来一次
	$('.onemore').click(function(){
		$('.inner_position').hide()
		$('.alert_result').hide()
	})
	// 首页banner上play按钮事件
	$(".play_btn").click(function(){
		$(".position_all").show()			
		$(".nut_zzz").show()
	})

	// 关闭兑换成功弹框		
	$('.close_result').click(function(){
		$('.inner_position').hide()
		$('.alert_result').hide()
	})	
	// 关闭兑换弹框		
	$('.colse_big').click(function(){
		$('.position_all').hide()
		$(this).parent().hide()
		$('.inner_position').hide()
		$('.alert_result').hide()
	})