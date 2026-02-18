// middleware/dummyAuth.js
export const dummyAuth = (req, res, next) => {
  req.user = {
    id: "12345",
    name: "Aarav Shah",
    email: "aarav.shah@example.com",
    role: "Full Stack Developer",
  };
  next();
};
