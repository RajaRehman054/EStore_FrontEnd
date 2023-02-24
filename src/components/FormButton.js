const FormButton = props => (
	<div id='button' className='row'>
		<button type={props.type}>{props.title}</button>
	</div>
);

export default FormButton;
