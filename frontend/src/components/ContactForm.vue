
<template>
    <Form
        @submit ='submitContact'
        :validation-schema = 'contactFormSchema'
    >
    <div class="form-group">
        <label for="name">Tên Sách</label>
        <Field
        name="tensach"
        type="text"
        class="form-control"
        v-model="contactLocal.tensach"
        />
        <ErrorMessage name="name" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="email">Đơn giá</label>
        <Field
        name="dongia"
        type=""
        class="form-control"
        v-model="contactLocal.dongia"
        />
        <ErrorMessage name="email" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="address">Số quyển</label>
        <Field
        name="soquyen"
        type="text"
        class="form-control"
        v-model="contactLocal.soquyen"
        />
        <ErrorMessage name="address" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="phone">Năm xuất bản</label>
        <Field
        name="namxuatban"
        type="tel"
        class="form-control"
        v-model="contactLocal.namxuatban"
        />
        <ErrorMessage name="phone" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="phone">Tác gia</label>
       <Field
        name="tacgia"
        type="text"
        class="form-control"
        v-model="contactLocal.tacgia"
        />
    </div>

    <div class="form-group">
        <button class="btn btn-primary">Lưu</button>
        <button
        v-if="contactLocal._id"
        type="button"
        class="ml-2 btn btn-danger"
        @click="deleteContact"
        >
        Xóa
        </button>
    </div>

    </Form>
</template>
<script>
import * as yup from "yup";
import {Form, Field, ErrorMessage} from "vee-validate";

export default{
    components:{
        Form,
        Field,
        ErrorMessage,
    },

    emits: ["submit:contact","delete:contact"],
    props: {
        contact: {type: Object, required: true}
    },
    data(){
        return {
        // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
        // contactLocal để liên kết với các input trên form
        contactLocal: this.contact,
        };
    },
    methods: {
        submitContact() {
            this.$emit("submit:contact", this.contactLocal);
        },
        deleteContact() {
            this.$emit("delete:contact", this.contactLocal.id);
        },
    },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>