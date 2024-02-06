<script setup lang="ts">
    const props=defineProps<{
        idObra?:number
        avatarUrl?:string
        title?:string
        descripcion?:string
        sinopsis?:string
        asientos?:string[]
    }>()
    console.log(props);
</script>
<template>
    <section class="grip">
        <div class="grip-cards">
            <div class="card">
                <h3 class="card-heading">{{title}}</h3>
                <div class="paragraph">{{descripcion}}
                </div>
                <div class="link">
                  <div class="master-link">
                    <b class="learn-more"></b>
                    <!-- <img src="./public/rightArrowIcon.svg"/> -->
                  </div>
                  <img :src="`../${avatarUrl}`">
            </div>
            <img class="image-26-icon" alt=""/>
            </div>
        </div>
    </section>
</template>
<style scoped>






</style>

