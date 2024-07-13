<template>
    <Header class="header" />
    <div class="container padding">
        <main class="d-flex flex-row">
            <Navbar />
            <ContentDoc style="width: 100vw;"/>
        </main>
    </div>
</template>

<style scoped>
.padding {
    padding-left: 5rem;
    padding-right: 5rem;
}

@media (max-width: 768px) {
    .padding {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}

.header {
    background-color: rgba(22, 21, 29, 0.75);
    /* background-color: black; */
    backdrop-filter: blur(10px);
    z-index: 3;
}
</style>
