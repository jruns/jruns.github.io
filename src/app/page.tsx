export default function Home() {
  return (
    <div className="md:container flex flex-col mx-4 sm:mx-8 md:mx-auto">
        <div className="flex flex-col sm:flex-row justify-items-start sm:items-center mb-6">
            <div>
                <p className="text-4xl font-londrina">Jason Schramm</p>
                <p className="text-lg font-poppins font-semibold">Web Developer</p>
            </div>
        </div>
        <div className="js-btn-row flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 sm:flex-nowrap sm:space-x-4 mb-6">
            <a href="./assets/JasonSchramm_Resume.pdf" className="flex flex-1 bg-buttons text-white font-poppins font-semibold tracking-wider rounded-full ring-4 ring-blue-100 py-3 px-6" target="_blank">
                <span className="flex-grow text-center self-center">Resume</span>
            </a>
            <a href="https://www.linkedin.com/in/j-schramm/" className="flex flex-1 bg-buttons text-white font-poppins font-semibold tracking-wider rounded-full ring-4 ring-blue-100 py-3 px-6" target="_blank">
                <span className="flex-grow text-center self-center">LinkedIn</span>
            </a>
            <a href="https://github.com/jruns" className="flex flex-1 bg-buttons text-white font-poppins font-semibold tracking-wider rounded-full ring-4 ring-blue-100 py-3 px-6" target="_blank">
                <span className="flex-grow text-center self-center">GitHub</span>
            </a>
            <a href="mailto:jason.schramm@gmail.com" className="flex flex-1 bg-buttons text-white font-poppins font-semibold tracking-wider rounded-full ring-4 ring-blue-100 py-3 px-6" target="_blank">
                 <span className="flex-grow text-center self-center">Email Jason</span>
            </a>
        </div>
        <div className="mt-3 mb-6 flex flex-col">
            <h1 className="text-3xl font-semibold tracking-wider font-poppins border-b-2 border-gray-400">About Me</h1>
            <p className="mt-4 font-poppins text-base">I have been working as a full-time Senior Web Developer on a team maintaining and developing over 40 large-scale WordPress sites, while also creating and managing my own WordPress websites on the side. I am actively looking for a new opportunity at an organization making positive changes in the world.</p>  
            <p className="mt-4 sm:mt-2 font-poppins text-base">I am experienced with WordPress, PHP, JavaScript, TypeScript, jQuery, React, Vue.js, HTML5, CSS/SASS, Bootstrap, TailwindCSS, Restful APIs, the WP REST API, WordPress hooks and filters, Gutenberg Blocks, developing custom WP plugins and themes with external API integrations, SQL, MySQL and optimizing database queries, DNS and server administration, site monitoring, caching, CDNs (Cloudflare and Fastly), Core Web Vitals monitoring, performance optimization, accessibility, responsive design, Figma, Google Tag Manager, Google Analytics, SEO, Git, Docker, GitHub Actions, CI/CD tools, Node.js, Composer, local environments, and much more. I also have experience with Drupal, Next.js, and Python.</p>
            <p className="mt-4 sm:mt-2 font-poppins text-base">I have led the design, development, and optimization of applications and WordPress sites. I&apos;m as comfortable working on the front-end as I am on the back-end, and I enjoy working on and architecting a variety of solutions for complex problems. I have the uncanny ability to scan through lines of legacy code to understand it quickly and know where additions or changes need to be made. I have a curiosity and love of learning that helps me to learn whatever is needed, and a perfectionism that drives me to continually improve my work and find more efficient techniques that will scale.</p>          
            <p className="mt-4 sm:mt-2 font-poppins text-base">I have extensive experience managing and troubleshooting dozens of websites and technical infrastructure, and coordinating with DevOps and various department stakeholders. I am skilled in planning projects and coordinating tasks, and I actually enjoy writing and maintaining technical and end-user documentation. I regularly collaborate with stakeholders to refine requirements and translate them into technical solutions. I also have experience evaluating tools and providing recommendations based on needs and budgets. I enjoy distilling the benefits and drawbacks of technology to inform decisions and guide others through the use of those tools. And I enjoy mentoring junior developers and performing code reviews.</p>
            <p className="mt-4 sm:mt-2 font-poppins text-lg font-semibold">Like what you&apos;ve read so far? <a href="mailto:jason.schramm@gmail.com" className="text-buttons underline" target="_blank">Email Me</a></p>
        </div>
        <div className="mt-7">
            <h1 className="text-3xl font-semibold tracking-wider font-poppins border-b-2 border-gray-400">Projects</h1>
        </div>
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
        
        <footer className="flex flex-grow mt-12">
            <a href="mailto:jason.schramm@gmail.com" className="flex flex-1 bg-buttons text-white font-poppins font-semibold tracking-wider rounded-full ring-4 ring-blue-100 py-2" target="_blank">
                <span className="flex-grow text-center">Email Jason</span>
            </a>
        </footer>
    </div>
  );
}
