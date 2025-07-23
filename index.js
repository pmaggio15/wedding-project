// const venues = [
//   "The 1915 Barn",
//   "Lazy B Barn",
//   "Star M Bar",
//   "Gallatin River Hideaway Wedding And Event Venues",
//   "Woodlands At Cottonwood Canyon",
//   "The Chateau Event Center",
// ];

function renderVenue() {
const venueWrapper = document.querySelector('.venue');

const venue = getVenue();

const venueHtml = venue.map((venues) => {
        return `
                <div class="venue">
                    <figure class="venue__img--wrapper">
                        <img class="venue__img" src="${venues.url}" alt="">
                        <div class="info__overlay">More information</div>
                    </figure>
                    <div class="venue__title">${venues.title}</div>
                    <div class="venue__ratings">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half"></i>
                    </div>
                    <h1 class="reviews">
                        <p class="review__para">
                            ${venues.review}
                        </p>
                    </h1>
                </div>`;
        })
        .join("");

console.log(venueHtml);

venueWrapper.innerHTML = venueHtml;
}

setTimeout (() => {
    renderVenue();
});

// FAKE DATA //
function getVenue () {
    return [        
        {
            id: 1,
            title: "The 1915 Barn",
            url: "assets/1915 Barn.jpeg",
            rating: 5.0,
            review: "“The garden ceremony was straight out of a fairytale book. We were in awe!” — Emily & Jordan",
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
            url: "assets/The lazy b barn.jpeg",
            rating: 4.5,
            review: "“Our guests are still talking about how romantic our wedding was!” — Olivia & Ethan",
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
            url: "assets/star M barn.jpeg",
            rating: 5.0,
            review: "“From the moment we toured the property, we knew it was the one for us!” — Priya & Michael",
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
            review: "“Professional, polished, and personal. They did the sweetest send-off with sparklers.” — Avery & Scott",
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
            url: "assets/woodland.jpeg",
            rating: 4.5,
            review: "“A hidden gem! The rustic barn has so much character, and the outdoor lawn is pristine.” — Hannah & Marcus",
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
            url: "assets/The Chateu.jpeg",
            rating: 4.0,
            review: "“Every detail was impeccable—the floral backdrop was stunning, the menu was delicious, and the service was flawless.” — Sofia & Luis",
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