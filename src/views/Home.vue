<template>
  <div class="home">
    <SalmonData :id="10170" />
  </div>
</template>

<script>
// @ is an alias to /src
import SalmonData from "@/components/SalmonData.vue";

export default {
  name: "Home",
  components: {
    SalmonData
  }
};
</script>
