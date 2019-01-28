$(document).ready(()=>{
  $('.menu').on('click',(event)=>{
    $(event.currentTarget).siblings().toggle();
  })
})
