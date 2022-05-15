//スクロールした際の動きを関数でまとめる
function ScrollStyle() {
    var scroll = $(window).scrollTop();
    if (scroll >= screen.width / 1440 * 752){//上から1pxスクロールしたら
        $('#pc-nav-bg').addClass('bg-navy');//#page-topについているUpMoveというクラス名を付与
    }else{
        if($('#pc-nav-bg').hasClass('bg-navy')){//すでに#page-topにUpMoveというクラス名がついていたら
            $('#pc-nav-bg').removeClass('bg-navy');//UpMoveというクラス名を除き
        }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on('scroll', function () {
    ScrollStyle();/* スクロールした際の動きの関数を呼ぶ*/
});
