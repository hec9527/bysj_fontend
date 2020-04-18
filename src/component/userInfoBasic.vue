<template>
    <div class="wraper">
        <!-- 用户基本信息 -->
        <div class="basicInfo">
            <div class="avator">
                <!-- TODO 点击头像可以修改用户的头像信息  或者查看大图  -->
                <div class="avator-img"></div>
            </div>
            <div class="user-info">
                <!-- TODO title 和用户名相同 -->
                <!-- TODO 点击用户名可以修改用户基本信息 -->
                <div class="userName">user123131312514</div>
                <div class="balance">
                    <span>积分：{{ 123 }}</span>
                    <span class="btn-logout" @click="logout">退出</span>
                </div>
            </div>
        </div>

        <!-- 用户数据交互 -->
        <div class="interaction col">
            <div class="row">
                <!-- 下载 -->
                <div class="download" title="下载次数">
                    <i class="el-icon-download"></i>
                    <span>20</span>
                </div>
                <!-- 上传 -->
                <div class="upload" title="上传次数">
                    <i class="el-icon-upload2"></i>
                    <span>23</span>
                </div>
                <!-- 点赞 -->
                <div class="support" title="点赞次数">
                    <i class="el-icon-thumb"></i>
                    <span>43</span>
                </div>
                <!-- 评论 -->
                <div class="remark" titie="评论次数">
                    <i class="el-icon-chat-dot-round"></i>
                    <span>12</span>
                </div>
            </div>

            <div class="row">
                <!-- 等级 -->
                <div class="level" title="等级">
                    <i class="el-icon-s-flag"></i>
                    <span>4</span>
                </div>
                <!-- 积分 -->
                <div class="integral" title="积分">
                    <i class="el-icon-attract"></i>
                    <span>24</span>
                </div>
                <!-- 收藏 -->
                <div class="collection" title="收藏">
                    <i class="el-icon-star-on"></i>
                    <span>6</span>
                </div>
                <!-- 消息 -->
                <div class="message" title="消息">
                    <i class="el-icon-message-solid"></i>
                    <span>545</span>
                </div>
            </div>
        </div>

        <!-- 更多用户信息 -->
        <div class="more-info">
            <!--  -->
        </div>
    </div>
</template>

<script>
import { delUserInfo } from '../tools/util';
import { Notification } from 'element-ui';

export default {
    props: {
        changePage: {
            type: Function,
            required: true
        }
    },
    data: () => {
        return {
            //
        };
    },
    methods: {
        logout: function() {
            delUserInfo();
            this.$store.commit('UPDATE_USER_INFO', { userName: undefined, userToken: undefined });
            this.changePage('login');
            Notification.success('退出登录');
        }
    }
};
</script>

<style scoped>
.basicInfo {
    width: calc(100% - 8px);
    height: 70px;
    background: #fff;
    margin: 8px 0 8px 8px;
    border-radius: 4px;
    display: flex;
    flex: nowrap;
    flex-direction: row;
    /* 容器阴影，可以尝试放在其他地方看起来合适点 */
    /* box-shadow: 3px 3px 9px #4445, -3px 3px 9px #4445; */
}
.avator {
    position: relative;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.avator .avator-img {
    width: 48px;
    height: 48px;
    border-radius: 100%;
    background: #abf5;
    cursor: pointer;
}
.user-info {
    margin: 0 8px;
    display: flex;
    flex-grow: 1;
    justify-content: space-evenly;
    flex-direction: column;
}
.user-info .userName {
    font-size: 14px;
    transform: translateY(5px);
    color: #444;
    max-width: 120px;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
}
.user-info .balance {
    font-size: 12px;
    color: #777;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.balance + span {
    max-width: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
}
.btn-logout:hover {
    cursor: pointer;
    color: cadetblue;
}

.col {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.interaction {
    margin-left: 8px;
    background: #fff9;
    padding: 8px;
    padding-bottom: 0px;
    border-radius: 4px;
}
.row {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin-bottom: 8px;
}
.row div {
    border-radius: 4px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    color: #ccc;
}

.row div i {
    width: 60px;
    height: 40px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.row div span {
    display: flex;
    justify-content: center;
    transform: translateY(-5px);
}
</style>
