<template>

<section class="gender">
        <div class="container_gender"></div>
        <h3 class="heading_gender">Mismo Género</h3>
        <div class="paragraph_gender">
          Don Juan Tenorio trata el tema romántico por lo que podemos ver obras
          del mismo género.
        </div>
        <div class="same-gender">
          <div class="grupo1">
            <div class="romeo-y-julieta">Romeo y Julieta</div>
            <div class="image-placeholder">
              <img class="image-18-icon" alt="" src="../assets/genreImg1.png">
            </div>
          </div>
          <div class="grupo2">
            <div class="la-celestina">La Celestina</div>
            <img class="image-19-icon" alt="" src="../assets/genreImg2.png">
          </div>
          <div class="grupo3">
            <div class="fausto">Fausto</div>
            <div class="image-placeholder1">
              <img class="image-20-icon" alt="" src="../assets/genreImg3.png">
            </div>
          </div>
        </div>
      </section>



</template>

<style scoped>
.gender {
    position: absolute;
    top: 2700px;
    left: 90px;
    width: 1440px;
    height: 450px;
    text-align: left;
    font-size: var(--font-size-25xl);
    color: var(--color-gray);
    font-family: var(--font-lobster);
}
.container_gender {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--neutral-colors-white);
    width: 1440px;
    height: 450px;
}
.heading_gender {
    margin: 0;
    position: absolute;
    width: 17.97%;
    top: calc(50% - 123px);
    left: 7.58%;
    font-size: inherit;
    line-height: 46px;
    font-weight: 400;
    font-family: inherit;
    color: var(--color-goldenrod);
    display: inline-block;
}
.paragraph_gender {
    position: absolute;
    line-height: 36px;
    display: inline-block;
    width: 17.97%;
    top: calc(50% - 23px);
    left: 7.58%;
    font-size: var(--font-size-xl);
    font-family: var(--font-gentium-basic);
}
.same-gender {
    position: absolute;
    top: 102px;
    left: 489px;
    width: 761px;
    height: 306px;
    text-align: center;
    font-size: var(--font-size-9xl);
    font-family: var(--font-playfair-display);
}
.grupo1 {
    position: absolute;
    top: 1px;
    left: 0;
    width: 201px;
    height: 305px;
}
.romeo-y-julieta {
    position: absolute;
    line-height: 36px;
    display: inline-block;
    top: 261px;
    left: 0;
    width: 201px;
    height: 44px;
}
.image-placeholder {
    position: absolute;
    top: 0;
    width: 171px;
    height: 252px;
    left: 15px;
}
.image-18-icon {
    position: absolute;
    top: 0;
    width: 171px;
    height: 252px;
    left: 0;
    object-fit: cover;
}
.grupo2 {
    position: absolute;
    top: 0;
    width: 229px;
    left: 280px;
    height: 297px;
}
.la-celestina {
    position: absolute;
    top: 261.5px;
    left: 31px;
    line-height: 36px;
    display: inline-block;
    width: 166px;
    height: 35.5px;
}
.image-19-icon {
    position: absolute;
    top: 0;
    width: 229px;
    left: 0;
    height: 253px;
    object-fit: cover;
}
.grupo3 {
    position: absolute;
    top: 0;
    width: 171px;
    left: 590px;
    height: 297px;
}
.fausto {
    position: absolute;
    top: 262px;
    left: 5px;
    line-height: 36px;
    display: inline-block;
    width: 166px;
    height: 35px;
}
.image-placeholder1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 171px;
    height: 253.3px;
}
.image-20-icon {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 171px;
    height: 253.3px;
}
</style>