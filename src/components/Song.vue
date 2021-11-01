<template>
    <td>{{ song.title }}</td>
    <td>{{ song.artist }}</td>
    <td>{{ song.duration }}</td>
    <td><i @click="onDelete(song.id)" class="fas fa-lg fa-trash-alt "></i></td>
</template>

<script>
export default {
  name: 'Song',
  props: {
    song: Object
  },
  methods: {
    onDelete (id) {
      this.$emit('delete-song', id)
    }
  }
}
</script>

<style scoped>
  .fas {
    color: red;
    cursor: pointer;
    padding: 4px;
  }
</style>
