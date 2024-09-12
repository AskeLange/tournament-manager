<template>
	<div class="flex flex-col p-20px">
		<label>name</label>
		<input type="text" v-model="inputname" />
		<label>title</label>
		<input type="text" v-model="inputtitle" />
		<label>image</label>
		<input type="text" v-model="inputimage" />
		<button @click="create" class="bg-[lightgrey] py-2 px-5 mt-20">
			create
		</button>

		<br />
		<pre>
			{{ userObj }}
		</pre
		>

		{{ test }}
	</div>
</template>
<script setup>
const inputname = ref('');
const inputtitle = ref('');
const inputimage = ref('');
const test = ref('Not submitted');

const userObj = computed(() => {
	return {
		name: inputname.value,
		title: inputtitle.value,
		image: inputimage.value,
		points: [],
	};
});

async function create() {
	try {
		await $fetch('/api/users', {
			method: 'POST',
			body: JSON.stringify(userObj.value),
		}).then(() => {
			test.value = 'success';
			inputname.value = '';
			inputtitle.value = '';
			inputimage.value = '';
			setTimeout(() => {
				test.value = 'Not submitted';
			}, 500);
		});
	} catch (err) {
		console.log(err);
	}
}
</script>
