$(function(){

    // MENUボタン
    $(".js-menu-button").on("click", function(){
        $(this).find("i").toggleClass("on"); // MENUボタンのトグル
        $(".js-trigger").toggleClass("on"); // navメニューのトグル
    });

    // MENUのリストが開いている時、リストを押されたらボタンとMENUをトグル
    $(".js-nav-link").on("click", function(){
        $(".js-menu-button").find("i").toggleClass("on"); // アイコンのトグル
        $(".js-trigger").toggleClass("on"); // navメニューのトグル
    });
})