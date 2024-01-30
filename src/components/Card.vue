<script setup lang="ts">
    defineProps<{
        idObra?:number
        avatarUrl?:string
        title?:string
        descripcion?:string
        sinopsis?:string
        asientos?:string[]
    }>()
</script>
<template>
    <section class="grip">
        <div class="grip-cards">
            <div class="card">
                <h3 class="card-heading"></h3>
                <div class="paragraph">
                <img :src="avatarUrl" alt="Avatar">
            </div>

            <div class="link">
              <div class="master-link">
                <b class="learn-more"></b>
                <img
                  src="./public/rightArrowIcon.svg"
                />
              </div>
            </div>
            <img class="image-26-icon" alt=""/>
            </div>
        </div>
    </section>
</template>
<style scoped>






</style>

