/*
 *
 *
[rewrite_local]

# 欧几里得考研数学VIP
^https?:\/\/api\.tumukaoyan\.com\/api\/wx\/CheckCode.+ url script-response-body https://raw.githubusercontent.com/zouhy2001/QuantumultX/master/rewrite/ojld.js

[mitm]

hostname = api.tumukaoyan.com
*
*
*/


body = JSON.parse($response.body);
body['data']['SysUserInfo']['VipEndTime'] = "2099-12-31T23:59:59"
//console.log(JSON.stringify(body, null, 2));
$done({ body: JSON.stringify(body) });