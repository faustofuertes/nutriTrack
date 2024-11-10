# NutriTrack - Aplicación Nutricional

Este es el proyecto final para la Universidad Tecnológica Nacional (UTN), desarrollado por Federico Sosa, Fausto Fuertes, Iván Badoza, Santiago Camarda e Ignacio Volpe. El proyecto es una aplicación nutricional que permite a los usuarios gestionar sus comidas diarias y tener un mayor control sobre la ingesta de macronutrientes.

## Desarrolladores

- Federico Sosa - [LinkedIn](https://www.linkedin.com/in/federico-sosa-533512239/)
- Fausto Fuertes
- Iván Badoza - [LinkedIn](https://www.linkedin.com/in/ivan-badoza-5995bb337/)
- Santiago Camarda
- Ignacio Volpe

## Instalación y Uso

### Clonar el Repositorio
Para comenzar, clona el repositorio a tu máquina local usando:
```sh
$ git clone https://github.com/faustofuertes/nutriTrack.git
```


Luego, accede a la carpeta del proyecto:
```sh
$ cd nutriTrack
```

### Instalar Dependencias
Una vez dentro del proyecto, instala las dependencias necesarias:

```sh
$ npm install
```

### Correr los Endpoints
Para correr los endpoints, debes iniciar el servidor `json-server`. Asegúrate de que estés en el directorio raíz del proyecto y ejecuta el siguiente comando:
```sh
$ json-server --watch db.json
```
### Levantar la Aplicación
Finalmente, para levantar la aplicación Angular, ejecuta:
```sh
$ ng serve -o
```
Esto abrirá la aplicación en tu navegador predeterminado.

## Contribución
Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un 'Fork' del proyecto.
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`).
3. Realiza tus cambios y haz un 'commit' (`git commit -m 'Add some AmazingFeature'`).
4. Sube tu rama (`git push origin feature/AmazingFeature`).
5. Abre un 'Pull Request'.

## Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
