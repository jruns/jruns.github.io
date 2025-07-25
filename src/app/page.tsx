import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
        <Header />
        <div className="flex flex-col">
            <div className="flex text-xl font-semibold tracking-wider font-poppins border-b-2 border-gray-400">
              <div className="tab activeTab">About Me</div>
              <Link href="/projects" className="tab inactiveTab ml-4">Projects</Link>
            </div>
            <div className="mt-4">
              <p className="font-poppins text-base">I am focused on finding work at an organization making positive changes in the world in the social or environmental impact space. I have been working as a full-time Senior Web Developer on a team maintaining and developing over 40 large-scale WordPress sites, while also creating and managing my own websites on the side.</p>
              <p className="mt-4 sm:mt-2 font-poppins text-base">I have led the development and optimization of applications and WordPress sites. And I have a personal interest in improving performance and security, regularly suggesting and implementing opportunities to improve both. I&apos;m as comfortable working on the front-end as I am on the back-end, and I enjoy working on and architecting a variety of solutions for complex problems. I have the uncanny ability to scan through lines of legacy code to understand it quickly and know where additions or changes need to be made. I also have a curiosity and love of learning that helps me to learn whatever is needed, and a perfectionism that drives me to continually improve my work and find more efficient techniques that will scale.</p>      
              <p className="mt-4 sm:mt-2 font-poppins text-base">I am experienced with WordPress, PHP, JavaScript, TypeScript, jQuery, React, Vue.js, HTML5, CSS/SASS, Bootstrap, TailwindCSS, Restful APIs, the WP REST API, WordPress hooks and filters, Gutenberg Blocks, developing custom WP plugins and themes with external API integrations, SQL, MySQL and optimizing database queries, DNS and server administration, site monitoring, caching, CDNs (Cloudflare and Fastly), Core Web Vitals monitoring, performance optimization, accessibility, responsive design, Figma, Google Tag Manager, Google Analytics, SEO, Git, Docker, GitHub Actions, CI/CD tools, Node.js, Composer, local environments, and much more. And I have experience with Drupal, Next.js, and Python.</p>    
              <p className="mt-4 sm:mt-2 font-poppins text-base">I also have extensive experience with ongoing maintenance and troubleshooting of several high-profile websites, working cross-departmentally with DevOps and other key stakeholders. I am skilled in planning projects and coordinating tasks, and I actually enjoy writing and maintaining technical and end-user documentation. And I regularly collaborate with stakeholders to refine requirements and translate them into technical solutions. I also have experience evaluating tools and providing recommendations based on needs and budgets, and I enjoy guiding others through the use of tools. And I enjoy mentoring junior developers and performing code reviews.</p>
              <p className="mt-4 sm:mt-2 font-poppins text-lg font-semibold">Like what you&apos;ve read so far? <a href="mailto:jason.schramm@gmail.com" className="text-buttons underline" target="_blank">Email Me</a></p>
            </div>
        </div>
        <Footer />
    </div>
  );
}
