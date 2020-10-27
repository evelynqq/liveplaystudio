<template>
  <footer>
    <p>{{ year }} - Live Play Studio</p>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: "Copyright © " + new Date().getFullYear(),
    };
  },
};
</script>
