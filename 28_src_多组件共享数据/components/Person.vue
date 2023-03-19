<template>
    <div>
        <h1>人员列表</h1>
        <h3>Count组件的求和为:<span style="color:red">{{ sum }}</span></h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">
                {{ p.name }}
            </li>

        </ul>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import { nanoid } from 'nanoid'
export default {
    name: 'Person',
    data() {
        return {
            name: ''
        }
    },
    computed: {
        ...mapState(['sum']),
        personList() {
            return this.$store.state.personList
        }
    },
    methods: {
        add() {
            const personObj = { id: nanoid(), name: this.name }
            this.$store.commit('ADD_PERSON', personObj);
            this.name = ''
        }
    },
}
</script>

<style></style>