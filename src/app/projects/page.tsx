import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <div>
        <Header />
        <div className="flex flex-col">
            <h1 className="text-3xl font-semibold tracking-wider font-poppins border-b-2 border-gray-400">Projects</h1>
            <div className="mt-4 flex flex-col space-y-4 font-poppins">
                <div className="flex flex-col-reverse sm:flex-row border-2 border-neutral-200 dark:border-neutral-600 rounded-lg hover:border-neutral-400 dark:hover:border-neutral-400 p-2 sm:space-x-4">
                    <div className="sm:w-3/5">
                        <h2 className="text-xl font-semibold">VegEvents</h2>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-0.5 mb-3">Logo Design, Website Design, Website Development, Speed Optimization, WordPress, Bootstrap 3, Google Maps API</p>
                        <h3 className="text-base font-semibold mb-1">Unique features:</h3>
                        <ul className="list-disc list-outside pl-4.5 text-sm">
                            <li>Weekly email newsletter that sent a custom list of events to 6,000+ subscribers based on their latitude/longitude and other newsletter settings.</li>
                            <li>Custom PHP-powered administrative interface to import new events weekly from a list of over 500 third-party event sources and remove canceled events.</li>
                            <li>Custom WordPress plugin to manage event import sources and enable custom filtering and tagging of events as they are imported.</li>
                            <li>Custom WordPress theme with advanced logic to open events in modal windows, add events to third-party calendars, and share events links.</li>
                            <li>Custom JavaScript bookmarklet to copy Facebook event details into the VegEvents submission form.</li>
                        </ul>
                    </div>
                    <div className="h-36 sm:h-auto sm:w-2/5 mb-4 sm:mb-0 bg-no-repeat bg-cover" style={{backgroundImage: "url('./images/portfolio_vegevents.png')"}} aria-hidden="true"></div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row border-2 border-neutral-200 dark:border-neutral-600 rounded-lg hover:border-neutral-400 dark:hover:border-neutral-400 p-2 sm:space-x-4">
                    <div className="sm:w-3/5">
                        <h2 className="text-xl font-semibold">VegMealDelivery</h2>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-0.5 mb-3">Logo Design, Website Design, Website Development, WordPress, Bootstrap 4, Google Maps API, TomTom Maps SDK</p>
                        <h3 className="text-base font-semibold mb-1">Unique features:</h3>
                        <ul className="list-disc list-outside pl-4.5 text-sm">
                            <li>Heavily customized FacetWP WordPress plugin implementation for dynamic search filtering.</li>
                            <li>Custom FacetWP Facet type for searching for meal delivery services that deliver to a visitor&apos;s address or have a pickup location near them. Each meal delivery service CPT is connected to one or more delivery locations (Taxonomy terms). Locations can be a street address, city, state, or country.</li>
                            <li>Meal delivery service pickup locations are displayed using the TomTom Maps SDK which is a low-cost alternative to the Google Maps API.</li>
                            <li>Custom WordPress theme that modifies a custom post type’s New/Edit form.</li>
                        </ul>
                    </div>
                    <div className="h-36 sm:h-auto sm:w-2/5 mb-4 sm:mb-0 bg-no-repeat bg-cover" style={{backgroundImage: "url('./images/portfolio_vegmealdelivery.png')"}} aria-hidden="true"></div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row border-2 border-neutral-200 dark:border-neutral-600 rounded-lg hover:border-neutral-400 dark:hover:border-neutral-400 p-2 sm:space-x-4">
                    <div className="sm:w-3/5">
                        <h2 className="text-xl font-semibold">VegMovies</h2>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-0.5 mb-3">Logo Design, Website Design, Website Development, WordPress, Bootstrap 4, iTunes Search API, OMDb API</p>
                        <h3 className="text-base font-semibold mb-1">Unique features:</h3>
                        <ul className="list-disc list-outside pl-4.5 text-sm">
                            <li>Customized FacetWP WordPress plugin implementation for dynamic search filtering.</li>
                            <li>Custom WordPress plugin that modifies a custom post type’s New and Edit form to:
                                <ul className="list-disc list-outside pl-4.5">
                                    <li>Import details from the omdbapi.com RESTful API, including descriptions and movie posters. The movie posters then get stored as the post&apos;s featured image.</li>
                                    <li>Insert various helper links and buttons needed to assist personnel with generating movie listings.</li>
                                </ul>
                            </li>
                            <li>Custom PHP code to display different versions of a listing with stream and purchase links based on the visitor’s country.</li>
                            <li>Custom WordPress theme using Bootstrap 4 and an image slider.</li>
                        </ul>
                        <div className="flex pt-4">
                            <a href="https://www.vegmovies.com/" className="bg-buttons text-white font-semibold tracking-widest rounded-sm ring-2 ring-blue-100 py-1 px-4 w-full sm:w-auto text-center sm:text-left" target="_blank" title="VegMovies Live Site">View Live Site</a>
                        </div>
                    </div>
                    <div className="h-36 sm:h-auto sm:w-2/5 mb-4 sm:mb-0 bg-no-repeat bg-cover" style={{backgroundImage: "url('./images/portfolio_vegmovies.png')"}} aria-hidden="true"></div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row border-2 border-neutral-200 dark:border-neutral-600 rounded-lg hover:border-neutral-400 dark:hover:border-neutral-400 p-2 sm:space-x-4">
                    <div className="sm:w-3/5">
                        <h2 className="text-xl font-semibold">Plant Based Information (formerly VegResources)</h2>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-0.5 mb-3">Logo Design, Website Design, Website Development, WordPress, Bootstrap 4, iTunes REST API</p>
                        <h3 className="text-base font-semibold mb-1">Unique features:</h3>
                        <ul className="list-disc list-outside pl-4.5 text-sm">
                            <li>Custom code that modifies a custom post type’s New and Edit form to:
                            <ul className="list-disc list-outside pl-4.5">
                                <li>Import Podcast details from the iTunes RESTful API, including the show title and image. The show image then gets stored as the post&apos;s featured image.</li>
                                <li>Insert buttons to assist personnel with generating new podcast listings.</li>
                            </ul>
                            </li>
                            <li>REST-powered search (on the homepage and in page headers) that searches for guides matching keywords entered. Keywords are compared to the guide’s titles and assigned tags.</li>
                            <li>FacetWP-powered <a href="https://www.plantbasedinformation.com/guide/how-do-i-find-a-vegan-podcast/" target="_blank" className="text-buttons underline">Podcast page</a> with a WP cron job that periodically updates the “Latest Episode” date based on the iTunes REST API.</li>
                            <li>Custom WordPress theme originally modified from a freely-available theme.</li>
                        </ul>
                        <div className="flex pt-4">
                            <a href="https://www.plantbasedinformation.com/" className="bg-buttons text-white font-semibold tracking-widest rounded-sm ring-2 ring-blue-100 py-1 px-4 w-full sm:w-auto text-center sm:text-left" target="_blank" title="VegResources Live Site">View Live Site</a>
                        </div>
                    </div>
                    <div className="h-36 sm:h-auto sm:w-2/5 mb-4 sm:mb-0 bg-no-repeat bg-cover" style={{backgroundImage: "url('./images/portfolio_plantbasedinformation.png')"}} aria-hidden="true"></div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}
