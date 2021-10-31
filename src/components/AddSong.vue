<template>
    <div class="overlay">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Song</h5>
            <button
              @click="onClick()"
              type="button"
              class="btn-close"
              aria-label="Close">
            </button>
          </div>
          <div class="modal-body">
            <form @submit="onSubmit">
              <div class="form-group mb-3">
                <input
                type="text"
                v-model="title"
                name="title"
                class="form-control form-control-sm"
                placeholder="Song Title">
              </div>
              <div class="form-group mb-3">
                <input
                type="text"
                v-model="artist"
                name="artist"
                class="form-control form-control-sm"
                placeholder="Artist">
              </div>
              <div class="form-group mb-3">
                <input
                type="time"
                v-model="duration"
                name="duration"
                class="form-control form-control-sm"
                placeholder="Duration Of Song">
              </div>
              <div class="form-group mb-3">
                <button type="submit" value="Submit" class="btn btn-info form-control text-light">Add Song</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AddSong',
  data () {
    return {
      title: '',
      artist: '',
      duration: ''
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()

      if (!this.title) {
        alert('Please add title')
      } else if (!this.artist) {
        alert('Please add artist')
      } else if (!this.duration) {
        alert('Please add duration')
      } else {
        const newSong = {
          id: Math.floor(Math.random() * 10000),
          title: this.title,
          artist: this.artist,
          duration: this.duration
        }

        this.$emit('add-song', newSong)

        this.title = ''
        this.artist = ''
        this.duration = ''
      }
    },
    onClick () {
      this.$emit('toggle-add-song')
    }
  }
}
</script>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
  }
</style>
