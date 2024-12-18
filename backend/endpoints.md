Here’s a comprehensive list of endpoints for your Learning Management System project, organized by functionality:

---

### **1. Authentication & Authorization**
#### **User Registration**
- `POST /api/auth/register`  
  Register a new user (teacher or student).

#### **User Login**
- `POST /api/auth/login`  
  Authenticate user and return a token.

#### **Logout**
- `POST /api/auth/logout`  
  Invalidate the current session or token.

#### **Forgot Password**
- `POST /api/auth/forgot-password`  
  Send a password reset link to the user’s email.

#### **Reset Password**
- `POST /api/auth/reset-password`  
  Reset the password using a token.

---

### **2. User Management**
#### **Get User Profile**
- `GET /api/users/me`  
  Fetch profile of the currently logged-in user.

#### **Update User Profile**
- `PUT /api/users/me`  
  Update profile details for the logged-in user (e.g., name, profile picture).

#### **Get Teacher Profile**
- `GET /api/users/:id`  
  Fetch public profile of a teacher by their ID.

---

### **3. Courses**
#### **Create Course** (Teacher Only)
- `POST /api/courses`  
  Add a new course (title, description, price, etc.).

#### **Get All Courses**
- `GET /api/courses`  
  Fetch all courses (with filters like category, price, etc.).

#### **Get Course Details**
- `GET /api/courses/:id`  
  Fetch details of a single course by its ID.

#### **Update Course** (Teacher Only)
- `PUT /api/courses/:id`  
  Update details of an existing course.

#### **Delete Course** (Teacher Only)
- `DELETE /api/courses/:id`  
  Remove a course.

---

### **4. Lessons**
#### **Add Lesson** (Teacher Only)
- `POST /api/courses/:courseId/lessons`  
  Add a lesson to a specific course.

#### **Get Lessons for a Course**
- `GET /api/courses/:courseId/lessons`  
  Fetch all lessons for a course.

#### **Get Lesson Details**
- `GET /api/lessons/:id`  
  Fetch details of a specific lesson.

#### **Update Lesson** (Teacher Only)
- `PUT /api/lessons/:id`  
  Update a specific lesson.

#### **Delete Lesson** (Teacher Only)
- `DELETE /api/lessons/:id`  
  Remove a specific lesson.

---

### **5. Enrollment**
#### **Enroll in a Course**
- `POST /api/enrollments`  
  Enroll a student in a course (after payment or free).

#### **Get Enrollments**
- `GET /api/enrollments`  
  Fetch all courses a student is enrolled in.

#### **Get Enrollment Progress**
- `GET /api/enrollments/:courseId`  
  Fetch progress for a specific enrolled course.

#### **Mark Lesson as Completed**
- `POST /api/enrollments/:courseId/lessons/:lessonId/complete`  
  Mark a specific lesson as completed.

---

### **6. Quizzes**
#### **Create Quiz** (Teacher Only)
- `POST /api/courses/:courseId/quizzes`  
  Add a new quiz to a course.

#### **Get Quizzes for a Course**
- `GET /api/courses/:courseId/quizzes`  
  Fetch all quizzes for a specific course.

#### **Get Quiz Details**
- `GET /api/quizzes/:id`  
  Fetch details of a specific quiz.

#### **Submit Quiz**
- `POST /api/quizzes/:id/submit`  
  Submit answers for a quiz.

#### **Get Quiz Results**
- `GET /api/quizzes/:id/results`  
  Fetch results of a submitted quiz.

---

### **7. Payments**
#### **Initiate Payment**
- `POST /api/payments`  
  Start a payment process for a course.

#### **Verify Payment**
- `POST /api/payments/verify`  
  Verify payment and enroll the student in the course.

#### **Get Payment History**
- `GET /api/payments`  
  Fetch all payments made by the logged-in user.

---

### **8. Reviews**
#### **Add Review**
- `POST /api/courses/:courseId/reviews`  
  Submit a review and rating for a course.

#### **Get Reviews for a Course**
- `GET /api/courses/:courseId/reviews`  
  Fetch all reviews for a specific course.

---

### **9. Announcements**
#### **Create Announcement** (Teacher Only)
- `POST /api/courses/:courseId/announcements`  
  Add a new announcement to a course.

#### **Get Announcements for a Course**
- `GET /api/courses/:courseId/announcements`  
  Fetch all announcements for a specific course.

#### **Delete Announcement** (Teacher Only)
- `DELETE /api/announcements/:id`  
  Remove a specific announcement.

---

### **10. Notifications**
#### **Get Notifications**
- `GET /api/notifications`  
  Fetch notifications for the logged-in user.

#### **Mark Notification as Read**
- `POST /api/notifications/:id/read`  
  Mark a specific notification as read.

---

### **11. Admin Panel (Optional)**
#### **Manage Users**  
- `GET /api/admin/users`  
  Fetch all users (students and teachers).  
- `DELETE /api/admin/users/:id`  
  Delete a user.

#### **Manage Courses**  
- `GET /api/admin/courses`  
  Fetch all courses.  
- `DELETE /api/admin/courses/:id`  
  Remove a course.

#### **View Revenue**  
- `GET /api/admin/revenue`  
  Fetch total revenue and earnings breakdown.

---

Would you like assistance implementing these endpoints?