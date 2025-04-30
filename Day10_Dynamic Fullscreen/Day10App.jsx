import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Day10App.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Day10App = () => {
  const skills = ['JavaScript', 'React', 'CSS', 'Node.js'];
  const experiences = [
    { title: 'Frontend Developer', company: 'ABC Corp.', duration: 'Jan 2022 - Present' },
    { title: 'Web Developer Intern', company: 'XYZ Ltd.', duration: 'Jun 2021 - Dec 2021' }
  ];
  const socialLinks = [
    { platform: 'GitHub', url: 'https://github.com/Jani-shiv' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/shiv-jani/' },
  ];

  // Chart Data for Experience Growth or Progress
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Skill Progress',
        data: [10, 30, 40, 60, 70, 85, 100],
        borderColor: '#4e73df',
        backgroundColor: 'rgba(78, 115, 223, 0.2)',
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="profile-container">
      <motion.div
        className="profile-card"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="profile-header">
          <motion.img
            src="https://avatars.githubusercontent.com/u/153932136?v=4"
            alt="Profile"
            className="profile-pic"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Shiv Jani
          </motion.h1>
          <motion.p
            className="bio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Web Developer | React Enthusiast | Tech Lover | Open Source Contributor | Passionate about building user-friendly applications.
          </motion.p>
        </div>

        <motion.div
          className="skills-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h3>Skills</h3>
          <div className="skills">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="skill-badge"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.4 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="experience-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <h3>Experience</h3>
          <ul className="experience-list">
            {experiences.map((exp, index) => (
              <li key={index} className="experience-item">
                <h4>{exp.title}</h4>
                <p>{exp.company}</p>
                <span>{exp.duration}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="chart-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        >
          <h3>Skill Progress Chart</h3>
          <Line data={chartData} options={{ responsive: true }} />
        </motion.div>

        <motion.div
          className="socials-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.5 }}
        >
          <h3>Connect</h3>
          <div className="socials">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.1 }}
              >
                {link.platform}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Day10App;
// 