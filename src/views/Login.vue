<template>
    <div class="login-container">
        <h1>Login!!!</h1>
        <div class="credentials-container m-y-10">
            <p>Username: maxmustermann</p>
            <p>Password: test123</p>
        </div>
        <real-digital-form :action="`${apiRoot}/users/authenticate`">
            <real-digital-textfield
                name="username"
                type="text"
                label="Username:"
                placeholder="Username"
                required="true"
                validation="^[a-zA-Z]+$"
            ></real-digital-textfield>
            <real-digital-textfield
                name="password"
                type="password"
                label="Password:"
                placeholder="Password"
                required="true"
            ></real-digital-textfield>
            <real-digital-button>Login</real-digital-button>
        </real-digital-form>
        <p v-if="isLoginFailed" class="error-message m-y-10">Login failed!</p>
    </div>
</template>

<script>
import RealDigitalTextField from "../webComponents/real-digital-textfield";
import RealDigitalButton from "../webComponents/real-digital-button";
import RealDigitalForm from "../webComponents/real-digital-form";

import { setStorage } from "../utils/localStorage";

export default {
    name: "Login",
    data() {
        return {
            form: null,
            apiRoot: process.env.VUE_APP_API_ROOT,
            isLoginFailed: false
        };
    },
    methods: {
        submitCallback(event) {
            if (event && event.detail) {
                event.detail.data.then(dataObj => {
                    setStorage("auth-token", dataObj.token);
                    this.isLoginFailed = false;
                    this.$router.push({
                        name: "Home"
                    });
                });
            }
        },
        submitionErrorCallback() {
            this.isLoginFailed = true;
        }
    },
    mounted() {
        this.form = document.querySelector("real-digital-form");
        this.form.addEventListener("submit", this.submitCallback);
        this.form.addEventListener(
            "submitionError",
            this.submitionErrorCallback
        );
    },
    destroyed() {
        this.form.removeEventListener("submit", this.submitCallback);
        this.form.removeEventListener(
            "submitionError",
            this.submitionErrorCallback
        );
    }
};
</script>

<style lang="scss" scoped>
.login-container {
    width: 190px;
    margin: 0 auto;
    text-align: center;

    .credentials-container {
        background: $white;
        width: 100%;
        border: 1px solid $primary;
        padding: 5px;
        font-size: 13px;
    }

    .error-message {
        color: $red;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
    }
}
</style>
