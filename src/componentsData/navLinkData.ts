type NavLinkData = {
    link: string,
    text: string,
    dropDown?: {
        link: string,
        text: string
    }[]
}[]

const navLinkData : NavLinkData = [
    {
        link: '/',
        text: 'Portfolio Services',
        dropDown: [
            {
                link: '/corporate-courier-services',
                text: 'Corporate Logistics'
            },
            {
                link: '/domestic-courier-solutions',
                text: 'Domestic Logistics'
            },
            {
                link: '/ecommerce-logistics-services',
                text: 'Ecommerce Logistics'
            },
            {
                link: '/international-courier-services',
                text: 'Overseas Shipping'
            },
            {
                link: '/wallet-added-services',
                text: 'Wallet And Added Services'
            }
        ]
    },
    {
        link: 'our-offices',
        text: 'Our Offices'
    },
    {
        link: '/blog',
        text: 'Blog'
    },
    {
        link: '/faq',
        text: 'FAQs'
    },
    {
        link: '/about-us',
        text: 'About Us'
    }
]


export default navLinkData;