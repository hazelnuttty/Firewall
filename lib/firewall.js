module.exports = function (settings) {
  return (req, res, next) => {
    const agent = (req.headers['user-agent'] || '').toLowerCase();
    const blocked = settings.blockAgents || [];

    if (blocked.some(keyword => agent.includes(keyword))) {
      if (settings.logBlocked) {
        console.warn(`🚫 Blocked agent: ${agent}`);
      }
      return res.redirect(settings.verifyPath);
    }

    next();
  };
};
