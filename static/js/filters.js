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

//返回标签
function tagToStr(tag){
    var skill_tag_arr=["PHP","JavaScript","Jquery","CSS","HTML","HTML5","XML","AJAX","SOCKET","ThinkPHP","MySql","Sqlite","Linux","Apahce","XP","WIN7","WIN8","\u5d4c\u5165\u5f0f","VIM","Eclipse","Firefox","IE","\u524d\u7aef\u8bbe\u8ba1","SVN","CSS3","gulp","Sublime"];
    return skill_tag_arr[tag];
}

//返回分类
function kindToStr(kind){
    var skill_kind_arr=["WEB\u5f00\u53d1","WEB\u8bbe\u8ba1","\u6570\u636e\u5e93","\u670d\u52a1\u5668","\u5f00\u53d1\u5de5\u5177","SEO","C\/C++"];
    return skill_kind_arr[kind];
}

//返回专题类型
function specialToStr(type){
    var special_type_arr=["前端专题","后端专题","工具专题"];
    return special_type_arr[type];
}

export { formatTime,add16to,stripHTML,subStr,tagToStr,kindToStr,specialToStr}
