<template>
    <div>
        <h1>{{ title }}</h1>
        <Button
          @btn-click="$emit
          ('toggle-add-song')"
          text="Add New Song"
        />
    </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'SongsLibrary',
  props: {
    title: String
  },
  components: {
    Button
  }
}
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
</style>
