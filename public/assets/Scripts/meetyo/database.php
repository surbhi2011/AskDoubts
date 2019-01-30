<?php
class Database
{
	private static $host='localhost';
	private static $uname='root';
	private static $pwd='';
	private static $con=NULL;
	
	public static function connect()
	{
		self::$con=mysql_connect(self::$host,'root','');
		mysql_select_db('db',self::$con);
		return self::$con;
	}
	public function filldata($query)
	{		$con=database::connect();
			//echo "".$sql;
			$res=mysql_query($query,$con);
			return $res;
			database::disconnect();
	}
	public function getdata($query)
	{
		$con=database::connect();
		$res=mysql_query($query,$con);
		return $res;
	database::disconnect();
	}
	public static function disconnect()
	{
		mysql_close(self::$con);
		self::$con=NULL;
	}
}
?>