//スクロールした際の動きを関数でまとめる
function ScrollStyle() {
    var scroll = $(window).scrollTop();
    if (scroll >= screen.width / 1440 * 752){//上から1pxスクロールしたら
        $('#bg-pc-nav').addClass('bg-navy');//#page-topについているUpMoveというクラス名を付与
    }else{
        if($('#bg-pc-nav').hasClass('bg-navy')){//すでに#page-topにUpMoveというクラス名がついていたら
            $('#bg-pc-nav').removeClass('bg-navy');//UpMoveというクラス名を除き
        }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on('scroll', function () {
    ScrollStyle();/* スクロールした際の動きの関数を呼ぶ*/
});
