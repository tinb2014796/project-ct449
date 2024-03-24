<script>
export default {
    props: {
        MuonSachData: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$router.push({
                name: "theodoimuonsach.detail",
                params:{
                    id: index
                }
            })
        },
    }
};
</script>
    <template>
        <!-- <ul class="list-group">
            <li
            class="list-group-item"
            v-for="(MuonSachData, index) in MuonSachData"
            :key="MuonSachData._id"
            :class="{ active: index === activeIndex }"
            @click="updateActiveIndex(index)"
            >
            {{ MuonSachData.hoten }} {{ MuonSachData.masach }}
            </li>
        </ul> -->
<div class="container">
  <h2 class="mb-3">Danh sách</h2>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Tên Sách</th>
        <th scope="col">Tên đọc giả</th>
        <th scope="col">Ngày mượn</th> 
        <th scope="col">Ngày trả</th> 
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
        <tr
        v-for="(MuonSachData, index) in MuonSachData"
            :key="MuonSachData._id"
            :class="{ active: index === activeIndex }"
            @click="updateActiveIndex(MuonSachData._id)"
        >
        
            <th scope="row" >{{ index +1 }}</th>
            <td>{{ MuonSachData.masach }} </td>
            <td>{{ MuonSachData.hoten }}</td>
            <td>{{ MuonSachData.ngaymuon }}</td>
            <td>{{ MuonSachData.ngaytra }}</td>
            <td>
            <button class="btn btn-primary"  @click="updateActiveIndex(MuonSachData._id)">
                Chi tiết
            </button>
            </td>
        </tr>  
    </tbody>
  </table>
</div>
    </template>