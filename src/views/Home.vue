<template>
    <div>
        <Navbar />
        <Dashboard class="mt-5" />
    </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'
import Navbar from '@/components/Navbar.vue'
export default {
    name: 'Home',
    components:{
        Dashboard,
        Navbar
    }
}
</script>