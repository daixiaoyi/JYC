<template>
  <div>
    <input class="form-control" id="inputEmail3" placeholder="请输入账号1" v-model="username">
    <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="password">
    <button type="submit" class="btn btn-default" @click="login">登录</button>
    <button type="submit" class="btn btn-default" @click="insert">插入</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  created () {
    this.get()
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    get () {
      console.log('getting users...')
      axios.get('/api/user/getUser')
        .then((response) => {
          console.log('success')
          console.log(JSON.stringify(response.data))
        })
        .catch((reject) => {
          console.log('error')
          console.log(reject)
        })
    },
    login () {
      // axios.get('/api/user/getUser')
      //   .then((response) => {
      //     console.log('success')
      //     console.log(response.data)
      //   })
      //   .catch((reject) => {
      //     console.log('error')
      //     console.log(reject)
      //   })
    },
    insert () {
      let params = {
        username: this.username,
        password: this.password,
        desc: ''
      }
      // 创建一个账号密码
      console.log('inserting users...')
      axios.post('/api/user/createUser', params)
        .then((response) => {
          console.log('success')
          console.log(response.data)
        })
        .catch((reject) => {
          console.log('error')
          console.log(reject)
        })
    }
  }
}
</script>
