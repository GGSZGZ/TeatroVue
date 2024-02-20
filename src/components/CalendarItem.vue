<script setup lang="ts">
import { onMounted } from 'vue';
//Calendario
let actual = new Date();
  let year = actual.getFullYear();
  let month = actual.getMonth() + 1;
  onMounted(() => {
    mostrarCalendario(year, month);
  });

  function mostrarCalendario(year : number, month:number) {
    var now = new Date(year, month - 1, 1);
    var ultimoDiaMes = new Date(year, month, 0).getDate();
    var primerDiaSemana = now.getDay() === 0 ? 7 : now.getDay();

    var dia = 0;
    var resultado = "<tr bgcolor='silver'>";

    var last_cell = primerDiaSemana + ultimoDiaMes;

    // Nombres de los días de la semana
    var diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    for (var i = 1; i <= 42; i++) {
      if (i === primerDiaSemana) {
        dia = 1;
      }

      if (i < primerDiaSemana || i >= last_cell) {
        resultado += "<td>&nbsp;</td>";
      } else {
        
       
        // const obraAleatoria=listadoRespuesta[Math.round(Math.random()*10+1)];
        var fecha = new Date(year, month - 1, dia);
        var nombreDia = diasSemana[fecha.getDay()];
        if (dia === actual.getDate() && month === actual.getMonth() + 1 && year === actual.getFullYear())
        resultado += "<td class='hoy' style='text-align: right; padding: 2px 5px; background-color: var(--color-darkgoldenrod); font-size: var(--font-size-xl); font-family: var(--font-gentium-basic);' onmouseover='this.style.backgroundColor=\"var(--color-goldenrod)\"' onmouseout='this.style.backgroundColor=\"var(--color-darkgoldenrod)\"'>" + nombreDia + " " + dia + " " + "</td>";
      else
        resultado += "<td style='text-align: right; padding: 2px 5px; background-color: var(--neutral-colors-white); font-size: var(--font-size-xl); font-family: var(--font-gentium-basic);' onmouseover='this.style.backgroundColor=\"var(--color-goldenrod)\"' onmouseout='this.style.backgroundColor=\"var(--neutral-colors-white)\"'>" + nombreDia + " " + dia + " " + "</td>";
      dia++;
    }

      if (i % 7 === 0) {
        if (dia > ultimoDiaMes)
          break;
        resultado += "</tr><tr>\n";
      }
    }
    resultado += "</tr>";

    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    document.getElementById("calendar")!.getElementsByTagName("caption")[0].innerHTML = "<div>" + meses[month - 1] + " / " + year + "</div>";
    document.getElementById("calendar")!.getElementsByTagName("tbody")[0].innerHTML = resultado;
    
  }
</script>
<template>
    <table id="calendar">
        <caption></caption>
        <tbody>
        <tr>
        </tr>
        </tbody>
</table>
</template>
<style scoped>
#calendar {
  position: absolute;
  top: 2992px;
  width: 1226px;
  height: 794px;
  margin-left: 10%;
}
#calendar caption {
  text-align: center;
  padding: 5px 10px;
  background-color: var(--color-gray);
  color: var(--neutral-colors-white);
  font-family: var(--font-playfair-display);
  font-size: var(--headings-h3-size);
  font-weight: bold;
}
caption {
    display: table-caption;
}
table {
    border-collapse: separate;
    text-indent: initial;
    display: table;
    box-sizing: border-box;
    border-spacing: 2px;
    border-color: gray;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
</style>