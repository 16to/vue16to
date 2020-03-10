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

//增加http://g.16to.com
function imgAddPath(url){
    return "http://g.16to.com/upload/"+url;
}

//删除html标签
function stripHTML(str){
    var reTag = /<(?:.|\s)*?>/g;
    return str.replace(reTag,"");
}

// 转译回html
function unescapeHTML(str){
    return unescape(str);
}

//截取字符串
function subStr(str,length){
    return str.substr(0,length);
}

// //返回专题类型
// function specialToStr(type){
//     var special_type_arr=["前端专题","后端专题","工具专题"];
//     return special_type_arr[type];
// }

// //返回项目类型
// function worksToStr(type){
//     var works_type_arr=["资讯门户","企业品牌","交易商城","社区论坛","办公政府","游戏娱乐","有偿服务","搜索功能","综合类","其他"];
//     return works_type_arr[type];
// }

export {formatTime,imgAddPath,stripHTML,unescapeHTML,subStr}
