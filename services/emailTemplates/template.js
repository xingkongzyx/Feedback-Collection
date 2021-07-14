// html template(body part of the email) for any survey to send out // will return the html string
module.exports = (survey) => {
	return `
<html>
	<body>
		<div style="text-align: center;">
			<h3>I'd like your input!</h3>
			<p>Please answer the following question:</p>
			<p>${survey.body}</p>
			<div>
				<a href="https://emailyserver.run-us-west2.goorm.io/api/surveys/${survey.id}/yes">Yes</a>
			</div>
			<div>
				<a href="https://emailyserver.run-us-west2.goorm.io/api/surveys/${survey.id}/no">No</a>
			</div>
		</div>
	</body>
</html>
`;
};