<template>
    <div class="bg-image">
        <div class="container">
            <div
                class="container d-flex flex-column justify-content-center align-items-center"
            >
                <h1>Alterkai TL Academy</h1>
                <p>Ditulis langsung oleh Faralha, founder Alterkai.</p>
                <NuxtLink to="/perkenalan" class="btn btn-outline-light">
                    <div class="padding">
                        <p style="margin: 0">Mulai</p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
    <div class="container">
        <h2>Bagian apa yang ingin dipelajari?</h2>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
    text-decoration: none;
    color: white;
}

p {
    text-align: center;
    font-size: 1.2rem;
}

h1 {
    font-size: 15vh;
    width: 60vw;
    font-weight: 700;
    font-family: "Bitter", sans-serif;
    text-align: center;
}

.padding {
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    padding-left: 2rem;
    padding-right: 2rem;
}

@media (max-width: 768px) {
    h1 {
        font-size: 3rem;
    }

    p {
        font-size: 0.7rem;
        text-align: center;
    }

    .padding {
        padding-top: 0.05rem;
        padding-bottom: 0.05rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }
}

.container,
.inner-container {
    min-height: 100vh;
}
</style>
