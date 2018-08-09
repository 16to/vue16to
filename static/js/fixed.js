//固定标签导航栏,大于高度时，跟随
function hotFixed(){
    var hp=document.getElementById("hot_tag").offsetTop;
    var sel=document.getElementById("hot_tag");
    if(sel != null){
        window.onscroll=function(){
            var st = document.documentElement.scrollTop+document.body.scrollTop+45;//取到当前下拉往下滚的高度
            var nt = sel.offsetTop;//获取导航头部的高度
            if (nt < st && st >=hp) {
                sel.style.position="fixed";
                sel.style.top="45px";
            } else {
                sel.style.position="";
                sel.style.top="";
            }
        }
    }
}
export { hotFixed }
