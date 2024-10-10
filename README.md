# OzoCare - Frontend

## Descripción

Este repositorio contiene el código **Frontend** de la aplicación web del proyecto OzoCare. La aplicación permite a los usuarios visualizar en tiempo real las mediciones ambientales almacenadas, obteniendo los datos de la base de datos.

### Funcionalidades:
- Visualización de mediciones ambientales (temperatura y concentración de gases).
- Conexión con el backend a través de una API REST.

## Despliegue

### Requisitos previos:
- **Node.js** y **npm** instalados.

### Pasos para desplegar:

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/usuario/ozocare-frontend.git
    cd ozocare-frontend
    ```

2. Instalar las dependencias:
    ```bash
    npm install
    ```

3. Iniciar el servidor de desarrollo:
    ```bash
    npm run dev
    ```

4. Abrir la aplicación web:
    - La aplicación estará disponible en [http://localhost:5173](http://localhost:5173).

### Comunicación con el backend
- **GET /api/v1/medidas**: Obtener mediciones almacenadas en el servidor.
