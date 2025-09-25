import { motion } from 'framer-motion';
import { WebGLBackground } from '@/components/WebGLBackground';
import { Card } from '@/components/ui/card';

const techStack = [
  'Next.js', 'React.js', 'TypeScript', 'JavaScript', 'Nest.js', 'Node.js',
  'Python', 'LLM', 'Three.js', 'babylon.js', 'Solana', 'Web3.js',
  'Rust', 'Nuxt.js', 'Figma', 'HTML', 'Tailwind'
];

const roles = [
  'Full stack',
  'Front End',
  'Back End',
  'AI developer'
];

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <WebGLBackground />
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://videos.pexels.com/video-files/4576668/4576668-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-20"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <span className="text-glow">OLEG ZENG</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {roles.map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  className="text-xl md:text-2xl text-primary font-semibold px-4 py-2 bg-card-glass rounded-lg border border-primary/20"
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="text-2xl text-primary-glow font-medium"
            >
              AI | Full-stack developer
            </motion.p>
          </motion.div>

          {/* Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-16"
          >
            <Card className="card-glass p-8 md:p-12 border border-primary/20">
              <h2 className="text-3xl font-bold text-primary mb-6">Introduction</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                An AI | Full-stack engineer is a software engineer who combines full-stack development skills 
                (front-end + back-end) with AI/ML expertise. They can build end-to-end applications that not 
                only handle user interfaces, databases, and APIs, but also integrate AI models, data pipelines, 
                and intelligent features.
              </p>
            </Card>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Card className="card-glass p-8 md:p-12 border border-primary/20">
              <h2 className="text-3xl font-bold text-primary mb-8">Tech Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.05, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: 'var(--shadow-primary)'
                    }}
                    className="bg-gradient-card p-4 rounded-lg border border-primary/20 text-center hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-sm font-medium text-foreground">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;