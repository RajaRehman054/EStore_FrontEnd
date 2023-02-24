import React, { useState } from 'react';
import SideBar from '../components/Sidebar';
import Message from '../components/FlashMessage';

export default function DashboardAddItem() {
	const [id, setId] = useState('');
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDesc] = useState('');
	const [cate, setCate] = useState('');
	const [url, setUrl] = useState('');
	const [rate, setRate] = useState('');
	const [count, setCount] = useState('');
	const [flash, setFlash] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		const rating = { rate, count };
		const obj = {
			id,
			title,
			price,
			description,
			cate,
			url,
			rating,
		};
		const res = await fetch(`https://server-e-store.vercel.app/additem`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${JSON.parse(
					localStorage.getItem('admin')
				)}`,
			},
			body: JSON.stringify(obj),
		});
		if (res.status === 201) {
			setFlash(true);
			setId('');
			setDesc('');
			setTitle('');
			setPrice('');
			setRate('');
			setCount('');
			setCate('');
			setUrl('');
		}
	};

	return (
		<div>
			<SideBar sign='itemsAdd' />
			<div style={{ marginLeft: '15vw' }}>
				<h2>Add Item</h2>
				<form onSubmit={handleSubmit}>
					<div className='mb-3'>
						<label>Item Id</label>
						<input
							type='number'
							className='form-control'
							placeholder='id'
							value={id}
							onChange={e => setId(e.target.value)}
						/>
					</div>
					<div className='mb-3'>
						<label>Item Title</label>
						<input
							type='text'
							className='form-control'
							placeholder='Title'
							value={title}
							onChange={e => setTitle(e.target.value)}
						/>
					</div>
					<div className='mb-3'>
						<label>Item Description</label>
						<input
							type='text'
							className='form-control'
							placeholder='Description'
							value={description}
							onChange={e => setDesc(e.target.value)}
						/>
					</div>
					<div className='mb-3'>
						<label>Item Price</label>
						<input
							type='number'
							className='form-control'
							placeholder='Price'
							value={price}
							onChange={e => setPrice(e.target.value)}
						/>
					</div>
					<div className='mb-3'>
						<label>Item Category</label>
						<input
							type='text'
							className='form-control'
							placeholder='Category'
							value={cate}
							onChange={e => setCate(e.target.value)}
						/>
					</div>
					<div className='mb-3'>
						<label>Image Url</label>
						<input
							type='text'
							className='form-control'
							placeholder='Url'
							value={url}
							onChange={e => setUrl(e.target.value)}
						/>
					</div>
					<div className='mb-3'>
						<label>Rate</label>
						<input
							type='number'
							className='form-control'
							placeholder='Rate'
							value={rate}
							onChange={e => setRate(e.target.value)}
						/>
					</div>
					<div className='mb-3'>
						<label>Count</label>
						<input
							type='number'
							className='form-control'
							placeholder='Count'
							value={count}
							onChange={e => setCount(e.target.value)}
						/>
					</div>
					<div className='d-grid'>
						<button type='submit' className='btn btn-primary'>
							Add
						</button>
					</div>
				</form>
			</div>
			{flash ? <Message msg='Added Item successfully' /> : null}
		</div>
	);
}
