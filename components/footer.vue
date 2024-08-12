<template>
    <div>
        <footer class="footer p-5">
            <div class="container d-flex flex-column">
                <div class="row">
                    <div class="col-md-8 py-4">
                        <h3>Alterkai TL Academy</h3>
                        <p>Sebuah website berisi pedoman praktis mengenai cara Scanlator bekerja.</p>

                        <NuxtLink to="https://bit.ly/alterkai" target="_blank" class="link-icon">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/></svg>
                        </NuxtLink>
                        <NuxtLink to="https://facebook.com/alterkaiscans" target="_blank" class="link-icon">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                        </NuxtLink>
                    </div>

                    <div class="col-md-4 py-4">
                        <h3>Links</h3>
                        <NuxtLink to="/">
                            <div class="links">Home</div>
                        </NuxtLink>
                        <NuxtLink to="https://academy.alterkaiscans.my.id" target="_blank">
                            <div class="links">Alterkai TL Academy</div>
                        </NuxtLink>
                        <NuxtLink to="https://alterkaiscans.my.id" target="_blank">
                            <div class="links">Alterkai Scans</div>
                        </NuxtLink>
                    </div>
                </div>

                <div class="row align-items-center">
                    <div class="col-3">
                        <p style="font-weight: bold; margin: 0;">
                            Made with love by Faralha 2k24.
                        </p>
                    </div>

                    <span class="col" style="display: block; height: 0.5px; background-color: white;">
                    </span>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>

    h3 {
        font-family: 'Lato', serif;
        font-weight: bold;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    .links {
        font-weight: 500;
        font-family: 'Open Sans', sans-serif;
        padding: 5px;
        width: 100%;
    }

    .links:hover {
        color: #d63384;
    }

    .icon {
        height: 40px;
        width: auto;
        color: white;
    }

    .link-icon {
        margin-right: 15px;
        fill: white;
    }

    .link-icon:hover {
        fill: #d63384;
    }
</style>