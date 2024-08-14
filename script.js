document.getElementById("send-btn").addEventListener("click", function() {
    sendMessage();
});

document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    appendMessage("user", userInput);
    document.getElementById("user-input").value = "";

    setTimeout(() => {
        generateBotResponse(userInput);
    }, 1000);
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function normalizeText(text) {
    return text
        .toLowerCase() // Convertir a minúsculas
        .normalize("NFD") // Normalizar los caracteres Unicode
        .replace(/[\u0300-\u036f]/g, ""); // Eliminar los acentos
}

function generateBotResponse(userInput) {
    const normalizedInput = normalizeText(userInput);
    let botMessage = "";

    if (normalizedInput.includes("ecologico")) {
        botMessage = "Los productos ecológicos son aquellos que se fabrican respetando el medio ambiente, desde su producción hasta su disposición final.";
    } else if (normalizedInput.includes("sostenible")) {
        botMessage = "La sostenibilidad se refiere a prácticas que no comprometen los recursos para futuras generaciones, como el uso de materiales reciclables.";
    } else if (normalizedInput.includes("recomendacion")) {
        botMessage = "Te recomiendo utilizar productos hechos de materiales reciclados o biodegradables, como bolsas reutilizables y envases compostables.";
    } else if (normalizedInput.includes("reciclaje")) {
        botMessage = "El reciclaje es clave para reducir el impacto ambiental. Puedes reciclar papel, vidrio, plástico, y metales para darles una segunda vida.";
    } else if (normalizedInput.includes("tecnicas")) {
        botMessage = "En la producción de productos ecológicos y sostenibles se utilizan diversas técnicas, como:\n- Agricultura Orgánica: Uso de métodos naturales para cultivar sin químicos.\n\n- Reciclaje y Reutilización: Procesos para reutilizar materiales y reducir desechos.\n- Energías Renovables: Uso de fuentes como solar y eólica para reducir la huella de carbono.\n- Diseño para Desmontaje: Creación de productos que se pueden desensamblar fácilmente para reciclar.\n- Compostaje: Transformación de residuos orgánicos en abono natural.\n\n¿Te gustaría saber más sobre alguna técnica en particular?";
    } else if (normalizedInput.includes("agricultura orgánica")) {
        botMessage = "La agricultura orgánica utiliza métodos naturales y no emplea químicos sintéticos. Se enfoca en mantener la salud del suelo, agua y ecosistemas, utilizando fertilizantes naturales y prácticas de cultivo sostenibles.";
    } else if (normalizedInput.includes("reciclaje")) {
        botMessage = "El reciclaje implica recolectar, clasificar y procesar materiales usados para convertirlos en nuevos productos. Esto reduce la cantidad de residuos y la necesidad de extraer nuevas materias primas, ayudando a conservar recursos naturales.";
    } else if (normalizedInput.includes("energías renovables")) {
        botMessage = "Las energías renovables provienen de fuentes naturales que se reponen de forma continua, como la solar, eólica, hidroeléctrica y geotérmica. Estas fuentes ayudan a reducir las emisiones de gases de efecto invernadero y la dependencia de combustibles fósiles.";
    } else if (normalizedInput.includes("diseño para desmontaje")) {
        botMessage = "El diseño para desmontaje se refiere a crear productos que puedan ser fácilmente desensamblados para facilitar el reciclaje o la reutilización de sus componentes. Esto ayuda a reducir los residuos y a mejorar la eficiencia de reciclaje.";
    } else if (normalizedInput.includes("compostaje")) {
        botMessage = "El compostaje es un proceso biológico que convierte los residuos orgánicos, como restos de comida y hojas, en abono natural. Este abono puede ser usado para enriquecer el suelo y mejorar el crecimiento de las plantas.";
    } else if (normalizedInput.includes("energia renovable")) {
        botMessage = "Las energías renovables, como la solar y la eólica, son esenciales para reducir la dependencia de combustibles fósiles y combatir el cambio climático.";
    } else if (normalizedInput.includes("huella de carbono")) {
        botMessage = "La huella de carbono mide la cantidad de emisiones de gases de efecto invernadero que producimos. Reducirla es crucial para combatir el cambio climático.";
    } else if (normalizedInput.includes("productos")) {
        botMessage = "Algunos productos ecológicos que puedes considerar son:\n- Bolsas reutilizables de algodón orgánico.\n- Botellas de agua de acero inoxidable.\n- Productos de limpieza ecológicos.\n- Cosméticos naturales y libres de crueldad animal.\n- Cepillos de dientes de bambú.\n- Ropa hecha de materiales orgánicos como algodón o lino.";
    } else if (normalizedInput.includes("sostenibilidad") || normalizedInput.includes("sostenibles")) {
        botMessage = "La sostenibilidad busca satisfacer las necesidades actuales sin comprometer los recursos futuros. Incluye usar materiales reciclables, reducir desechos, conservar energía y agua, y apoyar la producción ética. Puedes ser sostenible eligiendo productos ecológicos, reduciendo plásticos y optando por energías renovables.";
    } else {
        botMessage = "Parece que no entendí tu pregunta. ¿Podrías intentar formularla de otra manera o preguntar sobre otro tema relacionado con la ecología o la sostenibilidad?";
    }

    appendMessage("bot", botMessage);
}
