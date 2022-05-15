<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p v-if="show">Now see a message</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Fixed',
  components: {
    HelloWorld,
  },
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.loadThirdParty();
    this.showMessage();
  },
  methods: {
    loadThirdParty() {
      const f = document.getElementsByTagName('script')[0];
      const j = document.createElement('script');
      j.type = 'text/partytown';
      j.src = '/thirdpartylib.js';
      j.async = true;
      f.parentNode.insertBefore(j, f);
    },
    showMessage() {
      console.log('show message');
      this.show = true;
    },
  },
};
</script>
