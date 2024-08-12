<template>
    <div class="d-none d-md-block sidebar">
        <!-- Hide on screens smaller than medium -->
        <div class="d-flex flex-column">
            <!-- Full height vertical column -->
            <NuxtLink 
                to="/perkenalan" 
                class="nav-link" 
                :class="{ active: isActive('/perkenalan') }">
                <div class="sidebar-item">Perkenalan</div>
            </NuxtLink>
            <NuxtLink 
                to="/translator" 
                class="nav-link" 
                :class="{ active: isActive('/translator') }">
                <div class="sidebar-item">Translator</div>
            </NuxtLink>
            <NuxtLink 
                to="/typesetter" 
                class="nav-link" 
                :class="{ active: isActive('/typesetter') }">
                <div class="sidebar-item">Typesetter</div>
            </NuxtLink>
            <NuxtLink 
                to="/cleaner" 
                class="nav-link" 
                :class="{ active: isActive('/cleaner') }">
                <div class="sidebar-item">Cleaner</div>
            </NuxtLink>
            <NuxtLink 
                to="/redraw" 
                class="nav-link" 
                :class="{ active: isActive('/redraw') }">
                <div class="sidebar-item">Redrawer</div>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();

        const isActive = (path) => {
            return route.path === path;
        };

        return {
            isActive
        };
    }
};
</script>

<style scoped>
.sidebar {
    position: sticky;
    top: 60px;
    height: 100vh;
    margin-right: 25px;
}

.sidebar-item{
    padding: 10px 100px 10px 0px;
}

.nav-link.active .sidebar-item {
    color: red;
    background-color: #d63384;
    border-radius: 5px;
    padding-left: 20px;
    color: white;
    font-weight: bold;
}
</style>