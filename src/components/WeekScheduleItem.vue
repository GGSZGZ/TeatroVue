<script setup lang="ts">
import { onMounted } from 'vue';
//calendario
  onMounted(() =>{
    mostrarCalendario();
  });
  function mostrarCalendario() {
      var daysContainer = document.getElementById("daysContainer")!;

      const daysOfWeek = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
      const today = new Date();
      const day = today.getDay();

      for (let i = 1; i <= daysOfWeek.length; i++) {
        const dayElement = document.createElement("div");
        dayElement.textContent = daysOfWeek[i - 1];
        dayElement.style.textAlign = "center";
        dayElement.style.padding = "2px 5px";
        dayElement.style.backgroundColor = "var(--neutral-colors-white)";
        dayElement.style.fontSize = "var(--font-size-xl)";
        dayElement.style.fontFamily = "var(--font-gentium-basic)";
        dayElement.style.borderBottom = "1px solid var(--color-black)";
        dayElement.style.borderLeft = "1px solid var(--color-black)";
        dayElement.style.borderRight = "1px solid var(--color-black)";

        dayElement.addEventListener("mouseenter", function() {
            dayElement.style.backgroundColor = "var(--color-goldenrod)";
        });

        dayElement.addEventListener("mouseleave", function() {
            if (i === day) {
                dayElement.style.backgroundColor = "var(--color-darkgoldenrod)";
            } else {
                dayElement.style.backgroundColor = "var(--neutral-colors-white)";
            }
        });

        if (i === day) {
          dayElement.style.backgroundColor = "var(--color-darkgoldenrod)";
        }

        if (daysContainer) {
          daysContainer.appendChild(dayElement);
        }
      }
    }
</script>
<template>
    <div class="calendar">
        <div class="header-calendar">
            <h2>Semana Actual</h2>
        </div>
        <div class="days-container" id="daysContainer"></div>
    </div>
</template>

<style scoped>
.calendar {
    position: absolute;
    top: 230px;
    left: 780px;
    width: 704px;
    height: 350px;
    object-fit: cover;
    font-size: var(--font-size-xl);
    font-family: var(--font-gentium-basic);
    box-shadow: 0 0 10px var(--color-black);
    color: var(--color-black);
    text-align: center;
}
.header-calendar {
    height: 100px;
    color: var(--neutral-colors-white);
    font-family: var(--font-playfair-display);
    font-size: var(--headings-h3-size);
    background-color: var(--color-gray);
    padding: 10px;
}
.days-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}
div{
    display: block;
}

</style>