# README

## Migrar la base de datos:

1. Crear la base de datos simple_db en Postgres

2. Correr en terminal el comando:

```sh
npm run migrate:db
```

3. Probar migración con comando:

```sh
npm run test:db
```

## Deploy en Heroku:

1. Subir el proyecto a un repositorio de GitHub:

```sh
docker build . -t <nombre_imagen>
```
