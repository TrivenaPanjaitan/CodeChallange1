# Movie App

A Vue.js application that fetches a list of popular movies from an API and displays them in a stylish interface. Users can generate and view a barcode for each movie, which can be scanned as a ticket.

## Features

- Fetch and display a list of popular movies.
- View movie details including the poster.
- Generate and display a barcode for each movie.

## Technologies

- **Frontend Framework**: Vue.js
- **Barcode Generation**: JsBarcode
- **Styling**: Scoped CSS in Vue components

## API

The application uses the [TMDb API](https://www.themoviedb.org/documentation/api) to fetch movie data.

- **Endpoint**: `https://api.themoviedb.org/3/discover/movie`
- **Parameters**: 
  - `include_adult=false`
  - `include_video=false`
  - `language=en-US`
  - `page=1`
  - `sort_by=popularity.desc`
- **Bearer Token**: You need to provide your own API token.

## Setup

### Prerequisites

- Node.js and npm installed. If not, download and install from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd movie-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Replace `YOUR_BEARER_TOKEN` in `src/components/MovieList.vue` with your own TMDb API token.

### Development

To start the development server and open the app in your browser:

```bash
npm run serve
```

Visit `http://localhost:8080` to view the app.

### Building

To create a production build:

```bash
npm run build
```

The build files will be located in the `dist` directory.

## Usage

1. **View Movies**: The app will display a list of popular movies fetched from the TMDb API.
2. **Generate Barcode**: Click the "Generate Barcode" button on a movie to view the barcode in a modal.
3. **Close Modal**: Click the "Close" button in the modal to return to the movie list.

## Troubleshooting

If you encounter issues, ensure that:

- Your API token is correctly set.
- Dependencies are properly installed.
- You have a compatible version of Node.js and npm.

For more help, refer to the [Vue.js documentation](https://vuejs.org/) or [JsBarcode documentation](https://github.com/lindell/JsBarcode).

## Contributing

Contributions are welcome! Please submit issues and pull requests to the repository.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Vue.js](https://vuejs.org/) for the frontend framework.
- [JsBarcode](https://github.com/lindell/JsBarcode) for barcode generation.
- [TMDb API](https://www.themoviedb.org/documentation/api) for movie data.

```

Feel free to adjust any details according to your specific project setup or preferences!