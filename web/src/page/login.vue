<template>
    <div>
        <header class="login-header">
            <img src="../static/elmlogo.jpeg" alt="">
        </header>
        <van-cell-group>
                <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    icon="question"
                    placeholder="请输入用户名"
                    @click-icon="$toast('question')"
                />

                <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                />
            <van-field
                v-model="smsCode"
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码">
                <van-button slot="button" size="small" type="primary" v-show="!issend" @click="sendValidateCode">发送验证码</van-button>
                <van-button slot="button" size="small" type="default" v-show="issend">已发送{{countDown}}s</van-button>
            </van-field>
        </van-cell-group>
        <div class="submit">
            <van-button type="primary" size="small" @click="submit">提交</van-button>
        </div>
         
    </div>
</template>
<script>
import {login} from '../api/getData';
    export default {
        data () {
            return {
                username: '',
                password: '',
                smsCode: '',
                countDown: 0,
                issend: false
            }
        },
        methods: {
            submit() {
                let pramas = {
                    user: this.username,
                    password: this.password
                }
                login(pramas).then(res => {
                    console.log('哈啊，接口通了', res);
                })
            },
            sendValidateCode() {
                this.issend = true;
                this.countDown = 59;
                let timer = setInterval(() => {
                    this.countDown--;
                    if( this.countDown < 0) {
                        this.issend = false;
                        clearInterval(timer);
                    }
                }, 1000)
            }
        }
    }
</script>
<style lang='scss' scoped>
    .login-header {
        padding-top: 40px;
        text-align: center;
        img {
            max-width: 140px;
        }
    }
    .submit {
        margin-top: 20px;
        text-align: center;
    }
</style>

