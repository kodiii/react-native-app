# Real Estate App

This is a React Native application for real estate. It allows users to input property details and generate a PDF with the provided information.

## Installation

To install the dependencies, run the following command in your terminal:

```
npm install
```

## Running the App

To run the app on iOS, use:

```
npx react-native run-ios
```

For Android, use:

```
npx react-native run-android
```

## Usage

1. Open the app and fill in the form with the property details.
2. Click on the 'Submit' button to generate a PDF with the property details.
3. You can customize the PDF's styling in the 'PDF Styling' screen.
4. Click on the 'Print' button to send the generated PDF to a printer.

## Dependencies

This app uses the following libraries:

- React and React Native for building the user interface.
- useState hook for managing local state.
- react-native-pdf-lib or react-native-html-to-pdf for generating PDFs.
- An image picker library for uploading photos.

## File Structure

- `src/App.js`: The main application file.
- `src/components`: Contains all the components used in the app.
- `src/screens`: Contains the screens of the app.
- `src/utils`: Contains utility functions for form handling, PDF generation, PDF styling, and printing.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)