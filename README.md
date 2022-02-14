
# iTunes Search App

This app allows the user to search for movies, music, ebooks, etc. The user can favourite items and display them on a list. User can allow remove items from the favourites list.


## Demo

https://l2capstoneproject2.herokuapp.com/


## Run Locally

Clone the project

```bash
git clone https://github.com/ZehraSul/iTunesSearchApp
```

Go to the project directory

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm start
```

In a new terminal window
```bash
cd itunes-app
```

Install dependencies
```bash
npm install
```

Start the app
```bash
npm start
```

## How to use

### To search
- Enter a search phrase
- Select the kind of media you would like from the drop down
- Click submit

### To favourite an item
- Click the outlined heart button at the bottom of the item from the results.

### To unfavourite an item
- Click the filled in heart button at the botton of the item in the favourites list.
## Running Tests 
### Backend

Go to the project directory
```bash
cd backend
```

To run tests, run the following command

```bash
  npm test
```


### Frontend

Go to the project directory
```bash
cd itunes-app
```

To run tests, run the following command

```bash
  npm test
```

## Security

App uses helmet.

itunes API does not require API key. If it did I would store the API key as an env variable in an env file.

In .env file
```
APP_API_KEY = 123456789
```

In App
```
{process.env.APP_API_KEY}
```
