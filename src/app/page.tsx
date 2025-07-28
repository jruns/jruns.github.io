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
              <Link href="/projects" className="tab inactiveTab ml-4" scroll={false}>Projects</Link>
            </div>
            <div className="mt-4">
              <p className="font-poppins text-base">I am focused on finding work at an organization making positive changes in the world in the social or environmental impact space. I have been working as a full-time Senior Web Developer on a team maintaining and developing over 40 large-scale WordPress sites, while also creating and managing my own websites on the side. Now I want to put that experience to work for the planet.</p>
              <p className="mt-4 sm:mt-2 font-poppins text-base">I have led the development and optimization of WordPress sites and JavaScript-based applications. I&apos;m as comfortable working on the front-end as I am on the back-end, and I enjoy working on and architecting a variety of solutions for complex problems. I also have a curiosity and love of learning that helps me to learn whatever is needed, and I continually improve my work by finding more efficient techniques that will scale. And I enjoy using my knowledge to mentor junior developers and perform beneficial code reviews.</p>
              <p className="mt-4 sm:mt-2 font-poppins text-base">I am skilled in planning projects and coordinating tasks. And I regularly collaborate with stakeholders to refine requirements and translate them into technical solutions. I also have extensive experience with ongoing maintenance and troubleshooting of several high-profile websites, working cross-departmentally with DevOps and other key stakeholders. And I have experience evaluating tools and providing recommendations based on needs and budgets, and guiding others through the use of those tools.</p>
              <p className="mt-4 sm:mt-2 font-poppins text-lg font-semibold">Like what you&apos;ve read so far? <a href="mailto:jason.schramm@gmail.com" className="text-buttons underline" target="_blank">Email Me</a></p>
            </div>
        </div>
        <Footer />
    </div>
  );
}
