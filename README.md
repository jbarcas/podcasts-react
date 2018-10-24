# Aplicación para la reproducción de podcasts

En este repositorio se aloja el código de una mini-aplicación para escuchar podcasts musicales. Existen 2 modos de ejecución de la misma: modo _development_  y modo _production_. La idea es crear una _Single Page Application (SPA)_ que permite reproducir podcasts.

## Primeros pasos

Para construir y ejecutar la aplicación deberemos clonar el repositorio `podcasts-react` e instalar sus dependencias. Para clonar el repositorio es necesario tener instalado Git, puedes obtenerlo en http://git-scm.com/. Para instalar las dependencias es necesario tener instalado un gestori de dependencias como [npm][npm] o [yarn][yarn].

### Clonar el repositorio

Para clonar el repositorio se debe ejecutar la siguiente instrucción:

```
git clone https://github.com/jbarcas/podcasts-react.git
```

### Instalar las dependencias

Para instalar las dependencias primero nos situaremos en la raíz del proyecto (donde se encuentra el `package.json`):

```
cd podcasts-react
```
Llegados a este punto lo único que faltaría sería instalar las dependencias, para ello:

```
yarn install
```
o
```
npm install
```

## Ejecución de la aplicación
Tenemos dos modos de ejecución de la aplicación, modo _development_ y modo _production_. En el modo _development_ los assets se sirven sin minimizar y en el modo _production_ se sirven concatenados y minimizados.

### Modo _development_

Para ejecutar la aplicación en modo desarrollo debemos situarnos en la raíz del proyecto (donde se encuentra el fichero `package.json`) y ejecutar la siguiente orden:

```
yarn start
```

Esto iniciará un servidor local de desarrollo. Haz clic en http://localhost:3000 para visualizar la SPA en tu navegador. El modo _development_ permite recargar la página en el momento que salvas los cambios realizados en el código.

### Modo _production_

Para ejecutar la aplicación en modo producción debemos situarnos en la raíz del proyecto (donde se encuentra el fichero `package.json`) y ejecutar la siguiente orden:

```
yarn build
```

Esta orden construye la aplicación minificada generando ficheros estáticos para producción optimizados para un mejor rendimiento y los coloca en el directorio `build`, el cual queda ya preparado para ser desplegado en producción.

Se puede servir con un servidor estático, por ejemplo con [serve][serve], podemos hacerlo pasándole el directorio `build` creado anteriormente de la siguiente manera:

```
yarn global add serve
serve -s build
```

Para visualizar la SPA en modo _production_ debemos acceder a la URL: http://localhost:5000.

[serve]: https://www.npmjs.com/package/serve
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/lang/en/
