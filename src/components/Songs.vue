<template>
  <div v-bind:key="song.id" v-for="song in songs">
    <Song @delete-song="$emit('delete-song', song.id)" :song="song"/>
  </div>
</template>

<script>
import Song from './Song.vue'

export default {
  name: 'Songs',
  props: {
    songs: Array
  },
  components: {
    Song
  },
  emits: ['delete-song']
}
</script>
