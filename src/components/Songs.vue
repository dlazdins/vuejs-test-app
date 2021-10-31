<template>
  <div class="row">
    <div class="col-md-4" v-bind:key="song.id" v-for="song in songs">
      <Song @delete-song="$emit('delete-song', song.id)" :song="song"/>
    </div>
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
