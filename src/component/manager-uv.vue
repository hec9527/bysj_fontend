<template>
    <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140" />
        <el-table-column prop="vu" label="VU数据" width="160" />
        <el-table-column prop="address" label="地址" />
    </el-table>
</template>

<script>
export default {
    data: () => {
        return {
            tableData: [
                {
                    date: new Date().toLocaleDateString(),
                    vu: `${(Math.random() * 3000) | 0}/${(Math.random() * 2000) | 0}`,
                    address: '家里蹲'
                }
            ]
        };
    }
};
</script>
