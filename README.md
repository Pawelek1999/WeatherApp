# 🌤️ Pogoda - Weather App

A modern weather application built with **React** and **Tailwind CSS** that displays real-time weather data from weather stations across Poland using the IMGW-PIB API.

## Features

✨ **Real-time Weather Data** - Fetches current weather information from IMGW-PIB public API
📊 **Multiple Weather Stations** - Displays data from over 100 weather stations across Poland
🔍 **Search & Filter** - Quickly find specific weather stations by name
📱 **Responsive Design** - Beautiful UI that works on mobile, tablet, and desktop
🔄 **Auto-refresh** - Data updates automatically every 10 minutes
⚡ **Fast Performance** - Built with Vite for instant hot module replacement

## Weather Information Displayed

- 🌡️ **Temperature** (°C)
- 💧 **Humidity** (%)
- 🌪️ **Wind Speed** (m/s)
- 🔧 **Atmospheric Pressure** (hPa)
- 🌧️ **Precipitation** (mm)

## Project Structure

```
src/
├── Components/
│   ├── Header.jsx           # App header with title and station count
│   ├── SearchFilter.jsx     # Search bar for filtering stations
│   ├── WeatherCard.jsx      # Individual weather station card
│   ├── WeatherGrid.jsx      # Grid layout for cards
│   ├── LoadingSpinner.jsx   # Loading animation
│   ├── ErrorDisplay.jsx     # Error message display
│   └── Status_bar.jsx       # Status bar component
├── hooks/
│   └── useWeather.js        # Custom hook for fetching weather data
├── App.jsx                  # Main application component
├── main.jsx                 # Entry point
└── index.css               # Global styles
```

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173/`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Technologies Used

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **IMGW-PIB API** - Polish weather data source

## API Information

**Endpoint:** `https://danepubliczne.imgw.pl/api/data/synop`

This public API provides real-time data from the Polish meteorological stations (IMGW-PIB - Instytut Meteorologii i Gospodarki Wodnej - Państwowy Instytut Badawczy).

## Components Overview

### Header
Displays the app title and the total number of available weather stations.

### SearchFilter
Allows users to search for weather stations by name in real-time.

### WeatherCard
Displays weather information for a single station with:
- Station name and time
- Weather emoji indicator based on temperature
- Temperature, humidity, pressure, and wind speed
- Precipitation data (if available)

### LoadingSpinner
Shows an animated spinner while weather data is being fetched.

### ErrorDisplay
Displays error messages with a retry button if the API call fails.

## Features in Detail

### Auto-Refresh
The application automatically refreshes weather data every 10 minutes to keep information current.

### Smart Search
Type a station name in the search bar to filter results instantly.

### Temperature Indicator
Each card shows an emoji that changes based on temperature:
- 🥶 Below -10°C
- ❄️ -10°C to 0°C
- 🧊 0°C to 10°C
- 😊 10°C to 20°C
- ☀️ 20°C to 30°C
- 🔥 Above 30°C

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Features

To add new features:

1. Create new components in `src/Components/`
2. Create custom hooks in `src/hooks/` if needed
3. Import and use them in `src/App.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues and enhancement requests!

## Data Source

Weather data is provided by **IMGW-PIB** (Polish Institute of Meteorology and Water Management - National Research Institute). The data is publicly available and updated regularly.

---

**Made with ❤️ using React and Tailwind CSS**
