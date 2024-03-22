<script>
export default {
    props: {
        MuonSachData: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
    }
};
</script>
    <template>
        <ul class="list-group">
            <li
            class="list-group-item"
            v-for="(MuonSachData, index) in MuonSachData"
            :key="MuonSachData._id"
            :class="{ active: index === activeIndex }"
            @click="updateActiveIndex(index)"
            >
            {{ MuonSachData.hoten }} {{ MuonSachData.masach }}
            </li>
        </ul>
    </template>