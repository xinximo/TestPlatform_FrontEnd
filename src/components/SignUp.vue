<template>
    <div class="sign-up">
        注册
        <v-text-field v-model="userName" label="用户名"></v-text-field>
        <v-text-field v-model="password" label="密码" type="password"></v-text-field>
        <v-text-field v-model="email" label="邮箱"></v-text-field>
        <v-btn color="primary" @click="register()">注册</v-btn>
        <v-btn color="primary" text @click="signIn()">去登录</v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName:'',
            password:'',
            email:''
        } 
    },
    methods:{
        signIn(){
            this.$router.push({name:'SignIn'})
        },
        register(){
            let post_data = {
                userName : this.userName,
                password : this.password,
                emali : this.email,
            }
            this.$api.user.signUp(post_data).then(res=>{
                console.log(res)
            })
        }   
    },
}
</script>

<style scoped>
.sign-up{
    width: 500px;
    margin: 0 auto;
    text-align: center;
}
</style>