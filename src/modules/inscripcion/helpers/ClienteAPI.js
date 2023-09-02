import axios from "axios";

//Fachada
export const ingresarEstudianteFachada = (bodyEstudiante) => {
    console.log("Ingresar Estudiante")
    ingresarEstudianteAXIOS(bodyEstudiante);
}

export const obtenerEstudiantesFachada = async() => {
    console.log("Obtener Estudiantes")
    return await obtenerEstudiantesAXIOS();
}


//Consumir API
const ingresarEstudianteAXIOS = (bodyEstudiante) => {
    axios.post(`http://localhost:8081/API/v1.0/Inscripcion/estudiantes`, bodyEstudiante).then(r => r.data)
}

const obtenerEstudiantesAXIOS = async() => {
    const data=axios.get(`http://localhost:8081/API/v1.0/Inscripcion/estudiantes`).then(r => r.data)
    console.log(data)
    return data;
}

