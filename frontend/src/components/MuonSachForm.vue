
<template>
    <Form @submit="submit_data" 
    :validation-schema = 'MuonSachFormSchema'>
    <h1 class="">
        Thông tin mượn sách
    </h1>
    <div class="form-group">
        <label for="name">Tên sách</label>
        <Field
        name="tensach"
        type="text"
        class="form-control"
        v-model="bookValue.tensach"
        />
        <ErrorMessage name="name" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="name">Tên Đọc Giả</label>
        <Field
        name="hoten"
        type="text"
        class="form-control"
        v-model="muonsach.hoten"
        />
        <ErrorMessage name="hoten" class="error-feedback" />

        <label for="name">Ngày sinh</label>
        <Field
        name="ngaysinh"
        type="date"
        class="form-control"
        v-model="formattedNgaySinh"
        />
        <ErrorMessage name="ngaysinh" class="error-feedback" />

        <label for="name">Giới tính</label>
        <!-- <Field
        name="phai"
        type="text"
        class="form-control"
        v-model="muonsach.phai"
        /> -->
        <select v-model="muonsach.phai">
            <option disabled value="">chọn</option>
            <option>Nam</option>
            <option>Nữ</option>
            <option>Khác</option>
        </select>
        <ErrorMessage name="name" class="error-feedback" />

        <label for="name">Địa chỉ</label>
        <Field
        name="diachi"
        type="text"
        class="form-control"
        v-model="muonsach.diachi"
        />
        <ErrorMessage name="diachi" class="error-feedback" />

        <label for="name">Số điện thoại</label>
        <Field
        name="sodienthoai"
        type="text"
        class="form-control"
        v-model="muonsach.sodienthoai"
        />
        <ErrorMessage name="sodienthoai" class="error-feedback" />

        <!-- <label for="name">Mã sách</label> -->
        <Field
        name="masach"
        type="hidden"
        class="form-control"
        v-model="bookValue._id"
        />
        <ErrorMessage name="name" class="error-feedback" />


        <label for="name">Ngày mượn</label>
        <Field
        name="ngaymuon"
        type="date"
        class="form-control"
        v-model="formattedMuonDate"
        />
        <ErrorMessage name="ngaymuon" class="error-feedback" />

        <label for="name">Ngày trả</label>
        <Field
        name="ngaytra"
        type="date"
        class="form-control"
        v-model="formattedTraDate"
        />
        <ErrorMessage name="ngaytra" class="error-feedback" />
    </div>
    <div class="form-group">
        <button class="btn btn-primary">Lưu</button>
    </div>

    </Form>
</template>
<script>
import * as yup from "yup";
import moment from "moment";
import {Form, Field, ErrorMessage} from "vee-validate";

export default{
    components:{
        Form,
        Field,
        ErrorMessage,
    },

    emits: ["submit:contact"],

    props:{
        id:{type: String, required: true},
        book: {type: Object, required: true},
        muonsach:{type: Object, required: true}
    },

    data(){

        const MuonSachFormSchema = yup.object().shape({
            hoten: yup
            .string()
            .required("Tên không được để trống"),
            ngaymuon: yup
            .date()
            .min(new Date(Date.now()),"Ngày mượn không được sớm hơn ngày hiện lại")
            .required("Vui lòng chọn ngày mượn"),
            ngaytra: yup
            .date()
            .required("Vui lòng chọn ngày trả")
            .min(yup.ref("ngaymuon"), "Ngày trả phải sau ngày mượn")
            .test("is-before-or-equal",
                    "Ngày trả không được quá 30 ngày kể từ ngày mượn",
                    function(value) {
                        const ngaymuon = this.resolve(yup.ref("ngaymuon"));
                        const ngaytra = this.resolve(value);
                        const differenceInDays = Math.round(
                            (new Date(ngaytra) - new Date(ngaymuon)) / (1000 * 60 * 60 * 24)
                        );
                        return differenceInDays <= 30;
                    }
                ),
            ngaysinh: yup
            .date()
            .min(new Date(Date.now()-3650),"Không hợp lệ")
            .max(new Date(Date.now()),"Không hợp lệ"),
            diachi: yup.string().max(50, "Địa chỉ tối đa 50 ký tự."),
            sodienthoai: yup
            .string()
            .matches(
            /((09|03|07|08|05)+([0-9]{8}) \b)/g,
            "Số điện thoại không hợp lệ."
            ),
            
        })

        return{
            bookValue : this.book,
            muonsach: this.muonsach,
            MuonSachFormSchema
        }
    },

    computed: {
        formattedMuonDate() {
            return this.formatDate(this.muonsach.ngaymuon);
        },
        formattedTraDate() {
            return this.formatDate(this.muonsach.ngaytra);
        },
        formattedNgaySinh(){
            return this.formatDate(this.muonsach.ngaysinh);
        },
    },

    methods:{
        submit_data(){
            console.log(this.muonsach);
            this.$emit('submit:contact',this.muonsach);
        },
        formatDate(date) {
            return moment(date).format("YYYY-MM-DD");
        },
    },
};
</script>
<style scoped>
@import "@/assets/form.css";
h1{
    text-align: center;
}
</style>
