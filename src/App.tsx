import React from 'react';
import { 
  Code2, 
  Megaphone, 
  BarChart3, 
  Globe2, 
  Users2, 
  MessageSquareMore,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">Syntho</div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-indigo-200">Services</a>
            <a href="#about" className="hover:text-indigo-200">About</a>
            <a href="#work" className="hover:text-indigo-200">Work</a>
            <a href="#testimonials" className="hover:text-indigo-200">Testimonials</a>
            <a href="#contact" className="hover:text-indigo-200">Contact</a>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Transform Your Digital Presence</h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">We help businesses grow through innovative digital solutions, strategic marketing, and creative excellence.</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition duration-300">
            Get Started
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Premium Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <ServiceCard
              icon={<Code2 className="w-12 h-12 text-indigo-600" />}
              title="Website Development"
              description="Custom-built, responsive websites that drive results and enhance user experience."
            />
            <ServiceCard
              icon={<Megaphone className="w-12 h-12 text-indigo-600" />}
              title="Digital Marketing"
              description="Strategic marketing campaigns that increase visibility and drive qualified leads."
            />
            <ServiceCard
              icon={<BarChart3 className="w-12 h-12 text-indigo-600" />}
              title="Brand Promotion"
              description="Comprehensive brand strategies that build recognition and trust."
            />
            <ServiceCard
              icon={<Globe2 className="w-12 h-12 text-indigo-600" />}
              title="Social Media Marketing"
              description="Engaging social media campaigns that connect with your target audience."
            />
            <ServiceCard
              icon={<Users2 className="w-12 h-12 text-indigo-600" />}
              title="Community Management"
              description="Active community engagement that builds lasting relationships."
            />
            <ServiceCard
              icon={<MessageSquareMore className="w-12 h-12 text-indigo-600" />}
              title="Content Strategy"
              description="Compelling content that tells your story and drives engagement."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Syntho?</h2>
              <p className="text-gray-600 mb-8">With over a decade of experience in digital transformation, we've helped hundreds of businesses achieve their goals through innovative solutions and strategic thinking.</p>
              <div className="space-y-4">
                <Feature text="Industry-leading expertise and proven results" />
                <Feature text="Dedicated team of certified professionals" />
                <Feature text="Custom solutions tailored to your needs" />
                <Feature text="24/7 support and maintenance" />
                <Feature text="Data-driven strategies and analytics" />
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat number="500+" text="Clients Served" />
            <Stat number="1000+" text="Projects Completed" />
            <Stat number="50+" text="Team Experts" />
            <Stat number="98%" text="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Work Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep 
              number="01"
              title="Discovery"
              description="We analyze your needs and create a comprehensive strategy."
            />
            <ProcessStep 
              number="02"
              title="Planning"
              description="Detailed project planning and resource allocation."
            />
            <ProcessStep 
              number="03"
              title="Execution"
              description="Implementation of strategies with continuous monitoring."
            />
            <ProcessStep 
              number="04"
              title="Delivery"
              description="Final delivery with performance analysis and optimization."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              text="Syntho transformed our online presence completely. Their team's expertise and dedication are unmatched."
              author="Sarah Johnson"
              position="CEO, TechStart"
            />
            <Testimonial
              text="The results we've seen since working with Syntho have exceeded our expectations. Highly recommended!"
              author="Michael Chen"
              position="Marketing Director, GrowthCo"
            />
            <Testimonial
              text="Professional, responsive, and results-driven. Syntho has been crucial to our digital success."
              author="Emma Williams"
              position="Founder, InnovateX"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <ContactInfo icon={<Mail />} text="hello@syntho.com" />
                <ContactInfo icon={<Phone />} text="+1 (555) 123-4567" />
                <ContactInfo icon={<MapPin />} text="123 Business Ave, Suite 100, New York, NY 10001" />
              </div>
              <div className="flex space-x-4 mt-8">
                <SocialLink icon={<Facebook />} href="#" />
                <SocialLink icon={<Twitter />} href="#" />
                <SocialLink icon={<Instagram />} href="#" />
                <SocialLink icon={<Linkedin />} href="#" />
              </div>
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Syntho</h3>
              <p className="text-gray-400">Transforming businesses through digital excellence.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Website Development</li>
                <li>Digital Marketing</li>
                <li>Brand Promotion</li>
                <li>Social Media Marketing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Work</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Syntho. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component for service cards
function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Component for features
function Feature({ text }) {
  return (
    <div className="flex items-center space-x-3">
      <CheckCircle2 className="w-6 h-6 text-indigo-600" />
      <span>{text}</span>
    </div>
  );
}

// Component for stats
function Stat({ number, text }) {
  return (
    <div>
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-indigo-200">{text}</div>
    </div>
  );
}

// Component for process steps
function ProcessStep({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-indigo-600 mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Component for testimonials
function Testimonial({ text, author, position }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <p className="text-gray-600 mb-6">"{text}"</p>
      <div>
        <div className="font-semibold">{author}</div>
        <div className="text-gray-500">{position}</div>
      </div>
    </div>
  );
}

// Component for contact info
function ContactInfo({ icon, text }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-indigo-600">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

// Component for social links
function SocialLink({ icon, href }) {
  return (
    <a
      href={href}
      className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition duration-300"
    >
      {icon}
    </a>
  );
}

export default App;