<template>
    <div class="mt-5" v-if="MuonSachData">
        <h4>
        Chi tiết Phiếu Mượn
        <i class="fas fa-address-card"></i>
        </h4>
        <MuonSachCard :contact="MuonSachData" />
        <router-link
            :to="{
            name: 'theodoimuonsach.edit',
            params: { id: MuonSachData._id },
            }"
        >
            <span class="mt-2 badge badge-warning">
            <i class="fas fa-edit"></i> Hiệu chỉnh</span>
        </router-link>
    </div>
</template>
<script>

    import MuonSachCard from "@/components/MuonSachCard.vue";
    import muonsachService from "@/services/muonsach.service";

    export default{
        components: {
            MuonSachCard,
        },

        props:{
            id: { type: String, require: true},
        },

        data(){
            return {
                MuonSachData: null,
            }
        },

        methods:{

            async getData(id){
                try {
                    this.MuonSachData = await muonsachService.get(id);
                } catch (error) {
                    console.log(error);
                    // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                    this.$router.push({
                        name: "notfound",
                        params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                        },
                        query: this.$route.query,
                        hash: this.$route.hash,
                    });
                }
            },
        },

        created(){
            this.getData(this.id);
        }
    }

</script>