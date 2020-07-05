<template>
    <div style="height: 100%">
        <el-row>
            <el-col :span="24">
                <div class="head">
                    <el-button type="success" size="small">选择网卡</el-button>
                    <el-button @click="startCap" type="primary" size="small" :disabled="startCapture">开始捕获</el-button>
                    <el-button @click="stopCap" type="danger" size="small" :disabled="stopCapture">停止捕获</el-button>
                    <el-button @click="startAnalysis" type="primary" size="small" :disabled="startAna">开始流量分析</el-button>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="8">
                <div class="left">
                    <ul :class="ulStyle===1?ulStyle1:ulStyle2">
                        <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap"
                                      view-class="p20-scrollbar__view" :native="false">
                            <li style="font-size: 20px;margin: 0 auto;color: #b6c3ff;cursor: default">网卡列表</li>
                            <li :style="item===choiceName?color1:color2" @click="choice(item)"
                                v-for="item in ifName" >{{item}}
                            </li>
                        </el-scrollbar>
                    </ul>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="right">
                    <PieFlowAnalysis id="pie"/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import PieFlowAnalysis from "../../components/flow/PieFlowAnalysis";

    export default {
        name: "FlowClassify",
        components: {PieFlowAnalysis},
        data() {
            return {
                ulStyle1: 'left1',
                ulStyle2: 'left1 notClick2',
                ulStyle: 1,
                ifName: [],
                color1: '',
                color2: 'font-size:12px',
                choiceName: '',
                startCapture: true,
                stopCapture: true,
                startAna: true,
            };
        },
        mounted() {
            this.getCardList();
        },

        methods: {
            getCardList() {
                this.getRequest("/flow/getnetcard").then(res => {
                    this.ifName = res;
                })
            },
            choice(name) {
                this.choiceName = name;
                this.color1 = ' color:#409eff;font-size:12px';
                this.getRequest("/flow/choiceif?ifname=" + name).then(res=>{
                    this.startCapture=false;
                });
            },
            startCap() {
                this.getRequest("/flow/startcap").then(res=>{
                });
                this.stopCapture = false;
            },
            stopCap() {
                this.getRequest("/flow/stopcap").then(res=>{
                    this.stopCapture=true;
                    this.startAna=false;
                })
            },
            startAnalysis() {

            }
        }
    }
</script>

<style>

    .head {
        display: flex;
        border: 1px solid #e2e2e2;
        box-sizing: border-box;
        padding: 5px;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    .head .upload-pcap {
        margin-right: 10px;
    }

    .left {
        width: 100%;
        border: 1px solid #e2e2e2;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 20px 0 0 0;
        height: 555px;
    }
    .left1 li {
        width: 100%;
        height: 36px;
        margin-top: 10px;
    }

    .left1 li:hover {
        color: #409eff;
        cursor: pointer;
    }

    .left1 {
        height: 100%;
        margin: 0 !important;
    }

    .notClick2 {
        pointer-events: none;
        background: #27272791;
    }
    .left .choice {
        margin-right: 10px;
    }

    .left .graph {
        margin-top: 10px;
        width: 70%;
        display: inline-block;
    }

    .radio {
        line-height: 40px !important;
    }

    .right {
        width: 100%;
        border: 1px solid #e2e2e2;
        box-sizing: border-box;
        border-radius: 5px;
        height: 550px;
    }

    .analysis {
        padding: 10px;
        box-sizing: border-box;
    }
</style>
