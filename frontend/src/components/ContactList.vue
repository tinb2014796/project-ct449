<script>
import contactService from '@/services/contact.service';
export default {
    props: {
        contacts: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex","delete:activeIndex" ],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
        async delete(index){
            if(index){
                confirm("Bạn có chắc chắn muốn xóa sách này ?")
                const res = await contactService.delete(index);
                console.log(res)
            }
            
        }
    }
};
</script>
<template>
        <!-- <ul class="list-group">
            <li
            class="list-group-item"
            v-for="(contact, index) in contacts"
            :key="contact._id"
            :class="{ active: index === activeIndex }"
            @click="updateActiveIndex(index)"
            >
            {{ contact.tensach }} 
            </li>
        </ul> -->
    
<div class="container">
  <h2 class="mb-3">Danh sách</h2>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Tên Sách</th>
        <th scope="col">Tác giả</th>
        <th scope="col">Số lượng</th> 
        <th scope="col"></th> 
      </tr>
    </thead>
    <tbody>
        <tr
            v-for="(contact, index) in contacts"
            :key="contact._id"
            :class="{ active: index === activeIndex }"
            @click="updateActiveIndex(index)"
            
        >
        
            <th scope="row" >{{ index +1 }}</th>
            <td>{{ contact.tensach }} </td>
            <td>{{ contact.tacgia }}</td>
            <td>{{ contact.soquyen }}</td>
            <td>
            <button class="btn btn-primary"  @click="updateActiveIndex(index)">
                Chi tiết
            </button>
            <button class="btn btn-danger ml-3"  @click="delete(contact._id)">
                Xóa
            </button>
            </td>
        </tr>  
    </tbody>
  </table>
</div>
</template>