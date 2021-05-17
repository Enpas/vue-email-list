const app = new Vue({

  el: '#app',
  data: {
    arrEmail: [],
  },

  mounted() {

    // invoco la funzione emailRandom
    this.emailRandom('https://flynn.boolean.careers/exercises/api/random/mail');
  },

  methods: {

    emailRandom(url) {
      axios.get(url)
        .then(resp => {
          console.log(this.arrEmail)
          this.arrEmail.push(resp.data.response);
          if(this.arrEmail.length < 10) this.emailRandom(url); 
        })

        .catch(err => {
          console.log(err + ' Page not found');
        });
     } 
  } 

}); 