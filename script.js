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
