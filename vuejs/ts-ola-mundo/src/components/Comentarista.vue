<template>
    <div>
        <button @click="comentar">
            Comentar
        </button>
        <p>
            {{ comentario }}
        </p>
        <p>
            {{detalhes}}
        </p>
    </div>
</template>

<script lang="ts">

import {Vue} from 'vue'
import Component from 'vue-class-component'

import {Prop} from 'vue-property-decorator'
@Component

export default class Comentarista extends Vue {
    
    private comentario = ''
    @Prop() private nome: string

    private comentar () : void{
        this.comentario = 'Um mega comentario bem bacana'
    } 

    get detalhes (){
        return `Nome do comentarista: ${this.nome}`
    }
}

</script>

