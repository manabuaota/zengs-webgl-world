import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navItems = [
  { path: '/', label: 'About' },
  { path: '/work', label: 'Work' },
  { path: '/contact', label: 'Contact' },
  { path: '/chat', label: 'Chat' },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 p-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="card-glass rounded-2xl p-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary">
              OLEG ZENG
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={location.pathname === item.path ? "default" : "ghost"}
                    className={`relative transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-primary text-primary-foreground shadow-primary'
                        : 'text-foreground hover:text-primary hover:bg-card-hover'
                    }`}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary rounded-md -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};