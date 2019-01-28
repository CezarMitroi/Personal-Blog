$(document).ready(()=>{
  $('.menu').on('mouseover',(event)=>{
    $(event.currentTarget).children().toggle();
  })
})
