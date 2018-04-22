<?php
namespace app\index\controller;
use think\Controller;
use think\Db;
	date_default_timezone_set("Asia/Shanghai");
	
	class Wx extends Controller{
		
		public function index()
		{
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
				$data=Db::execute("insert into user_info value(?,?,null,?,?,true,0)",[$name,$touxiang,$openid,$sessionkey]); 
			}else{
				//用户存在，需要更新session_key
				Db::table('user_info')->where('user_openid',$openid)->update(['session_key' =>$sessionkey,'name'=>$name]);
			}
		}
		
		public function upload()
		{
			$time=date('y-m-d h:i:s',time());  //获取当前时间
			$file = request()->file('file');  //图片
			$text=$_POST['content'];             //formdata 额外数据
			$username=$_POST['username'];
			$id=$_POST['activity_id'];
			$avaurl=$_POST['avaurl'];
			$openid=$_POST['openid'];
			if($file){
				$info = $file->move(ROOT_PATH . 'public' . DS . 'upload');
				if($info){
					$url=$info->getSaveName();    
					$data=Db::query("insert into daka_comment (comment_id,comment_activity_id,comment_name,comment_touxiang,comment_openid,comment_content,comment_pic,comment_time)value(null,'$id','$username','$avaurl','$openid','$text','$url','$time');"); 
					if($data){
						$res = ['errMsg'=>'打卡成功'];
						return json($res);
					}else{
						echo $file->getError();
					}
				}
			}
		}
		
		
		
		public function integral() //积分排行榜
		{	
			$data=Db::name('user_info')->order("user_integral","desc")->select();  //id倒序;
			echo json_encode($data);
		
		}
	
		public function rank()   //个人天排行榜
		{	
			$today=date('Y-m-d',time());
			$data=Db::query("SELECT a.name,a.user_openid,a.touxiang,b.today_steps FROM user_info a INNER JOIN (select * from personal_step_rank  where step_date='$today') b ON a.user_openid = b.user_openid ORDER BY b.today_steps DESC limit 50");
			echo json_encode($data);
			//$sj=Db::table('personal_step_rank')->order("today_steps","desc")->select();  //id倒序
			//	echo json_encode($sj);
		}
		public function rank_personal_month() //个人月排行榜
		{	
			$data=Db::query("SELECT user_info.name,user_info.user_openid,user_info.touxiang,round(personal_step_rank_month.month_step,1) as month_step FROM user_info INNER JOIN personal_step_rank_month ON user_info.user_openid = personal_step_rank_month.user_openid ORDER BY personal_step_rank_month.month_step DESC limit 50;");
			echo json_encode($data);
		}
		public function group_step_rank() //团队天排行榜
		{			
			$data=Db::query("select group_name,ROUND(today_steps/1000,1) as steps from personal_step_rank group by group_name order by today_steps desc LIMIT 20;");  //id倒序
			echo json_encode($data);
		}
		public function group_step_rank_month() //团队月排行榜 select  round(teps,1) as teps from group_step_rank_month  order by teps desc
		{	
			$data=Db::query("select ROUND(month_step,1) as steps,group_name from ((select user_openid,month_step from personal_step_rank_month) a LEFT JOIN (select user_openid,group_name from user_info)b ON a.user_openid=b.user_openid) group by group_name order by month_step desc limit 20;");
		//$data=Db::table('select  round(teps,1) as teps from group_step_rank_month  order by teps desc')->select();  //id倒序
		echo json_encode($data);

		}
		

		public function getsek()
		{
			$code=$_GET['code'];
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
			$group_name='test';
			$data=Db::name('user_info')->where ('user_openid',$openid)->find();
			if(!$data){
				$data=Db::execute("insert into user_info value(null,?,?,?,?,?,null,null)",[$name,$touxiang,$group_name,$openid,$sessionkey]); 
			}else{
			//用户存在，需要更新session_key
				Db::table('user_info')->where('user_openid',$openid)->update(['session_key' =>$sessionkey]);
			}	
		}
		public function rank_a() //打卡系统  
		{	
			$data=Db::table('daka_activity')->select(); 
			echo json_encode($data);
		}
		
		public function get_activity(){
			$activity_num=$_GET['activity_num'];
			$data=Db::name('daka_activity')->where("activity_id",$activity_num)->select();
			echo json_encode($data);
		}
		
		public function get_comment(){
			$activity_num=$_GET['activity_num'];
			$data=Db::query("select comment_id,comment_name,comment_touxiang,comment_time,comment_content,comment_pic from daka_comment  where comment_activity_id=$activity_num ORDER BY comment_id desc limit 10;");
			echo json_encode($data);
		}
		
		public function get_pinglun(){
			$comment_id=$_GET['comment_id'];
			$data=Db::query("select pinglun_comment_id,pinglun_name,pinglun_content from pinglun where pinglun_comment_id in($comment_id) ORDER BY pinglun_time asc;");
			echo json_encode($data);
		}
		
		public function add_pinglun(){
			$user_name=$_GET['user_name'];
			$comment_id=$_GET['comment_id'];
			$pinglun_msg=$_GET['pinglun_msg'];
			$uptime=date('y-m-d h:i:s',time());
			

			$data=Db::query("insert into pinglun (pinglun_comment_id,pinglun_name,pinglun_content,pinglun_time) values($comment_id,'$user_name','$pinglun_msg','$uptime');");
			if($data){
				echo 0;
			}else{
				echo 1;
			}
		}
		
		
		public function challenge() //挑战系统  项目页面
		{	
			$openid=$_GET['openid'];
			$data=Db::query("select c.*,replace(replace(isnull(b.activity_num),0,' - 已报名'),1,'') as'baoming' from (select * from challenge_in )c LEFT OUTER JOIN (select * from baoming  where openid='$openid') b ON c.id=b.activity_num;");
			echo json_encode($data);
		}
		public function blm() //篮球比赛
		{	
			$data=Db::table('blm')->select(); 
			echo json_encode($data);
		}
		public function flm() //足球比赛
		{	
			$data=Db::table('flm')->select(); 
			echo json_encode($data);
		}
		public function bad() //羽毛球比赛
		{	
			$data=Db::table('bad')->select(); 
			echo json_encode($data);
		}
		public function challenge_in() //挑战项目详情页面
		{	$id=$_GET['id'];
			$data=Db::name('challenge_in')->where("id",$id)->select();
			echo json_encode($data);
		}
		public function baoming() //活动报名
		{	
			$time=date('Y-m-d H:i:s',time());  //获取当前时间
			$openid=$_GET['openid'];
			$num=$_GET['activitynum'];
			
			$data=Db::name('baoming')->where("openid",$openid)->where("activity_num",$num)->select();
			
			if(!$data){
				$data=Db::execute("insert into baoming value(null,?,?,?)",[$openid,$num,$time]); 
			}
			
			
			//echo $openid;
			//echo $num;
		}
		public function yz_group() //登录验证是否以添加组
		{	
			$openid=$_GET['openid'];
			$data=Db::name('user_info')->where ('user_openid',$openid)->find();
			$data=$data['group_name'];
			if($data){
				echo $data;
			}else{
				echo 1;
			}
		}
		
		public function getgroupinfo(){
			$data=Db::query("select group_name from group_info;");
			echo json_encode($data);
		}
		
		
		public function yzsubmit() //登录验证是否以添加组
		{	
			$groupname=$_GET['groupname'];             //formdata 额外数据
			$openid=$_GET['openid'];
			$data=Db::table('user_info')->where('user_openid',$openid)->update(['group_name' =>$groupname]);
			$data=Db::table('personal_step_rank')->where('user_openid',$openid)->update(['group_name' =>$groupname]);
			if($data){
				echo 0;
			}else{
				echo 1;
			}
		
		}
		public function index_activity() //首页活动 图片轮播
		{	
			$data=Db::table('index_activity')->select(); 
			echo json_encode($data);
		}
		public function chengjiu(){
			$openid=$_GET['openid'];
			//echo $openid;
			echo  3;
		}
		public function getuserinfo(){
			$openid=$_GET['openid'];
			$data=Db::name('user_info')->where ('user_openid',$openid)->find();
			echo json_encode($data);
		}
		
		
		public function sailias(){
			$uptime=date('Y-m-d h:m:s');
			echo $uptime;
		}
		
		public function gx() //团队天排行榜
		{	
				
			$data=Db::query("select distinct(group_name) from user_info");   //查询用户表所存在的组名  不重复
			dump($data);
			$l=sizeof($data);
	
			echo '***********************************天榜******************************<br />';
			
				for($i=0;$i<$l;$i++){	
					$name=$data[$i]['group_name'];                                     //获取每个数组的组名
					echo $name;
					
					$bs=0;
					$sj=Db::table('user_info')->where ('group_name',$name)->select();   //根据组名查询user_info表的元组总记录
					$leng=sizeof($sj);  //记录条数
					for($y=0;$y<$leng;$y++){	//所有记录步数相加
						$openid=$sj[$y]['user_openid'];    
						echo $openid;
						$step_data=Db::name('personal_step_rank')->where ('user_openid',$openid)->find();
						$step=$step_data['today_steps'];
						echo $step;
						$bs+=$step;
						echo $bs;
						Db::table('group_step_rank')->where('group_name',$name)->update(['today_steps' =>$bs]);
				
					}
		
				$a=Db::name('group_step_rank')->where ('group_name',$name)->find();  //查找group_step_rank表的队名
				if(!$a){
					Db::execute("insert into group_step_rank value(?,null,null,null)",[$name]);  //如果group_step_rank表不存则添加该组
					echo '->添加成功<br />';
				}
				echo '->已经存在，无需添加(更新信息)<br />';
			}
			echo '***********************************月榜******************************<br />';
			for($i=0;$i<$l;$i++){	
				$name=$data[$i]['group_name'];
				echo $name;
					$ybs=0;
					$sj=Db::table('user_info')->where ('group_name',$name)->select();   //根据组名查询user_info表的元组总记录
					$leng=sizeof($sj);  //记录条数
					for($y=0;$y<$leng;$y++){	//所有记录步数相加
						$openid=$sj[$y]['user_openid'];    
						echo $openid;
						$step_data=Db::name('personal_step_rank_month')->where ('user_openid',$openid)->find();
						$step=$step_data['month_step'];
						echo $step;
						$ybs+=$step;
						echo $ybs;
						Db::table('group_step_rank_month')->where('group_name',$name)->update(['teps' =>$ybs]);
					}
				$a=Db::name('group_step_rank_month')->where ('group_name',$name)->find();
				if(!$a){
					Db::execute("insert into group_step_rank_month value(?,null,null)",[$name]); 
					echo '->添加成功<br />';
				}
				echo '->已经存在，无需添加(更新信息)<br />';
			}
			
		}
	}

?>
