import React from 'react';
import FlashMessage from 'react-flash-message';

const Message = props => (
	<FlashMessage duration={5000}>
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<strong style={{ color: 'green' }}>{props.msg}</strong>
		</div>
	</FlashMessage>
);

export default Message;
