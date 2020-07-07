<template>
    <div style="height: 100%">
        <el-row>
            <el-col :span="24">
                <div class="head">
                    <div>
                        <el-button @click="startCap" type="primary" size="small" :disabled="startCapture">开始捕获</el-button>
                        <el-popover
                                placement="right"
                                width="800"
                                trigger="click">
                            <el-table
                                    max-height="450"
                                    :show-header="false"
                                    :data="features">
                                <el-table-column width="120" property="attr0"></el-table-column>
                                <el-table-column width="120" property="attr1"></el-table-column>
                                <el-table-column width="120" property="attr2"></el-table-column>
                                <el-table-column width="120" property="attr3"></el-table-column>
                                <el-table-column width="120" property="attr4"></el-table-column>
                                <el-table-column width="120" property="attr5"></el-table-column>
                                <el-table-column width="120" property="attr6"></el-table-column>
                                <el-table-column width="120" property="attr7"></el-table-column>
                                <el-table-column width="120" property="attr8"></el-table-column>
                                <el-table-column width="120" property="attr9"></el-table-column>
                                <el-table-column width="120" property="attr10"></el-table-column>
                                <el-table-column width="120" property="attr11"></el-table-column>
                                <el-table-column width="120" property="attr12"></el-table-column>
                                <el-table-column width="120" property="attr13"></el-table-column>
                                <el-table-column width="120" property="attr14"></el-table-column>
                                <el-table-column width="120" property="attr15"></el-table-column>
                                <el-table-column width="120" property="attr16"></el-table-column>
                                <el-table-column width="120" property="attr17"></el-table-column>
                                <el-table-column width="120" property="attr18"></el-table-column>
                                <el-table-column width="120" property="attr19"></el-table-column>
                                <el-table-column width="120" property="attr20"></el-table-column>
                                <el-table-column width="120" property="attr21"></el-table-column>
                                <el-table-column width="120" property="attr22"></el-table-column>
                                <el-table-column width="120" property="attr23"></el-table-column>
                                <el-table-column width="120" property="attr24"></el-table-column>
                                <el-table-column width="120" property="attr25"></el-table-column>
                                <el-table-column width="120" property="attr26"></el-table-column>
                                <el-table-column width="120" property="attr27"></el-table-column>
                                <el-table-column width="120" property="attr28"></el-table-column>
                                <el-table-column width="120" property="attr29"></el-table-column>
                                <el-table-column width="120" property="attr30"></el-table-column>
                                <el-table-column width="120" property="attr31"></el-table-column>
                                <el-table-column width="120" property="attr32"></el-table-column>
                                <el-table-column width="120" property="attr33"></el-table-column>
                                <el-table-column width="120" property="attr34"></el-table-column>
                                <el-table-column width="120" property="attr35"></el-table-column>
                                <el-table-column width="120" property="attr36"></el-table-column>
                                <el-table-column width="120" property="attr37"></el-table-column>
                                <el-table-column width="120" property="attr38"></el-table-column>
                                <el-table-column width="120" property="attr39"></el-table-column>
                                <el-table-column width="120" property="attr40"></el-table-column>
                                <el-table-column width="120" property="attr41"></el-table-column>
                                <el-table-column width="120" property="attr42"></el-table-column>
                                <el-table-column width="120" property="attr43"></el-table-column>
                                <el-table-column width="120" property="attr44"></el-table-column>
                                <el-table-column width="120" property="attr45"></el-table-column>
                                <el-table-column width="120" property="attr46"></el-table-column>
                                <el-table-column width="120" property="attr47"></el-table-column>
                                <el-table-column width="120" property="attr48"></el-table-column>
                                <el-table-column width="120" property="attr49"></el-table-column>
                                <el-table-column width="120" property="attr50"></el-table-column>
                                <el-table-column width="120" property="attr51"></el-table-column>
                                <el-table-column width="120" property="attr52"></el-table-column>
                                <el-table-column width="120" property="attr53"></el-table-column>
                                <el-table-column width="120" property="attr54"></el-table-column>
                                <el-table-column width="120" property="attr55"></el-table-column>
                                <el-table-column width="120" property="attr56"></el-table-column>
                                <el-table-column width="120" property="attr57"></el-table-column>
                                <el-table-column width="120" property="attr58"></el-table-column>
                                <el-table-column width="120" property="attr59"></el-table-column>
                                <el-table-column width="120" property="attr60"></el-table-column>
                                <el-table-column width="120" property="attr61"></el-table-column>
                                <el-table-column width="120" property="attr62"></el-table-column>
                                <el-table-column width="120" property="attr63"></el-table-column>
                                <el-table-column width="120" property="attr64"></el-table-column>
                                <el-table-column width="120" property="attr65"></el-table-column>
                                <el-table-column width="120" property="attr66"></el-table-column>
                                <el-table-column width="120" property="attr67"></el-table-column>
                                <el-table-column width="120" property="attr68"></el-table-column>
                                <el-table-column width="120" property="attr69"></el-table-column>
                                <el-table-column width="120" property="attr70"></el-table-column>
                                <el-table-column width="120" property="attr71"></el-table-column>
                                <el-table-column width="120" property="attr72"></el-table-column>
                                <el-table-column width="120" property="attr73"></el-table-column>
                                <el-table-column width="120" property="attr74"></el-table-column>
                                <el-table-column width="120" property="attr75"></el-table-column>
                                <el-table-column width="120" property="attr76"></el-table-column>
                                <el-table-column width="120" property="attr77"></el-table-column>
                                <el-table-column width="120" property="attr78"></el-table-column>
                                <el-table-column width="120" property="attr79"></el-table-column>
                                <el-table-column width="120" property="label"></el-table-column>

                            </el-table>
                            <el-button style="margin: 0 10px" @click="showFeatures" type="success" size="small"
                                       slot="reference">显示捕获信息
                            </el-button>
                        </el-popover>
                        <el-button @click="stopCap" type="danger" size="small" :disabled="stopCapture">停止捕获</el-button>
                        <el-button @click="startAnalysis" type="success" size="small" :disabled="!startAna">开始流量分析
                        </el-button>
                    </div>
                    <div>
                        <el-button @click="downARFF" style="margin-right: 10px;" :disabled="ifsuccess" size="small"
                                   type="primary">
                            下载分类完毕的ARFF文件
                        </el-button>
                        <el-button @click="downCSV" style="margin-right: 10px;" :disabled="ifsuccess" size="small"
                                   type="primary">
                            下载分类完毕的CSV文件
                        </el-button>
                    </div>
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
                                v-for="item in ifName">{{item}}
                            </li>
                        </el-scrollbar>
                    </ul>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="right">
                    <span v-show="nodatastyle" style="font-size: 60px;color: #8ea09f;">暂无分类结果</span>
                    <PieFlowAnalysis v-if="ifshowstyle" :data="data" id="pie"/>
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
                ifsuccess: true,
                features: [],
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
                data: [],
                nodatastyle: true,
                ifshowstyle: false,
            };
        },
        mounted() {
            this.getCardList();
        },

        methods: {
            downARFF() {
                window.open("/flow/downlabeledarff", "_parent")
            },
            downCSV() {
                window.open("/flow/downlabeled", "_parent")
            },
            getCardList() {
                this.getRequest("/flow/getnetcard").then(res => {
                    this.ifName = res;
                })
            },
            showFeatures() {
                this.getRequest("/flow/showfeat").then(res => {
                    this.features = res;
                })
            },
            choice(name) {
                this.ifsuccess=true;
                this.choiceName = name;
                this.color1 = ' color:#409eff;font-size:12px';
                this.getRequest("/flow/choiceif?ifname=" + name).then(res => {
                    this.startCapture = false;
                });
            },
            startCap() {
                this.getRequest("/flow/startcap").then(res => {
                });
                this.stopCapture = false;
            },
            stopCap() {
                this.getRequest("/flow/stopcap").then(res => {
                    this.stopCapture = true;
                    this.startAna = false;
                    if (res) {
                        this.features = res;
                    }
                })
            },
            getClssifyResult() {
                this.getRequest("/flow/classifyresult").then(res => {
                    this.data = res;
                    this.ifsuccess=false;
                })
            },
            startAnalysis() {
                this.getRequest("/flow/startanalysis").then(res => {
                    if (res) {
                        this.getClssifyResult();
                        this.nodatastyle = false;
                        this.ifshowstyle = true;
                    }
                })
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
        justify-content: space-between;
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
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .analysis {
        padding: 10px;
        box-sizing: border-box;
    }
</style>
