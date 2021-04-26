<template>
  <div class="SalmonData">
    <div>ID: {{ props.id }}</div>
    <div>{{ result }}</div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
const ipcRenderer = window.ipcRenderer;

export default defineComponent({
  name: "SalmonData",
  props: {
    id: Number
  },

  setup(props) {
    const store = useStore();

    const getRes = async () => {
      const r = await ipcRenderer.invoke("result-getter", props.id);
      store.dispatch("aCurrent", r);
    };

    getRes();

    const result = computed(() => {
      return store.state.current;
    });

    return {
      props,
      result
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
