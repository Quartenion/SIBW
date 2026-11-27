# SIBW · Sistemas de Información Basados en Web

Material de la asignatura Sistemas de Información Basados en Web del Grado en Ingeniería Informática de la Universidad de Granada.

La asignatura va construyendo una web desde abajo. Primero se maqueta con HTML y CSS, después se añade JavaScript en el navegador y, por último, PHP en el servidor, con plantillas Twig para separar el código de la presentación. Este repositorio recoge las actividades, los ejemplos de clase y lo que preparé para el examen.

## Contenido

**Actividades.** Ejercicios de maquetación: dar estilo a un texto con CSS, montar la estructura de una página y hacer diseños con Flexbox y Grid.

**Ejemplos.** Los ejemplos de clase, desde páginas HTML y CSS sencillas hasta los de las prácticas 4 y 5: un formulario que sube imágenes al servidor, sesiones con un contador de visitas, un login de usuarios con PHP y Twig, y una petición AJAX que actualiza la página sin recargarla.

**Examen.** Ejercicios para preparar el examen: JavaScript, maquetación con Flexbox y Grid (un blog personal, una tarjeta de perfil, bloques en horizontal...) y un ejercicio de PHP.

La carpeta `P1/docker-compose-lamp` está vacía, ya que se guardó como submódulo sin la dirección del repositorio original, así que su contenido no está aquí.

## Cómo ejecutarlo

### HTML, CSS y JavaScript

Las actividades, el examen y los ejemplos que son solo HTML se abren directamente en el navegador, con doble clic en el `.html`.

### Ejemplos con PHP

**Requisitos:** PHP 8. Las dependencias de Twig ya vienen en la carpeta `vendor/` de cada ejemplo, así que no hace falta instalar nada más.

Por ejemplo, para el login de usuarios:

```bash
cd EJEMPLOS/Pract4_wwwSesionesUsuario/wwwSesionesUsuario
php -S localhost:8000
```

y abre http://localhost:8000/login.php. El resto funciona igual desde su carpeta:

- **Formulario con subida de imágenes:** `EJEMPLOS/Pract4_wwwFormularios/wwwFormularios` -> `formulario.php`
- **Contador con sesiones:** `EJEMPLOS/Pract4_wwwSesionesBasico/wwwSesionesBasico` -> `ejemploSesion.php`
- **Login de usuarios:** `EJEMPLOS/Pract4_wwwSesionesUsuario/wwwSesionesUsuario` -> `login.php`
- **AJAX:** `EJEMPLOS/Pract5_wwwEjemploAjax/www` -> `index.html`

## Estructura

```
ACTIVIDADES/   <- ejercicios de maquetación con CSS, Flexbox y Grid
EJEMPLOS/      <- ejemplos de clase (formularios, sesiones, login, AJAX)
EXAMEN/        <- preparación del examen
P1/            <- submódulo vacío del entorno LAMP
```
