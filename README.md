# YouTube Video Search and Playback

This project allows users to search for YouTube videos using the YouTube Data API and view the selected video on a separate page.

## Features

- Search for YouTube videos using a search query.
- Display search results with thumbnails, video titles, and channel names.
- Save the selected video in `localStorage` and load the video on a separate page for playback.

## Project Structure

- `index.html`: The main search page where users can search for videos.
- `video.html`: The page where the selected video is displayed.
- `index.js`: Contains the functionality to fetch YouTube search results and handle video selection.
- `video.js`: Responsible for loading and displaying the clicked video.

## How It Works

1. **Search for Videos**:  
   Users can enter a search term in the input field on `index.html`. When they click the "Search" button, the app fetches YouTube video results using the YouTube Data API.

2. **Display Search Results**:  
   The search results (thumbnails, titles, and channel names) are displayed in a grid layout on the same page.

3. **Select and View a Video**:  
   Clicking on a video result saves the video data to `localStorage` and redirects the user to `video.html`.

4. **Playback the Selected Video**:  
   On `video.html`, the selected video is loaded from `localStorage` and embedded in an iframe for playback.

## Setup

### Prerequisites
- A valid YouTube Data API v3 key. Add your API key in the `index.js` file where it says `API_key`.

### Steps to Run the Project

1. Clone the repository or download the files.
2. Replace the placeholder API key in `index.js` with your own YouTube Data API key:
    ```javascript
    let API_key = "YOUR_API_KEY";
    ```
3. Open `index.html` in a browser.
4. Enter a search term and click the "Search" button to see the search results.
5. Click on any video to view it in `video.html`.

## File Descriptions

- **index.html**: The main page where users can perform YouTube searches.
- **video.html**: The video player page that loads the selected video.
- **index.js**: Handles search queries and video selection, saving data to `localStorage`.
- **video.js**: Loads the selected video from `localStorage` and displays it in an iframe.

## Technologies Used

- HTML
- CSS
- JavaScript (ES6)
- YouTube Data API v3

## Notes

- Ensure that the `video.js` and `index.js` files are correctly linked to their respective HTML files.
- You can modify the API quota limits by configuring your YouTube Data API settings in the Google Developer Console.

