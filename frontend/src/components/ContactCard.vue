
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
                {{ contact.tensach }}
            </div>
            <div class="p-1">
            <strong>Đơn giá:</strong>
                {{ contact.dongia }}
            </div>
            <div class="p-1">
            <strong>Số quyển:</strong>
                {{ contact.soquyen }}
            </div>
            <div class="p-1">
            <strong>Năm xuất bản:</strong>
                {{ contact.namxuatban }}
            </div>
            <div class="p-1">
            <strong>Tác giả:</strong>
                {{ contact.tacgia }}
            </div>
        </div>
</template>

<!-- tensach, dongia, soquyen, namxuatban, tacgia -->

<!-- hoten, ngaysinh, phai, daichi, sodienthoai, masach, ngaymuon, ngaytra -->
