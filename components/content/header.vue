<template>
    <div class="container padding header d-flex flex-row py-3 justify-content-between">
        <NuxtLink to="/" class="text"> Alterkai TL Academy </NuxtLink>
        <div>
            <a class="p-2 d-flex justify-content-center align-items-center" href="http://github.com/faralha/alterkai-tl-academy" target="_blank" rel="noopener noreferrer">
                <font-awesome :icon="['fab', 'github']" style="font-size: 25px;"/>
            </a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.text {
    font-family: "Bitter", sans-serif;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
}

.header {
    position: sticky;
    top: 0;
}

.padding {
    padding-left: 5rem;
    padding-right: 5rem
}

@media (max-width: 768px) {
    .padding {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}


</style>
