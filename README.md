# GitHub Directory

Aplicación web para buscar usuarios de GitHub y consultar información pública de sus perfiles. Está construida con React, TypeScript y Vite, con una interfaz monocromática adaptable a distintos tamaños de pantalla.

## Funciones

- Buscar usuarios por nombre de cuenta y enviar la búsqueda con el botón o la tecla `Enter`.
- Consultar resultados con avatar, nombre de usuario y tipo de cuenta.
- Seleccionar un resultado para ver su biografía, ubicación, empresa y sitio web cuando estén disponibles.
- Consultar el número de repositorios públicos, seguidores y cuentas seguidas.
- Abrir el perfil del usuario en GitHub.

La aplicación consulta la [API REST pública de GitHub](https://docs.github.com/en/rest/search/search#search-users). No requiere configurar una clave para desarrollo; GitHub aplica límites de solicitudes a las peticiones no autenticadas.

## Requisitos

- Node.js compatible con Vite 8.
- npm.

## Instalación y ejecución

Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Vite mostrará la dirección local en la terminal, normalmente `http://localhost:5173/`.

## Comandos

```bash
npm run dev      # Iniciar el servidor de desarrollo
npm run build    # Crear la versión de producción en dist/
npm run preview  # Previsualizar la compilación de producción
```

## Tecnologías

- React 19 y TypeScript
- Vite 8
- CSS Modules y propiedades CSS
- Space Grotesk e IBM Plex Sans (Google Fonts)
- GitHub REST API

## Estructura

```text
src/
├── components/
│   ├── Results/       # Lista y filas de resultados
│   ├── SearchBar/     # Formulario de búsqueda
│   └── UserInfo/      # Detalles del usuario seleccionado
├── hooks/             # Estado y peticiones a GitHub
├── types/             # Tipos de respuestas de la API
├── App.tsx            # Composición principal de la página
└── main.tsx           # Punto de entrada de React
```

El repositorio también incluye colecciones de peticiones para Bruno y Postman, además de archivos YAML de la API.
