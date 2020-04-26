<template>
    <el-table :data="tableData">
        <el-table-column prop="date" label="日期" />
        <el-table-column prop="path" label="页面路由" />
        <el-table-column prop="vu" label="VU数据" />
        <el-table-column prop="click" label="点击数" />
    </el-table>
</template>

<script>
export default {
    data: () => {
        const ONE_DAY = 86400000;
        const TODAY = new Date().getTime();
        const path = ['/home', '/category', '/biying', '/daily', '/share', '/indi'];
        const getDate = () => {
            let data = [];
            for (let i = 0; i < 10; i++) {
                for (let j = 0, len = path.length; j < len; j++) {
                    data.push({
                        date: new Date(TODAY - ONE_DAY * i).toLocaleDateString(),
                        vu: `${(Math.random() * 3000) | 0}/${(Math.random() * 2000) | 0}`,
                        path: path[j],
                        click: ((Math.random() * 2000) | 0) + 200
                    });
                }
            }
            return data;
        };

        return {
            tableData: getDate()
        };
    },
    mounted() {
        console.log(this.tableData);
    }
};
</script>
