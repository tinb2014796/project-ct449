 <template>
    <div class="mt-5">
            <InputSearch v-model="searchText" />
    </div>
    <div class="mt-2">
        <div v-if="!activeContact" class="mt-4 p-3">
            <ContactList
            v-if="filteredContactsCount > 0"
            :contacts="filteredContacts"
            v-model:activeIndex="activeIndex"
            />

            <p v-else>Không có liên hệ nào.</p>
        </div>
        <div v-else="activeContact"  class="row">
            <div class="col-8 mt-5">
                <ContactList
            v-if="filteredContactsCount > 0"
            :contacts="filteredContacts"
            v-model:activeIndex="activeIndex"
            />
            <p v-else>Không có liên hệ nào.</p>
            </div>

            <div class="container mt-5 col-4">
                <h2>
                Chi tiết.
                <i class="fas fa-address-card"></i>
                </h2>
                <ContactCard :contact="activeContact" />
                <router-link
                    :to="{
                    name: 'contact.edit', 
                    params: { id: activeContact._id },
                    }"
                >
                    <span class="mt-2 badge badge-warning">
                    <i class="fas fa-edit"></i> Hiệu chỉnh</span>
                </router-link>

                <router-link
                        :to="{
                        name: 'theodoimuonsach.add',
                        params: { id: activeContact._id },
                        }"
                    >
                        <span class="mt-2 badge badge-warning">
                        <i class="fas fa-edit"></i>Tạo phiếu mượn</span>
                    </router-link>
            </div>
        </div>
    </div>
</template>
    <script>

    import ContactCard from "@/components/ContactCard.vue";
    import InputSearch from "@/components/InputSearch.vue";
    import ContactList from "@/components/ContactList.vue";
    import ContactService from "@/services/contact.service";

    export default {
        components: {
            ContactCard,
            InputSearch,
            ContactList,
        },
        
        data() {
            return {
            contacts: [],
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
                return this.contacts.map((contact) => {
                    const { tensach, dongia, soquyen, namxuatban, tacgia } = contact;
                    return [tensach, dongia, soquyen, namxuatban, tacgia].join("");
                });
            },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
            filteredContacts() {
                if (!this.searchText) return this.contacts;
                    return this.contacts.filter((_contact, index) =>
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
                    this.contacts = await ContactService.getAll();
                } catch (error) {
                    console.log(error);
                }
            },
            refreshList() {
                this.retrieveContacts();
                this.activeIndex = -1;
            },
            async removeAllContacts() {
                if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                    try {
                        await ContactService.deleteAll();
                        this.refreshList();
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
            goToAddContact() {
                this.$router.push({ name: "contactadd",});
            },
        },
        mounted() {
        this.refreshList();
        },
    };
</script>
<style scoped>
    .page {
        text-align: left;
    }
</style>