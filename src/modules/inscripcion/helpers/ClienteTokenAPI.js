import axios from "axios";

//Fachada
export const ingresarDatosFachada = (bodyDatos, bodyUsuario) => {
    console.log("Ingresar Datos")
    ingresarDatosAXIOS(bodyDatos,bodyUsuario);
}

const ingresarDatosAXIOS = async (bodyDatos) => {
    const data=axios.post(`http://localhost:8080/API/v1.0/Autorizacion/tokens/obtener`,bodyDatos).then(r => r.data)
    console.log(data)
    return data;
}