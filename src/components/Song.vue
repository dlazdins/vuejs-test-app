<template>
    <div class="song">
      <i @click="onDelete(song.id)" class="fas fa-2x fa-trash-alt"></i>
      <h3>{{ song.title }}</h3>
      <h5>{{ song.artist }}</h5>
      <p>{{ song.duration }}</p>
    </div>
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
    display: flex;
    align-items: center;
    justify-content: right;
    color: red;
    margin-bottom: 6px;
  }

  .song {
    background: rgb(217, 218, 219);
    margin: 10px;
    padding: 20px;
    cursor: pointer;
  }

  .song:hover {
    background: rgb(200, 200, 201);
  }

</style>
