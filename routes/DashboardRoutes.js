import { v4 as uuid } from 'uuid';

export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'home',
		link: '/'
	},
	{
		id: uuid(),
		title: 'Vehicles',
		icon: 'truck',
		link: '/vehicles'
	},
	{
		id: uuid(),
		title: 'Servicing',
		icon: 'circle',
		link: '/servicing'
	},
	
];

export default DashboardMenu;
