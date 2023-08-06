<template>

  <div>
    <div>
      {{ $store.state.title }}
      <Notes />
      <AddNewNote />
    
    </div>


    <div>
      <Tasks name="task" />
      <AddTask name="task" />
    
    </div>
  </div>

</template>

<script>
import Notes from "./components/notes/Notes";
import AddNewNote from "./components/notes/AddNewNote";

import Tasks from "./components/tasks/list";
import AddTask from "./components/tasks/AddNew";

export default {
  name: "App",
  components: {
    Notes,
    AddNewNote,
   Tasks,
  AddTask
  },
};
</script>
