<script setup lang="ts">
import "../assets/main.css";
    const props=defineProps<{
        idObra?:number
        classNumber?:number
        classImg?:number
        title?:string
        descripcion?:string
        sinopsis?:string
        asientos?:string[]
    }>()
    console.log(props);
</script>
<template>
    
        
            <div :class="'card' + (classNumber !== 0 ? classNumber : '')" :id="'card-' + idObra">
                <h3 class="card-heading" :id="'title-'+idObra">{{title}}</h3>
                <div class="paragraph" :id="'description-'+idObra">{{descripcion}}
                </div>
                <div class="link">
                  <div class="master-link">
                    <b class="learn-more">Más</b>
                     <img src="../assets/rightArrowIcon.svg">
                  </div>
            </div>
            <img :class="'image-'+classImg+'-icon'" alt="" :id="'img-'+idObra" :src="'./src/assets/img'+idObra+'.png'"/>
            </div>
        
    
</template>
<style scoped>
 /* .card2, .card3, .card4, .card5{
    display: none;
  } */
  .card-heading {
  position: absolute;
  left: 24px;
  display: inline-block;
  margin: 0;
  top: 268px;
  font-size: var(--font-size-9xl);
  line-height: 34px;
  font-weight: 700;
  font-family: var(--font-playfair-display);
  width: 324px;
}
.card {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: var(--br-5xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--neutral-colors-color-600);
  box-sizing: border-box;
  width: 391.8px;
  height: 506px;
}
.card1 {
  position: absolute;
  top: 530px;
  left: 0;
  border-radius: var(--br-5xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--neutral-colors-color-600);
  box-sizing: border-box;
  width: 391.8px;
  height: 506px;
}

.card2 {
  position: absolute;
  top: 530px;
  left: 414.1px;
  border-radius: var(--br-5xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--neutral-colors-color-600);
  box-sizing: border-box;
  width: 391.8px;
  height: 506px;
}
.card2:hover, .card1:hover,.card:hover,.card3:hover,.card4:hover,.card5:hover {
  transform: scale(1.1);
}
.card3 {
  position: absolute;
  top: 530px;
  left: 828.2px;
  border-radius: var(--br-5xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--neutral-colors-color-600);
  box-sizing: border-box;
  width: 391.8px;
  height: 506px;
}

.card4 {
  position: absolute;
  top: 0;
  left: 414.1px;
  border-radius: var(--br-5xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--neutral-colors-color-600);
  box-sizing: border-box;
  width: 391.8px;
  height: 506px;
}


.card5 {
  position: absolute;
  top: 0;
  left: 826.7px;
  border-radius: var(--br-5xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--neutral-colors-color-600);
  box-sizing: border-box;
  width: 391.8px;
  height: 506px;
}


.card-heading1 {
  position: absolute;
  top: 268px;
  left: 24px;
  font-size: var(--headings-h3-size);
  line-height: 34px;
  display: inline-block;
  font-family: var(--font-playfair-display);
  width: 324px;
}

  .paragraph {
  position: absolute;
  left: 24px;
  display: inline-block;
  top: 314px;
  line-height: 30px;
  color: var(--color-gray);
  width: 340.6px;
}
.link {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: absolute;
  top: 436px;
  left: 24px;
  align-items: flex-start;
  text-align: center;
  color: var(--color-darkgoldenrod);
}
.master-link {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: var(--gap-7xs);
}
.learn-more {
  position: relative;
  line-height: 90px;
}
.image-26-icon {
  position: absolute;
  top: 13px;
  left: 104px;
  border-radius: var(--br-xl);
  width: 183px;
  height: 243px;
  object-fit: cover;
}
.image-29-icon {
  position: absolute;
  top: 24px;
  left: 44px;
  border-radius: var(--br-xl);
  width: 300px;
  height: 210.5px;
  object-fit: cover;
}
.image-30-icon {
  position: absolute;
  top: 24px;
  left: 34.9px;
  border-radius: var(--br-xl);
  width: 322px;
  height: 211px;
  object-fit: cover;
}
.image-31-icon {
  position: absolute;
  top: 20px;
  left: 72.8px;
  border-radius: var(--br-xl);
  width: 230px;
  height: 233px;
  object-fit: cover;
}
.image-27-icon {
  position: absolute;
  top: 36px;
  left: 43.9px;
  border-radius: var(--br-xl);
  width: 300px;
  height: 195.7px;
  object-fit: cover;
}
.image-28-icon {
  position: absolute;
  top: 36px;
  left: 45.3px;
  border-radius: var(--br-xl);
  width: 300px;
  height: 200.6px;
  object-fit: cover;
}
.image-13-icon {
  position: absolute;
  margin-left: 1.8%;
  top: 24px;
  left: 18px;
  border-radius: var(--br-xl);
  width: 353px;
  height: 220px;
  object-fit: cover;
}
.image-21-icon {
  position: absolute;
  border-radius: var(--br-xl);
  object-fit: cover;
  top: 24px;
  left: 85.3px;
  width: 222px;
  height: 222px;
}
.image-22-icon {
  position: absolute;
  border-radius: var(--br-xl);
  object-fit: cover;
  top: 30px;
  left: 39.9px;
  width: 320px;
  height: 209px;
}
.image-23-icon {
  position: absolute;
  top: 34px;
  left: 48px;
  border-radius: var(--br-xl);
  width: 300px;
  height: 200px;
  object-fit: cover;
}
.image-24-icon {
  position: absolute;
  border-radius: var(--br-xl);
  object-fit: cover;
  top: 21px;
  left: 50.9px;
  width: 291px;
  height: 226px;
}
.image-25-icon {
  position: absolute;
  border-radius: var(--br-xl);
  object-fit: cover;
  top: 28px;
  left: 47.8px;
  width: 300px;
  height: 212.4px;
}
</style>

