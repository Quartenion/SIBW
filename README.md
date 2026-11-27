# SIBW · Sistemas de Información Basados en Web

Material de **Sistemas de Información Basados en Web** (Grado en Ingeniería Informática, Universidad de Granada): maquetación con HTML y CSS, JavaScript en el cliente y PHP con plantillas Twig en el servidor.

| Carpeta | Qué hay |
|---|---|
| `ACTIVIDADES/` | Ejercicios de maquetación: texto con CSS (`P1`), estructura de página (`P2`) y diseños con Flexbox y Grid (`FelxGrid`). |
| `EJEMPLOS/` | Ejemplos de clase: páginas HTML/CSS básicas y, de las prácticas 4 y 5, formularios con subida de imágenes, sesiones (contador y login de usuarios) con PHP y Twig, y una petición AJAX. |
| `EXAMEN/` | Preparación del examen: ejercicios de JavaScript, Flexbox y Grid (blog personal, tarjeta de perfil, bloques) y un ejercicio de PHP. |
| `P1/` | Referencia al entorno `docker-compose-lamp` usado en las prácticas. Está guardado como submódulo sin URL, así que su contenido no está en este repo. |

## Cómo ejecutarlo

### Páginas HTML, CSS y JavaScript

`ACTIVIDADES/`, `EXAMEN/` y los ejemplos HTML de `EJEMPLOS/` se abren directamente en el navegador (doble clic en el `.html`).

### Ejemplos con PHP

Necesita **PHP 8** (las dependencias de Twig ya están en cada carpeta `vendor/`). Por ejemplo, el de sesiones de usuario:

```bash
cd EJEMPLOS/Pract4_wwwSesionesUsuario/wwwSesionesUsuario
php -S localhost:8000
```

y abre <http://localhost:8000/login.php>. Los demás funcionan igual desde su carpeta:

| Ejemplo | Carpeta | Página de entrada |
|---|---|---|
| Formulario con subida de imágenes | `EJEMPLOS/Pract4_wwwFormularios/wwwFormularios` | `formulario.php` |
| Contador con sesiones | `EJEMPLOS/Pract4_wwwSesionesBasico/wwwSesionesBasico` | `ejemploSesion.php` |
| Login de usuarios | `EJEMPLOS/Pract4_wwwSesionesUsuario/wwwSesionesUsuario` | `login.php` |
| AJAX | `EJEMPLOS/Pract5_wwwEjemploAjax/www` | `index.html` |
