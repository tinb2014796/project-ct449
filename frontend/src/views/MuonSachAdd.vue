<template>
    <div class="page">
        <h4>Hiệu chỉnh Liên hệ</h4>
        <ContactForm
            :book = "book"
            :muonsach_valua="muonsach"
            @submit:contact="addReader"
        />
    </div>
    <p>{{ message }}</p>
</template>
<script>
import ContactForm from "@/components/MuonSachForm.vue";
import MuonSachService from "@/services/muonsach.service";
import ContactService from "@/services/contact.service";

export default{
    components:{
        ContactForm,
    },
    props:{
        id:{type: String, required: true}
    },
    data(){
        return {
           
            book: null,
            message: "",
            muonsach:{}

        }
    },
    methods: {
        async addReader(data){
            try{
                await MuonSachService.create(data);
                this.message = "Tạo phiếu thành công";
            }catch(error){
                 console.log(error);
            }
        },

        async getBook(id){
            try{
                this.book = await ContactService.get(id);
            }catch(error){
                console.log(error)
            }
        }
    },
    created() {
        this.getBook(this.id);
        this.message = "";
    },
}
</script>