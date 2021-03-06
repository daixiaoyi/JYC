// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
'use strict'
const models = require('./db')
const express = require('express')
const router = express.Router()

/** ************ 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/user/createUser', (req, res) => {
  // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
  let newUser = new models.User({
    username: req.body.username,
    password: req.body.password,
    desc: req.body.desc
  })
  // 保存数据newUser数据进mongoDB
  newUser.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send('createUser succeed')
    }
  })
})
// 获取已有账号接口
router.get('/api/user/getUser', (req, res) => {
  // 通过模型去查找数据库
  models.User.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

module.exports = router
