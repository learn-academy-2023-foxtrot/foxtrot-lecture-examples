# Fetching External APIs
## Resources
- [Chuck Norris Jokes API](https://api.chucknorris.io/)
- [NASA API](https://api.nasa.gov/)
- [API keys](https://github.com/learn-academy-2023-foxtrot/syllabus/blob/main/capstone/api-keys.md)

## Vocabulary
- API: Application Programming Interface, allows data to be shared between different applications
- external API: third party service offering access to their data
- endpoint: controller action that specifies what data the application should send as a resource
- JSON: JavaScript Object Notation, formatting data as an object with strings that are easily read by humans and parsed by computers
- single threaded: processing one task at a time which allows asynchronous requests
- asynchronous requests: allows a program to continue running while waiting for a response
- fetch: function that allows requests
- Promise: manage the flow of data and error handling while waiting on a response
  - fulfilled
  - rejected
  - pending
- API key: unique identifier given by the API provider as a form of authentication adn authorization for a developer to access the API data

## Storing API Key
- .env is in the Root Directory
- Make sure there is not any white space on the `.env` file
- The API variable does not use a declaration.
- API variable must start with `REACT_APP`
- Add `.env` in the .gitignore
- Restart the server
- Access environment variables defined in .env files:
  - on the applicable React component, use `process.env.REACT_APP_NASA_API_KEY`
  - store the method in a variable on the applicable component
  - reference that variable on the fetch request

## Parsing JSON from an API
- Make a plan of what you want to display
- Use methods or variables to store the required data
