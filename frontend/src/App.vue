<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
    components: {
        AppHeader,
    },
};

</script>
    <template>
        <div class="container" id="">
            <AppHeader />

            <div class="container mt-3">
                <router-view />
            </div>
            
        </div>
    </template>
<style>
    .page {
        max-width: 400px;
        margin: auto;
    }
</style>
