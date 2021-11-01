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
            </tr>
          </thead>
          <tbody>
            <tr class="text-center" v-bind:key="song.id" v-for="(song, index) in songs">
              <td>{{ index + 1}}</td>
              <td>{{ song.title }}</td>
              <td>{{ song.artist }}</td>
              <td>{{ song.duration }}</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default ({
  name: 'SongsList',
  props: {
    songs: Array
  }
})
</script>

<style scoped>
  th {
    padding-left: 40px;
    padding-right: 40px;
  }
</style>
