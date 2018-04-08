<?php
	namespace app\wx\controller;
	use think\Controller;
	use think\Db;
	
	class ErrorCode
{
	public static $OK = 0;
	public static $IllegalAesKey = -41001;
	public static $IllegalIv = -41002;
	public static $IllegalBuffer = -41003;
	public static $DecodeBase64Error = -41004;
}

class WXBizDataCrypt
{
    private $appid;
	private $sessionKey;

	/**
	 * 构造函数
	 * @param $sessionKey string 用户在小程序登录后获取的会话密钥
	 * @param $appid string 小程序的appid
	 */
	public function __construct( $appid, $sessionKey)
	{
		$this->sessionKey = $sessionKey;
		$this->appid = $appid;
	}


	/**
	 * 检验数据的真实性，并且获取解密后的明文.
	 * @param $encryptedData string 加密的用户数据
	 * @param $iv string 与用户数据一同返回的初始向量
	 * @param $data string 解密后的原文
     *
	 * @return int 成功0，失败返回对应的错误码
	 */
	public function decryptData( $encryptedData, $iv, &$data )
	{
		if (strlen($this->sessionKey) != 24) {
			return ErrorCode::$IllegalAesKey;
		}
		$aesKey=base64_decode($this->sessionKey);
		if (strlen($iv) != 24) {
			return ErrorCode::$IllegalIv;
		}
		$aesIV=base64_decode($iv);
		$aesCipher=base64_decode($encryptedData);
		$result=openssl_decrypt( $aesCipher, "AES-128-CBC", $aesKey, 1, $aesIV);
		$dataObj=json_decode( $result );
		if( $dataObj  == NULL )
		{
			return ErrorCode::$IllegalBuffer;
		}
		if( $dataObj->watermark->appid != $this->appid )
		{
			return ErrorCode::$IllegalBuffer;
		}
		$data = $result;
		return ErrorCode::$OK;
	}

}

	class Get extends Controller{
		public function index()
		{
			$code=$_GET['code'];
			$appid='wx013c1509d0caa78f';
			$appsecret='3b030e62b8a68a8914bf12724597b9f6';
			$url = 'https://api.weixin.qq.com/sns/jscode2session?appid='.$appid.'&secret='.$appsecret.'&js_code='.$_GET['code'].'&grant_type=authorization_code';
			$content = file_get_contents($url);
			$content = json_decode($content);
			echo $content->session_key;
		}
		
		public function decrypt()
		{
			$appid='wx013c1509d0caa78f';
			$sessionKey = $_GET['session_key'];
			$encryptedData=$_GET['encryptedData'];
			$iv = $_GET['iv'];
			$pc = new WXBizDataCrypt($appid, $sessionKey);
			//echo $sessionKey;
			$errCode = $pc->decryptData($encryptedData, $iv, $data );
			$data2=0;
			if ($errCode == 0) {
				
				$data2=$data;
				print($data . "\n");
			
			} else {
				print($errCode . "\n");
			}
				$arr = json_decode($data2,true);
				$payzt = $arr['stepInfoList'];
				$arr=$payzt['30'];
				$step_date=$arr['timestamp'];  //时间戳
				$today_steps=$arr['step'];     //当前步数
				$uptime=date('Y-m-d H:i:s',time());  //获取当前时间
				$group_name='test1'; //团队名
				
				//$sj=Db::table('user_info')->field("session_Key")->find($openid);
				//$sessionKey=$sj["session_Key"];
			
				$data=Db::name('user_info')->where ('session_key',$sessionKey)->find();
				$openid=$data['user_openid'];
				$p_openid=Db::name('personal_step_rank')->where ('user_openid',$openid)->find();
				$p_openid=$p_openid['user_openid'];
				
				if($p_openid){
					Db::table('personal_step_rank')->where('user_openid',$openid)->update(['today_steps' =>$today_steps,'step_date' =>$uptime]);
				}else{
					$data=Db::execute("insert into personal_step_rank value(null,?,?,?,null)",[$openid,$today_steps,$uptime]); 
				}
			
			
				
				
				$sum=0;
				$month_step=$payzt;
				for($i=0;$i<30;$i++){
					
					$sum+=$month_step[$i]['step'];	
				}
				$bushu=$sum/10000.00;
				$month_step=$bushu;//月步数 万
				//echo $p_openid;
				$data=Db::name('user_info')->where ('session_key',$sessionKey)->find();
				$openid=$data['user_openid'];
				$p_openid=Db::name('personal_step_rank')->where ('user_openid',$openid)->find();
				$p_openid=$p_openid['user_openid'];
				
				$pm_openid=Db::name('personal_step_rank_month')->where ('user_openid',$p_openid)->find();
				$pm_openid=$pm_openid['user_openid'];
				if($pm_openid){
					Db::table('personal_step_rank_month')->where('user_openid',$pm_openid)->update(['month_step' =>$month_step,'step_date' =>$uptime]);
				}else{
					$data=Db::execute("insert into personal_step_rank_month value(null,?,?,?)",[$p_openid,$month_step,$uptime]); 
				}
		}
	}

	



 
































	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	