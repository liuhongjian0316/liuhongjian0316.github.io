// 随机背景图切换
var backimg = [
    "url(/img/rbg1.jpg)",
    "url(/img/rbg2.jpg)",
    "url(/img/rbg3.jpg)",
    "url(/img/rbg4.jpg)",
    "url(/img/rbg5.jpg)",
    "url(/img/rbg6.jpg)",
    "url(/img/rbg7.jpg)"
]
//获取背景图片总数，生成随机数
var bgindex =Math.floor(Math.random() * (backimg.length));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
// 背景图片自适应
document.getElementById("web_bg").style.backgroundSize = "100% 100%;";
document.getElementById("web_bg").style.backgroundRepeat = "no-repeat";
//随机banner数组
var bannerimg =[
    "url(/img/rbg1.jpg)",
    "url(/img/rbg2.jpg)",
    "url(/img/rbg3.jpg)",
    "url(/img/rbg4.jpg)",
    "url(/img/rbg5.jpg)",
    "url(/img/rbg6.jpg)",
    "url(/img/rbg7.jpg)"
];
//获取banner图片总数，生成随机数
var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
//重设banner图片
// document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];