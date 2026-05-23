import { FiCreditCard, FiTruck } from 'react-icons/fi';
import type { igEngagement } from './../types/igEngagement';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { BiSupport } from 'react-icons/bi';


export const IgEngagements : igEngagement[] = [
    {
        id:1,
        title:"Free Shipping",
        description:"Free shipping for order above 150$",
        icon: FiTruck,
    }, {
        id:2,
        title:"Money Guarantee",
        description:"Within 30 days for an exchange",
        icon: HiOutlineCurrencyDollar,
    }, {
        id:3,
        title:"Online Support",
        description:"24 hours a day, 7 day a week",
        icon: BiSupport,
    }, {
        id:4,
        title:"Flexible Payment",
        description:"Pay with multiple credit cards",
        icon: FiCreditCard,
    },
]