export const projects = [
    {
        title: 'VegEvents',
        categories: 'Logo Design, Website Design, Website Development, Speed Optimization',
        stack: 'WordPress, Bootstrap 3, Google Maps API',
        keyFeatures: [
            { description: 'Weekly email newsletter that sent a custom list of events to 6,000+ subscribers based on their latitude/longitude and other newsletter settings.' },
            { description: 'Custom PHP-powered administrative interface to import new events weekly from a list of over 500 third-party event sources and remove canceled events.' },
            { description: 'Custom WordPress plugin to manage event import sources and enable custom filtering and tagging of events as they are imported.' },
            { description: 'Custom WordPress theme with advanced logic to open events in modal windows, add events to third-party calendars, and share events links.' },
            { description: 'Custom JavaScript bookmarklet to copy Facebook event details into the VegEvents submission form.' }
        ],
        screenshot: '/images/portfolio_vegevents.png'
    },
    {
        title: 'VegMealDelivery',
        categories: 'Logo Design, Website Design, Website Development',
        stack: 'WordPress, Bootstrap 4, Google Maps API, TomTom Maps SDK',
        keyFeatures: [
            { description: 'Heavily customized FacetWP WordPress plugin implementation for dynamic search filtering.' },
            { description: 'Custom FacetWP Facet type for searching for meal delivery services that deliver to a visitor&apos;s address or have a pickup location near them. Each meal delivery service CPT is connected to one or more delivery locations (Taxonomy terms). Locations can be a street address, city, state, or country.' },
            { description: 'Meal delivery service pickup locations are displayed using the TomTom Maps SDK which is a low-cost alternative to the Google Maps API.' },
            { description: 'Custom WordPress theme that modifies a custom post type’s New/Edit form.' }
        ],
        screenshot: '/images/portfolio_vegmealdelivery.png'
    },
    {
        title: 'VegMovies',
        categories: 'Logo Design, Website Design, Website Development',
        stack: 'WordPress, Bootstrap 4, iTunes Search API, OMDb API',
        keyFeatures: [
            { description: 'Customized FacetWP WordPress plugin implementation for dynamic search filtering.' },
            { 
                description: 'Custom WordPress plugin that modifies a custom post type’s New and Edit form to:',
                children: [
                    { description: 'Import details from the omdbapi.com RESTful API, including descriptions and movie posters. The movie posters then get stored as the post&apos;s featured image.' },
                    { description: 'Insert various helper links and buttons needed to assist personnel with generating movie listings.' }
                ]
            },
            { description: 'Custom PHP code to display different versions of a listing with stream and purchase links based on the visitor’s country.' },
            { description: 'Custom WordPress theme using Bootstrap 4 and an image slider.' }
        ],
        screenshot: '/images/portfolio_vegmovies.png',
        liveSite: 'https://www.vegmovies.com/'
    },
    {
        title: 'Plant Based Information',
        categories: 'Logo Design, Website Design, Website Development',
        stack: 'WordPress, Bootstrap 4, iTunes REST API',
        keyFeatures: [
            {
                description: 'Custom code that modifies a custom post type’s New and Edit form to:',
                children: [
                    { description: 'Import Podcast details from the iTunes RESTful API, including the show title and image. The show image then gets stored as the post&apos;s featured image.' },
                    { description: 'Insert buttons to assist personnel with generating new podcast listings.' }
                ]
            },
            { description: 'REST-powered search (on the homepage and in page headers) that searches for guides matching keywords entered. Keywords are compared to the guide’s titles and assigned tags.' },
            { description: 'FacetWP-powered <a href="https://www.plantbasedinformation.com/guide/how-do-i-find-a-vegan-podcast/" target="_blank" class="text-buttons underline">Podcast page</a> with a WP cron job that periodically updates the “Latest Episode” date based on the iTunes REST API.' },
            { description: 'Custom WordPress theme originally modified from a freely-available theme.' }
        ],
        screenshot: '/images/portfolio_plantbasedinformation.png',
        liveSite: 'https://www.plantbasedinformation.com/'
    }
]