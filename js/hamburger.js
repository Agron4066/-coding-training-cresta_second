$(".hamburger-btn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#hamburger-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".sp-navTitle").toggleClass('panelactive');//"Cresta Design"の表記にpanelactiveクラスを付与
});

$("#hamburger-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".hamburger-btn").removeClass('active');//ボタンの activeクラスを除去し
    $("#hamburger-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
    $(".sp-navTitle").removeClass('panelactive');//"Cresta Design"の表記のpanelactiveクラスも除去
});