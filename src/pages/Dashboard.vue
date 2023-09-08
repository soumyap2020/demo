<template>
  <div>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div>
          <div>
            <h3>Dashboard UI</h3>
            You are logged In
            <hr />
            <ul v-on:click="confirmDlg()">
              <!--<router-link class="nav-link" to="login">Logout</router-link>-->
              Logout
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import login from "./../pages/Login.vue";
import $ from "jquery";
export default {
  data() {
    return {};
  },
  methods: {
    confirmDlg() {
      vex.dialog.confirm({
        message: "Please Confirm To Logout",
        callback: function (data) {
          if (!data) {
            alert("Cancelled");
          } else {
            router.push({ path: `/login` });
          }
        },
      });
    },
  },
  name: "Dashboard",
};
</script>
