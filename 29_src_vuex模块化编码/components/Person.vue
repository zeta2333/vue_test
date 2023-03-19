<template>
    <div>
        <h1>人员列表</h1>
        <h3>Count组件的求和为:<span style="color:red">{{ sum }}</span></h3>
        <h3>列表中第一个人的名字为:{{ firstPersonName }}</h3>
        <input type="text" placeholder="请输入名字" @keyup.enter="add" v-model="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addServer">添加服务器语录</button>
        <ul>
            <li v-for="p in personList" :key="p.id">
                {{ p.name }}
            </li>

        </ul>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: 'Person',
    data() {
        return {
            name: ''
        }
    },
    computed: {
        sum() {
            return this.$store.state.countAbout.sum
        },
        personList() {
            return this.$store.state.personAbout.personList
        },
        firstPersonName() {
            return this.$store.getters['personAbout/firstPersonName']
        }
    },
    methods: {
        add() {
            const personObj = { id: nanoid(), name: this.name }
            this.$store.commit('personAbout/ADD_PERSON', personObj);
            this.name = ''
        },
        addWang() {
            const personObj = { id: nanoid(), name: this.name }
            this.$store.dispatch('personAbout/addPersonWang', personObj);
            this.name = ''
        },
        addServer() {
            this.$store.dispatch('personAbout/addPersonServer')
        }
    },
}
</script>

<style></style>