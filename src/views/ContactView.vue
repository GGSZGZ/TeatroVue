<script setup lang="ts">
import ContactItem from '@/components/ContactItem.vue';
</script>
<template>
    <main>
        <ContactItem />
        <div class="send-message" id="send-message">
            <b class="button-mensaje">Enviar Mensaje</b>
        </div>
    </main>

</template>
<style scoped>
main{
    position: relative;
    background-color: var(--neutral-colors-white);
    width: 100%;
    height: 1400px;
    text-align: center;
    font-size: var(--font-size-xl);
    color: var(--color-goldenrod);
    font-family: var(--font-gentium-basic);
}
.send-message {
    position: absolute;
    top: 850px;
    left: 1121px;
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
</style>