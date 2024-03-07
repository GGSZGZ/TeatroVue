<script setup lang="ts">

  const props=defineProps<{
    director?:string
}>()
    
</script>

<template>

  <section class="director">
        <div class="director-child"></div>
        <h3 class="director1">Director</h3>
        <b class="director-text">{{ director }}</b>
        <img class="image-director" alt="" src="../assets/directorPic.png">
      </section>



</template>

<style>
.director {
    position: absolute;
    top: 2100px;
    left: 90px;
    height: 507px;
    text-align: left;
    font-size: var(--font-size-25xl);
    color: var(--color-goldenrod);
    font-family: var(--font-lobster);
}
.director-child {
    position: absolute;
    width: 1358px;
    top: 74px;
    left: 0;
    border-radius: var(--br-24xl);
    background-color: var(--color-maroon);
    height: 433px;
}
.director1 {
    position: absolute;
    display: inline-block;
    margin: 0;
    top: 0;
    left: 32px;
    font-size: inherit;
    line-height: 66px;
    font-weight: 400;
    font-family: inherit;
    width: 216px;
    height: 74px;
}
.director-text {
    position: absolute;
    display: inline-block;
    top: 132px;
    left: 550px;
    font-size: var(--font-size-xl);
    line-height: 46px;
    font-family: var(--font-gentium-basic);
    color: var(--neutral-colors-white);
    text-align: justify;
    width: 733px;
    height: 322px;
}
.image-director {
    position: absolute;
    top: 130px;
    left: 113px;
    border-radius: 135px;
    width: 270px;
    height: 322px;
    object-fit: cover;
}

</style>