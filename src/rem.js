(function(doc,win){
    var flex = function() {
        var docEl = doc.documentElement;
        var deviceWidth = docEl.clientWidth > 500 ? 500 : docEl.clientWidth;
        docEl.style.fontSize = deviceWidth / 7.5 + "px";//如果设计图是320的话就除以3.2，这个值是根据设计稿来的哦！这点要注意
    };
    flex();
    win.addEventListener('resize', flex, false);
})(document,window);