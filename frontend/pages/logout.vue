<template>
	<div></div>
</template>
<script setup>
const cookie = useCookie('user_id');
cookie.value = null;
await navigateTo('/');
</script>
