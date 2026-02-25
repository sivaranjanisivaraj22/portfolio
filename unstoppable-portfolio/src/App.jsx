import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import profile from "./assets/profile.jpeg";

export default function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hbpx37l",
        "template_zva11yq",
        form.current,
        "Jf4fuNOLiPFoBwiJj"
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.log(error);
        }
      );
  };

  return (
    <div className="bg-[#0a0f1c] text-white scroll-smooth">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed w-full bg-[#0a0f1c]/80 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-cyan-400 tracking-wide">
            Sivaranjani
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#home" className="hover:text-cyan-400">Home</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#education" className="hover:text-cyan-400">Education</a>
            <a href="#experience" className="hover:text-cyan-400">Experience</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-40">
        <motion.img
          src={profile}
          alt="profile"
          className="w-56 h-56 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        <h1 className="text-4xl md:text-6xl font-bold mt-10 leading-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Sivaranjani Sivaraj
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          <Typewriter
            words={[
              "Full Stack Developer",
              "Generative AI Enthusiast",
              "Prompt Engineer",
              
            ]}
            loop
            cursor
          />
        </p>

        <p className="mt-6 max-w-2xl text-gray-400 leading-relaxed">
          Passionate about building scalable web applications and AI-powered systems using modern technologies.
        </p>
      </section>

      {/* ================= ABOUT ================= */}
      <Section id="about" title="About Me">
        <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed space-y-6">
          <p>
          I am a B.Tech Information Technology student from Anna University
          with strong technical expertise in Full Stack Development and
          Generative AI.
           </p>

          <p>
          I specialize in developing modern web applications using MERN stack,
          integrating LLM-based systems, and building scalable backend
          architectures.
          </p>

           <p>
          I am highly focused on writing optimized, clean, and maintainable
          code while continuously learning advanced system design and AI
          technologies.
           </p>
        </div>
      </Section>

      {/* ================= PROJECTS ================= */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-10">

          <ProjectCard
            title="AI Coding Assistant"
            img="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
            desc="Developed using Starcoder2 & HuggingFace for AI-based Python code generation."
          />

          <ProjectCard
            title="NLP Chatbot"
            img="https://images.unsplash.com/photo-1526379095098-d400fd0bf935"
            desc="Conversational chatbot implementing NLP preprocessing and similarity logic."
          />

          <ProjectCard
            title="Email Extraction Automation"
            img="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            desc="Regex-based automation system for structured data extraction."
          />

          <ProjectCard
            title="Smart Waste Management"
            img="https://images.unsplash.com/photo-1508780709619-79562169bc64"
            desc="IoT integrated cloud monitoring system for waste optimization."
          />

          <ProjectCard
            title="Hangman Game"
            img="https://images.unsplash.com/photo-1611996575749-79a3a250f948"
            desc="Python console-based logic game demonstrating problem-solving skills."
          />

        </div>
      </Section>

      {/* ================= SKILLS ================= */}
      <Section id="skills" title="Technical Skills">
        <SkillBar skill="Python" level="90%" />
        <SkillBar skill="React.js" level="85%" />
        <SkillBar skill="Node.js" level="80%" />
        <SkillBar skill="Express.js" level="75%" />
        <SkillBar skill="MySQL" level="75%" />
        <SkillBar skill="Generative AI" level="85%" />
        <SkillBar skill="LLM Development" level="80%" />
        <SkillBar skill="Prompt Engineering" level="90%" />
      </Section>

      {/* ================= EDUCATION ================= */}
      <Section id="education" title="Education">
        <div className="border-l-4 border-cyan-400 pl-8 space-y-12">
          <TimelineItem
            title="Bachelor of Technology – Information Technology"
            detail="Anna University | 2022 – 2026 | 86%"
            extra="Focused on Full Stack Development, AI Systems, Database Design."
          />
          <TimelineItem
            title="Higher Secondary Education"
            detail="75%"
            extra="Strong academic foundation in Mathematics & Computer Science."
          />
          <TimelineItem
            title="Secondary School"
            detail="89%"
            extra="Consistent academic excellence."
          />
        </div>
      </Section>

      {/* ================= EXPERIENCE ================= */}
      <Section id="experience" title="Professional Experience">
        <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-xl">
          <h3 className="text-2xl font-semibold text-cyan-400">
            Software Development Intern (1–2 Months)
          </h3>
          <ul className="mt-6 space-y-4 text-gray-300 list-disc list-inside">
            <li>Developed AI Coding Assistant using Starcoder2.</li>
            <li>Built NLP Chatbot using text preprocessing techniques.</li>
            <li>Created Email Extraction Automation tool using Regex.</li>
            <li>Designed Python-based Hangman Game.</li>
            <li>Optimized prompts and improved response efficiency.</li>
          </ul>
        </div>
      </Section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 px-6 flex justify-center">
        <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10">
          <h2 className="text-4xl font-bold text-center mb-10">Get In Touch</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 font-semibold"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-500 border-t border-white/10 mt-20">
        © 2026 Sivaranjani Sivaraj. All Rights Reserved.
      </footer>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="space-y-10">{children}</div>
    </section>
  );
}

function ProjectCard({ title, img, desc }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-xl">
      <img src={img} className="h-56 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
        <p className="mt-3 text-gray-400">{desc}</p>
      </div>
    </motion.div>
  );
}

function SkillBar({ skill, level }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span>{skill}</span>
        <span>{level}</span>
      </div>
      <div className="w-full bg-gray-700 h-3 rounded-full">
        <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-3 rounded-full" style={{ width: level }}></div>
      </div>
    </div>
  );
}

function TimelineItem({ title, detail, extra }) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400">{detail}</p>
      <p className="text-gray-500">{extra}</p>
    </div>
  );
}