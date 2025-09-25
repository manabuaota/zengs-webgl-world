import { motion } from 'framer-motion';
import { WebGLBackground } from '@/components/WebGLBackground';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award } from 'lucide-react';

const workHistory = {
  'Front End': [
    { name: 'VerifiedFirst', url: 'https://www.verifiedfirst.com' },
    { name: 'Neiman Marcus', url: 'https://www.neimanmarcus.com' },
    { name: 'Time Out', url: 'https://www.timeout.com' },
    { name: 'BabyCenter', url: 'https://www.babycenter.com' },
  ],
  'WebGL': [
    { name: 'iPhone Ecommerce 3D', url: 'https://ecommerce-iphone-react.vercel.app/' },
    { name: 'Sneaker Store 3D', url: 'https://loja-tenis-3d.vercel.app/' },
    { name: '3D Yemen Experience', url: 'https://3dymen-mohdbasurra.vercel.app/' },
    { name: '3D Whisky Shop', url: 'https://3dwhiskyshop.com/products/cmcydj78k0002lf5f881i8h0q-yamazaki' },
  ],
  'AI': [
    { name: 'StoryFile', url: 'https://storyfile.com/' },
    { name: 'ChatDoc', url: 'https://chatdoc.com/' },
    { name: 'Gannia', url: 'https://gannia.top/' },
    { name: 'LLM Alchemist', url: 'https://llm-alchemist.vercel.app/' },
  ],
  'Blockchain': [
    { name: 'Bilaxy', url: 'https://bilaxy.com/' },
    { name: 'Coinsbit', url: 'https://coinsbit.io/' },
    { name: 'Hotbit', url: 'https://www.hotbit.io/' },
    { name: 'Paybito', url: 'https://www.paybito.com' },
  ],
};

const techStack = {
  'Front End': ['React', 'Next.js', 'Nuxt.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'HTML'],
  'Backend': ['Node.js', 'Nest.js', 'Express', 'Python', 'Django', 'Rust'],
  'Database': ['MongoDB', 'PostgreSQL', 'Supabase', 'Firebase'],
};

const Work = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <WebGLBackground />
      
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-glow mb-4">Work & Experience</h1>
            <p className="text-xl text-muted-foreground">Projects, certifications, and technical expertise</p>
          </motion.div>

          {/* Work History */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16"
          >
            <Card className="card-glass p-8 border border-primary/20">
              <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <ExternalLink className="w-8 h-8" />
                Work History
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(workHistory).map(([category, projects], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + categoryIndex * 0.1, duration: 0.6 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold text-primary-glow border-b border-primary/30 pb-2">
                      {category}
                    </h3>
                    <div className="space-y-3">
                      {projects.map((project, index) => (
                        <motion.a
                          key={project.name}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + categoryIndex * 0.1 + index * 0.05, duration: 0.4 }}
                          whileHover={{ scale: 1.02 }}
                          className="block"
                        >
                          <div className="bg-gradient-card p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 group">
                            <div className="flex items-center justify-between">
                              <span className="text-foreground group-hover:text-primary-glow transition-colors">
                                {project.name}
                              </span>
                              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-16"
          >
            <Card className="card-glass p-8 border border-primary/20">
              <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <Award className="w-8 h-8" />
                Certificates
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.keys(techStack).map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-card p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-primary group">
                      <Award className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-primary-glow transition-colors" />
                      <h3 className="text-lg font-semibold text-primary-glow mb-3">{category}</h3>
                      <div className="text-sm text-muted-foreground">
                        Advanced Certification
                      </div>
                      <div className="text-xs text-primary mt-2">
                        Verified Professional
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Card className="card-glass p-8 border border-primary/20">
              <h2 className="text-3xl font-bold text-primary mb-8">Tech Stack</h2>
              
              <div className="space-y-8">
                {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + categoryIndex * 0.1, duration: 0.6 }}
                  >
                    <h3 className="text-xl font-semibold text-primary-glow mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-3">
                      {technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + categoryIndex * 0.1 + index * 0.05, duration: 0.4 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg text-sm font-medium shadow-primary hover:shadow-glow transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
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

export default Work;