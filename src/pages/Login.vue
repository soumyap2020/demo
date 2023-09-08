<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div>
        <div>
          <h3>Login {{ name }}</h3>
          <hr />
          <div class="errors" v-if="invalidcredentials"><font color="red">Invalid Credentials</font></div>
        </div>
        <form @submit.prevent="onLogin()">
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" v-model="email" />
            <div class="errors" v-if="errors.email">{{ errors.email }}</div>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="text" class="form-control" v-model="password" />
            <div class="errors" v-if="errors.password">{{ errors.password }}</div>
          </div>
          <div class="my-3">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import router from "./../router";
import dashboard from "./../pages/Dashboard.vue";
import signupvalidations from './SignupValidations';
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      invalidcredentials: false
    };
  },
  methods: {
    onLogin() {
      let validations = new signupvalidations(this.email, this.password);
      this.errors = validations.checkValidations();
      if('email' in this.errors || 'password' in this.errors) {
        return false;
      }
     else if(this.email == 'soumya@gmail.com' && this.password == 'password123$') {
        router.push({ path: './dashboard' })
        return true;
      }
      else {
        this.invalidcredentials = true
      return false;
      }
  },
  name: "Login",
}
};
</script>
