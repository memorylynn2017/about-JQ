$(document).ready(function() {

    /////////////////////////////
    // 第一大部分点击事件触发及动态添加和删除CSS类 //高效的获取方法同样是ID
    /////////////////////////////
    //这个是放大镜搜索事件的触发
    $("#search-btn").on("click", function() {
        // console.log($("#searchboxing"));

        $("#searchboxing").addClass("scale").show(1300).find("i").show(1300);
    });
    //这个是展开栏的关闭按钮事件的触发

    $("#close-btn").on("click", function() {
        $("#searchboxing").removeClass("scale").hide(1200).find("i").hide(1200);
    });



    // 第二大部分逐个遍历DOM元素的练习
    $(" .boxf").find(".boxmain").eq(0).mouseover(function() {
        // alert("点我");
        $(this).find(".boxslist").show();
    }).mouseout(function() {
        $(this).find(".boxslist").hide();
    });
    $(" .boxf").find(".boxmain").eq(1).mouseover(function() {
        // alert("点我");
        $(this).find(".boxslist").show();
    }).mouseout(function() {
        $(this).find(".boxslist").hide();
    });
    $(" .boxf").find(".boxmain").eq(2).mouseover(function() {
        // alert("点我");
        $(this).find(".boxslist").show();
    }).mouseout(function() {
        $(this).find(".boxslist").hide();
    });
    $(" .boxf").find(".boxmain").eq(3).mouseover(function() {
        // alert("点我");
        $(this).find(".boxslist").show();
    }).mouseout(function() {
        $(this).find(".boxslist").hide();
    });
    $(" .boxf").find(".boxmain").eq(4).mouseover(function() {
        // alert("点我");
        $(this).find(".boxslist").show();
    }).mouseout(function() {
        $(this).find(".boxslist").hide();
    });
    $(" .boxf").find(".boxmain").eq(5).mouseover(function() {
        // alert("点我");
        $(this).find(".boxslist").show();
    }).mouseout(function() {
        $(this).find(".boxslist").hide();
    });
    $(" .boxf").find(".boxmain").eq(6).mouseover(function() {
        // alert("点我");
        $(this).find(".boxslist").show();
    }).mouseout(function() {
        $(this).find(".boxslist").hide();
    });
    $(" .boxf").find(".boxmain").eq(7).mouseover(function() {
        // alert("点我");
        $(this).find(".boxslist").show();
    }).mouseout(function() {
        $(this).find(".boxslist").hide();
    });
    $(" .boxf").find(".boxmain").eq(8).mouseover(function() {
        // alert("点我");
        $(this).find(".boxslist").show();
    }).mouseout(function() {
        $(this).find(".boxslist").hide();
    });
    $(" .boxf").find(".boxmain").eq(9).mouseover(function() {
        // alert("点我");
        $(this).find(".boxslist").show();
    }).mouseout(function() {
        $(this).find(".boxslist").hide();
    });



    // 用函数封装块ICON模式下的鼠标触发事件
    function onTab() {
        $(".conbox").on("mouseover", function() {
            $(this).find(".lessonplay").stop().animate({
                opacity: 0.95
            });

            $(this).find(".lesson-infor").stop().animate({
                height: "175px"
            }).children("p").stop().animate({
                opacity: 1,
                height: "52px",
            }).slideDown();

        }).on("mouseout", function() {
            $(this).find(".lessonplay").stop().animate({
                opacity: 0

            }).children("p").stop().animate({
                opacity: 0,
                height: "0px",
            }).slideUp();

            $(this).find(".lesson-infor").stop().animate({
                height: "88px"
            })
        });

    };

    // 一般性执行
    onTab();


    // 块ICON的切换1
    $(".previewMode .kuai-icon ").click(function() {
        // 开启里面内容的鼠标移入移出的触发事件
        onTab();
        // 移除课程列表类
        $(".rightcontent ").removeClass("lesson-list");

    });

    // 列表ICON的切换2
    $(".previewMode .list-icon ").on("click", function() {
        // 关闭里面内容的鼠标移入移出的触发事件
        $(".conbox").off();
        // 添加课程列表类

        $(".rightcontent ").addClass("lesson-list");

        // $('?').unbind('mouseenter').unbind('mouseleave');
        // $('.lesson-list .conbox').unbind('mouseenter').unbind('mouseleave');
    });

    $(window).scroll(function() {
        //scroll 事件（滚动栏向上或者向下都触发）适用于所有可滚动的元素和 window 对象（浏览器窗口）。
        if ($(window).scrollTop() > 20) {
            //当滚动条的位置处于距顶部20像素以下时，就是大于1000象数时，跳转出现
            $(".group-top").fadeIn(150);
        } else { //否则就消失
            $(".group-top").fadeOut(150);

        }
    });

    //当点击跳转链接后，回到页面顶部位置

    $(".group-top ").click(function() {
        $('body,html').stop().animate({ scrollTop: 0 }, 1000);
        return false;
    });

});
