<template>
    <div id='register'>
        Register
        <form v-on:submit.prevent='handleRegister'>
            <div>
                <label for='username'>Username:</label>
                <input type='text' name='username' id='username' v-model='username' placeholder='Enter your username' required/>

            </div>
            <div>
                <label for='first_name'>first name:</label>
                <input type='text' name='first_name' id='first_name' v-model='first_name' placeholder='Enter your first name' required/>

            </div>
            <div>
                <label for='last_name'>last name:</label>
                <input type='text' name='last_name' id='last_name' v-model='last_name' placeholder='Enter your last name' required/>
            </div>
            <div>        <label for='country'>country:</label>
                <input type='text' name='country' id='country' v-model='country' placeholder='Enter your country' required/>
            </div>
            <div>
                <label for='password'>password:</label>
                <input type='password' name='password' id='password' v-model='password' placeholder='Enter your password' required/>

            </div>
            <div>
                <label for='confirmation_password'>confirmation password:</label>
                <input type='password' name='confirmation_password' id='confirmation_password' v-model='confirmation_password' placeholder='Enter your password' required/>

            </div>
            <div>
                <label for='email'>email:</label>
                <input type='email' name='email' id='email' v-model='email' placeholder='Enter your email' required/>
            </div>
            <div>
                <label for='profile_page_url'>profile page url:</label>
                <input type='text' name='profile_page_url' id='profile_page_url' v-model='profile_image_url' placeholder='Enter your profile page url' required/>
            </div>
            <input type='submit' value='submit' />
            <div>
                <div v-if='validated'>
                    your last registration input is validated
                </div>
                <div v-else-if='errors.length'>
                    your last registration input is not validated because: {{ errors }}
                </div>
            </div>
        </form>
    </div>

</template>
<!-- The Template -->

<!-- The Logic -->
<script>
// The Vue instance
export default {
  data () {
    return {
      username: '',
      first_name: '',
      last_name: '',
      country: '',
      password: '',
      confirmation_password: '',
      email: '',
      profile_image_url: '',
      errors: [],
      validated: false
    }
  },
  methods: {
    handleRegister: function () {
      this.errors = []
      if (this.username.length < 3 || this.username.length > 8) {
        this.errors.push('message: The username should be between 3 and 8 characters')
      }
      if (this.password.length < 5 || this.password.length > 10) {
        this.errors.push('message: The password should be between 5 and 10 characters')
      }
      if (this.password.search(/\d/) === -1) {
        this.errors.push('message: The password should include at least one number')
      }
      if (this.password.match(/^[A-Z,a-z,0-9]*$/)) {
        this.errors.push('message: The password should include at least one special char')
      }
      if (String(this.confirmation_password).localeCompare(String(this.password))) {
        this.errors.push('message: The password and password confirmation should be the same ')
      }

      this.validated = (this.errors.length === 0)
      if (this.validated) {
        console.log('validated')
      }
    }
  }
}

</script>
