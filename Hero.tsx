import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Ethical Hacker & CTF Developer";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Matrix-like background animation */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="matrix-animation"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="text-green-400 text-lg font-mono">$ whoami</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Securing the Digital <span className="text-green-400">Frontier</span>
          </h1>
          
          <div className="h-8 mb-8">
            <h2 className="text-xl md:text-2xl font-mono text-gray-300">
              {text}<span className={`text-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </h2>
          </div>
          
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Cybersecurity enthusiast from Nepal, specializing in CTF competitions and development.
            I find vulnerabilities before the bad actors do, focusing on real-world penetration testing
            and secure application development.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-mono rounded transition-colors duration-300"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent border border-green-600 text-green-400 hover:bg-green-900/30 font-mono rounded transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
          
          <div className="mt-16 animate-bounce">
            <a href="#skills" className="text-gray-500 hover:text-green-400 transition-colors duration-300">
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
