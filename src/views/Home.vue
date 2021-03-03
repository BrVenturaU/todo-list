<template>
    <div>
        <Navbar />
        <router-view class="mt-5"></router-view>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: 'Home',
    components:{
        Navbar
    }
}
</script>