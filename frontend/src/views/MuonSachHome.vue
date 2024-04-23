<template>
    <div class="row mt-5">

        <div class="col-10">
            <InputSearch  v-model="searchText"/>   
        </div>
            <div v-if="!activeContact" class="col-12">
                <MuonSachList 
                v-if="filteredContactsCount > 0"
                :MuonSachData="filteredContacts" 
                v-model:activeIndex="activeIndex"
                />
            </div>
            <div v-else class="row">

                <div class="col-7 p-2">
                    <MuonSachList 
                    v-if="filteredContactsCount > 0"
                    :MuonSachData="filteredContacts" 
                    v-model:activeIndex="activeIndex"
                    />
                </div>

                <div class="mt-2 col-4 p-2" v-if="activeContact">
                    <h4>
                    Chi tiết Phiếu Mượn
                    <i class="fas fa-address-card"></i>
                    </h4>
                    <MuonSachCard :contact="activeContact" />
                    <router-link
                        :to="{
                        name: 'theodoimuonsach.edit',
                        params: { id: activeContact._id },
                        }"
                    >
                        <span class="mt-2 badge badge-warning">
                        <i class="fas fa-edit"></i> Hiệu chỉnh</span>
                    </router-link>
                </div>

            </div>
    </div>
</template>
<script>
    import InputSearch from "@/components/InputSearch.vue";
    import MuonSachList from "@/components/MuonSachList.vue";
    import MuonSachService from "@/services/muonsach.service";
    import MuonSachCard from "@/components/ContactCard.vue";

    export default {
        components: {
            InputSearch,
            MuonSachList,
            MuonSachCard,
        },

        data() {
            return {
                MuonSachData: [],
                activeIndex: -1,
                searchText: "",
            };
        },
        watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
            searchText() {
            this.activeIndex = -1;
            },
        },
        computed: {
        // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.
            contactStrings() {
                return this.contacts.map((MuonSachData) => {
                    const {hoten, ngaysinh, phai, daichi, sodienthoai, masach, tensach, ngaymuon, ngaytra } = MuonSachData;
                    return [hoten, ngaysinh, phai, daichi, sodienthoai, masach, tensach, ngaymuon, ngaytra ].join("");
                });
            },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
            filteredContacts() {
                if (!this.searchText) return this.MuonSachData;
                    return this.MuonSachData.filter((_MuonSachData, index) =>
                    this.contactStrings[index].includes(this.searchText)
                );
            },
            activeContact() {
            if (this.activeIndex < 0) return null;
                return this.filteredContacts[this.activeIndex];
            },

            filteredContactsCount() {
                return this.filteredContacts.length;
            },
        },

        methods: {
            async retrieveContacts() {
                try {
                    this.MuonSachData = await MuonSachService.getAll();
                } catch (error) {
                    console.log(error);
                }
            },

            refreshList() {
                this.retrieveContacts();
                this.activeIndex = -1;
            },

            goToAdd() {
                this.$router.push({ 
                    name: "contactbook",
                    messges:"Vui lòng chọn sách"
                });
            },
        },

        mounted(){
            this.refreshList();
        }
    }
</script>