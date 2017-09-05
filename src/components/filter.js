export default {
    numFormat:function (value) {
        var temp = value - 0;
        return temp.toFixed(2);
    },

    persistnub:function (value) {
        var temp = value.toString();
        return Number(temp.substr(0,temp.indexOf(".")+3)).toFixed(2);
    },

    toUpperCase:function (value) {
        return value.toUpperCase();
    },

    cvetDataTime:function (value) {
        var d = new Date(value);
        return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    },
    //删除剧情简介末尾'©豆瓣'
    removeDouban(value) {
        return value.replace(/©豆瓣$/gi,""); 
    },
    //格式化countries和genres
    countryGenre(arr) {
        //["英国", "法国", "美国", "荷兰"]
        //["剧情", "历史", "战争"]
        //value = value.replace(/^[]$/gi,"");
        //var str = arr.replace(/,/g,'/')
        //var str = arr.join('/')
        return arr.join('/')
    }
}