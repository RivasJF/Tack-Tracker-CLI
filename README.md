# Task Tracker CLI

## Version 2.0

Un gestor de tareas de línea de comandos (CLI) desarrollado con Node.js y TypeScript que permite crear, editar, eliminar y gestionar tareas de forma eficiente desde la terminal, ahora con almacenamiento en SQLite.

## 📋 Descripción del Proyecto

Task Tracker CLI es una herramienta simple pero poderosa para gestionar tus tareas desde la línea de comandos. Permite:
- Crear nuevas tareas
- Editar tareas existentes
- Eliminar tareas
- Marcar tareas como "en progreso" o "completadas"
- Listar todas las tareas o filtrar por estado

## 🚀 Instalación

### Requisitos previos
- Node.js (versión 14 o superior)
- npm (viene con Node.js)

### Pasos de instalación

1. Clona el repositorio:
```bash
git clone https://github.com/RivasJF/Tack-Tracker-CLI.git
cd Tack-Tracker-CLI
```

2. Instala las dependencias:
```bash
npm install
```

3. Compila el proyecto de TypeScript:
```bash
npm run build
```

4. Instala el comando global (bin):
```bash
npm link
```

Después de ejecutar `npm link`, podrás usar el comando `tasks` desde cualquier terminal.

## 📦 Dependencias

El proyecto utiliza las siguientes dependencias:

```json
{
  "better-sqlite3": "^12.6.2", // Base de datos SQLite
  "colors": "^1.4.0",           // Colores para la consola
  "commander": "^13.1.0",       // Framework para CLI
  "inquirer": "^12.3.2"         // Prompts interactivos
}
```

## 🛠️ Desarrollo

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

## 📌 Comandos Disponibles

### Crear una tarea
```bash
tasks add
# o usando el alias
tasks a
```
Te pedirá que ingreses una descripción para la nueva tarea.

### Listar todas las tareas
```bash
tasks list
# o usando el alias
tasks l
```
Muestra todas las tareas con sus detalles (ID, descripción, estado, fecha de creación, fecha de actualización).

### Listar tareas pendientes
```bash
tasks list-todo
# o usando el alias
tasks lt
```
Muestra solo las tareas con estado "todo" en color amarillo.

### Listar tareas en progreso
```bash
tasks list-in-progress
# o usando elalias
tasks lp
```
Muestra solo las tareas con estado "in progress" en color azul.

### Listar tareas completadas
```bash
tasks list-done
# o usando el alias
tasks ld
```
Muestra solo las tareas con estado "done" en color verde.

### Editar una tarea
```bash
tasks edit <id>
# o usando el alias
tasks e <id>
```
Ejemplo:
```bash
tasks edit 1
```
Te permitirá editar la descripción de la tarea con ID 1.

### Marcar tarea como en progreso
```bash
tasks markIP <id>
# o usando el alias
tasks mip <id>
```
Ejemplo:
```bash
tasks markIP 1
```

### Marcar tarea como completada
```bash
tasks markDone <id>
# o usando el alias
tasks md <id>
```
Ejemplo:
```bash
tasks markDone 1
```

### Eliminar una tarea
```bash
tasks delete <id>
# o usando el alias
tasks d <id>
```
Ejemplo:
```bash
tasks delete 1
```

### Ver versión
```bash
tasks --version
# o
tasks -V
```

### Ver ayuda
```bash
tasks --help
# o
tasks -h
```

## 📂 Estructura del Proyecto

```
Tack-Tracker-CLI/
├── src/
│   ├── index.ts                  # Punto de entrada principal
│   ├── commansCLI.ts             # Definición de comandos CLI
│   ├── domain/
│   │   ├── Status.enum.ts        # Enum para los estados de las tareas
│   │   └── Task.ts               # Clase que representa una tarea
│   ├── infraestructure/
│   │   ├── SQLiteConnection.ts   # Conexión a la base de datos SQLite
│   │   └── SQLiteRepository.ts   # Repositorio de tareas con SQLite
│   ├── repository/
│   │   └── TaskRepository.ts     # Interfaz del repositorio de tareas
│   └── service/
│       └── TasksService.ts       # Lógica de negocio de las tareas
├── dist/                         # Carpeta de salida de la compilación
├── package.json                  # Configuración del proyecto
└── README.md                     # Este archivo
```

## 💾 Almacenamiento de Datos

Las tareas se almacenan en una base de datos SQLite (`task-tracker.db`). La tabla `tasks` tiene la siguiente estructura:

| Columna       | Tipo          | Descripción                              |
|---------------|---------------|------------------------------------------|
| `id`          | `INTEGER`     | Identificador único de la tarea (PK)     |
| `description` | `TEXT`        | Descripción de la tarea                  |
| `status`      | `TEXT`        | Estado de la tarea (`todo`, `in progress`, `done`) |
| `createdAt`   | `TEXT`        | Fecha de creación de la tarea            |
| `updatedAt`   | `TEXT`        | Última fecha de actualización de la tarea |


### Estados disponibles:
- `todo` - Tarea pendiente
- `in progress` - Tarea en progreso
- `done` - Tarea completada

## 🎨 Características

- **Interfaz interactiva**: Usa prompts para facilitar la entrada de datos.
- **Código con colores**: Las tareas se muestran en diferentes colores según su estado.
- **IDs automáticos**: Las tareas obtienen IDs autoincrementables.
- **Gestión completa**: Crear, leer, actualizar y eliminar tareas.
- **Comando global**: Después de instalar con `npm link`, usa `tasks` desde cualquier directorio.
- **Persistencia en base de datos**: Los datos se guardan en una base de datos SQLite.

## 👨‍💻 Autor

**RivasJF** - [GitHub](https://github.com/RivasJF)

## 📄 Licencia

Este proyecto está bajo la licencia ISC.

## ❓ Solución de Problemas

### El comando `tasks` no se reconoce
- Asegúrate de haber ejecutado `npm link`.
- Si estás en Windows, reinicia la terminal.

### Las dependencias no se instalan
- Elimina la carpeta `node_modules` y el archivo `package-lock.json`.
- Ejecuta `npm install` nuevamente.