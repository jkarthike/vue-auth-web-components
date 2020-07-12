<template>
	<div class="login-container">
		<h1>Login!!!</h1>
		<div class="credentials-container m-y-10">
			<p>Username: maxmustermann</p>
			<p>Password: test123</p>
		</div>
		<real-digital-form :action="`${apiRoot}/users/authenticate`" method="post">
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
			apiRoot: process.env.VUE_APP_API_ROOT
		};
	},
	mounted() {
		const form = document.querySelector("real-digital-form");
		form.addEventListener("submit", response => {
			if (response && response.detail) {
				response.detail.data.then(dataObj => {
					setStorage("auth-token", dataObj.token);
					this.isLoginFailed = false;
					this.$router.push({
						name: "Home"
					});
				});
			}
		});
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
		margin: 0;
		color: $red;
		font-size: 14px;
		font-weight: 600;
		text-align: left;
		display: none;
	}
}
</style>
