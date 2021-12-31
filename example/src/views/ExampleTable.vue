<template>
  <TableList />
</template>

<script>
import TableList from 'example/components/table-list'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExampleTable',
  components: {
    TableList
  }
})
</script>
