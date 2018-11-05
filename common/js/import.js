/*
* Webcreative by Kawasaki
* https://web3.co.jp/
*/

(function() {
	var ImportsJsCurrentDir = FindCurrentDir();
	var userAgent = window.navigator.userAgent.toLowerCase();
	var appVersion = window.navigator.appVersion.toLowerCase();

	//ファイル指定
	require('jquery.js');
	require('jquery.matchHeight-min.js');
	require('slick/slick.js');
	require('skrollr.min.js');
	require('script.js');
	

	//タグ出力
	function require(File) {
		document.write('<script type="text/javascript" src="'+ImportsJsCurrentDir+File+'" charset="utf-8"></script>');
	}
	function require_css(File) {
		document.write('<link rel="stylesheet" href="'+ImportsJsCurrentDir+File+'" type="text/css" />');
	}

	//ディレクトリのパス取得
	function FindCurrentDir(){
		var TmpPath;
		var t = document.getElementsByTagName('script');
		for ( var i in t ) {
			if ( TmpPath = new String( t[i].src ).match(/(.*\/)import.js$/) ) {
			return TmpPath[1];
			}
		}
	}

})();