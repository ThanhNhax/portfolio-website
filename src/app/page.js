import HeroSection from './components/HeroSection';
import AboutSection from './components/about/AboutSection';
import EmailSection from './components/email/EmailSection';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar.jsx';
import ProjectsSection from './components/projects/ProjectsSection';
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <NavBar />
      <div className='container mt-24 mx-auto p-4'>
        <HeroSection />
        <AboutSection />
        {/* <ProjectsSection /> */}
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
  s;
}
