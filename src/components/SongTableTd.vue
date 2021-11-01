<template>
  <!-- <td>{{ index }}</td> -->
  <td>{{ song.title }}</td>
  <td>{{ song.artist }}</td>
  <td>{{ song.duration }}</td>
</template>

<script>
export default {
  name: 'SongTableTd',
  props: {
    song: Object
  }
}
</script>
