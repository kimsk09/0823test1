$(".m_menu").hide();
$(".m_btn").click(function(){
  $(".m_menu").slideToggle()
})

$(".sub").hide();
$(".menu>li").mouseover(function(){
  $(this).children(".sub").stop().fadeIn();
})
$(".menu>li").mouseout(function(){
  $(this).children(".sub").stop().fadeOut();
})