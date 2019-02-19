//JQUERY 
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
//VUE
const app = new Vue({
  el: '#app',
  data:{
    firstName:'',
    lastName:'',
    email:'',
    newsletterAccept: false,
    gdprSigned: false
  },
  computed: {
    formIsValid: function(){
      return this.firstName && this.lastName && this.gdprSigned && this.email;
    },
    fullName:{
      get: function(){
      if (this.firstName && this.lastName){
        return this.firstName + ' ' + this.lastName
      }else{
        return this.firstName || this.lastName
      }
    },
      set: function(newFullName){
        const names = newFullName.split(' ');
        if (names.length == 2){
          this.firstName = names[0];
          this.lastName = names[1];
        }
      }
  }},
  methods: {
  resetFields: function(){
    this.firstName = '',
    this.lastName = '',
    this.email = '',
    this.newsletterAccept = false,
    this.gdprSigned = false
  }
}
});
