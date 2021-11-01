<template>
  <div class="container">
    <h1>This is list of your added songs</h1>
    <SongsList :songs="songs"/>
  </div>
</template>

<script>
import SongsList from '../components/SongsList.vue'

export default {
  name: 'App',
  components: {
    SongsList
  },
  data () {
    return {
      songs: []
    }
  },
  methods: {
    async fetchSongs () {
      const response = await fetch('api/songs')

      const data = await response.json()

      return data
    }
  },
  async created () {
    this.songs = await this.fetchSongs()
  }
}
</script>
