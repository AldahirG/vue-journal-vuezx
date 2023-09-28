<template>
    <div class="entry-title d-flex justify-content-between p-2" >
        <div>
            <span class="text-success fs-3 fw-bold" >15</span>
            <span class="mx-1 fs-3" > septiembre</span>
            <span class="mx-2 fs-4 fw-light" >2023, jueves</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt" ></i>
            </button>

            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload" ></i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75" >
        <textarea
        placeholder="Que sucedio hoy ?">
        </textarea>
    </div>
    
    <Fab 
        icon="fa-save"
    />

    <img 
        src="https://media.viajando.travel/p/7b89095934164a6469043d345dd16021/adjuntos/236/imagenes/000/530/0000530471/jardin-japones-florjpg.jpg?2022-10-19-14-18-18" 
        alt="entry-picture"
        class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components:{
        Fab: defineAsyncComponent(()=> import('../components/Fab.vue'))
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    height: 100%;
    border: none;

    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2) ;
    
}
</style>