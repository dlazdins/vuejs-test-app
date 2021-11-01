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
    addSong (song) {
      this.songs = [...this.songs, song]
    },
    deleteSong (id) {
      this.songs = this.songs.filter((song) => song.id !== id)
    }
  },
  created () {
    this.songs = [
      {
        id: 1,
        title: 'Everlong',
        artist: 'Foo Fighters',
        duration: '4:36'
      },
      {
        id: 2,
        title: 'Toolong',
        artist: 'Glue Fighters',
        duration: '2:36'
      },
      {
        id: 3,
        title: 'Evergreen',
        artist: 'Space Fighters',
        duration: '5:36'
      },
      {
        id: 1,
        title: 'Everlong',
        artist: 'Foo Fighters',
        duration: '4:36'
      },
      {
        id: 2,
        title: 'Toolong',
        artist: 'Glue Fighters',
        duration: '2:36'
      },
      {
        id: 3,
        title: 'Evergreen',
        artist: 'Space Fighters',
        duration: '5:36'
      }
    ]
  }
}
</script>
