# Apple Watch Preview and Details App

This application is a React-based project for previewing Apple Watch models and viewing detailed information about each watch. It includes a slick carousel for navigating through the collection and a detailed view for each selected watch.

## Features

- **Carousel View**: Displays a collection of Apple Watch models using a responsive carousel.
- **Watch Details View**: Click on any watch image to navigate to a detailed page with comprehensive information about the watch.
- **Responsive Design**: Ensures a seamless experience across devices.
- **Dynamic Data**: Fetches watch data from a remote API.

## Tech Stack

- **Frontend**: React.js
- **Routing**: React Router
- **Styling**: CSS with responsive design
- **Data Fetching**: Axios
- **Carousel**: React Slick

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/apple-watch-preview.git
   cd apple-watch-preview
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the app in your browser at `http://localhost:3000`.



## Usage

1. **Carousel Navigation**:
   - Use the slick carousel to browse through the Apple Watch models.

2. **View Details**:
   - Click on any watch image in the carousel to navigate to its detailed view.

3. **Responsive Design**:
   - The app is optimized for desktop, tablet, and mobile devices.

## API Endpoints

- `GET /products`:
  Fetches the list of Apple Watch models.

Example Response:
```json
[
  {
    "id": 1,
    "model": "Apple Watch Series 9",
    "releaseDate": "September 2024",
    "caseSizes": ["41mm", "45mm"],
    "colors": ["Midnight", "Starlight", "Silver", "Graphite"],
    "features": ["Always-On Display", "Blood Oxygen App", "ECG App", "S9 Chip"],
    "price": "$399 - $499",
    "availableBands": ["Sport Band", "Sport Loop", "Leather Loop", "Milanese Loop"],
    "image": "https://example.com/image1.jpg"
  },
  {
    "id": 2,
    "model": "Apple Watch Ultra 2",
    "releaseDate": "September 2024",
    "caseSizes": ["49mm"],
    "colors": ["Titanium"],
    "features": ["Ultra-Low Temperature Resistance", "Action Button", "Dual GPS Bands", "S9 Chip"],
    "price": "$799",
    "availableBands": ["Alpine Loop", "Ocean Band", "Trail Loop"],
    "image": "https://example.com/image2.jpg"
  }
]
```

## Dependencies

- React
- React Router
- Axios
- React Slick
- Slick Carousel



## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any questions or feedback, please reach out at [your-email@example.com](mailto:your-email@example.com).









# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


