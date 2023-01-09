
export const NasaMenu = [
    {
        id: 1,
        name: 'Dashboard',
        link: '/',
        icon: 'fas fa-sharp fa-solid fa-chart-column w-6',
        notification: 2,
    },
    {
        id: 2,
        name: 'Lenders',
        link: '/lender',
        icon: 'fas fa-light fa-hand-holding-dollar w-6',
        notification: 3,
    },
    {
        id: 3,
        name: 'Admin',
        link: '/admin',
        icon: 'fas fa-thin fa-user-shield w-6',
        notification: 0,
    },
    {
        id: 4,
        name: 'Loans',
        link: '/loans',
        icon: 'fas fa-thin fa-piggy-bank w-6',
        notification: 2,
    },
    {
        id: 5,
        name: 'Payments',
        link: '/payments',
        icon: 'fas fa-thin fa-wallet w-6',
        notification: 5,
    },
    {
        id: 6,
        name: 'Reports',
        link: '/reports',
        icon: 'fas fa-thin fa-chart-simple w-6',
        notification: 0,
    },
    {
        id: 7,
        name: 'Support',
        link: '/support',
        icon: 'fas fa-thin fa-handshake-angle w-6',
        notification: 0,
    },
]

const SecondaryLink = [
    {
        id: 1,
        name: 'Settings',
        link: '/settings',
        icon: 'fas fa-thin fa-users-gear w-6',
    },
    {
        id: 2,
        name: 'Logout',
        link: '/logout',
        icon: 'fas fa-light fa-right-from-bracket w-6',
    }
]
export default SecondaryLink;