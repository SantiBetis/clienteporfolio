# PROYECTO SERVIDOR: PORTFOLIO CV



**Denominación del Ciclo**: Desarrollo de Aplicaciones Web (DAW).- 2º Curso
**Alumno**: [Diana Mª Pascual García]



## ÍNDICE


1. [INTRODUCCION](#introduccion)
2. [FUNCIONALIDADES DEL PROYECTO Y TECNOLOGÍAS UTILIZADAS](#funcionalidades-del-proyecto-y-tecnologías-utilizadas)
3. [GUÍA DE INSTALACIÓN](#guía-de-instalación)
4. [GUíA DE USO](#guía-de-uso)
5. [ENLACE A FIGMA](#enlace-a-figma)
6. [CONCLUSIÓN](#conclusión)
7. [CONTRIBUCIONES, AGRADECIMIENTOS Y REFERENCIAS](#contribuciones-agradecimientos-y-referencias)
8. [LICENCIAS](#licencias)
9. [CONTACTO](#contacto)

---



## INTRODUCCION


### Descripción del Proyecto

El Proyecto de Portafolio CV es una aplicación web destinada a la presentación personal, profesional y académica. Su principal objetivo es facilitar la creación de un currículum interactivo, permitiendo mostrar las habilidades, logros, experiencia laboral y proyectos de manera ordenada y atractiva. Está diseñado para que los usuarios puedan ingresar su información de manera fácil y acceder a ella de forma clara y visualmente atractiva.


### Justificación  

Este proyecto se ha desarrollado como un desafío académico para poner en práctica los conocimientos adquiridos en la asignatura de Desarrollo de Aplicaciones Web. Su propósito es proporcionar a los estudiantes, profesionales y empleadores una herramienta que facilite la gestión y visualización de la carrera profesional de manera ordenada y accesible.


### Objetivos

- Desarrollar un sistema de portafolio en línea que facilite la presentación de información profesional.
- Integrar funcionalidades de administración de proyectos y datos personales de manera flexible.
- Incluir validaciones dinámicas para formularios de contacto y edición de datos.
- Facilitar la navegación a través de un diseño adaptativo que garantice una experiencia de usuario coherente en todos los dispositivos.
- Permitir el borrado de proyectos.
- Permitir la búsqueda de proyectos por palabra clave.
- Creación de formulario de contacto con validaciones. 


### Motivación  

El desarrollo de este portafolio web tiene como objetivo no solo permitir la visualización de datos personales y académicos de manera simple y funcional, sino también servir como una herramienta útil para ayudar a los usuarios a destacarse en el ámbito profesional, asegurando que su información esté fácilmente accesible.

---


## FUNCIONALIDADES DEL PROYECTO Y TECNOLOGÍAS UTILIZADAS 


### Secciones implementadas

- **Navbar**: Navegación principal con enlaces a diferentes secciones de la web y solución responsiva. Se ajusta al tamaño de la ventana del navegador cambiando a una barra de navegación vertical en dispositivos medianos y pequeños.
- **About Me**: Información básica sobre el autor (nombre, foto, profesión y descripción).
- **Studies**: Detalle de la formación académica.
- **WorkExperience**: Historial laboral con descripciones de las experiencias profesionales.
- **Skills**: Descripción de habilidades técnicas categorizadas en frontend, backend y DevOps.
- **Projects**: Listado dinámico de proyectos consumidos desde una API REST. Paginación y búsqueda con validación mínima de entradas.
Filtro por tecnología usada en los proyectos.
- **Reference**: Listado de contactos que pueden dar referencias profesionales.
- **Contact**: Formulario de contacto validado en tiempo real (nombre, apellido,email y texto). Restricciones: nombre y apellido con formato adecuado, email válido, texto de al menos 20 caracteres. Botón solo habilitado si el formulario está completo y validado.
- **Footer**: Muestra nombre y derechos de autor. Enlace a Linkedin, GitHub y correo (con copiado de dirección al portapapeles).


### Tecnologías Utilizadas:

- **Visual Studio Code**
- **Astro**
- **React**
- **HTML**
- **Tailwind CSS**
- **JSON**
- **Git**
- **GitHub**

---



## GUíA DE INSTALACIÓN


### Requisitos Previos

- **Node.js** (versión 16.8 o superior).
- **npm** (el gestor de paquetes de Node.js) o yarn (si prefieres usarlo). npm se instala automáticamente con Node.js.


### Pasos para instalar en local

**1.** Clonar el repositorio:

   ```
    git clone https://github.com/SantiBetis/clienteporfolio.git   ```

**2.** Navega al directorio del proyecto:

   ```bash
   cd clienteporfolio
   ```

**3.** Instala las dependencias:

 **ATENCION**: Asegúrate de estar en el directorio del proyecto y luego instala las dependencias necesarias ejecutando el siguiente comando:

   ```bash
   npm install
   ```
    Esto instalara todas las dependencias necesarias para que el proyecto funcione correctamente.
   
---


## GUÍA DE USO


### Inicio del servidor de desarrollo

Una vez que todo esté configurado, puedes iniciar el servidor de desarrollo local con:

```bash	
npm run dev
```

Esto lo arrancará  y se podrá acceder al proyecto desde el navegador a la dirección indicada en la terminal.

### ¿Como construir el proyecto para ser desplegado?

Puedes crearlo en la terminal con:

```bash	
npm run build
```

Esto ejecutará los comandos de Astro para comprobar y construir el proyecto en la carpeta dist/, que estará lista para ser desplegada.

### Proyecto desplegado en Azure

Puedes ver el proyecto desplegado en Azure a través de la URL: https://proud-desert-0f221e003.4.azurestaticapps.net

*************************************************
## ENLACE A FIGMA


https://www.figma.com/design/P9IOuTSHjePFxHXwiVoRUh/Portfolio-Santiago-P%C3%A9rez-Olivares?node-id=39-168&t=KUlc4kPaAeg8w6bm-1




## CONCLUSIÓN

El proyecto Portafolio CV ha logrado satisfacer los objetivos planteados inicialmente, demostrando cómo una herramienta de presentación personal y profesional puede ser creada con tecnologías web modernas. La implementación de un sistema de autenticación y administración de proyectos, junto con la interfaz adaptable y fácil de usar, aporta un valor significativo para quienes buscan organizar su trayectoria profesional de manera eficiente.



## CONTRIBUCIONES

Este proyecto fue desarrollado como un trabajo individual, pero está diseñado para facilitar futuras colaboraciones. Si deseas contribuir, haz fork al repositorio, crea una rama nueva, realiza los cambios necesarios y haz un commit. Para terminar dube los cmabios a tu repositorio y abre un pull request detallando tus contribuciones.

---


## LICENCIAS

Este proyecto está licenciado bajo la **GNU General Public License v3.0**.  

Puedes utilizar, modificar y distribuir este proyecto según los términos de esta licencia.  
Para más información, consulta el archivo [LICENSE](./LICENSE) o visita la página oficial de la licencia:  
[https://www.gnu.org/licenses/gpl-3.0.html](https://www.gnu.org/licenses/gpl-3.0.html).

---


## CONTACTO

**Nombre:** Santiago Pérez Olivares
**Correo:** [santiago.perez.olivares.16@gmail.com[](mailto:santiago.perez.olivares.16@gmail.com)]
**LinkedIn:** https://www.linkedin.com/in/santiago-p%C3%A9rez-olivares-06086130a/
