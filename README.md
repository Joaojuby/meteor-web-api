# How to use this

1. Clone the repo
2. Run the app with "meteor"
3. Grab your favorite web services interface (I use postman)
4. POST to http://localhost:3000/api/users with Content-Type:application/json and an object like
```json
{
	"email": "myfancy@email.here",
	"password": "password",
	"profile": {
    "brothers": "2",
    "age": "27",
	}
}
```
Give at least an email and password, if everything is ok the server should reply back with status: "success"