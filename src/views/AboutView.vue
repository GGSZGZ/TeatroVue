<script setup lang="ts">
    import { onMounted } from 'vue';
    onMounted(() =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
</script>
<template>
    
   <main>
    
        <div class="heading">HISTORIA DE ESTE TEATRO</div>
        <!--Primer rectangulo-->
        <div class="red-rectangle">
            <div class="text-yllw">
                <b class="text1">
            La tarde del 12 de noviembre de 1778 se produjo un trágico y
          devastador incendio en el Coliseo de comedias Zaragoza, situado en el
          solar que hoy en día ocupa el Banco de España, que hizo que terminara
          ardiendo por completo. La demanda ciudadana hizo que el Palacio de la
          Lonja fuera habilitado para las representaciones mientras se decidía
          levantar un nuevo Coliseo en el terreno de los Graneros, justo
          enfrente de dónde se situaba la Corrala desaparecida, que sería el
          actual Teatro Principal.</b>
            </div>
            <div class="bckgn-yllw">
                <img class="first-img" src="../assets/aboutPic1.png">
            </div>
        </div>
        <!--Segundo Rectangulo-->
        <div class="yellow-rectangle">
            <div class="text-red">
                <b class="text2">
            Se encargó el proyecto al arquitecto Agustín Sanz aunque, pese a
          algunas referencias erróneas, el proyecto de Sanz nunca llegó a
          realizarse. Fue finalmente el proyecto de un tramoyista de la compañía
          que actuaba entonces en La Lonja, Vicente Martínez, el que culminó en
          el nuevo Teatro inaugurado un 25 de agosto de 1799 y que se llamaría
          Principal a partir de 1853, para diferenciarlo de otros que comenzaban
          a aparecer en la ciudad por estas fechas.
                </b>
            </div>
            <div class="bckgn-rd">
                <img class="second-img" src="../assets/aboutPic2.png">
            </div>
        </div>
   </main>
</template>
<style scoped>
.heading{
    position: absolute;
    top: 80px;
    left: 467px;
    font-size: 44px;
    line-height: 66px;
    font-family: var(--font-lobster), cursive;
    color: var(--color-darkgoldenrod);
}
.red-rectangle{
    position: absolute;
    top: 280px;
    left: 50px;
    border-radius: 103px;
    background-color: var(--color-maroon);
    width: 1335px;
    height: 493px;
}
.yellow-rectangle{
    position: absolute;
    top: 850px;
    left: 50px;
    margin-left: 100px;
    border-radius: 103px;
    background-color: var(--color-darkgoldenrod);
    width: 1335px;
    height: 493px;
}
.text-yllw{
    position: absolute;
    width: 694px;
    height: 330px;
    top: 80px;
    left: 50px;
    text-align: left;
    border-radius: 103px;
    background-color: var(--color-darkgoldenrod);
}
.text-red{
    position: absolute;
    width: 694px;
    height: 320px;
    top: 80px;
    left: 600px;
    text-align: right;
    border-radius: 103px;
    background-color: var(--color-maroon);
    
}
.text1,.text2{
    position: relative;
    top: 30px;
    left: 49px;
    line-height: 34px;
    display: inline-block;
    width: 595px;
    height: 255px;
}
.text2{
    top: 40px;
    left: -40px;
    color: var(--neutral-colors-white);
}
.bckgn-yllw{
    position: relative;
    top: 50px;
    left: 800px;
    height: 398px;
    width: 449px;
    border-radius: 32px;
    background-color: var(--color-darkgoldenrod);
    display: flex;
    justify-content: center;
    align-items: center;
}
.bckgn-rd{
    position: relative;
    top: 80px;
    left: 40px;
    height: 330px;
    width: 530px;
    border-radius: 32px;
    background-color: var(--color-maroon);
    display: flex;
    justify-content: center;
    align-items: center;
}
.first-img,.second-img{
    position: relative;
    height: 350px;
    width: 400px;
    border-radius: 20px;
}
.second-img{
    width: 480px;
    height: 280px;
}

main{
    position: relative;
    background-color: var(--neutral-colors-white);
    width: 100%;
    height: 1470px;
    text-align: center;
    font-size: 20px;
    color: var(--neutral-colors-white);
    font-family: "Gentium Basic", sans-serif;
}
</style>