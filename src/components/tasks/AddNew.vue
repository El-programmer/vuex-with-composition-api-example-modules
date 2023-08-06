<template>
  <input type="text" v-model="title" @keypress.enter="save" />
  <p>Total {{module}} : {{ total }}</p>
</template>


<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";

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
    console.log(module.value)
    const total = computed(() => store.getters[module.value+'/total']);

    const title = ref("");

    function save() {
      store.dispatch( module.value+"/save", title.value , { root: true });
      title.value = "";
    }

    return {
      total,
      title,
      module,
      save,
    };
  },
};
</script>
