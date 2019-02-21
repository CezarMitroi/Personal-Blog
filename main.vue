//VUE
const app = new Vue({
  el: '#app',
  data:{
    firstName:'',
    lastName:'',
    email:'',
    newsletterAccept: false,
    gdprSigned: false,
    mentions:[],
    newMention:''
  },
  computed: {
    formIsValid: function(){
      return this.firstName && this.lastName && this.gdprSigned && this.email;
    },
    mentionIsValid: function() {
      return this.newMention;
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
    this.gdprSigned = false,
    this.mentions = []
  },
   addMention: function() {
   this.mentions.push(this.newMention);
   this.newMention = ''; 
}
}
});
