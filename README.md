# CYPRESS AUTO VISITATOR

Project based on [Cypress example docker compose](https://github.com/cypress-io/cypress-example-docker-compose) for generate auto checking.

## Requeriments
- [Docker](https://docs.docker.com/compose/install/)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Configure

1. Open 2e2 folder.
2. Open cypress.config.js file.
3. Insert your's DNI into env => dni.
![foto de configuración](/config.jpg "Donde insertar el DNI").

## Use

1. build the containers with `npm run build`
2. start the web application and run Cypress tests with `npm run up`

### Autofichaje en ubuntu

1. Open a terminal.
2. Write the next command.
````
crontab -e

````
3. In the last line, paste the next command.
````
15 8 * * 1-5 cd /ruta/a/la/carpeta && npm run up

````
4. Save the file.

## Check your confirmation video

1. Open 2e2 folder.
2. Open cypress folder.
3. Open videos folder.
4. You can check the navigation video replay.

## More info

- [Cypress Docker docs](https://on.cypress.io/docker)
- [Cypress continuous integration docs](https://on.cypress.io/ci)



