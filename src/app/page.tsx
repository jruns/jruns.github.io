import Header from "@/components/Header";
import Footer from "@/components/Footer";

const externalLinks = [
	{ href: '/assets/JasonSchramm_Resume.pdf', label: 'Resume' },
	{ href: 'https://github.com/jruns', label: 'GitHub' },
	{ href: 'https://www.linkedin.com/in/j-schramm/', label: 'LinkedIn' },
	{ href: 'mailto:jason.schramm@gmail.com', label: 'Email Me' }
];

export default function Home() {
  return (
    <div>
        <Header />
        <div className="flex flex-col">
            <div className="mt-4">
              <p className="font-montserrat text-base tracking-wide">I am a <span className="highlights">Senior Full Stack Web Developer</span> looking for opportunities in the <span className="highlights">social or environmental impact</span> space at an organization <span className="highlights">making positive changes</span> in the world.</p>
            </div>
            <div className="flex flex-row flex-wrap gap-x-4 gap-y-5 mt-8 mb-9">
              { externalLinks.map( (link, i) => (
                <a 
                  key={i}
                  href={link.href}
                  className="bg-buttons text-stone-400 font-medium tracking-wider rounded-full ring-2 ring-stone-600 px-4 hover:text-stone-300"
                  target="_blank">{link.label}</a>
              ))}
            </div>
        </div>
        <Footer />
    </div>
  );
}
