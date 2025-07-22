
// FAKE DATA //
let venues;

async function getVenues(filter) {
  const venueWrapper = document.querySelector('.venues');

  venueWrapper.classList += ' venue__loading'
  
  if (!venues) {
    venues = await getVenues();
  }
  booksWrapper.classList.remove('venue__loading');
  console.log (getVenues)
}


function getVenues() {
  return new Promise((resolve) => {
    setTimeout (() => {
      resolve([
        {
      "id": "VjLzWx7kjlrIsKy8hcoVXw",
      "alias": "the-1915-barn-bozeman",
      "name": "The 1915 Barn",
      "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/bCiBRuKYVBWP74YxPkEHHA/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/the-1915-barn-bozeman?adjust_creative=LsCMMv2BdrTe1m9YBXem0A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=LsCMMv2BdrTe1m9YBXem0A",
      "review_count": 3,
      "categories": [
        {
          "alias": "venues",
          "title": "Venues & Event Spaces"
        },
        {
          "alias": "vacation_rentals",
          "title": "Vacation Rentals"
        }
      ],
      "rating": 5.0,
      "coordinates": {
        "latitude": 45.61254,
        "longitude": -111.11256
      },
      "transactions": [],
      "location": {
        "address1": "4062 Johnson Rd",
        "address2": null,
        "address3": null,
        "city": "Bozeman",
        "zip_code": "59718",
        "country": "US",
        "state": "MT",
        "display_address": [
          "4062 Johnson Rd",
          "Bozeman, MT 59718"
        ]
      },
      "phone": "+14065850244",
      "display_phone": "(406) 585-0244",
      "distance": 9310.22840357012,
      "business_hours": [
        {
          "open": [
            {
              "is_overnight": false,
              "start": "0800",
              "end": "2000",
              "day": 0
            },
            {
              "is_overnight": false,
              "start": "0800",
              "end": "2000",
              "day": 1
            },
            {
              "is_overnight": false,
              "start": "0800",
              "end": "2000",
              "day": 2
            },
            {
              "is_overnight": false,
              "start": "0800",
              "end": "2000",
              "day": 3
            },
            {
              "is_overnight": false,
              "start": "0800",
              "end": "2000",
              "day": 4
            },
            {
              "is_overnight": false,
              "start": "0800",
              "end": "2000",
              "day": 5
            },
            {
              "is_overnight": false,
              "start": "0800",
              "end": "2000",
              "day": 6
            }
          ],
          "hours_type": "REGULAR",
          "is_open_now": true
        }
      ],
      "attributes": {
        "business_temp_closed": null,
        "waitlist_reservation": null
      }
    },
    {
      "id": "BXoJqjmZvXtn_RuvhlklJQ",
      "alias": "lazy-b-barn-gallatin-gateway",
      "name": "Lazy B Barn",
      "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/H4rJy67W9tnjc3Vcs4Qx6w/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/lazy-b-barn-gallatin-gateway?adjust_creative=LsCMMv2BdrTe1m9YBXem0A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=LsCMMv2BdrTe1m9YBXem0A",
      "review_count": 1,
      "categories": [
        {
          "alias": "venues",
          "title": "Venues & Event Spaces"
        },
        {
          "alias": "wedding_planning",
          "title": "Wedding Planning"
        }
      ],
      "rating": 5.0,
      "coordinates": {
        "latitude": 45.605899509569,
        "longitude": -111.150027320099
      },
      "transactions": [],
      "location": {
        "address1": "10401 Gooch Hill Rd",
        "address2": "",
        "address3": "",
        "city": "Gallatin Gateway",
        "zip_code": "59730",
        "country": "US",
        "state": "MT",
        "display_address": [
          "10401 Gooch Hill Rd",
          "Gallatin Gateway, MT 59730"
        ]
      },
      "phone": "",
      "display_phone": "",
      "distance": 11860.444504005647,
      "business_hours": [],
      "attributes": {
        "business_temp_closed": null,
        "waitlist_reservation": null
      }
    },
    {
      "id": "aj6pRrgwHmVzEPrqEN-mcQ",
      "alias": "rockin-t-j-ranch-montana-weddings-and-special-events-venue-bozeman",
      "name": "Rockin' T J Ranch Montana Weddings and Special Events Venue",
      "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/vxtsB1a8968DKLXE9Ynzyg/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/rockin-t-j-ranch-montana-weddings-and-special-events-venue-bozeman?adjust_creative=LsCMMv2BdrTe1m9YBXem0A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=LsCMMv2BdrTe1m9YBXem0A",
      "review_count": 19,
      "categories": [
        {
          "alias": "venues",
          "title": "Venues & Event Spaces"
        }
      ],
      "rating": 3.1,
      "coordinates": {
        "latitude": 45.66146765345899,
        "longitude": -111.15180425276112
      },
      "transactions": [],
      "location": {
        "address1": "651 Lynx Ln",
        "address2": null,
        "address3": null,
        "city": "Bozeman",
        "zip_code": "59718",
        "country": "US",
        "state": "MT",
        "display_address": [
          "651 Lynx Ln",
          "Bozeman, MT 59718"
        ]
      },
      "phone": "+14065850595",
      "display_phone": "(406) 585-0595",
      "distance": 9112.245779811288,
      "business_hours": [
        {
          "open": [
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1700",
              "day": 0
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1700",
              "day": 1
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1700",
              "day": 2
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1700",
              "day": 3
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1200",
              "day": 4
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1200",
              "day": 5
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1200",
              "day": 6
            }
          ],
          "hours_type": "REGULAR",
          "is_open_now": false
        }
      ],
      "attributes": {
        "business_temp_closed": null,
        "waitlist_reservation": null
      }
    },
    {
      "id": "Iu93xyz5C75ye1mkDEYZVg",
      "alias": "the-chateau-event-center-bozeman",
      "name": "The Chateau Event Center",
      "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/IkU8ORCEfA0Pui16fx2Xnw/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/the-chateau-event-center-bozeman?adjust_creative=LsCMMv2BdrTe1m9YBXem0A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=LsCMMv2BdrTe1m9YBXem0A",
      "review_count": 5,
      "categories": [
        {
          "alias": "venues",
          "title": "Venues & Event Spaces"
        }
      ],
      "rating": 4.2,
      "coordinates": {
        "latitude": 45.66692235187464,
        "longitude": -111.1610686399687
      },
      "transactions": [],
      "location": {
        "address1": "1568 Cobb Hill Rd",
        "address2": null,
        "address3": "",
        "city": "Bozeman",
        "zip_code": "59718",
        "country": "US",
        "state": "MT",
        "display_address": [
          "1568 Cobb Hill Rd",
          "Bozeman, MT 59718"
        ]
      },
      "phone": "+14066004161",
      "display_phone": "(406) 600-4161",
      "distance": 9728.17239090405,
      "business_hours": [
        {
          "open": [
            {
              "is_overnight": false,
              "start": "0800",
              "end": "2200",
              "day": 0
            },
            {
              "is_overnight": false,
              "start": "0800",
              "end": "2200",
              "day": 1
            },
            {
              "is_overnight": false,
              "start": "0800",
              "end": "2200",
              "day": 2
            },
            {
              "is_overnight": false,
              "start": "0800",
              "end": "2200",
              "day": 3
            },
            {
              "is_overnight": false,
              "start": "0800",
              "end": "2200",
              "day": 4
            },
            {
              "is_overnight": false,
              "start": "0800",
              "end": "2200",
              "day": 5
            },
            {
              "is_overnight": false,
              "start": "0800",
              "end": "2200",
              "day": 6
            }
          ],
          "hours_type": "REGULAR",
          "is_open_now": true
        }
      ],
      "attributes": {
        "business_temp_closed": null,
        "waitlist_reservation": null
      }
    },
    {
      "id": "gsmrIW-57usMxIkkMrvaEQ",
      "alias": "woodlands-at-cottonwood-canyon-bozeman",
      "name": "Woodlands At Cottonwood Canyon",
      "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/rytC0tXQdH8LV31aYAa3Kg/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/woodlands-at-cottonwood-canyon-bozeman?adjust_creative=LsCMMv2BdrTe1m9YBXem0A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=LsCMMv2BdrTe1m9YBXem0A",
      "review_count": 3,
      "categories": [
        {
          "alias": "venues",
          "title": "Venues & Event Spaces"
        }
      ],
      "rating": 4.3,
      "coordinates": {
        "latitude": 45.540898,
        "longitude": -111.097371
      },
      "transactions": [],
      "location": {
        "address1": "141 Old Timber Way",
        "address2": null,
        "address3": null,
        "city": "Bozeman",
        "zip_code": "59718",
        "country": "US",
        "state": "MT",
        "display_address": [
          "141 Old Timber Way",
          "Bozeman, MT 59718"
        ]
      },
      "phone": "+14067634542",
      "display_phone": "(406) 763-4542",
      "distance": 15888.950125305317,
      "business_hours": [
        {
          "open": [
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1900",
              "day": 1
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1900",
              "day": 2
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1900",
              "day": 3
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1900",
              "day": 4
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1900",
              "day": 5
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1900",
              "day": 6
            }
          ],
          "hours_type": "REGULAR",
          "is_open_now": false
        }
      ],
      "attributes": {
        "business_temp_closed": null,
        "waitlist_reservation": null
      }
    },
    {
      "id": "bf4-nKY9oSOUW5gUme6fbA",
      "alias": "gallatin-river-hideaway-wedding-and-event-venues-bozeman",
      "name": "Gallatin River Hideaway Wedding And Event Venues",
      "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/uRjv3QboGF4JA6U0fcCc8w/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/gallatin-river-hideaway-wedding-and-event-venues-bozeman?adjust_creative=LsCMMv2BdrTe1m9YBXem0A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=LsCMMv2BdrTe1m9YBXem0A",
      "review_count": 7,
      "categories": [
        {
          "alias": "venues",
          "title": "Venues & Event Spaces"
        }
      ],
      "rating": 3.9,
      "coordinates": {
        "latitude": 45.670163979104,
        "longitude": -111.20122467127236
      },
      "transactions": [],
      "location": {
        "address1": "135 Hideaway Dr",
        "address2": null,
        "address3": null,
        "city": "Bozeman",
        "zip_code": "59718",
        "country": "US",
        "state": "MT",
        "display_address": [
          "135 Hideaway Dr",
          "Bozeman, MT 59718"
        ]
      },
      "phone": "+14065828087",
      "display_phone": "(406) 582-8087",
      "distance": 12803.45690760256,
      "business_hours": [
        {
          "open": [
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1900",
              "day": 0
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1900",
              "day": 1
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1900",
              "day": 2
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1900",
              "day": 3
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1900",
              "day": 4
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1900",
              "day": 5
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "1900",
              "day": 6
            }
          ],
          "hours_type": "REGULAR",
          "is_open_now": false
        }
      ],
      "attributes": {
        "business_temp_closed": null,
        "waitlist_reservation": null
      }
    },
    {
      "id": "-ptg2G77LLieMj67UDCPcw",
      "alias": "star-m-barn-belgrade",
      "name": "Star M Barn",
      "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/_hzZC2YyhHZiNQvKA9eq-g/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/star-m-barn-belgrade?adjust_creative=LsCMMv2BdrTe1m9YBXem0A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=LsCMMv2BdrTe1m9YBXem0A",
      "review_count": 6,
      "categories": [
        {
          "alias": "venues",
          "title": "Venues & Event Spaces"
        }
      ],
      "rating": 5.0,
      "coordinates": {
        "latitude": 45.79361312089621,
        "longitude": -111.08231331574646
      },
      "transactions": [],
      "location": {
        "address1": "4186 Stimson Ln",
        "address2": null,
        "address3": "",
        "city": "Belgrade",
        "zip_code": "59714",
        "country": "US",
        "state": "MT",
        "display_address": [
          "4186 Stimson Ln",
          "Belgrade, MT 59714"
        ]
      },
      "phone": "+17754500589",
      "display_phone": "(775) 450-0589",
      "distance": 13402.062672396878,
      "business_hours": [
        {
          "open": [
            {
              "is_overnight": true,
              "start": "0000",
              "end": "0000",
              "day": 0
            },
            {
              "is_overnight": true,
              "start": "0000",
              "end": "0000",
              "day": 1
            },
            {
              "is_overnight": true,
              "start": "0000",
              "end": "0000",
              "day": 2
            },
            {
              "is_overnight": true,
              "start": "0000",
              "end": "0000",
              "day": 3
            },
            {
              "is_overnight": true,
              "start": "0000",
              "end": "0000",
              "day": 4
            },
            {
              "is_overnight": true,
              "start": "0000",
              "end": "0000",
              "day": 5
            },
            {
              "is_overnight": true,
              "start": "0000",
              "end": "0000",
              "day": 6
            }
          ],
          "hours_type": "REGULAR",
          "is_open_now": true
        }
      ],
      "attributes": {
        "business_temp_closed": null,
        "waitlist_reservation": null
      }
    },
    {
      "id": "1-VTYCIKeOo-RFJPQyCQwg",
      "alias": "the-baxter-bozeman-2",
      "name": "The Baxter",
      "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/J8mZJbFDtNWpwPbc-hCIoQ/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/the-baxter-bozeman-2?adjust_creative=LsCMMv2BdrTe1m9YBXem0A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=LsCMMv2BdrTe1m9YBXem0A",
      "review_count": 3,
      "categories": [
        {
          "alias": "venues",
          "title": "Venues & Event Spaces"
        },
        {
          "alias": "hotels",
          "title": "Hotels"
        }
      ],
      "rating": 3.7,
      "coordinates": {
        "latitude": 45.67957463803434,
        "longitude": -111.03882543550964
      },
      "transactions": [],
      "location": {
        "address1": "105 W Main St",
        "address2": null,
        "address3": null,
        "city": "Bozeman",
        "zip_code": "59715",
        "country": "US",
        "state": "MT",
        "display_address": [
          "105 W Main St",
          "Bozeman, MT 59715"
        ]
      },
      "phone": "+14065821000",
      "display_phone": "(406) 582-1000",
      "distance": 294.45920130936986,
      "business_hours": [],
      "attributes": {
        "business_temp_closed": null,
        "waitlist_reservation": null
      }
    },
    {
      "id": "UMFpt1zMuc2KGi5FzVPiGA",
      "alias": "hart-ranch-weddings-and-events-bozeman",
      "name": "Hart Ranch Weddings & Events",
      "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/nFIp7x7SuqI3keHuXke0qA/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/hart-ranch-weddings-and-events-bozeman?adjust_creative=LsCMMv2BdrTe1m9YBXem0A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=LsCMMv2BdrTe1m9YBXem0A",
      "review_count": 6,
      "categories": [
        {
          "alias": "venues",
          "title": "Venues & Event Spaces"
        }
      ],
      "rating": 3.0,
      "coordinates": {
        "latitude": 45.556739,
        "longitude": -111.199707
      },
      "transactions": [],
      "location": {
        "address1": "73800 Gallatin Rd",
        "address2": null,
        "address3": "",
        "city": "Bozeman",
        "zip_code": "59730",
        "country": "US",
        "state": "MT",
        "display_address": [
          "73800 Gallatin Rd",
          "Bozeman, MT 59730"
        ]
      },
      "phone": "+14067631001",
      "display_phone": "(406) 763-1001",
      "distance": 18575.47951283427,
      "business_hours": [
        {
          "open": [
            {
              "is_overnight": true,
              "start": "0000",
              "end": "0000",
              "day": 0
            },
            {
              "is_overnight": true,
              "start": "0000",
              "end": "0000",
              "day": 1
            },
            {
              "is_overnight": true,
              "start": "0000",
              "end": "0000",
              "day": 2
            },
            {
              "is_overnight": true,
              "start": "0000",
              "end": "0000",
              "day": 3
            },
            {
              "is_overnight": true,
              "start": "0000",
              "end": "0000",
              "day": 4
            },
            {
              "is_overnight": true,
              "start": "0000",
              "end": "0000",
              "day": 5
            },
            {
              "is_overnight": true,
              "start": "0000",
              "end": "0000",
              "day": 6
            }
          ],
          "hours_type": "REGULAR",
          "is_open_now": true
        }
      ],
      "attributes": {
        "business_temp_closed": null,
        "waitlist_reservation": null
      }
    },
    {
      "id": "vEszUp6fYoYrqucsj4xk9Q",
      "alias": "bozeman-event-space-bozeman",
      "name": "Bozeman Event Space",
      "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/11x_YdLl3HtiP4yNlSAsdA/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/bozeman-event-space-bozeman?adjust_creative=LsCMMv2BdrTe1m9YBXem0A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=LsCMMv2BdrTe1m9YBXem0A",
      "review_count": 1,
      "categories": [
        {
          "alias": "venues",
          "title": "Venues & Event Spaces"
        }
      ],
      "rating": 2.0,
      "coordinates": {
        "latitude": 45.67893,
        "longitude": -111.03679
      },
      "transactions": [],
      "location": {
        "address1": "14 S Tracy",
        "address2": null,
        "address3": "",
        "city": "Bozeman",
        "zip_code": "59715",
        "country": "US",
        "state": "MT",
        "display_address": [
          "14 S Tracy",
          "Bozeman, MT 59715"
        ]
      },
      "phone": "+14065874322",
      "display_phone": "(406) 587-4322",
      "distance": 179.0796339334942,
      "business_hours": [
        {
          "open": [
            {
              "is_overnight": false,
              "start": "0700",
              "end": "0000",
              "day": 0
            },
            {
              "is_overnight": false,
              "start": "0700",
              "end": "0000",
              "day": 1
            },
            {
              "is_overnight": false,
              "start": "0700",
              "end": "0000",
              "day": 2
            },
            {
              "is_overnight": false,
              "start": "0700",
              "end": "0000",
              "day": 3
            },
            {
              "is_overnight": false,
              "start": "0700",
              "end": "0000",
              "day": 4
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "0000",
              "day": 5
            },
            {
              "is_overnight": false,
              "start": "0900",
              "end": "0000",
              "day": 6
            }
          ],
          "hours_type": "REGULAR",
          "is_open_now": true
        }
      ],
      "attributes": {
        "business_temp_closed": null,
        "waitlist_reservation": null
      }
    }
  ],
  "total": 52,
  "region": {
    "center": {
      "longitude": -111.03675842285156,
      "latitude": 45.67735496387867
    }
  }
}