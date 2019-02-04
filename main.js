$(document).ready(()=>{
  $('.menu').on('click',(event)=>{
    $(event.currentTarget).siblings().fadeToggle(750);
  });
  $('.about-button').on('click',()=>{
    $('.about').slideToggle();
  });
$('.menu').on('mouseenter',(event)=>{
  $(event.currentTarget).animate({
      fontSize:'22px'
    },600)
}).on('mouseleave',(event)=>{
  $(event.currentTarget).animate({
      fontSize:'18px'
    }, 600)
});
$('.navbar-brand').on('mouseenter',(event)=>{
 $(event.currentTarget).css({
   transform:'scale(2)',
    transition: 'transform 1s'
 })
}).on('mouseleave',(event)=>{
  $(event.currentTarget).css({
    transform:'scale(1)'
  })
});
$('.desc').on('mouseenter',(event)=>{

});
  $('.place').on('mouseenter',(event)=>{
    $(event.currentTarget).css({
      transform: 'scale(1.2)',
      transition: 'transform 1s'
    })
  }).on('mouseleave',(event)=>{
    $(event.currentTarget).css({
      transform: 'scale(1)',
      transition: 'transform 1s'
    })
  });
})
