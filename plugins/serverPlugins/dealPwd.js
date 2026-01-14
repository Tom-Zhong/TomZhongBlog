// import bcrypt from 'bcrypt'

// 对密码进行hash加密
export function hashPwd(pwd) {
  return new Promise((resolve, reject) => {
    resolve(pwd)
    // bcrypt.hash(pwd, 10, (err, hash) => {
    //   if (err) {
    //     reject(err)
    //   } else {
    //     // console.log(hash);
    //     resolve(hash)
    //   }
    // })
  })
}

// 对比传过来时的密码， result为true代表密码正确
export function comparePwd(userInputPwd, userPwd) {
  return new Promise((resolve, reject) => {
    resolve(userInputPwd === userPwd)
    // bcrypt.compare(userInputPwd, userPwd, (err, result) => {
    //   if (err) {
    //     reject('用户名或者密码错误')
    //   }
    //   if (result) {
    //     resolve(result)
    //   } else {
    //     reject('用户名或者密码错误')
    //   }
    // })
  })
}

export default {
  hashPwd,
  comparePwd
}