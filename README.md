
# Encriptador de Texto

Este es un simple encriptador de texto construido utilizando HTML, CSS y JavaScript. La aplicación permite a los usuarios encriptar y desencriptar texto utilizando un enfoque básico de codificación en base64.

## Características

- **Encriptación de Texto**: Convierte el texto ingresado en un formato encriptado utilizando base64.
- **Desencriptación de Texto**: Decodifica el texto encriptado de vuelta a su formato original.
- **Interfaz de Usuario Amigable**: Diseño limpio y minimalista que sigue la estructura mostrada en la referencia.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura básica de la página web.
- **CSS3**: Para los estilos y el diseño visual de la aplicación.
- **JavaScript**: Para la lógica de encriptación y desencriptación del texto.

## Instrucciones de Uso

1. **Clonar el Repositorio**:
    ```bash
    git clone https://github.com/usuario/encriptador-de-texto.git
    ```

2. **Abrir el Proyecto**:
   - Abre el archivo `index.html` en tu navegador web para ver y usar la aplicación.

3. **Encriptar Texto**:
   - Ingresa el texto que deseas encriptar en el área de texto principal.
   - Haz clic en el botón "Encriptar".
   - El texto encriptado aparecerá en el área de visualización a la derecha.

4. **Desencriptar Texto**:
   - Ingresa el texto encriptado en el área de texto principal.
   - Haz clic en el botón "Desencriptar".
   - El texto desencriptado aparecerá en el área de visualización a la derecha.

## Estructura del Proyecto

- `index.html`: Contiene la estructura HTML de la página.
- `styles.css`: Archivo CSS que define los estilos de la aplicación.
- `script.js`: Archivo JavaScript que contiene la lógica de encriptación y desencriptación.
- `README.md`: Este archivo que proporciona una guía sobre cómo usar y entender el proyecto.

## Fragmentos de Código y Explicación

### 1. HTML (`index.html`)

El archivo HTML define la estructura básica de la página web.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encriptador de Texto</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="input-section">
            <h1>Ingrese el texto aquí</h1>
            <textarea id="input-text" placeholder="Ingresa el texto aquí"></textarea>
            <div class="buttons">
                <button onclick="encriptar()">Encriptar</button>
                <button onclick="desencriptar()">Desencriptar</button>
            </div>
            <p>* Solo letras minúsculas y sin acentos</p>
        </div>
        <div class="output-section">
            <div class="output-message" id="output-message">
                <p>Ningún mensaje fue encontrado</p>
                <p>Ingresa el texto que desees encriptar o desencriptar.</p>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**Explicación**:
- `<!DOCTYPE html>`: Define el documento como HTML5.
- `<link rel="stylesheet" href="styles.css">`: Conecta el archivo CSS externo para dar estilo a la página.
- `<textarea id="input-text">`: Área de texto donde el usuario ingresa el texto a encriptar o desencriptar.
- `<button onclick="encriptar()">Encriptar</button>`: Botón que llama a la función `encriptar` cuando se hace clic.
- `<button onclick="desencriptar()">Desencriptar</button>`: Botón que llama a la función `desencriptar` cuando se hace clic.
- `<div id="output-message">`: Sección donde se muestra el texto encriptado o desencriptado.

### 2. CSS (`styles.css`)

El archivo CSS define los estilos visuales para la página.

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f2f5;
    color: #333;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    width: 80%;
    max-width: 900px;
}

.input-section {
    flex: 2;
    padding: 20px;
}

textarea {
    width: 100%;
    height: 150px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
}

.buttons {
    display: flex;
    gap: 10px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:nth-child(1) {
    background-color: #004085;
    color: #fff;
}

button:nth-child(2) {
    background-color: #e2e6ea;
}

.output-section {
    flex: 1;
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
}
```

**Explicación**:
- `body`: Establece un estilo general para la página, centrando el contenido y aplicando un fondo gris claro.
- `.container`: Define un contenedor flexible que incluye las secciones de entrada y salida, con un fondo blanco y bordes redondeados.
- `.input-section`: Sección que contiene el área de texto y botones.
- `textarea`: Estilo para el área de texto, incluyendo bordes, padding y tamaño.
- `.buttons`: Configura los botones para encriptar y desencriptar, colocándolos uno al lado del otro.
- `.output-section`: Estilo para la sección donde se muestra el mensaje encriptado o desencriptado.

### 3. JavaScript (`script.js`)

El archivo JavaScript maneja la lógica de encriptación y desencriptación.

```javascript
function encriptar() {
    let texto = document.getElementById("input-text").value;
    if (texto) {
        let textoEncriptado = btoa(texto); // Simple encriptación usando base64
        document.getElementById("output-message").innerHTML = `<p>${textoEncriptado}</p>`;
    } else {
        alert("Por favor ingrese texto para encriptar.");
    }
}

function desencriptar() {
    let texto = document.getElementById("input-text").value;
    if (texto) {
        try {
            let textoDesencriptado = atob(texto); // Simple desencriptación usando base64
            document.getElementById("output-message").innerHTML = `<p>${textoDesencriptado}</p>`;
        } catch (e) {
            alert("Texto encriptado no válido.");
        }
    } else {
        alert("Por favor ingrese texto para desencriptar.");
    }
}
```

**Explicación**:
- `encriptar()`: Esta función toma el texto ingresado, lo convierte a base64 usando `btoa()`, y luego muestra el texto encriptado en la sección de salida.
- `desencriptar()`: Esta función toma el texto encriptado, lo decodifica usando `atob()`, y muestra el texto original en la sección de salida.
- Se utiliza `try-catch` en `desencriptar()` para manejar errores si el texto ingresado no es un formato base64 válido.

## Requisitos

- **Navegador Moderno**: El proyecto debería funcionar en cualquier navegador moderno como Chrome, Firefox, Safari, etc.

## Notas Importantes

- **Base64**: Este proyecto utiliza base64 para encriptar y desencriptar texto. Ten en cuenta que base64 no es un método seguro de encriptación para datos sensibles. Es simplemente una codificación reversible y no debe ser utilizada para propósitos de seguridad.

## Visualizacion:
**Encriptado**
![alt text](img/image.png)
**Desencriptado**
![alt text](img/image-1.png)

