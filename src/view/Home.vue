<template>
    <el-container>
        <el-header class="homeContainer">
            <span class="title">流量分析</span>

        </el-header>
        <el-container>
            <el-aside width="200px;" style="height: 100%;">
                <el-menu
                        class="el-menu-vertical-demo"
                        background-color="#1e2640"
                        text-color="#fff"
                        unique-opened
                        router
                        active-text-color="#ffd04b">
                    <el-submenu index="8">
                        <template slot="title">
                            <i class="el-icon-data-analysis"></i>
                            <span>流量分析</span>
                        </template>
                        <el-menu-item index="/dataProcessing">数据加工</el-menu-item>
                        <el-menu-item index="/modelTrain">模型训练</el-menu-item>
                        <el-menu-item index="/fileClassify">文件分类</el-menu-item>
                        <el-menu-item index="/flowClassify">自动分类</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-scrollbar  class="default-scrollbar" wrap-class="default-scrollbar__wrap" view-class="p20-scrollbar__view" :native="false">
                <el-main style="height: 100%; overflow-y: hidden;">
                <div v-if="this.$router.currentRoute.path =='/'">
                    <DataProcessing/>
                </div>
                <router-view/>
            </el-main>
            </el-scrollbar>
        </el-container>
    </el-container>

</template>

<script>

    import DataProcessing from "./flow/DataProcessing";
    export default {
        name: "Home",
        components: {
            DataProcessing
        },
        data() {
            return {}
        },
        computed: {},
        methods: {}
    }
</script>

<style>
    .el-scrollbar__wrap.default-scrollbar__wrap {
        overflow-x: auto;
    }
    .default-scrollbar {
        width: 100%;
        height: 100%;
    }
    .flex-scrollbar {
        width: auto;
        height: auto;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

    .el-aside {
        background-color: rgb(30, 38, 64);
        color: #333;
        text-align: center;
        line-height: 200px;
    }


    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container .el-aside {
        line-height: 260px;
    }

    #app, .el-container {
        height: 100%;
    }

    .homeContainer {
        background-color: #111;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 25px;
        box-sizing: border-box;
    }

    .homeContainer .title {
        color: #fff;
        font-size: 20px;
        line-height: 50px;
        width: 200px;
        transition: background-color ease .3s;
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #ccc;
        font-size: 16px;
        display: flex;
        align-items: center;
    }

    .el-dropdown-link img {
        width: 40px;
        height: 40px;
        border-radius: 30px;
        margin-left: 10px;
    }

    .box-card {
        margin-bottom: 10px;
    }

</style>
