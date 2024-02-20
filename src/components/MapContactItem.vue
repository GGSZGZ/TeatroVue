<template>

<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.320527371337!2d-0.9071175243855334!3d41.67042057839227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914a05336f4f5%3A0xbc8995593b21a0cb!2sAv.%20de%20Ranillas%2C%20Zaragoza!5e0!3m2!1ses!2ses!4v1701804639805!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
      <div class="info-local">
        <img class="edificio-1-icon" alt="" src="../assets/buildingIcon.png" />

        <img class="marcador-2-icon" alt="" src="../assets/mapIcon.png" />

        <img class="cuota-1-icon" alt="" src="../assets/shareIcon.png" />

        <div class="edificio">Edificio 3A</div>
        <div class="compartir-link"><a href="/">Link Página</a></div>
        <div class="calle">Av. de Ranillas 1</div>
      </div>

</template>
<style scoped>
 #map {
  position: absolute;
  top: 300px;
  left: 72px;
  margin-left: 3%;
  border-radius: var(--br-31xl);
  width: 616px;
  height: 340px; 
  object-fit: cover;
} 
.info-local {
  position: absolute;
  top: 700px;
  left: 164px;
  height: 129px;
  text-align: left;
  color: var(--color-black);
}
  .edificio-1-icon {
  position: absolute;
  top: 1px;
  left: 0;
  width: 32px;
  height: 32px;
  object-fit: cover;
}
.marcador-2-icon {
  position: absolute;
  top: 1px;
  left: 0;
  width: 32px;
  height: 32px;
  object-fit: cover;
  top: 49px;
}
.cuota-1-icon {
  position: absolute;
  top: 1px;
  left: 0;
  width: 32px;
  height: 32px;
  object-fit: cover;
  top: 49px;
  top: 97px;
}
.edificio {
  position: absolute;
  top: 0;
  left: 60px;
  line-height: 46px;
  display: inline-block;
  width: 354px;
  height: 33px;
}
.compartir-link {
  position: absolute;
  top: 0;
  left: 60px;
  line-height: 46px;
  display: inline-block;
  width: 354px;
  height: 33px;
  top: 94px;
}
.calle {
  position: absolute;
  top: 0;
  left: 60px;
  line-height: 46px;
  display: inline-block;
  width: 354px;
  height: 33px;
  top: 94px;
  top: 48px;
}
</style>