const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const fullToken = req.headers.authorization;

    // تحقق من وجود الـ Authorization Header
    if (!fullToken) {
      return res.status(401).send("Access denied. No token provided.");
    }

    // استخراج التوكن
    const token = fullToken.split(" ")[1];
    if (!token) {
      return res.status(401).send("Access denied. Invalid token format.");
    }

    // التحقق من صحة التوكن
    const decodedToken = jwt.verify(token, "secret");
    req.user = decodedToken; // تعيين بيانات المستخدم في الطلب
    next(); // متابعة العملية إلى الميدل وير التالي
  } catch (error) {
    console.error("Token verification error:", error.message);
    return res.status(400).send("Invalid token.");
  }
};
