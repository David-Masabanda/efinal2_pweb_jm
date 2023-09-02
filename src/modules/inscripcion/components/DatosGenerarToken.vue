<template>
    <div class="contenedor">
        <div class=" datos">
            <h1>TOKEN</h1>
            <label for="">Semilla</label>
            <input v-model="semilla" type="text" class="clave">
            <label for="">Tiempo de vigencia</label>
            <input v-model="tiempo" type="text">
            <label for="">Token</label>
            <input v-model="token" type="text">

            <button class="btn btn-primary" type="button" @click="guardarDatos">Guardar</button>
        </div>
    </div>
</template>

<script>
import {ingresarDatosFachada} from '../helpers/ClienteTokenAPI'

export default {
    data(){
        return{
            semilla:null,
            tiempo:null,
            token:null,

            nombre:"David",
            password:"12345",
        }
    },
    methods:{
        async guardarDatos(){
            const data={
                semilla:this.semilla,
                tiempo:this.tiempo,  
                nombre:this.nombre,
                password:this.password, 
            }
  
            const valor =await ingresarDatosFachada(data);
            this.token=valor;
        },
    }

}
</script>

<style>

.contenedor{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}
.datos{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 10px;
    width: 400px;
}

button{
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>