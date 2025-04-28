const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
      <a
        href="https://www.linkedin.com/in/vipinpal70/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-200 dark:bg-dark-800 group-hover:bg-primary-600/10 dark:group-hover:bg-primary-600/20 transition-colors">
          <i className="fab fa-linkedin-in"></i>
        </div>
        <span className="font-medium">LinkedIn</span>
      </a>
      <a
        href="https://github.com/vipinpal70"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-200 dark:bg-dark-800 group-hover:bg-primary-600/10 dark:group-hover:bg-primary-600/20 transition-colors">
          <i className="fab fa-github"></i>
        </div>
        <span className="font-medium">GitHub</span>
      </a>
      <a
        href="mailto:vipinpal7060@gmail.com"
        className="flex items-center space-x-2 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-200 dark:bg-dark-800 group-hover:bg-primary-600/10 dark:group-hover:bg-primary-600/20 transition-colors">
          <i className="fas fa-envelope"></i>
        </div>
        <span className="font-medium">Email</span>
      </a>
      <a
        href="https://leetcode.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-200 dark:bg-dark-800 group-hover:bg-primary-600/10 dark:group-hover:bg-primary-600/20 transition-colors">
          <i className="fas fa-code"></i>
        </div>
        <span className="font-medium">LeetCode</span>
      </a>
    </div>
  );
};

export default SocialLinks;
