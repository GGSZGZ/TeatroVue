<template>
    
   <main>
        <div class="heading">HISTORIA DE ESTE TEATRO</div>
        <!--Primer rectangulo-->
        <div class="red-rectangle">
            <div class="text-yllw">
                <b class="text1">La tarde del 12 de noviembre de 1778 se produjo un trágico y
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
    top: 195px;
    left: 50px;
    border-radius: 103px;
    background-color: var(--color-maroon);
    width: 1335px;
    height: 493px;
}
.text-yllw{
    position: absolute;
    width: 694px;
    height: 290px;
    top: 100px;
    left: 50px;
    text-align: left;
    border-radius: 103px;
    background-color: var(--color-darkgoldenrod);
}
.text1{
    position: relative;
    top: 10px;
    left: 49px;
    line-height: 34px;
    display: inline-block;
    width: 595px;
    height: 255px;
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
.first-img{
    position: relative;
    height: 350px;
    width: 400px;
    border-radius: 20px;
}
main{
    position: relative;
    background-color: var(--neutral-colors-white);
    width: 100%;
    height: 1600px;
    text-align: center;
    font-size: 20px;
    color: var(--neutral-colors-white);
    font-family: "Gentium Basic", sans-serif;
}
</style>