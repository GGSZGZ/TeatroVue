<script setup lang="ts">
import ContactItem from '@/components/ContactItem.vue';
import MapContactItem from '@/components/MapContactItem.vue';
</script>
<template>
    <main>
        <div class="titulo">Facilítanos tus datos y contactaremos contigo</div>
        <MapContactItem/>
        <ContactItem />
        <div class="send-message" id="send-message">
            <b class="button-mensaje">Enviar Mensaje</b>
        </div>
    </main>

</template>
<style scoped>
main{
    background-color: var(--neutral-colors-white);
    width: 100%;
    height: 900px;
    text-align: center;
    font-size: var(--font-size-xl);
    color: var(--color-goldenrod);
    font-family: var(--font-gentium-basic);
}
.send-message {
    position: absolute;
    top: 850px;
    left: 1090px;
    margin-left: 3%;
    border-radius: var(--br-11xl);
    background-color: var(--color-maroon);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-lg) var(--padding-5xl);
    gap: var(--gap-5xs);
    color: var(--color-whitesmoke-100);
    cursor: pointer;
}
.send-message:hover {
  color: var(--color-darkgoldenrod);
}
.button-mensaje {
    position: relative;
    letter-spacing: 0.1em;
    line-height: 26px;
    text-transform: uppercase;
    font-weight: bold;
}
.titulo {
  position: absolute;
  top: 150px;
  left: 69px;
  margin-left: 3%;
  font-size: var(--font-size-25xl);
  font-family: var(--font-lobster);
}
</style>