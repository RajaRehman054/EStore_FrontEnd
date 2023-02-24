import '../pages/css/login.css';

const FormInput = props => (
	<div className='row'>
		<label style={{ fontWeight: 'bold', color: 'black' }}>
			{props.description}
		</label>
		<input
			type={props.type}
			placeholder={props.placeholder}
			value={props.value}
			onChange={e => props.onChange(e.target.value)}
		/>
	</div>
);

export default FormInput;
