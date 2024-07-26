# Movie App

A Vue.js application that displays a list of popular movies fetched from The Movie Database (TMDb) API. Users can generate and view barcodes for movie tickets.

## Features

- Fetch and display a list of popular movies.
- Display movie posters, titles, and a button to generate barcodes.
- Generate barcodes for movie tickets using `jsbarcode`.

## Setup

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd movie-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory of the project with the following content:

   ```env
   VUE_APP_TMDB_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual TMDb API key.

### Running the Application

To start the development server, run:

```bash
npm run serve
```

Visit `http://localhost:8080` in your browser to view the application.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

The built files will be available in the `dist` directory.

## Usage

1. **View Movies**: The application fetches and displays a list of popular movies with their posters and titles.
2. **Generate Barcode**: Click on the "Generate Barcode" button next to a movie to generate and view a barcode for the movie's ID.

## Components

- `MovieList.vue`: Fetches and displays the list of movies. Handles the barcode generation on button click.
- `BarcodeGenerator.vue`: Generates and displays a barcode for the given movie ID.

## Dependencies

- `vue`: The Vue.js framework.
- `axios`: Promise-based HTTP client for making API requests.
- `jsbarcode`: Library for generating barcodes.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## Contact

For any questions or feedback, please contact me at:

- Email: trivenapanjaitan7.1.3@gmail.com
- LinkedIn: [Trivena Yuli Necia Panjaitan](https://linkedin.com/in/trivena-yuli-necia-panjaitan)
- GitHub: [trivenapanjaitan](https://github.com/trivenapanjaitan)

---