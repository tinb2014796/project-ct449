<script>
export default {
    props: {
        contact: { type: Object, required: true },
    },
};


</script>
    <template>
        
            <div class="contact-info">
    <div class="info-item">
        <strong>Tên Sách:</strong>
        <span>{{ contact.hoten }}</span>
    </div>
    <div class="info-item">
        <strong>Ngày sinh:</strong>
        <span>{{ contact.ngaysinh }}</span>
    </div>
    <div class="info-item">
        <strong>Giới Tính:</strong>
        <span>{{ contact.phai }}</span>
    </div>
    <div class="info-item">
        <strong>Địa chỉ:</strong>
        <span>{{ contact.diachi }}</span>
    </div>
    <div class="info-item">
        <strong>Điện thoại:</strong>
        <span>{{ contact.sodienthoai }}</span>
    </div>
    <div class="info-item">
        <strong>Ngày mượn:</strong>
        <span>{{ contact.ngaymuon }}</span>
    </div>
    <div class="info-item">
        <strong>Ngày trả:</strong>
        <span>{{ contact.ngaytra }}</span>
    </div>
</div>
    </template>
    <style>

.contact-info {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-item {
    margin-bottom: 10px;
}

.info-item strong {
    color: #333;
    margin-right: 10px;
}

.info-item span {
    color: #666;
}</style>