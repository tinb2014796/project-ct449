<template>
    <div class="mt-5">
        <p>{{ message }}</p>
        <MuonSachForm
            :book = "Sach"
            :muonsach_valua="MuonSachData"
            @submit:contact="updateReader"
            @delete:contact="deleteReader"
        />
        
    </div>
</template>
<script>
    import MuonSachForm from "@/components/MuonSachForm.vue";
    import MuonSachService from "@/services/muonsach.service";
    import SachService from "@/services/contact.service";

    export default{
        components: {
            MuonSachForm,
        },

        props:{
            id: { type: String, require: true},
        },

        data(){
            return {
                MuonSachData: null,
                Sach: null,
                message:null,
            }
        },

        methods: {
            async getData(id){
                try{
                    this.MuonSachData= await MuonSachService.get(id);
                    this.Sach= await SachService.get(this.MuonSachData.masach);
                }catch(error){
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
            
            async updateReader(data){
                
                try {
                    await MuonSachService.update(this.MuonSachData._id, data);
                    confirm("Cập nhật thành công");
                    this.$router.push({ name: "contactbook" });
                } catch (error) {
                    console.log(error);
                }
      
            },
            async deleteReader(){
                if (confirm("Bạn muốn xóa phiếu theo dỗi này?")) {
                try {
                    await MuonSachService.delete(this.MuonSachData._id);
                    this.$router.push({ name: "contactbook" });
                } catch (error) {
                    console.log(error);
                }
            }
            }
        },
        created() {
        this.getData(this.id);
        this.message = "";
    },
    }
</script>