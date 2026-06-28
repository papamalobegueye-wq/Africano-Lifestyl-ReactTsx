import type { footerSection } from './../types/footer';


export const MyFooter : footerSection[] = [
    {
        title:"Information",
        links:[
            {
                label: "My Account",
                url: "#My-Account"
            },{
                label: "Login",
                url: "#Login"
            },{
                label: "My Card",
                url: "#My-Card"
            },{
                label: "Wishlist",
                url: "#Wishlist"
            },{
                label: "Checkout",
                url: "#Checkout"
            },
        ]
    },
    {
        title: "Service",
        links:[
            {
                label:"About Us",
                url:"#About-Us"
            }, {
                label:"Careers ",
                url:"#Careers"
            }, {
                label:"Delivery",
                url:"#Delivery"
            }, {
                label:"Privacy Policy",
                url:"#Privacy-Policy"
            }, {
                label:"Termes & Conditions",
                url:"#Termes-Conditions"
            },
        ]
    }
]