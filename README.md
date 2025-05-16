WEATHER-APPLICATION

COMPANY :CODTECH IT SOLUTIONS

NAME :HARIJANA ISWARYA

INTERN ID :CT04DK692

DOMAIN :MERN STACK WEB DEVELOPMENT

DURATION:4 WEEKS

MENTOR:NEELA SANTHOSH

In Task 2, we developed a simple yet functional Weather Forecast Application using React.js and the OpenWeatherMap API. The primary goal of this task was to create a user-friendly web interface that allows users to search for weather updates by entering a city name and retrieve real-time weather information such as temperature, humidity, wind speed, and a brief weather description.

The application was bootstrapped using create-react-app to provide a clean development setup. We implemented React functional components using hooks like useState and useEffect to manage the application state and lifecycle. The main component, App.js, handles input from the user, sends a request to the OpenWeatherMap API, and renders the fetched weather data on the screen.

The key feature of this application is the integration with the OpenWeatherMap API. When a user enters a city name and clicks the “Get Weather” button, the app sends an asynchronous GET request using the native fetch() API to retrieve weather data in JSON format. The response includes important data points such as temperature, humidity, wind speed, weather description, and an icon code for visual representation.

We used conditional rendering to display weather information only when a successful response is received. In case of errors like invalid city names or network issues, appropriate error messages are shown to enhance user experience and provide feedback. The application was designed to be responsive and clean using inline styling with a modern dark theme, ensuring clarity and a visually appealing interface across different screen sizes.

Additionally, we implemented visual feedback by displaying the corresponding weather icon returned by the API, using the icon URL from OpenWeatherMap. This small visual element added more context to the weather data and made the UI more engaging.

The app also features basic form validation to ensure users cannot submit empty city names. All form inputs are bound to React state to ensure seamless and reactive updates. The application does not store any data permanently, making it a stateless utility that prioritizes speed and simplicity.

This task helped reinforce fundamental concepts in React development such as state management, conditional rendering, handling API calls, and working with asynchronous JavaScript. It also provided hands-on experience in integrating third-party APIs into a frontend application, understanding API documentation, and handling dynamic responses based on user input.

By the end of the task, we had a fully functional, real-time weather forecast tool that is easy to use and fast to deploy.

output:

![Image](https://github.com/user-attachments/assets/39f53bc8-793d-4911-bda1-934b36412bf2)

