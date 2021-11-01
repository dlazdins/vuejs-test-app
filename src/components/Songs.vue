<template>
  <div class="row">
    <div class="table-responsive">
      <table class="table table-bordered tabel-striped table-hover">
          <thead>
            <tr class="text-center bg-info text-light">
              <th>#</th>
              <th>Title</th>
              <th>Artist</th>
              <th>Length</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center" v-bind:key="song.id" v-for="(song, index) in songs">
              <td>{{ index + 1 }}</td>
              <Song @delete-song="$emit('delete-song', song.id)" :song="song"/>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Song from './Song.vue'

export default {
  name: 'Songs',
  emits: ['delete-song'],
  props: {
    songs: Array
  },
  components: {
    Song
  }
}
</script>

<style scoped>
  th {
    padding-left: 40px;
    padding-right: 40px;
  }
</style>
