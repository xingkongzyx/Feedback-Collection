// 自己定义的middleware，用于确保某些route handler进行后续操作前用户already
// logged in
module.exports = (req,res,next) => {
	if(!req.user){
		return res.status(401).send({error: "Please login"})
	}
	
	next()
}

