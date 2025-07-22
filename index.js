// const API_KEY = 'PoXCPocgD-6O175KF_P-TypscWT0oWwIQrDKuGq4KvJO9HcZqDS5szwk-ifIgeIh_imLL34GEE6YmG7yW8mRN_ckFtpDLFdmLcuDnqx55Qoht_tnRYjHDvbXFjl8aHYx';
// const BASE_URL = 'https://api.yelp.com/v3/businesses/search?term=wedding+venue&location=Bozeman,MT&radius=20000&limit=10';

// const venues = [
//   "The 1915 Barn",
//   "Lazy B Barn",
//   "Star M Bar",
//   "Gallatin River Hideaway Wedding And Event Venues",
//   "Woodlands At Cottonwood Canyon",
//   "The Chateau Event Center",
// ];

function renderVenues() {
    console.log ('renderVenues()')
}

renderVenues();
// FAKE DATA //
function getVenues () {
    return [        
        {
            id: 1,
            title: "The 1915 Barn",
            url: "./assets/1915 Barn.jpeg",
            rating: 5.0,
            location: {
                "address1": "4062 Johnson Rd",
                "city": "Bozeman",
                "zip_code": "59718",
                "country": "US",
                "state": "MT",
            }
        },   
        {
            id: 2,
            title: "Lazy B Barn",
            url: "./assets/The lazy b barn.jpeg",
            rating: 4.5,
            location: {
                "address1" : "10401 Gooch Hill Rd",
                "city" : "Gallatin Gateway",
                "zip_code": "59730",
                "country": "US",
                "state": "MT",
            }
        
        },
        {
            id: 3,
            title: "Star M Barn",
            url: "assets/woodland.jpeg",
            rating: 5.0,
            location: {
                "address1": "4186 Stimson Ln",
                "city": "Belgrade",
                "zip_code": "59714",
                "country": "US",
                "state": "MT",
            }
        },
        {
            id: 4,
            title: "Gallatin River Hideaway Wedding And Event Venues",
            url: "assets/Gallatin River.jpeg",
            rating: 4.0,
            location: {
                "address1": "135 Hideaway Dr",
                "city": "Bozeman",
                "zip_code": "59718",
                "country": "US",
                "state": "MT",
            }
        },
        {
            id: 5,
            title: "Woodlands At Cottonwood Canyon",
            url: "./Assets/",
            rating: 4.5,
            location: {
                "address1" : "141 Old Timber Way",
                "city": "Bozeman",
                "zip_code": "59718",
                "country": "US",
                "state": "MT",
            }
        },
        {
            id: 6,
            title: "The Chateau Event Center",
            url: "./assets/",
            rating: 4.2,
            location: {
                "address1": "1568 Cobb Hill Rd",
                "city": "Bozeman",
                "zip_code": "59718",
                "country": "US",
                "state": "MT",
            }
        }
    ]
}