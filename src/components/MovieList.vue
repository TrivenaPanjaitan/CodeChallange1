<!-- src/components/MovieList.vue -->
<template>
    <div class="movie-list">
      <h1 class="title">Popular Movies</h1>
      <div v-for="movie in movies" :key="movie.id" class="movie-item">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" class="movie-poster">
        <div class="movie-info">
          <h2 class="movie-title">{{ movie.title }}</h2>
          <button @click="openBarcodeModal(movie.id)" class="generate-btn">Generate Barcode</button>
        </div>
      </div>
  
      <MovieModal
        v-if="showModal"
        :isVisible="showModal"
        :barcodeValue="barcodeValue"
        @close="showModal = false"
      />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import MovieModal from './MovieModal.vue';
  
  export default {
    components: { MovieModal },
    setup() {
      const movies = ref([]);
      const showModal = ref(false);
      const barcodeValue = ref('');
  
      onMounted(async () => {
        try {
          const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjY0ZjkyMzQ3MGMyODA1OWE5OTUzYjM2ZWEzYzlmZSIsIm5iZiI6MTcxOTM2OTUxNy40NTA4MzMsInN1YiI6IjY2NmNmNDdmZjUyYzE3YTNkMjk5OTE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GEpGSY1XrpbSfIZbyBui_cffKOiIn4m8eqUPoCv4y_4`, // Replace with your bearer token
            },
          });
          const data = await response.json();
          movies.value = data.results;
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      });
  
      const openBarcodeModal = (movieId) => {
        barcodeValue.value = `${movieId}`;
        showModal.value = true;
      };
  
      return { movies, showModal, barcodeValue, openBarcodeModal };
    },
  };
  </script>
  
  <style scoped>
  .movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
    background: #f0f0f0;
  }
  
  .title {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .movie-item {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 10px;
    width: 200px;
    text-align: center;
    overflow: hidden;
  }
  
  .movie-poster {
    width: 100%;
    height: auto;
  }
  
  .movie-info {
    padding: 10px;
  }
  
  .movie-title {
    font-size: 1rem;
    margin: 10px 0;
    font-weight: bold;
  }
  
  .generate-btn {
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 0.9rem;
  }
  
  .generate-btn:hover {
    background: #0056b3;
  }
  </style>
  