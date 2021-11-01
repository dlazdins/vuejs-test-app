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
      }
    ]
  }
}
</script>
