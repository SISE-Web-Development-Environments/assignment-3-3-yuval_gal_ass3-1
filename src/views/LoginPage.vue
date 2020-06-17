<template>
  <loginComp
    :login="login"
    :isLoggedIn="isLoggedin"
    :failMessage="failMessage"
    :isFailedLogin="isFailedLogin"
  />
</template>

<script>
  import loginComp from '@/components/Login.vue';
  import loginScript from "../generic/login";

  export default {
    name: 'LoginPage',
    data(){
      return {
        isLoggedin: false,
        isFailedLogin: false,
        failMessage: ''
      }
    },
    components: {
      loginComp
    },
    methods: {
      async login(username, password) {
        this.isFailedLogin = false;
        let {status, message} = await loginScript.login(username,password);
        if(status === "success")
        {
          console.log("stauts is: " + status)
          this.isLoggedin = true;
        }
        else
        {
          console.log("stauts is: " + status)
          this.isFailedLogin = true;
          this.failMessage = message;
        }
      }
    }
  }
</script>
