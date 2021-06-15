# Teste de Capacidade de Desenvolvimento

## Mobile application developed with:

### Front-end: React Native

How to run the project:

`git clone <repo-path>/<repo-name>`

`cd <repo-name>`

`yarn`

`expo start -c`

### Back-end: Fake REST API created with [JSON Server](https://github.com/typicode/json-server)

`json-server db.json --routes routes.json`

`
Resources
  http://localhost/forms
  http://localhost/sections
  http://localhost/questions

  Other routes
  /api/v1/* -> /$1
  /forms/:sections -> /forms?sections=:sections
  /questions\?id=:id -> /questions/:id

`
