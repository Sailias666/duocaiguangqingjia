<?php
	namespace app\index\controller;
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
			$groupname = $_GET['groupname'];
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
				$uptime=date('y-m-d',time());  //获取当前时间
				$step_month=substr($uptime,3,2);
				$step_day=substr($uptime,6,2);
				
				$data=Db::name('user_info')->where ('session_key',$sessionKey)->find();
				$openid=$data['user_openid'];
				$p_openid=Db::name('personal_step_rank')->where ('user_openid',$openid)->find();
				$p_openid=$p_openid['user_openid'];
				$pm_openid=Db::name('personal_step_rank_month')->where ('user_openid',$openid)->find();
				$pm_openid=$pm_openid['user_openid'];



				if(!$pm_openid&&$openid!=''){
					$data=Db::execute("insert into personal_step_rank_month value(null,?,?,date_format(now(),'%Y-%m-%d'))",[$openid,0]); 					
				}
				
				if(!$p_openid&&$openid!=''){
					$data=Db::execute("insert into personal_step_rank value(?,?,?,?)",[$openid,$today_steps,$uptime,$groupname]);
				}
				
				$person_step_info=Db::name('personal_step_rank')->where("user_openid",$openid)->select();
				$person_step_date=$person_step_info[0]['step_date'];
				$person_step_month=substr($person_step_date,5,2);
				$person_step_day=substr($person_step_date,8,2);
				
				if($step_month!=$person_step_month){
					$data=Db::execute("update personal_step_rank_month set month_step=0 where 1=1;");
					$data=Db::execute("update personal_step_rank set today_steps=0;");
					$data=Db::execute("update personal_step_rank set step_date='$uptime';");
				}else{
					if($step_day!=$person_step_day){
						$data=Db::execute("INSERT into personal_step_rank_month (SELECT null as id,a.user_openid,a.month_step+b.today_steps/1000,date_format(now(),'%Y-%m-%d') from (select user_openid,month_step from personal_step_rank_month) a LEFT JOIN (SELECT user_openid,today_steps from personal_step_rank)b ON a.user_openid=b.user_openid);");
						$data=Db::execute("DELETE from personal_step_rank_month where today_date<date_format(now(),'%Y-%m-%d');");
						$data=Db::execute("update personal_step_rank set today_steps=0;");
						$data=Db::execute("update personal_step_rank set step_date=date_format(now(),'%Y-%m-%d');");
					}
					$data=Db::table('personal_step_rank')->where('user_openid',$openid)->update(['today_steps' =>$today_steps]);
				}


				
		}
	}

	



 
































	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
