<template>
    <div class="home">
        <p>
            Hello user!
            <br />
            <real-digital-button @click="onClick">Logout</real-digital-button>
        </p>
    </div>
</template>

<script>
import RealDigitalButton from "../webComponents/real-digital-button";
export default {
    name: "Home",
    methods: {
        onClick() {
            this.$router.push({
                name: "Login"
            });
        }
    }
};
</script>
