// The function used to validate email strings
// different emails are separated by ',' and each individual should
// be valid as well
const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateEmail = (emailStr) => {
	const invalidEmailArr = emailStr
		.split(',')
		.map((email) => email.trim())
		.filter((email) => emailReg.test(email) === false);

	console.log(invalidEmailArr)
	let errorStr = null;
	
	if (invalidEmailArr.length) {
	// 	里面的if确保正确格式的email后面有,不会被判定error ex: 'zyxagm@gmail.com,'
		if(invalidEmailArr.length === 1 && invalidEmailArr[0] === "") return;
		errorStr = `Please provide valid email address(Separated by comma), 
						${invalidEmailArr} are invalid`;
		return errorStr;
	}
	return;
};

export default validateEmail;