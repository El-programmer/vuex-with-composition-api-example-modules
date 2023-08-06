<template>
    <div class="header">{{ module }} List</div>
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  props: {
    name:  {
         type: String,
         required: true,
         default: 'task'
     },
  },
  setup(props) {
    const store = useStore();
    const module = computed( () => props.name); 
    const items = computed(() => store.state[module.value].list);

    // const items = computed(() => store.state.task.list);

    return {
      items,
      module
    };
  },
};
</script>
<style>
.header{
  padding: 20px;
    background: aqua;
}
</style>