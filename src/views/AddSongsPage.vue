<template>
  <div class="container">
      <SongsLibrary
        @toggle-add-song="toggleAddSong"
        title="This is your songs library"
      />
      <div v-show="showAddSong">
        <AddSong
          @toggle-add-song="toggleAddSong"
          @add-song="addSong"/>
      </div>
      <Songs @delete-song="deleteSong" :songs="songs"/>
  </div>
</template>

<script>
import AddSong from '../components/AddSong.vue'
import SongsLibrary from '../components/SongsLibrary.vue'
import Songs from '../components/Songs.vue'

export default {
  name: 'App',
  components: {
    AddSong,
    SongsLibrary,
    Songs
  },
  data () {
    return {
      songs: [],
      showAddSong: false
    }
  },
  methods: {
    toggleAddSong () {
      this.showAddSong = !this.showAddSong
    },
    async addSong (song) {
      const response = await fetch('api/songs', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(song)
      })

      const data = await response.json()

      this.songs = [...this.songs, data]
    },
    async deleteSong (id) {
      if (confirm('Are you sure?')) {
        const response = await fetch(`api/songs/${id}`, {
          method: 'DELETE'
        })
        response.status === 200
          ? (this.songs = this.songs.filter((song) => song.id !== id))
          : alert('Error deleting song')
      }
    },
    async fetchSongs () {
      const response = await fetch('api/songs')

      const data = await response.json()

      return data
    },
    async fetchSong (id) {
      const response = await fetch(`api/songs/${id}`)

      const data = await response.json()

      return data
    }
  },
  async created () {
    this.songs = await this.fetchSongs()
  }
}
</script>
