<template>
    <main>
        <form class="form-wrapper" id="formulario">
            <div class="form-inside">
                <div class="form-columns">
                    <div class="form-column">
                        <div class="px">
                            <div class="label">Nombre</div>
                            <div class="input-text">
                                <input type="text" class="input" placeholder="Juan*" id="Nombre">
                                <img class="usuario-1-icon" alt="" src="../assets/userIcon.png">
                            </div>
                        </div>
                        <div class="px">
                            <div class="label">Teléfono</div>
                            <div class="input-text">
                                <input type="text" class="input" placeholder="+34 624 945 378*" id="Telephone">
                                <img class="telefono-2-icon" alt="" src="../assets/phoneIcon.png">
                            </div>
                        </div>
                    </div>
                    <div class="form-column1">
                        <div class="px2">
                            <div class="label">Correo</div>
                            <div class="input-text2">
                                <input type="text" class="input" placeholder="ejemplo@gmail.com*" id="Email">
                                <img class="sobre-1-icon" alt="" src="../assets/mailIcon.png">
                            </div>
                        </div>
                        <div class="px">
                            <div class="label">Dirección</div>
                            <div class="input-text2">
                                <input type="text" class="input" placeholder="C/Maria Zambrano, 25*" id="Location">
                                <img class="marcador-1-icon" alt="" src="../assets/mapIcon.png">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px4">
                    <div class="label">Dejanos un mensaje</div>
                    <textarea id="textarea" class="text-area" wrap="soft" placeholder="Porfavor, ponganos una descripción del problema..."></textarea>
                </div>
            </div>
        </form>
    </main>
</template>

<style scoped>
    .form-wrapper{
        position: absolute;
        top: 300px;
        left: 747px;
        width: 603px;
        height: 526px;
        margin-left: 3%;
        background-color: var(--color-maroon);
        border-radius: var(--br-6xl);
    }
    .form-inside {
        width: 561.4px;
        gap: var(--gap-13xl);
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        position: absolute;
        top: 40px;
        left: 20.7px;
        background-color: var(--color-maroon);
    }
    .form-columns {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        width: 559px;
        flex-direction: row;
        gap: 24px;
    }
    .form-column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: var(--gap-13xl);
    }
    .form-column1 {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        width: 249px;
        flex-direction: column;
        gap: var(--gap-13xl);
    }
    .px {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: var(--gap-xs);
    }
    .px2 {
        width: 249px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: var(--gap-xs);
    }
    .label {
        position: relative;
        font-size: var(--font-size-9xl);
        line-height: 18px;
        font-weight: 600;
        font-family: var(--font-playfair-display);
        color: var(--neutral-colors-white);
        text-align: left;
    }
    .input-text {
        position: relative;
        width: 286px;
        height: 72px;
    }
    .input {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: var(--br-31xl);
        background-color: var(--color-whitesmoke-200);
        font-family: var(--font-gentium-basic);
        font-size: var(--font-size-xl);
        padding-left: 10px;
    }
    .usuario-1-icon {
        position: absolute;
        top: -40px;
        left: 106.3px;
        width: 32px;
        height: 32px;
        object-fit: cover;
    }
    .telefono-2-icon {
        position: absolute;
        top: -38px;
        left: 117.3px;
        width: 32px;
        height: 32px;
        object-fit: cover;
    }
    .input-text2 {
        position: relative;
        width: 249px;
        height: 72px;
    }
    .sobre-1-icon {
        position: absolute;
        margin-left: 3%;
        top: -35px;
        left: 90px;
        width: 32px;
        height: 32px;
        object-fit: cover;
    }
    .marcador-1-icon {
        position: absolute;
        top: -45px;
        left: 124.3px;
        width: 32px;
        height: 35px;
        object-fit: cover;
    }
    .px4 {
        width: 517px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        resize: none;
        flex-direction: column;
        gap: var(--gap-xs);
    }
    .text-area {
        width: 517px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        resize: none;
        position: relative;
        border-radius: var(--br-xl);
        background-color: var(--color-whitesmoke-200);
        flex-direction: row;
        padding: var(--padding-5xl) var(--padding-5xl) 100px;
        box-sizing: border-box;
        font-family: var(--font-gentium-basic);
        font-size: var(--font-size-xl);
    }
</style>