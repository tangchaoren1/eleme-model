<template>
    <div>
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
                <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
        </van-cell-group>
         <van-button type="primary" size="small" @click="submit">提交</van-button>
    </div>
</template>
<script>
import {login} from '../api/getData';
    export default {
        data () {
            return {
                username: '',
                password: '',
                smsCode: ''
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
            }
        }
    }
</script>
