# week-3-assignment-burak-sen


This repository includes a basic REST Api server with logger.\
Logger will create a text file each day in `./logs` path and log each request. \
The  server can be run with the following command at ./src directory.
```
node app.js
```

JWT token must be taken with using the localhost:8080/login with GET request. 

Then Post service can be accessed with adding the JWT token at authorization header.

Paths:\

localhost:8080/posts/   GET request \
localhost:8080/posts/add POST Request \
localhost:8080/posts/replace PUT request \
localhost:8080/posts/edit PATCH request \
localhost:8080/posts/delete DELETE request
