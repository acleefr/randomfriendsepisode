Sure! Here’s a detailed README for your project:

# Random Friends Episode Generator

## Project Overview

The **Random Friends Episode Generator** is a simple web application that redirects users to a randomly selected episode of the popular TV show "Friends" on Netflix. The idea behind this project came from wanting to watch random episodes of Friends without having to choose a specific one.

## Live Demo

Check out the live version of the project here: [randomfriendsepisode.aclee.fr](http://randomfriendsepisode.aclee.fr)

## Features

- Redirects users to a random episode of "Friends" on Netflix.
- Uses an external JSON file to store and fetch episode data.
- Simple and clean user interface.
- Built with HTML, CSS, and JavaScript.

## How to Use

1. Open the [live demo](http://randomfriendsepisode.aclee.fr) in your web browser.
2. Click on the "Watch a Random Episode" button.
3. You will be redirected to a random episode of "Friends" on Netflix.

## Project Structure

The project consists of the following files:

- `index.html`: The main HTML file that sets up the structure of the webpage.
- `styles.css`: The CSS file that styles the webpage.
- `script.js`: The JavaScript file that contains the logic for fetching episode data and redirecting to a random episode.
- `episodes.json`: The external JSON file containing the list of episodes with their respective Netflix URLs.

## Installation

If you want to run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/random-friends-episode-generator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd random-friends-episode-generator
    ```

3. Open `index.html` in your preferred web browser.

## JSON File Format

The `episodes.json` file should follow this format:

```json
[
    {
        "season": 1,
        "episodes": [
            {
                "episode": 1,
                "title": "The One Where Monica Gets a Roommate (Pilot)",
                "urls": {
                    "netflix": "/watch/70273997"
                }
            },
            {
                "episode": 2,
                "title": "The One with the Sonogram at the End",
                "urls": {
                    "netflix": "/watch/70273998"
                }
            },
            {
                "episode": 3,
                "title": "The One with the Thumb",
                "urls": {
                    "netflix": "/watch/70273999"
                }
            },
            {
                "episode": 4,
                "title": "The One with George Stephanopoulos",
                "urls": {
                    "netflix": "/watch/70274000"
                }
            }
        ]
    }
]
```

## Contribution

Contributions are welcome! If you have any suggestions or improvements, please create a pull request or open an issue.


## Contact

If you have any questions or feedback, feel free to contact me at [arthur@aclee.fr](mailto:arthur@aclee.fr).

---

Enjoy watching random episodes of Friends! 🎉

-- Written with ChatGPT

