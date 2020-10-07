<template lang="pug">
section.section
    nav.nav.has-shadow
        .container
            .field.has-addons
                .control
                    input.input.is-large(type="text", placeholder="Buscar", v-model="searchQuery")
                    span.is-size-9(style="color: #49cbff;") {{ amountResults }}
                .control
                    button.button.is-info.is-large(@click="search") Buscar
                .control
                    button.button.is-danger.is-large &times;

    .container.results
        .columns
            .column(v-for="(t, index) in tracks")
                | {{ `${t.name} - ${t.artists[0].name}` }}
</template>

<script>
import trackService from "../services/track";
export default {
    name: 'Home',
    data() {
      return {
          searchQuery: "",
          tracks: []
      }
    },
    computed: {
        amountResults() {
            return `Encontrados: ${this.tracks.length}`;
        }
    },
    methods: {
      search() {
          if (!this.searchQuery) return
          trackService.search(this.searchQuery)
            .then(res => {
                this.tracks = res.tracks.items
            })
      }
    }
}
</script>

<style scoped>
.results {
    margin-top: 50px;
}
</style>