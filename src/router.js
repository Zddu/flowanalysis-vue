import Vue from 'vue'
import Router from 'vue-router'
import Home from './view/Home'
import Login from "./view/login/Login";
import FlowClassify from "./view/flow/FlowClassify";
import DataProcessing from "./view/flow/DataProcessing";
import ModelTrain from "./view/flow/ModelTrain";
import FileClassify from "./view/flow/FileClassify";
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            hidden:true,
            children:[
                {
                    path: '/flowClassify',
                    name: '自动分类',
                    component: FlowClassify,
                    hidden:true,
                },{
                    path: '/dataProcessing',
                    name: '数据加工',
                    component: DataProcessing,
                    hidden:true,
                },{
                    path: '/modelTrain',
                    name: '模型训练',
                    component: ModelTrain,
                    hidden:true,
                },{
                    path: '/fileClassify',
                    name: '文件分类',
                    component: FileClassify,
                    hidden:true,
                }
            ]
        }
    ]
})
