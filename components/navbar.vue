<template>
    <div class="d-none d-md-block sidebar">
        <!-- Hide on screens smaller than medium -->
        <div class="d-flex flex-column">
            <!-- Full height vertical column -->
            <NuxtLink to="/perkenalan" class="nav-link">
                <div class="sidebar-item">Perkenalan</div>
            </NuxtLink>
            <NuxtLink to="/translator" class="nav-link">
                <div class="sidebar-item">Translator</div>
            </NuxtLink>
            <NuxtLink to="/typesetter" class="nav-link">
                <div class="sidebar-item">Typesetter</div>
            </NuxtLink>
            <NuxtLink to="/cleaner" class="nav-link">
                <div class="sidebar-item">Cleaner</div>
            </NuxtLink>
            <NuxtLink to="/redraw" class="nav-link">
                <div class="sidebar-item">Redrawer</div>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
    position: sticky;
    top: 60px;
    height: 100vh;
}

.sidebar-item{
    padding: 10px 100px 10px 0px;
}

.nav-link{
    text-align: left;
}
</style>
