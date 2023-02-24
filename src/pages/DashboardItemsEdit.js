import React, { useEffect, useState } from 'react';
import SideBar from '../components/Sidebar';
import { useNavigate, useParams } from 'react-router-dom';

export default function DashboardItemsEdit() {
	const { item } = useParams();
	const navigate = useNavigate();
	const [id, setId] = useState(0);
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState(0);
	const [description, setDesc] = useState('');
	const [cate, setCate] = useState('');
	const [url, setUrl] = useState('');
	const [rating, setRating] = useState({});

	const fetchItem = async () => {
		const res = await fetch(
			`https://server-e-store.vercel.app/item/${item}`,
			{
				headers: {
					Authorization: `Bearer ${JSON.parse(
						localStorage.getItem('admin')
					)}`,
				},
			}
		);
		const data = await res.json();
		setId(data.id);
		setTitle(data.title);
		setPrice(data.price);
		setDesc(data.description);
		setCate(data.category);
		setUrl(data.image);
		setRating({ rate: 4.7, count: 500 });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const obj = {
			id,
			title,
			price,
			description,
			cate,
			url,
			rating,
		};
		const res = await fetch(
			`https://server-e-store.vercel.app/edititem/${item}`,
			{
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
					Authorization: `Bearer ${JSON.parse(
						localStorage.getItem('admin')
					)}`,
				},
				body: JSON.stringify(obj),
			}
		);
		if (res.status === 204) {
			navigate('/admin/dash/items');
		}
	};

	useEffect(() => {
		fetchItem();
	}, []);

	return (
		<div>
			<SideBar sign='itemsEdit' />
			<div style={{ marginLeft: '15vw' }}>
				<h2>Edit Item</h2>
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
							placeholder='Title'
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
					<div className='d-grid'>
						<button type='submit' className='btn btn-primary'>
							Edit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
