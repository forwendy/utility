
var mo = {
	appserver_url: "/makerstar_appserver",
	ovfHiden: {
		init: function(){
			document.getElementsByTagName('body')[0].setAttribute('class','ovfHiden');
			document.getElementsByTagName('html')[0].setAttribute('class','ovfHiden');
		},
		remove: function(){
			document.getElementsByTagName('body')[0].setAttribute('class','');
			document.getElementsByTagName('html')[0].setAttribute('class','');
		}
	},
	openBrowser: {
		init: function(){
			if(document.getElementById('openBrowser')){
				mo.openBrowser.del();
			}

			var mask = document.createElement('div');
			mask.setAttribute('class', 'mask');
			mask.setAttribute('id', 'mask');

			var img = document.createElement('img');
			img.setAttribute('src', mo.appserver_url + '/static/mo/imgs/open_bowser.png');
			img.setAttribute('style', 'width:201px;height:140px;');
			img.setAttribute('id', 'openBrowser');

			mask.onclick = function(){
				mo.openBrowser.del();

			};

			mo.ovfHiden.init();
			document.getElementsByTagName('body')[0].appendChild(mask);
			document.getElementsByTagName('body')[0].appendChild(img);

		},
		del: function(){
			mo.ovfHiden.remove();
			document.getElementById('mask').remove(0);
			document.getElementById('openBrowser').remove(0);
		}
	},
	loading:{
		init: function(){
			if(document.getElementById('ovuLoading')){
				mo.loading.del();
			}

			var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
			svg.setAttribute('version', '1.1');
			svg.setAttribute('id', 'ovuLoading');
			svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
			svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
			svg.setAttribute('x', '0');
			svg.setAttribute('y', '0');
			svg.setAttribute('width', '2rem');
			svg.setAttribute('height', '2rem');
			svg.setAttribute('viewBox', '0 0 100 100');
			svg.setAttribute('enable-background', 'new 0 0 100 100');
			svg.setAttribute('xml:space', 'preserve');

			var path = document.createElementNS('http://www.w3.org/2000/svg','path');
			path.setAttribute('opacity', '0.4');
			path.setAttribute('fill', '#ffffff');
			path.setAttribute('d', 'M49.5,15c-19.3,0-35,15.7-35,35s15.7,35,35,35s35-15.7,35-35S68.9,15,49.5,15z M49.3,77.6 c-15.2,0-27.5-12.3-27.5-27.5c0-15.2,12.3-27.5,27.5-27.5S76.8,35,76.8,50.1C76.8,65.3,64.5,77.6,49.3,77.6z');

			var move = document.createElementNS('http://www.w3.org/2000/svg','path');
			move.setAttribute('opacity', '0.8');
			move.setAttribute('fill', '#ffffff');
			move.setAttribute('d', 'M84.7,50.3C84.7,50.3,84.7,50.3,84.7,50.3l-7.9-0.1c0,0.1,0,0.1,0,0.2c0,7.3-2.9,14-7.5,18.9l5.4,5.4	C80.9,68.4,84.7,59.8,84.7,50.3z');



			document.getElementsByTagName('body')[0].appendChild(svg);

			svg.appendChild(path);
			svg.appendChild(move);

			mo.mask.init();
			document.getElementsByTagName('body')[0].appendChild(svg);
		},

		del: function(){

			mo.mask.del();
			document.getElementById('ovuLoading').remove(0);
		}
	},
	mask: {
		init: function(){
			if(document.getElementById('oMask')){
				mo.mask.del();
			}
			var mask = document.createElement('div');
			mask.setAttribute('class', 'opacity-mask');
			mask.setAttribute('id', 'oMask');
			mo.ovfHiden.init();
			document.getElementsByTagName('body')[0].appendChild(mask);
		},
		del: function(){
			mo.ovfHiden.remove();
			var mask = document.getElementById('oMask');
			mask.remove(0);
		}
	},

	// toast
	toast: function (str) {
		var len = str.length;
		var toast = document.createElement('div');
		toast.setAttribute('class', 'mo-toast');
		toast.setAttribute('style','width:'+ 14*len + 'px;z-index:999;' );
		toast.innerText = str;
		document.getElementsByTagName('body')[0].appendChild(toast);

		setTimeout(function(){
			toast.remove(0);
		}, 2000);
	},

	// 警告框，只有确认按钮，确认后返回原页面
	alert: {
		init: function( str, subFn){
			if(!str){
				return false;
			}
			var mask = document.createElement('div');
			mask.setAttribute('class', 'mask');
			mask.setAttribute('id', 'mask');
			document.getElementsByTagName('body')[0].appendChild(mask);

			var alert = document.createElement('div');
			var tit = document.createElement('h6');
			var con = document.createElement('p');
			var btn = document.createElement('a');

			alert.setAttribute('class', 'alert');
			con.setAttribute('class', 'con');
			btn.setAttribute('class', 'alert-btn');

			tit.innerText = '提示'; // 10个字符
			con.innerText = str;   // 25个字符
			btn.innerText = '确认'; // 6个字符

			alert.appendChild(tit);
			alert.appendChild(con);
			alert.appendChild(btn);

			btn.onclick = function(){
				if(subFn && typeof subFn == 'function'){
					subFn();
				}
				alert.setAttribute('class', 'alert');
				setTimeout( function () {
					alert.remove(0);
				}, 50);

				mo.ovfHiden.remove();
				mask.remove(0);
			};

			mo.ovfHiden.init();
			document.getElementsByTagName('body')[0].appendChild(alert);
			setTimeout( function () {
				alert.setAttribute('class', 'alert show');
			}, 50);
		}
	},
	// 操作提示，确认按钮执行操作，取消按钮返回页面
	confirm: {
		init: function( str, subFn){
			if(!str){
				return false;
			}
			var mask = document.createElement('div');
			mask.setAttribute('class', 'mask');
			mask.setAttribute('id', 'mask');
			document.getElementsByTagName('body')[0].appendChild(mask);

			var confirm = document.createElement('div');
			var tit = document.createElement('h6');
			var con = document.createElement('p');
			var btnG = document.createElement('div');
			var sumbit = document.createElement('a');
			var cancel = document.createElement('a');

			confirm.setAttribute('class', 'confirm');
			con.setAttribute('class', 'con');
			btnG.setAttribute('class', 'confirm-btn-group');

			tit.innerText = '提示'; // 10个字符
			con.innerText = str;   // 25个字符
			sumbit.innerText = '确认'; // 2-3个字符
			cancel.innerText = '取消'; // 2-3个字符

			btnG.appendChild(sumbit);
			btnG.appendChild(cancel);
			confirm.appendChild(tit);
			confirm.appendChild(con);
			confirm.appendChild(btnG);

			cancel.setAttribute('style','color: #999;');
			cancel.onclick = function(){
				confirm.setAttribute('class', 'confirm');
				setTimeout( function () {
					confirm.remove(0);
				}, 50);

				mo.ovfHiden.remove();
				mask.remove(0);
			};
			sumbit.onclick = function(){
				if(subFn && typeof subFn == 'function'){
					subFn();
				}
				confirm.setAttribute('class', 'confirm');

				setTimeout( function () {
					confirm.remove(0);
				}, 50);

				mo.ovfHiden.remove();
				mask.remove(0);
			};

			mo.ovfHiden.init();
			document.getElementsByTagName('body')[0].appendChild(confirm);
			setTimeout( function () {
				confirm.setAttribute('class', 'confirm show');
			}, 50);
		}
	},

	/* 分享页Flag */

	ovuFlag: {
		str: 'OVU创客星 你身边办公新趣处',
		/*
		Template
		<div class="ovu-flag fix">
			<a class="ovu-flag-close fl"></a>
			<a class="ovu-download fr" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ovuni.makerstar">下载</a>
			<img src="mo/imgs/ovu-logo.png">
			<h1 class="inaline">创客星APP</h1>
			<p class="inaline">下载APP，加入圈子讨论吧！</p>
		</div>
		*/
		init: function (str){
			if(!str){
				str = this.str;
			}
			var flag = $('<div>');
			var tit = $('<h1>');
			var con = $('<p>');
			var logo = $('<img>');
			var download = $('<a>');
			var close = $('<a>');

			flag.addClass('ovu-flag fix');
			close.addClass('ovu-flag-close fl');

			download.addClass('ovu-download fr');
			download.attr('href', 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ovuni.makerstar');
			download.text('下载');

			logo.attr('src', mo.appserver_url + '/static/mo/imgs/ovu-logo.png');

			tit.addClass('inaline');
			tit.text('创客星APP');

			con.addClass('inaline');
			con.text(str);

			flag.append(close);
			flag.append(download);
			flag.append(logo);
			flag.append(tit);
			flag.append(con);
			$('body').css('margin-top','1.2rem');
			$('body').append(flag);

			close.click(function(){

				setTimeout( function () {
					flag.remove();
					$('body').css('margin-top','0');
				}, 100);
			});
		}
	}
};