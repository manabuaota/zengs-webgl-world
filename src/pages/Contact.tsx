import { useState } from 'react';
import { motion } from 'framer-motion';
import { WebGLBackground } from '@/components/WebGLBackground';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'm80684825@gmail.com',
      href: 'mailto:m80684825@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/olegzeng',
      href: 'https://github.com/olegzeng'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/olegzeng',
      href: 'https://linkedin.com/in/olegzeng'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <WebGLBackground />
      
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-glow mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Let's discuss your next project or collaboration opportunity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Card className="card-glass p-8 border border-primary/20 h-full">
                <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-4 bg-gradient-card rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="text-foreground group-hover:text-primary-glow transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="mt-8 p-6 bg-gradient-card rounded-lg border border-primary/20"
                >
                  <h3 className="text-lg font-semibold text-primary-glow mb-3">
                    Available for
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Full-stack development projects</li>
                    <li>• AI/ML integration and consultation</li>
                    <li>• WebGL and 3D web experiences</li>
                    <li>• Blockchain and Web3 development</li>
                  </ul>
                </motion.div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Card className="card-glass p-8 border border-primary/20">
                <h2 className="text-3xl font-bold text-primary mb-8">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-card-glass border-primary/20 focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-card-glass border-primary/20 focus:border-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-card-glass border-primary/20 focus:border-primary"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-card-glass border-primary/20 focus:border-primary resize-none"
                      placeholder="Tell me about your project or what you'd like to discuss..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 py-3"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;