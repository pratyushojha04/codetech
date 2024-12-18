Here’s a comprehensive list of models you’ll need to create for your LMS project:  

---

### **1. User Model**  
Handles common fields for both teachers and students.  
**Fields:**  
- `id` (unique identifier, auto-generated).  
- `name` (string).  
- `email` (string, unique).  
- `password` (hashed password).  
- `role` (enum: `'teacher'` or `'student'`).  
- `profilePicture` (URL for profile picture, optional).  
- `bio` (string, optional).  
- `createdAt` (timestamp).  
- `updatedAt` (timestamp).  

---

### **2. Course Model**  
Stores details about courses created by teachers.  
**Fields:**  
- `id` (unique identifier, auto-generated).  
- `title` (string).  
- `description` (string).  
- `thumbnail` (URL for course thumbnail).  
- `price` (decimal, `0` for free courses).  
- `teacherId` (reference to `User`, for teacher who created the course).  
- `createdAt` (timestamp).  
- `updatedAt` (timestamp).  

---

### **3. Lesson Model**  
Each course will have multiple lessons.  
**Fields:**  
- `id` (unique identifier, auto-generated).  
- `title` (string).  
- `content` (string or URL for video content).  
- `courseId` (reference to `Course`).  
- `order` (integer, to arrange lessons).  
- `createdAt` (timestamp).  
- `updatedAt` (timestamp).  

---

### **4. Enrollment Model**  
Tracks which students are enrolled in which courses.  
**Fields:**  
- `id` (unique identifier, auto-generated).  
- `studentId` (reference to `User`, for enrolled student).  
- `courseId` (reference to `Course`).  
- `enrollmentDate` (timestamp).  
- `progress` (integer, percentage of course completed).  
- `completed` (boolean, whether the course is completed).  

---

### **5. Quiz Model**  
For quizzes associated with a course.  
**Fields:**  
- `id` (unique identifier, auto-generated).  
- `title` (string).  
- `courseId` (reference to `Course`).  
- `createdAt` (timestamp).  
- `updatedAt` (timestamp).  

---

### **6. QuizQuestion Model**  
Stores individual questions for a quiz.  
**Fields:**  
- `id` (unique identifier, auto-generated).  
- `quizId` (reference to `Quiz`).  
- `questionText` (string).  
- `options` (array of strings).  
- `correctAnswer` (string).  

---

### **7. Payment Model**  
Tracks payments made by students.  
**Fields:**  
- `id` (unique identifier, auto-generated).  
- `studentId` (reference to `User`).  
- `courseId` (reference to `Course`).  
- `amount` (decimal, amount paid).  
- `paymentDate` (timestamp).  
- `transactionId` (string, from the payment gateway).  
- `status` (enum: `'successful'`, `'failed'`, `'pending'`).  

---

### **8. Review Model**  
Stores reviews and ratings given by students for courses.  
**Fields:**  
- `id` (unique identifier, auto-generated).  
- `courseId` (reference to `Course`).  
- `studentId` (reference to `User`).  
- `rating` (integer, e.g., 1 to 5).  
- `comment` (string, optional).  
- `createdAt` (timestamp).  

---

### **9. Announcement Model**  
For announcements made by teachers for their courses.  
**Fields:**  
- `id` (unique identifier, auto-generated).  
- `courseId` (reference to `Course`).  
- `title` (string).  
- `content` (string).  
- `createdAt` (timestamp).  

---

### **10. Earnings Model**  
Tracks teacher earnings from their courses.  
**Fields:**  
- `id` (unique identifier, auto-generated).  
- `teacherId` (reference to `User`).  
- `courseId` (reference to `Course`).  
- `amount` (decimal).  
- `date` (timestamp).  

---

### **11. Notification Model** (Optional)  
For sending notifications to users.  
**Fields:**  
- `id` (unique identifier, auto-generated).  
- `userId` (reference to `User`).  
- `title` (string).  
- `content` (string).  
- `read` (boolean, whether the notification has been read).  
- `createdAt` (timestamp).  

---

Would you like help setting up the schema for any of these models?




# in short

User Model
Fields: id, name, email, password, role, profilePicture, bio, createdAt, updatedAt
Course Model
Fields: id, title, description, thumbnail, price, teacherId, createdAt, updatedAt
Lesson Model
Fields: id, title, content, courseId, order, createdAt, updatedAt
Enrollment Model
Fields: id, studentId, courseId, enrollmentDate, progress, completed
Quiz Model
Fields: id, title, courseId, createdAt, updatedAt
QuizQuestion Model
Fields: id, quizId, questionText, options, correctAnswer
Payment Model
Fields: id, studentId, courseId, amount, paymentDate, transactionId, status
Review Model
Fields: id, courseId, studentId, rating, comment, createdAt
Announcement Model
Fields: id, courseId, title, content, createdAt
Earnings Model
Fields: id, teacherId, courseId, amount, date
Notification Model (Optional)
Fields: id, userId, title, content, read, createdAt