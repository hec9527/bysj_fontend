<template>
    <div class="container">
        <!-- 页面标题 -->
        <div class="page-title">
            <h1>图片管理</h1>
            <div class="btns">
                <span class="showtotal">总共： {{ dataTotal }}条数据</span>
                <el-button type="text" @click="cPage -= 1" :disabled="dataTotal === 0 || cPage <= 0">
                    <span>上一页</span>
                </el-button>
                <span>{{ cPage + 1 }} / {{ Math.ceil(dataTotal / len) }}</span>
                <el-button
                    type="text"
                    @click="cPage += 1"
                    :disabled="dataTotal === 0 || cPage >= Math.ceil(dataTotal / len) - 1"
                >
                    <span>下一页</span>
                </el-button>
            </div>
        </div>

        <!-- 页面表格数据 -->
        <div class="page-table">
            <el-table ref="imageManager" :data="dataList" highlight-current-row style="width: 100%">
                <el-table-column prop="id" label="id" fixed width="100" />
                <el-table-column prop="category" label="图片分类" fixed />
                <el-table-column prop="resolution" label="分辨率" width="100" />
                <el-table-column prop="url" label="图片地址" width="450">
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <div class="showImage" :style="{ background: `url(${resizeImage(scope.row.url)})` }"></div>
                            <div slot="reference" class="name-wrapper">
                                <span>{{ scope.row.url }}</span>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column prop="tag" label="图片标签" width="1000" />
                <el-table-column fixed="right" label="操作">
                    <template slot-scope="scope">
                        <el-button @click="deleteIamge(scope.row.id)" type="text" size="small">
                            <span>删除</span>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import API from '../API';
import { Notification } from 'element-ui';

export default {
    data: () => {
        return {
            len: 10, // 每次获取的长度
            cPage: 0,
            dataList: [],
            dataTotal: 0,
            loading: false
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            API.fetchIamgeInfo({
                len: this.len,
                count: this.cPage * this.len //偏移,
            }).then(
                res => {
                    this.dataList = res.data;
                    this.dataTotal = res.total;
                },
                rej => console.log(rej)
            );
        },
        resizeImage(url) {
            return url.replace(/__\d*/, '__10');
        },
        deleteIamge(id) {
            API.deleteImageInfo({ id }).then(
                res => {
                    this.fetchData();
                    Notification.success(res.msg);
                },
                () => Notification.error('图片删除失败')
            );
        }
    },
    watch: {
        cPage: function() {
            this.fetchData();
        }
    }
};
</script>

<style scoped>
.container {
    padding: 16px;
}
.page-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.page-title h1 {
    font-size: 26px;
}
.btns span {
    font-size: 12px;
    display: inline-block;
    margin: 0 8px;
}
.showtotal {
    font-size: 12px;
    font-weight: 100;
    color: #ccc;
}
.showImage {
    width: 320px;
    height: 180px;
    background-size: 100% 100% !important;
    background-position: center;
}
</style>
