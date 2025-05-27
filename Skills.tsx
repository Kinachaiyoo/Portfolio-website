import { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('offensive');
  
  const skills = {
    offensive: [
      { name: 'Penetration Testing', level: 90 },
      { name: 'Vulnerability Assessment', level: 85 },
      { name: 'Social Engineering', level: 80 },
      { name: 'Exploit Development', level: 75 },
      { name: 'Web Application Security', level: 95 },
    ],
    defensive: [
      { name: 'Incident Response', level: 85 },
      { name: 'Security Monitoring', level: 80 },
      { name: 'Threat Intelligence', level: 75 },
      { name: 'Security Architecture', level: 70 },
      { name: 'Digital Forensics', level: 85 },
    ],
    technical: [
      { name: 'Python', level: 90 },
      { name: 'Bash Scripting', level: 85 },
      { name: 'Network Protocols', level: 90 },
      { name: 'Linux Administration', level: 85 },
      { name: 'Cloud Security (AWS/Azure)', level: 75 },
    ],
  };

  const achievements = [
    'Active CTF Player',
    'CTF Challenge Developer',
    'Security Researcher',
    'Penetration Testing Enthusiast',
  ];

  const tools = [
    'Metasploit', 'Burp Suite', 'Wireshark', 'Nmap', 
    'Kali Linux', 'OWASP ZAP', 'Hashcat', 'Ghidra'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My expertise spans both offensive and defensive security, backed by industry certifications and hands-on experience with cutting-edge tools.
          </p>
        </div>

        {/* Skills Tabs */}
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm font-mono">
              {['offensive', 'defensive', 'technical'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 text-sm border ${
                    activeTab === tab
                      ? 'bg-green-600 text-white border-green-700'
                      : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
                  } ${tab === 'offensive' ? 'rounded-l-md' : ''} ${
                    tab === 'technical' ? 'rounded-r-md' : ''
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Security
                </button>
              ))}
            </div>
          </div>

          {/* Skills Bars */}
          <div className="max-w-3xl mx-auto">
            {skills[activeTab as keyof typeof skills].map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300 font-mono">{skill.name}</span>
                  <span className="text-gray-400 font-mono">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Tools */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4 font-mono">
              <span className="text-green-400">$</span> Achievements
            </h3>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4 font-mono">
              <span className="text-green-400">$</span> Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
