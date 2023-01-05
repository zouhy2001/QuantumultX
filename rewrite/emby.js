/*
[rewrite_local]

^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey) url script-echo-response  https
://ghproxy.com/https://raw.githubusercontent.com/zouhy2001/QuantumultX/master/rewrite/emby.js

[mitm]

hostname = mb3admin.com
*/

//更改自https://raw.githubusercontent.com/qiangxinglin/Emby/main/scripts/emby.js 去除通知弹窗

var url = $request.url;

const myStatus = "HTTP/1.1 200 OK";
const myHeaders = {
    "Crack": "KS",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Method": "*",
    "Access-Control-Allow-Credentials": "true"
};


if (url.indexOf('/admin/service/registration/validateDevice') != -1) {
    obj = {
        "cacheExpirationDays": 365,
        "message": "Device Valid",
        "resultCode": "GOOD"
    };
} else if (url.indexOf('/admin/service/appstore/register') != -1) {
    obj = {
        "featId": "",
        "registered": true,
        "expDate": "2099-01-01",
        "key": ""
    };
} else if (url.indexOf('/admin/service/registration/validate') != -1) {
    obj = {
        "featId": "",
        "registered": true,
        "expDate": "2099-01-01",
        "key": ""
    };
} else if (url.indexOf('/admin/service/registration/getStatus') != -1) {
    obj = {
        "planType": "Cracked",
        "deviceStatus": "",
        "subscriptions": []
    };
} else if (url.indexOf('/admin/service/supporter/retrievekey') != -1) {
    obj = {
        "Success": false,
        "ErrorMessage": "Supporter not found"
    };
}

myData = JSON.stringify(obj);

const myResponse = {
    status: myStatus,
    headers: myHeaders, // Optional.
    body: myData // Optional.
};

console.log('Emby Premiere 已激活');
$done(myResponse);
