<template>
  <div>
    <h1>Popular Movies</h1>
    <div v-if="movies.length === 0">Loading...</div>
    <div v-else class="movies">
      <div v-for="movie in movies" :key="movie.id" class="movie">
        <img :src="getImageUrl(movie.poster_path)" alt="Movie Poster" />
        <h3>{{ movie.title }}</h3>
        <button @click="generateBarcode(movie.id)">Generate Barcode</button>
        <BarcodeGenerator v-if="selectedMovie === movie.id" :value="movie.id.toString()" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import BarcodeGenerator from './BarcodeGenerator.vue';

export default {
  components: {
    BarcodeGenerator,
  },
  data() {
    return {
      movies: [],
      selectedMovie: null,
    };
  },
  methods: {
    async fetchMovies() {
      const config = {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjY0ZjkyMzQ3MGMyODA1OWE5OTUzYjM2ZWEzYzlmZSIsIm5iZiI6MTcxOTM2OTUxNy40NTA4MzMsInN1YiI6IjY2NmNmNDdmZjUyYzE3YTNkMjk5OTE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GEpGSY1XrpbSfIZbyBui_cffKOiIn4m8eqUPoCv4y_4',
        },
      };
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', config);
        this.movies = response.data.results;
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
    getImageUrl(path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    },
    generateBarcode(movieId) {
      this.selectedMovie = movieId;
    },
  },
  created() {
    this.fetchMovies();
  },
};
</script>

<style scoped>
.movies {
  display: flex;
  flex-wrap: wrap;
}
.movie {
  margin: 10px;
}
</style>
