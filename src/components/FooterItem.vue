<template>
    <div class="logo">
      <slot name="logo"></slot>
      <slot name="logosearchtexto"></slot>
          
  </div>
  <slot name="hrindex">
    <hr class="footer-line-hr">
  </slot>
  <nav class="sections">
        <div class="Container">
            <slot name="homeIcon"></slot>
            <h3 class="home">
            <slot name="home"></slot>
            </h3>
        </div>
        <div class="Container">
            <slot name="aboutIcon"></slot>
            <h3 class="about">
            <slot name="about"></slot>
            </h3>
        </div>
        <div class="Container">
            <slot name="contactIcon"></slot>
            <h3 class="about">
            <slot name="contact"></slot>
            </h3>
        </div>
        <div class="redesSociales">
            <div class="redSocial">
                <slot name="facebook"></slot>
            </div>
            <div class="redSocial">
                <slot name="instagram"></slot>
            </div>
            <div class="redSocial">
                <slot name="twitter"></slot>
            </div>
        </div>
    </nav>
    
</template>

<style scoped>
.logo{
    position: relative;
    top: 0;
    left: 0;
    width: 458px;
    height: 80px;
}
.sections{
    transform: scale(0.7);
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    bottom: 70px;
    gap: 40px;
    text-align: center;
    font-size: 28px;
    color: #5d5a88;
    font-family: "Playfair Display";
}
.Container{
    display: flex;
    align-items: center;
    gap: 10px;
}
.home {
  margin: 0px;
  position: relative;
  line-height: 18px;
  font-weight: 400;
  font-family: inherit;
}

.about {
  margin: 0px;
  position: relative;
  line-height: 18px;
  font-weight: 400;
  font-family: inherit;
  cursor: pointer;
}
.redesSociales{
    display: flex;
    width: auto;
    height: 36px;
    gap: 20px;
    margin-left: 20px;
}
.footer-line-hr {
  position: relative;
  bottom: 90px;
  width: 100%;
  border-color: #000;
}
.redSocial{
  background-color: #8f1515;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: background-color 2s;
}
.redSocial:hover{
    background-color: #cc9936;
}
</style>