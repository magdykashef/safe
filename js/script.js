$(window).scroll(function(){
    var scroll=$(this).scrollTop();
    if (scroll>400)
    {
      $(".slider").slideDown();
    }
    else
    {
      $(".slider").slideUp();
    }  
    }
  )
