<?php
if (isset($_SERVER["HTTP_CF_IPCOUNTRY"])) { $country = $_SERVER["HTTP_CF_IPCOUNTRY"]; }
ini_set('display_errors', 'off');
?>

<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">

  <title>Site Not Configured!</title>

    <link rel="stylesheet" href="css/style.css" media="screen" type="text/css" />

</head>

<body>

  <div id="container">
  	<div id="message" class="notice">
  	</div>
</div>
	<script src='/js/jquery.js'></script>
	<script type="text/javascript" language="javascript">
		<?php
		$line1 = "# Warning: ". $_SERVER['HTTP_HOST'] ." points to this server, but has not been configured!";
		$line2 = "# Do not use IP and ensure you have the correct address.";
		if ( isset($_SERVER["REMOTE_ADDR"]) )  {
		    $line3 = '# Client IP: ' . $_SERVER["REMOTE_ADDR"] . '';
		    if (isset($country) && $country != 'XX') { $line3 .= ' [' . $country . ']';}
		} else if ( isset($_SERVER["HTTP_X_FORWARDED_FOR"]) )    {
		    $line3 = '# Client IP: ' . $_SERVER["HTTP_X_FORWARDED_FOR"] . '';
		    if (isset($country) && $country != 'XX') { $line3 .= ' [' . $country . ']';}
		} else if ( isset($_SERVER["HTTP_CLIENT_IP"]) )    {
		    $line3 = '# Client IP: ' . $_SERVER["HTTP_CLIENT_IP"] . '';
		    if (isset($country) && $country != 'XX') { $line3 .= ' [' . $country . ']';}
		};
		$line4 = "# Client Host: ". $_SERVER['HTTP_HOST'];
		$line5 = "# Client Request: ". $_SERVER['REQUEST_URI'];
		$line6 = "# User Agent: ". $_SERVER['HTTP_USER_AGENT'];
		$line7 = "# Server Version: ". $_SERVER['SERVER_SOFTWARE'];
		$line8 = "# PHP Version: ". phpversion();
		$line9 = "# Server Date: ". date('l jS \of F Y h:i:s A');
		
echo "var line1 = \"". $line1 ."\";\n";
echo "var line2 = \"". $line2 ."\";\n";
echo "var line3 = \"". $line3 ."\";\n";
echo "var line4 = \"". $line4 ."\";\n";
echo "var line5 = \"". $line5 ."\";\n";
echo "var line6 = \"". $line6 ."\";\n";
echo "var line7 = \"". $line7 ."\";\n";
echo "var line8 = \"". $line8 ."\";\n";
echo "var line9 = \"". $line9 ."\";\n";
		
		?>
	</script>
	<script src="js/index.js"></script>

</body>
<img src="/img/speed-logo.png" class="pagespeed" style="width:100px; height:auto; position:absolute; right:0; bottom:0; margin-bottom:90px; margin-right:5px;">
<img src="/img/logo-php.png" class="php" style="width:100px; height:auto; position:absolute; right:0; bottom:0; margin-bottom:35px; margin-right:5px;">
<img src="/img/nginx-logo.png" class="nginx" style="width:100px; height:auto; position:absolute; right:0; bottom:0; margin-bottom:5px; margin-right:5px;">
</html>
