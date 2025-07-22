# Click Counter App

A simple and beautiful click counter application built with Angular 19. This app demonstrates basic Angular concepts including:

- Signal-based state management
- Event handling
- Component styling
- Responsive design

## Features

- **Click to Increment**: Click the "Click Me!" button to increase the counter
- **Reset Functionality**: Reset the counter back to 0 with the "Reset" button
- **Beautiful UI**: Modern gradient design with glass-morphism effects
- **Responsive**: Works well on both desktop and mobile devices
- **Smooth Animations**: Hover effects and transitions for better user experience

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)
- Angular CLI

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd demo_angular
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   ng serve
   ```

2. Open your browser and navigate to `http://localhost:4200`

3. The app will automatically reload if you change any of the source files.

### Building for Production

To build the app for production, run:
```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── app.ts          # Main component with counter logic
│   ├── app.html        # Component template
│   ├── app.css         # Component styles
│   └── ...
├── styles.css          # Global styles
└── index.html          # Main HTML file
```

## Technologies Used

- **Angular 19**: Latest version with zoneless change detection
- **TypeScript**: For type-safe development
- **CSS3**: Modern styling with gradients and animations
- **HTML5**: Semantic markup

## Features Showcase

- **Signal-based Reactivity**: Uses Angular's new signal API for state management
- **Modern CSS**: Glass-morphism design with backdrop filters
- **Responsive Design**: Mobile-first approach with media queries
- **User Experience**: Smooth animations and visual feedback

Enjoy clicking! 🎉
