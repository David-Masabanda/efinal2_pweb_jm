<template>
    <div class="contenedor">
        <div class="estudiante">
            <h1>ESTUDIANTE</h1>
            <label for="">Token</label>
            <input v-model="token" type="text" class="clave">
            <label for="">Nombre</label>
            <input v-model="nombre" type="text">
            <label for="">Apellido</label>
            <input v-model="apellido" type="text">
            <label for="">Cedula</label>
            <input v-model="cedula" type="text">
            <button class="btn btn-primary" type="button" @click="guardarDatos">Guardar</button>
            <button class="btn btn-primary" type="button" @click="listaEstudiantes">Mostrar</button>

        </div>

        <div v-if="mostrarlista" class="datos">
            <table class="table table-success table-striped">
                <thead>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Cedula</th>
                </thead>
                <tbody>
                    <tr v-for="estudiante in estudiantes" :key="estudiante.id">
                        <td>{{ estudiante.id }}</td>
                        <td>{{ estudiante.nombre }}</td>
                        <td>{{ estudiante.apellido }}</td>
                        <td>{{ estudiante.cedula }}</td>     
                    </tr>
                </tbody>

            </table>
        </div>

    </div>
</template>

<script>
import {ingresarEstudianteFachada, obtenerEstudiantesFachada} from '../helpers/ClienteAPI'
export default {
    data(){
        return{
            token:null,
            nombre:null,
            apellido:null,
            cedula:null,
            id:null,

            estudiantes:[],
            mostrarlista:false,
        }
    },
    methods:{
        async guardarDatos(){
            const data={
                nombre:this.nombre,
                apellido:this.apellido,
                cedula:this.cedula,
            }
            await ingresarEstudianteFachada(data)
            this.estudiantes.push(data)
            this.mostrarlista=true
  
        },

        async listaEstudiantes(){
            this.estudiantes = await obtenerEstudiantesFachada()
            this.mostrarlista=true
        }

    

    }

}
</script>

<style scoped>
.contenedor{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.estudiante{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 10px;
    width: 400px;
    margin-top: 20px;

}
.clave{
    margin-bottom: 20px;
}
button{
    margin-top: 20px;
    margin-bottom: 20px;
}
.datos{
    margin-top: 20px;
    width: 600px;
}

</style>