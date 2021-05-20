// 决定使用dev或者deplo credentials
if(process.env.NODE_ENV === "production"){
// 	当我们run heroku 这项command自动成立
	module.exports = require("./prod")
}else{
// 	在测试阶段，使用这套keys
	module.exports = require("./dev")
}

// https://peaceful-brook-67360.herokuapp.com