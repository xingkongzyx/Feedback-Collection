// middleware to make sure user has at least 1 credit in our app
// to send the email to different users
module.exports = (req,res,next)=>{
	if(req.user.credits < 1){
		return res.status(401).send({error: "Please have at least one credit!"})
	}
	next();
}