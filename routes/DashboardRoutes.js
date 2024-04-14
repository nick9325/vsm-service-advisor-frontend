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
	}
	
];

export default DashboardMenu;
