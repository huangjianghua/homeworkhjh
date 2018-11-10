var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/Login', function(req, res, next) {
//   res.send('成功了');
// });

router.get('/reg', function(req, res, next){
  res.status = 200
  const { username, password ,phone ,email } = req.query
  const err = {
    code: 0,
    err: {}
  }

  const result = {
    code: 1,
    data: req.query
  }
  if (!username) {
    err.err['username'] = '用户名不能为空'
  }
  if (!phone) {
    err.err['phone'] = '手机号不能为空'
  }
  if (!email) {
    err.err['email'] = '邮箱不能为空'
  }
  if (!password) {
    err.err['password'] = '密码不能为空'
  }
  if(Object.keys(err.err).length > 0) {
    res.json(err)
  } else {
    console.log(res.json(result))
    res.json(result)
  }
})

router.get('/login', function(req, res, next){
  res.status = 200
  const { username, password} = req.query
  const err = {
    code: 0,
    err: {}
  }
  const result = {
    code: 1,
    data: req.query
  }
  if (!username) {
    err.err['username'] = '用户名不能为空'
  }
  if (!password) {
    err.err['password'] = '密码不能为空'
  }
  if(Object.keys(err.err).length > 0) {
    res.json(err)
  } else {
    console.log(res.json(result))
    res.json(result)
  }
})
module.exports = router;
