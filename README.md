🦸‍♂️ Marvel Explorer 🔍  
Marvel Explorer es una aplicación web que permite a los fans del universo Marvel explorar personajes, cómics y eventos, consultar información oficial de la API de Marvel, y gestionar su propia colección personalizada de héroes favoritos.

---

📋 Descripción general  
Marvel Explorer permite a los usuarios:

🧑‍🎤 Navegar por cientos de personajes del universo Marvel  
📚 Consultar cómics y eventos en los que han participado  
⭐ Añadir personajes a una lista de favoritos personalizada  
📝 Editar detalles personalizados sobre cada personaje  
🔍 Obtener información complementaria mediante scraping web  

---

💻 Tecnologías

Este proyecto está construido usando:

🅰️ Frontend: Angular  
🍃 Backend: Spring Boot  
🐋 Contenedores: Docker y Docker Compose  
🔗 API externa: [Marvel Developer API](https://developer.marvel.com/)  
🕷️ Scraping: JSoup (Java) para datos extra de Wikipedia y otros  
🗃️ Base de datos: H2 en memoria (opcionalmente PostgreSQL o MongoDB)

---

✨ Características

📃 API REST con endpoints de consulta y modificación  
🔄 Sincronización con la API oficial de Marvel  
🕸️ Scraping de biografías y curiosidades desde fuentes externas  
📜 Documentación de endpoints con Swagger  
📦 Contenedores Docker para backend y frontend  
🌐 Frontend responsive con interfaz basada en cómics  
📌 Favoritos editables por el usuario con anotaciones personalizadas  
🔐 (Futuro) Autenticación de usuarios y colecciones privadas  
🚀 (Futuro) Despliegue en la nube

---

🚀 Primeros pasos

Prerrequisitos:

- Node.js y Angular CLI  
- Docker  
- Java 17 y Maven  

```bash
# Clona el proyecto
git clone https://github.com/tu-usuario/marvel-explorer.git
cd marvel-explorer

# Levanta los contenedores
docker-compose up --build
```

Luego accede a:

- 🔗 Frontend: http://localhost:4200  
- 🔗 Backend: http://localhost:8080/api/characters

---

📂 Estructura del proyecto

```
marvel-explorer/
│
├── backend/                 # Spring Boot
│   ├── src/...
│   └── Dockerfile
│
├── frontend/                # Angular
│   ├── src/...
│   └── Dockerfile
│
└── docker-compose.yml
```

---

📑 Documentación de la API REST

La API REST del backend expone los siguientes endpoints principales:

🔹 Personajes

- **GET `/api/characters`**  
  Devuelve la lista de personajes Marvel disponibles.

- **GET `/api/characters/{id}`**  
  Devuelve los detalles de un personaje por su ID.

🔹 Favoritos

- **GET `/api/favorites`**  
  Devuelve la lista de personajes favoritos del usuario.

- **POST `/api/favorites`**  
  Añade un personaje a la lista de favoritos.  
  **Body:**  
  ```json
  {
    "characterId": 1009610,
    "characterName": "Spider-Man",
    "note": "Mi favorito",
    "thumbnailUrl": "https://..."
  }
  ```

- **PUT `/api/favorites/{id}`**  
  Actualiza la información de un favorito (nota, nombre, etc).  
  **Body:** igual que en POST.

- **DELETE `/api/favorites/{id}`**  
  Elimina un personaje de la lista de favoritos.

🔹 Scraping de biografías

- **GET `/api/scraping/bio?character={nombre}`**  
  Devuelve el primer párrafo de la biografía del personaje desde Wikipedia.  
  **Ejemplo:**  
  `/api/scraping/bio?character=Iron_Man`

---

🧑‍🔧 Autor del proyecto

Este proyecto está siendo desarrollado por:

🎓 **Víctor García Duarte** (vgd937)

---

🛡️ Licencia

Este proyecto es de uso académico para la asignatura *Desarrollo Rápido de Aplicaciones* y no está afiliado oficialmente con Marvel Entertainment.
