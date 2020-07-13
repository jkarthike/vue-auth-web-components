<template>
    <div class="home">
        <h1>Home!!!</h1>
        <div class="m-y-20">Hello user!</div>
        <real-digital-button @click="onClick">Logout</real-digital-button>
    </div>
</template>

<script>
import { removeStorage } from "../utils/localStorage";

import RealDigitalButton from "../webComponents/real-digital-button";

export default {
    name: "Home",
    methods: {
        onClick() {
            removeStorage("auth-token");
            this.$router.push({
                name: "Login"
            });
        }
    }
};
</script>
