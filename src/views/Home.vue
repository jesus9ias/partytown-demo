<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p v-if="show">Now see a message</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.showMessage();
  },
  methods: {
    showMessage() {
      console.log('show message');
      this.show = true;
    },
  },
};
</script>
