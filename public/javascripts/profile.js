$(function(){
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function() {  //ビット排他的論理和演算子(前方一致(ここでは#)、jquery専用)
    // スクロールの速度
    var speed = 500; // ミリ秒で記述
    var href= $(this).attr("href"); //移動先要素取得
    var target = $(href == "#" || href == "" ? 'html' : href); //取得した移動先要素によって移動先を条件分岐(三項演算子)
    var position = target.offset().top; //ページトップからの距離を取得
    $('body,html').animate({scrollTop:position}, speed, 'swing'); //
    return false;
  });
});


$(function(){
  $(window).scroll(function(){
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > elemPos - windowHeight + 100){
        $(this).addClass('scrollin');
      }
    });
  });
});

