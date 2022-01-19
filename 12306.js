// ==UserScript==
// @name           简易订票助手
// @namespace      https://test.com
// @description    简易订票助手
// @license        MIT
// @version        0.0.1
// @author         gsonhub
// @include        https://kyfw.12306.cn/otn/view/*
// @require        https://cdn.jsdelivr.net/npm/mdui@1.0.2/dist/js/mdui.min.js
// @require        https://cdn.bootcss.com/jquery/2.2.4/jquery.min.js
// @grant          GM_xmlhttpRequest
// @grant          GM_registerMenuCommand
// @grant          GM_openInTab
// @grant          GM_info
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_getResourceText
// @grant          GM_addStyle
// @grant          window.onurlchange
// @run-at         document-end
// @antifeature    membership
// @antifeature    referral-link
// ==/UserScript==

(function() {
    'use strict';

    console.log('简易订票助手程序启动');

    var TRAIN_DATE='2022-01-23',
        TRAIN_NO_ARR=['G6351'],
        TRAIN_TYPE=30,// 车票类型  all 任意车次 23软卧一等 动卧 28硬卧二等 软座 29硬座 26无座 32商务特等座 30二等座 31一等座 33高级商务
        TRAIN_SEAT=0,// 一等座M,特等座P,二等座0,商务座9,硬座1,无座1,软座2,软卧4,硬卧3  // 大小写敏感
        FROM_STATION,
        Passengers,
        TO_STATION,
        FROM_STATION_NAME='普宁',
        TO_STATION_NAME='广州';

    var MAP={
        '广州':'GZQ',
        '普宁':'PEQ'
    };

    function queryTicket() {
        var str_arr = '';
        var settings = {
            async: false,
            "url": `https://kyfw.12306.cn/otn/leftTicket/queryA?leftTicketDTO.train_date=${TRAIN_DATE}&leftTicketDTO.from_station=${FROM_STATION}&leftTicketDTO.to_station=${TO_STATION}&purpose_codes=ADULT`,
            "method": "GET"
        };
        $.ajax(settings).done(function (response) {
            str_arr = (response.data.result);
        });
        return str_arr;
    }

    function matchStation(str_arr){
        var list=[];
        for(var j=0;j<TRAIN_NO_ARR.length;j++)
            for(var i=0;i<str_arr.length;i++){
                var arr=str_arr[i].split('|');
                if(TRAIN_NO_ARR[j]==arr[3]&&(arr[TRAIN_TYPE]>0||arr[TRAIN_TYPE]==='有')){
                    list.push(arr);break;
                }
            }
        return list;
    }

    function submitOrderRequest(secretStr) {
        var status=false;
        var settings = {
            "url": "https://kyfw.12306.cn/otn/leftTicket/submitOrderRequest",
            "async": false,
            "method": "POST",
            "data": `secretStr=${secretStr}&train_date=${TRAIN_DATE}&back_train_date=${TRAIN_DATE}&tour_flag=dc&purpose_codes=ADULT&query_from_station_name=${FROM_STATION_NAME}&query_to_station_name=${TO_STATION_NAME}&undefined`,
        };
        $.ajax(settings).done(function(res){
            if(res.status==undefined){
                error('请先登录')
            }
            status=res.status;
        });
        return status;
    }

    function init(){
        FROM_STATION=MAP[FROM_STATION_NAME];
        TO_STATION=MAP[TO_STATION_NAME];
        initPassengers();
    }

    function initPassengers(){
        var settings = {
            "url": "https://kyfw.12306.cn/otn/passengers/query",
            "async":false,
            "method": "POST",
            "data": {
                "pageIndex": 1,
                "pageSize":10
            }
        };
        $.ajax(settings).done(function (res) {
            Passengers=res['data']['datas'];
        });
    }

    function initDcForm(){
        var param=false;
        var settings = {
            "url": "https://kyfw.12306.cn/otn/confirmPassenger/initDc",
            "async":false,
            "method": "POST",
            "data": {
                "_json_att": ""
            }
        };
        $.ajax(settings).done(function (response) {
            var globalRepeatSubmitToken=/var globalRepeatSubmitToken = '(.*?)';/.exec(response);
            var leftTicketStr=/'leftTicketStr':'(.*?)'/.exec(response);
            var key_check_isChange=/'key_check_isChange':'(.*?)'/.exec(response);
            if(globalRepeatSubmitToken&&leftTicketStr&&key_check_isChange){
                param={
                    'globalRepeatSubmitToken':globalRepeatSubmitToken[1],
                    'leftTicketStr':leftTicketStr[1],
                    'key_check_isChange':key_check_isChange[1],
                }
            }

        });
        return param;
    }

    function sureOrder(form,tick){
        var oldPassengerStr='';
        var passengerTicketStr='';
        var result=false;
        var arr;
        for(var i=0;i<Passengers.length;i++){
            var vo=Passengers[i];
            arr=[vo.passenger_name,1,vo.passenger_id_no,'1_'];
            //if(i>0) oldPassengerStr+=',';
            oldPassengerStr+=arr.join(',');
            arr=['O',0,1,vo.passenger_name,1,vo.passenger_id_no,vo.mobile_no,'N',vo.allEncStr];
            if(i>0) passengerTicketStr+='_';
            passengerTicketStr+=arr.join(',');
        }
        //校验订单
        var settings = {
            "url": "https://kyfw.12306.cn/otn/confirmPassenger/checkOrderInfo",
            "method": "POST",
            "async":false,
            "data": {
                "REPEAT_SUBMIT_TOKEN":form['globalRepeatSubmitToken'],
                "_json_att": "",
                "bed_level_order_num": "000000000000000000000000000000",
                "cancel_flag": "2",
                "oldPassengerStr": oldPassengerStr,
                "passengerTicketStr": passengerTicketStr,
                "randCode": "",
                "scene": "nc_login",
                "sessionId": "",
                "sig": "",
                "tour_flag": "dc",
                "whatsSelect": "1"
            }
        };

        $.ajax(settings).done(function (response) {
            console.log('校验订单结果：',response);
        });

        settings = {
            "url": "https://kyfw.12306.cn/otn/confirmPassenger/confirmSingleForQueue",
            "method": "POST",
            "async":false,
            "data": {
                "REPEAT_SUBMIT_TOKEN": form['globalRepeatSubmitToken'],
                "_json_att": "",
                "choose_seats": "",
                "dwAll": "N",
                "is_cj": "Y",
                "is_jy": "N",
                "key_check_isChange": form['key_check_isChange'],
                "leftTicketStr":form['leftTicketStr'],
                "oldPassengerStr": oldPassengerStr,
                "passengerTicketStr": passengerTicketStr,
                "purpose_codes": "00",
                "randCode": "",
                "roomType": "00",
                "seatDetailType": "000",
                "train_location": tick[15],
                "whatsSelect": "1"
            }
        };
        $.ajax(settings).done(function (response) {
            console.log('确认订单结果：',response);
            result=response.data.submitStatus;
        });

        return result;
    }

    function log(msg){
        msg=" "+msg;
        console.log(new Date().toISOString()+msg);
    }
    function warn(msg){
        console.warn(new Date().toISOString()+msg);
    }
    function error(msg){
        console.error(new Date().toISOString()+msg);
    }

    var TTT=null;
    function orderQueue(num=1){
        if(TTT) clearTimeout(TTT);
        var t1=new Date().getTime();
        console.log("\n");
        log('开始第'+num+'次抢票。。。');
        var str_arr=queryTicket();
        var res_match=matchStation(str_arr);
        if(res_match.length>0){
            for(var i=0;i<res_match.length;i++){
                log('申请订单，车次'+res_match[i][3]);
                var res=submitOrderRequest(res_match[i][0]);
                var form=initDcForm();
                if(res&&form){
                    log('校验与确认订单，车次'+res_match[i][3]);
                    res=sureOrder(form,res_match[i]);
                    if(res){
                        log('抢票成功，车次'+res_match[i][3]);
                        break;
                    }else{
                        warn('抢票失败，车次'+res_match[i][3]);
                    }
                }else{
                    log('申请订单失败，车次'+res_match[i][3]);
                }
            }
        }else{
            console.log('未查询到有效车票');
        }
        var t2=new Date().getTime();
        log('结束第'+num+'次抢票。。。本次耗时:'+(t2-t1)+'ms');
        console.log("\n");
        TTT=setTimeout(()=>{
            orderQueue(num+1);
        },15000);
    }

    function main(){
        init();
        orderQueue();
    }

    main();
})();
