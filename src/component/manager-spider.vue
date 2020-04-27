<template>
    <div class="contianer">
        <div class="page-operate">
            <div class="page-title">
                {{ spiderName }}
            </div>
            <div>
                <el-button type="info" @click="flashDate">刷新</el-button>
                <el-button type="primary" @click="spiderDate">爬取</el-button>
            </div>
        </div>
        <div class="page-table">
            <el-table :data="tableData">
                <el-table-column prop="date" label="日期" />
                <el-table-column prop="operater" label="操作者" />
                <el-table-column prop="inrement" label="新增数据" />
                <el-table-column prop="exist" label="重复数据" />
                <el-table-column prop="during" label="操作耗时(秒)" />
            </el-table>
        </div>

        <el-dialog title="提示" :visible="dialogVisible" width="30%">
            <span>爬取数据需要一段时间，先干点其它的吧</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { Loading, Dialog } from 'element-ui';
import API from '../API/API';

export default {
    props: {
        active: {
            type: String,
            required: true,
            default: '2-1'
        }
    },
    data: () => {
        return {
            tableData: [],
            spiderName: '360壁纸爬虫管理',
            dialogVisible: false
        };
    },
    methods: {
        flashDate() {
            const loadingInstance = Loading.service({ fullscreen: true, text: 'loading' });
            setTimeout(() => {
                loadingInstance.close();
            }, Math.random() * 3 * 1000);
        },
        spiderDate() {
            API.fetchSpiderDate(this.getSpiderId()).then(
                () => {
                    this.dialogVisible = true;
                },
                () => {}
            );
        },
        getSpiderId() {
            const lis = ['2-1', '2-2', '3-4'];
            for (let i = 0; i < lis.length; i++) {
                if (lis[i] === this.active) {
                    return i;
                }
            }
        },
        getDate() {
            const ONE_DAY = 86400000;
            const TODAY = new Date().getTime();
            let data = [];
            for (let i = 0; i < 50; i++) {
                data.push({
                    date: new Date(TODAY - ONE_DAY * i).toLocaleDateString(),
                    operater: Math.random() < 0.5 ? 'system' : Math.random() < 0.5 ? 'admin123123' : 'tom AD',
                    inrement: ((Math.random() * 3000) | 0) + 200,
                    exist: ((Math.random() * 2000) | 0) + 200,
                    during: ((Math.random() * 300) | 0) + 15
                });
            }
            return data;
        }
    },
    components: {
        elDialog: Dialog
    },
    mounted() {
        this.tableData = this.getDate();
    },
    watch: {
        active: function() {
            if (this.active === '2-1') {
                this.spiderName = '360壁纸爬虫管理';
            } else if (this.active === '2-2') {
                this.spiderName = '金山每日英语爬虫管理';
            } else if (this.active === '2-3') {
                this.spiderName = '必应每日图片爬虫管理';
            }
            this.tableData = this.getDate();
        }
    }
};
</script>

<style scoped>
.container {
    position: relative;
}
.page-table {
    position: relative;
}
.page-title {
    font-size: 26px;
    font-weight: 900;
}
.page-operate {
    position: relative;
    padding: 7px 0;
    height: 50px;
    width: 100%;
    display: flex;
    margin-bottom: 16px;
    justify-content: space-between;
}
</style>
