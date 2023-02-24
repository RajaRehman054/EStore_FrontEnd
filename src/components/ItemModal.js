import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ItemModal(props) {
	const handleDelete = async user => {
		await fetch(`https://server-e-store.vercel.app/${props.item}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${JSON.parse(
					localStorage.getItem('admin')
				)}`,
			},
		});
		props.close(false);
		props.items();
	};
	return (
		<>
			<Modal show={props.show} onHide={props.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Attention ⤵️</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Are you sure you want to delete this item?
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={props.handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleDelete}>
						Confirm
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
