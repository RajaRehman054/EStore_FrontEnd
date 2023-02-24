const OtherMethods = props => (
	<div id='alternativeLogin'>
		<label>Or sign in with:</label>
		<div id='iconGroup'>
			<Facebook />
			<Twitter />
			<Google />
		</div>
	</div>
);

const Facebook = props => (
	<a href='#' id='facebookIcon'>
		FB
	</a>
);

const Twitter = props => (
	<a href='#' id='twitterIcon'>
		Twitter
	</a>
);

const Google = props => (
	<a href='#' id='googleIcon'>
		Google
	</a>
);

export default OtherMethods;
