<script>
export default {
    props: {
        contact: { type: Object, required: true },
    },
};
</script>
    <template>
        <div>
            <div class="p-1">
            <strong>Tên Sách:</strong>
                {{ contact.hoten }}
            </div>
            <div class="p-1">
            <strong>E-mail:</strong>
                {{ contact.ngaysinh }}
            </div>
            <div class="p-1">
            <strong>Địa chỉ:</strong>
                {{ contact.phai }}
            </div>
            <div class="p-1">
            <strong>Điện thoại:</strong>
                {{ contact.dichi }}
            </div>
            <div class="p-1">
            <strong>Điện thoại:</strong>
                {{ contact.ngaymuon }}
            </div>
            <div class="p-1">
            <strong>Điện thoại:</strong>
                {{ contact.ngaytra }}
            </div>
            <div class="p-1">
                <strong>Liên hệ yêu thích:&nbsp;</strong>
                <i v-if="contact.favorite" class="fas fa-check"></i>
                <i v-else class="fas fa-times"></i>
            </div>
        </div>
    </template>