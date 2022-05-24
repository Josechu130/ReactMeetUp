# Aplicacion meet-up, prueba técnica Jose Maria Chimeno Espinola

React MeetUps es una aplicacion de eventos en la que se puede crear entradas, visualizarlas y guardarlas en favoritos.

## Como ejecutar el proyecto (Web de consulta / entorno local)

Se puede consultar a través de la pagina web de manera rapida: https://reactmeetup.000webhostapp.com/

O en caso de ejecutar el proyecto en un entorno local, es necesario seguir uno a uno los siguientes pasos.

> Requisito: Se debe de tener instalado previamente un cliente de git en el ordenador, en caso de no tenerlo instalado, puedes consultar la siguiente guía de la [documentacion oficial de github](https://github.com/git-guides/install-git)

1. Abrir un terminal git apuntando a la carpeta en local donde se quiera almacenar los archivos del proyecto.

2. Dirijirse a la pagina del [proyecto en github](https://github.com/Josechu130/ReactMeetUp)

    + Clic en el botón verde "Code"
    + Seleccionar la opcion 'HTTPS' y copiar el enlace que aparece en el campo de texto

3. Una vez copiado el link de github, ejecutar la siguiente instrucción: git clone https://github.com/Josechu130/ReactMeetUp.git

4. Con esto ya estará el proyecto descargado en local, será el momento de abrir un editor de texto, es recomendable utilizar [VSC](https://code.visualstudio.com/)

5. Dentro de Visual Studio Code, arrastrando la carpeta del explorador se abrirá la carpeta y mostrará todos los archivos en el lateral izquierdo.

6. Ejecutar un nuevo terminal ('Terminal' => 'Nuevo terminal') y ejecutar la siguiente instruccion: 'npm install' (instalará todos los requerimientos del proyecto)

7. Ejecutar la instrucción 'npm start', comenzará a ejecutar el servidor de desarrollo y ya se podrá consultar a través de cualquier navegador en la ruta *localhost:3000*

## Tests cases implementados

Se han implementado dos casos de prueba dentro del componente MeetUpItem.

- MeetupItem renders without crashing with props: Comprueba si la generación del MeetUpItem es correcta con el mookup de prueba.

- MeetupItem add to favs and check if counter works: Genera un MeetUp con un mookup y interactua con el botón añadir a favoritos para comprobar la funcionalidad

## Librerías externas

A continuacion se listan todas las librerías externas que se han utilizado para finalizar el proyecto.

- Eslint: Es un interprete/analizador de codigo que permite revisar y correjir el codigo que se desarrolla en línea, es bastante para poder mover el codigo de un ordenador a otro, ya que fuerza a utilizar una typografía común, así evitando crear cambios fantasma en el momento de subir el codigo a git.

- React router: Es una librería que permite trabajar con el path del navegador y mostrar un componente u otro dependiendo de la ruta de acceso que se introduzca.

- Material Ui: Es una librería de estilos bastante popular que da una estética mas atractiva al usuario

## Proximos pasos

Dejo anotadas funciones que por tema de tiempos no he podido aplicar

- Pagina de edición dentro de All MeetUps y My Favorites (CRUD Page)
- Pagina de consulta del detalle de un evento (CRUD Page)
- Creación de alerts para cada operacion que se realiza (Crear un nuevo meetup, Añadir a favoritos un meetup)
- Adaptación a mobile (Sobretodo del menu)
- Utilizar un servicio externo como 'FireBase' para almacenar y trabajar con los datos