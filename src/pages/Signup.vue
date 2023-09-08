<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div>
        <div>
          <h3>Sign Up</h3>
          <hr />
        </div>
        <form @submit.prevent="onRegister()">
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
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import router from "./../router";
import posts from "./../pages/Posts.vue";
import signupvalidations from './SignupValidations';
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    onRegister() {
      let validations = new signupvalidations(this.email, this.password);
      this.errors = validations.checkValidations();
      if('email' in this.errors || 'password' in this.errors) {
        return false;
      }    
      else {
        router.push({ path: './posts' })
      return true;
      }
  },
  name: "Login",
}
};
</script>
