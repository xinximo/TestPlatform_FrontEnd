<template>
    <div class="sign-in">
        登录
        <v-text-field v-model="userName" label="用户名"></v-text-field>
        <v-text-field v-model="password" label="密码" type="password"></v-text-field>
        <v-btn color="primary" @click="login()">登录</v-btn>
        <v-btn color="primary" text @click="signUp()">注册</v-btn>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userName:'',
            password:''
        }
    },
    
    methods:{
        signUp(){
            console.log('123')
            this.$router.push({name:'SignUp'})
        },
        login(){
            let post_data = {
                userName : this.userName,
                password : this.password
            }
            this.$api.user.signIn(post_data).then(
                res=>{
                    console.log(res)
                }
            )
        }
    }
}
</script>

<style scoped>
.sign-in{
    width: 500px;
    margin: 0 auto;
    text-align: center;
}
</style>