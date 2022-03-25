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

1. Subir el proyecto a un repositorio de GitHub.

2. En Heroku, crear una nueva app.

3. Seleccionar GitHub como método de despliegue e indicar el nombre del repositorio.

4. Aplicar el Deploy a la rama que corresponda.
