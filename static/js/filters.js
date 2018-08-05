//时间戳转时间格式
function formatTime(value,type){
    var dataTime="";
    var data = new Date();
    data.setTime(value+"000");
    var year   =  data.getFullYear();
    var month  =  addZero(data.getMonth() + 1);
    var day    =  addZero(data.getDate());
    var hour   =  addZero(data.getHours());
    var minute =  addZero(data.getMinutes());
    var second =  addZero(data.getSeconds());
    if(type == "YMD"){
        dataTime =  year + "-"+ month + "-" + day;
    }else if(type == "YMDHMS"){
        dataTime = year + "-"+month + "-" + day + " " +hour+ ":"+minute+":" +second;
    }else if(type == "HMS"){
        dataTime = hour+":" + minute+":" + second;
    }else if(type == "YM"){
        dataTime = year + "-" + month;
    }else if(type == "Y"){
        dataTime = year;
    }else if(type == "MD"){
        dataTime = month + "-" + day;
    }
    else{
        dataTime =  year + "-"+ month + "-" + day;
    }
    function addZero(val){
        if(val < 10){
            return "0" +val;
        }else{
            return val;
        }
    };
    return dataTime;
};

//增加http://www.16to.com
function add16to(url){
    return "http://www.16to.com"+url;
}

//删除html标签
function stripHTML(str){
    var reTag = /<(?:.|\s)*?>/g;
    return str.replace(reTag,"");
}

//截取字符串
function subStr(str,length){
    return str.substr(0,length);
}

export { formatTime,add16to,stripHTML,subStr}
