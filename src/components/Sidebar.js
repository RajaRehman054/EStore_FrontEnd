import React, { useState } from 'react';
import {
	ProSidebar,
	Menu,
	MenuItem,
	SidebarHeader,
	SidebarFooter,
	SidebarContent,
} from 'react-pro-sidebar';
import { FaList, FaUser } from 'react-icons/fa';
import {
	FiLogOut,
	FiArrowLeftCircle,
	FiArrowRightCircle,
} from 'react-icons/fi';
import { TfiPencil } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import { VscAdd } from 'react-icons/vsc';
import { AiOutlineDelete } from 'react-icons/ai';
import 'react-pro-sidebar/dist/css/styles.css';
import '../pages/css/sidebar.css';

const SideBar = ({ sign }) => {
	const [menuCollapse, setMenuCollapse] = useState(false);
	const navigate = useNavigate();

	const menuIconClick = () => {
		menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
	};

	const handleClick = () => {
		localStorage.removeItem('admin');
		navigate('/');
	};

	return (
		<>
			<div id='header'>
				<ProSidebar collapsed={menuCollapse}>
					<SidebarHeader>
						<div className='logotext'>
							<p>{menuCollapse ? 'Store' : 'E-Store'}</p>
						</div>
						<div className='closemenu' onClick={menuIconClick}>
							{menuCollapse ? (
								<FiArrowRightCircle />
							) : (
								<FiArrowLeftCircle />
							)}
						</div>
					</SidebarHeader>
					<SidebarContent>
						<Menu iconShape='square'>
							<MenuItem
								onClick={() => navigate('/admin/dash')}
								active={sign === 'dash' ? true : false}
								icon={<FaUser />}>
								Users
							</MenuItem>
							<MenuItem
								icon={<FaList />}
								onClick={() => navigate('/admin/dash/items')}
								active={sign === 'items' ? true : false}>
								Items
							</MenuItem>
							<MenuItem
								icon={<VscAdd />}
								onClick={() => navigate('/admin/dash/itemsadd')}
								active={sign === 'itemsAdd' ? true : false}>
								Add Items
							</MenuItem>
							<MenuItem
								icon={<TfiPencil />}
								active={sign === 'itemsEdit' ? true : false}>
								Edit Items
							</MenuItem>
							<MenuItem icon={<AiOutlineDelete />}>
								Delete Items
							</MenuItem>
						</Menu>
					</SidebarContent>
					<SidebarFooter>
						<Menu iconShape='square'>
							<MenuItem icon={<FiLogOut />} onClick={handleClick}>
								Logout
							</MenuItem>
						</Menu>
					</SidebarFooter>
				</ProSidebar>
			</div>
		</>
	);
};

export default SideBar;
