<template>
    <div class="login-container">
        <h1>Login!!!</h1>
        <real-digital-form
            action="http://localhost:4000/users/authenticate"
            method="post"
        >
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
            <real-digital-button>Send</real-digital-button>
        </real-digital-form>
    </div>
</template>

<script>
import firebase from "firebase";
import RealDigitalTextField from "../webComponents/real-digital-textfield";
import RealDigitalButton from "../webComponents/real-digital-button";
import RealDigitalForm from "../webComponents/real-digital-form";

export default {
    name: "Login"
};
</script>

<style lang="scss" scoped>
.login-container {
    width: 190px;
    margin: 0 auto;
    text-align: center;
}
</style>
