<html lang="en">
<head>
    <title>Mono Connect test</title>
    <style>
        .p-5{
            padding:5em;
        }
    </style>
    <script type="application/javascript" src="https://connect.withmono.com/connect.js"></script>
</head>
<body>
<div className="p-5">
    <p>Welcome to Mono Connect.</p>
    <button id="launch-btn">Link a financial account</button>
</div>
<script type="application/javascript">
  const copyToClipboard = text => {
    const elm = document.createElement('textarea');
    elm.value = text;
    document.body.appendChild(elm);
    elm.select();
    document.execCommand('copy');
    document.body.removeChild(elm);
  };
  var connect;
  var config = {
    key: "live_pk_hQRKk9cX2ntzByVMAtmH",
    onSuccess: function (response) {
      copyToClipboard(response.code);
      console.log(JSON.stringify(response));
      alert(JSON.stringify(response));
      /*
       response : { "code": "code_xyz" }
       you can send this code back to your server to get this
       authenticated account and start making requests.
       */
    },
    onClose: function (){
      console.log('user closed the widget.')
    }
  };
  connect = new Connect(config);
  connect.setup();
  var launch = document.getElementById('launch-btn');
  launch.onclick = function (e) {
    connect.open();
  };
</script>
</body>
</html>