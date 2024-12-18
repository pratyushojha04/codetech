const fs = require("fs");
const path = require("path");

const folders = [
  "src/config",
  "src/controllers",
  "src/models",
  "src/routes",
  "src/middlewares",
  "src/utils",
  "src/validators",
];

const files = [
  "src/config/db.js",
  "src/config/env.js",
  "src/controllers/authController.js",
  "src/controllers/userController.js",
  "src/controllers/courseController.js",
  "src/controllers/paymentController.js",
  "src/controllers/quizController.js",
  "src/models/User.js",
  "src/models/Course.js",
  "src/models/Lesson.js",
  "src/models/Enrollment.js",
  "src/models/Quiz.js",
  "src/models/Payment.js",
  "src/models/Review.js",
  "src/routes/authRoutes.js",
  "src/routes/userRoutes.js",
  "src/routes/courseRoutes.js",
  "src/routes/paymentRoutes.js",
  "src/routes/quizRoutes.js",
  "src/middlewares/authMiddleware.js",
  "src/middlewares/errorMiddleware.js",
  "src/middlewares/validationMiddleware.js",
  "src/utils/jwtHelper.js",
  "src/utils/emailHelper.js",
  "src/utils/paymentHelper.js",
  "src/validators/authValidator.js",
  "src/validators/courseValidator.js",
  "src/app.js",
  "src/server.js",
  ".env",
  ".gitignore",
  "package.json",
  "README.md",
];

function createFoldersAndFiles() {
  try {
    folders.forEach((folder) => {
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
        console.log(`Created folder: ${folder}`);
      }
    });

    files.forEach((file) => {
      if (!fs.existsSync(file)) {
        fs.writeFileSync(file, "", { flag: "wx" });
        console.log(`Created file: ${file}`);
      }
    });

    console.log("\nFolder structure generated successfully!");
  } catch (error) {
    console.error("Error creating folder structure:", error.message);
  }
}

createFoldersAndFiles();
