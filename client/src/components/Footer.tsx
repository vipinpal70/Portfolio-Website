const Footer = () => {
  return (
    <footer className="py-8 bg-dark-900 dark:bg-dark-950 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="flex items-center space-x-2 text-white">
              <span className="text-2xl font-bold font-sans">
                <span className="text-primary-500">V</span>P
              </span>
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-dark-400">&copy; {new Date().getFullYear()} Vipin Pal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
