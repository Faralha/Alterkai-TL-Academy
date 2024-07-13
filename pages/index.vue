<template>
    <div class="container">
        <div class="inner-container d-flex flex-column justify-content-center align-items-center">
            <h1>Alterkai TL Academy</h1>
            <NuxtLink to="/perkenalan" class="btn btn-outline-light">
                <div class="py-2 px-4">
                    <p style="margin: 0;">Mulai</p>
                </div>
            </NuxtLink>
        </div>
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

    h1 {
        font-size: 15vh;
        width: 60%;
        font-weight: 700;
        font-family: "Bitter", sans-serif;
        text-align: center;
    }

    .container, .inner-container {
        height: 100vh !important;
    }
</style>
