// Nigeria
const GIGL_NIGERIA_PHONE="+2348139851120"


// Ghana
const GIGL_GHANA_EMAIL="giglghana@giglogistics.com"
const GIGL_GHANA_PHONE="+233592009946"
const GIGL_GHANA_WHATSAPP="+233575341111"


// UK
const GIGL_UK_EMAIL="gigluk@giglogistics.com"
const GIGL_UK_PHONE="+447466844567"


// USA
const GIGL_USA_EMAIL="giglusa@giglogistics.com"
const GiGL_USA_PHONE="+832-998-9925"

// China
const GIGL_CHINA_EMAIL="china@giglogistics.com"
const GIGL_CHINA_WHATSAPP="+2349139346234"



const contactCenterArray = [
    {
        location: "Nigeria",
        heading: "Nigeria:",
        id: "ng-ccn",
        contactDetails: {
            phone: GIGL_NIGERIA_PHONE
        }
    },
    {
        location: "Ghana",
        id: "gh-ccn",
        heading: "Ghana:",
        contactDetails: {
            email: GIGL_UK_EMAIL,
            phone: GIGL_NIGERIA_PHONE,
            whatsapp: GIGL_GHANA_WHATSAPP
        }
    },
    {
        location: "United Kingdom",
        id: "uk-ccn",
        heading: "UK:",
        contactDetails: {
            email: GIGL_UK_EMAIL,
            phone: GIGL_NIGERIA_PHONE
        }
    },
    {
        location: "United States",
        id: "us-ccn",
        heading: "Houston (US):",
        contactDetails: {
            email: GIGL_UK_EMAIL,
            phone: GIGL_NIGERIA_PHONE
        }
    },
    {
        location: "China",
        id: "ch-ccn",
        heading: "China:",
        contactDetails: {
            email: GIGL_UK_EMAIL,
            whatsapp: GIGL_CHINA_WHATSAPP
        }
    },
]

export default contactCenterArray;