<?php 
	$code=$_GET['code'];
	$name=$_GET['name'];
	$touxiang=$_GET['touxiang'];
	$appid='wx013c1509d0caa78f';
	$secret='3b030e62b8a68a8914bf12724597b9f6';
	$api="https://api.weixin.qq.com/sns/jscode2session?appid={$appid}&secret={$secret}&js_code={$code}&grant_type=authorization_code";

	// 获取GET请求
	function httpGet($url) {
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_TIMEOUT, 500);
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
		curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2);
		curl_setopt($curl, CURLOPT_URL, $url);
		$res = curl_exec($curl);
		curl_close($curl);
		return $res;
	}
	//发送
	$str=httpGet($api);
	echo $str;
	$str1=0;
	$str1=$str;

	$arr= json_decode($str1,true);
	$sessionkey=$arr['session_key'];
	$openid=$arr['openid'];
	//$group_name='test';
	$data=Db::name('user_info')->where ('user_openid',$openid)->find();
		
	if(!$data){
		$data=Db::execute("insert into user_info value(null,?,?,null,?,?,null,null)",[$name,$touxiang,$openid,$sessionkey]); 
	}else{
		//用户存在，需要更新session_key
		Db::table('user_info')->where('user_openid',$openid)->update(['session_key' =>$sessionkey,'name'=>$name]);
	}


?>