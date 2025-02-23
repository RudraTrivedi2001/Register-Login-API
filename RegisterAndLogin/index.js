import express from "express";
import { connectDB } from "./database/db.config.js";

import router from "./routes/route.js";

const app = express();
const port = process.env.PORT || 3000; // Use environment port or default 3000

app.use(express.json()); // Middleware to parse JSON

// Connect to database before starting the server
connectDB();

app.use("/api/v1/user",router); //local middleware

// ✅ REGISTER API
// app.post("/api/v1/user/register", async (req, res) => {
//   try {
//     const { firstname, lastname, email, password } = req.body;

//     // ✅ Check if required fields are missing
//     if (!firstname || !email || !password) {
//       console.error("⚠️ Missing Fields:", req.body);
//       return res.status(400).json({
//         success: false,
//         message: "Please fill all required fields",
//       });
//     }

//     // ✅ Check if email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       console.error(`⚠️ Email ${email} already exists`);
//       return res.status(400).json({
//         success: false,
//         message: "Email already registered",
//       });
//     }

//     // ✅ Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 12);

//     // ✅ Create a new user
//     const newUser = await User.create({
//       firstname,
//       lastname,
//       email,
//       password: hashedPassword,
//     });

//     console.log("✅ User Created Successfully:", newUser);

//     return res.status(201).json({
//       success: true,
//       message: "Account created successfully",
//       userId: newUser._id,
//     });
//   } catch (error) {
//     console.error("❌ Error in Registration:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// });
app.use("/api/v1/user",router);
// ✅ LOGIN API
//app.post("/api/v1/user/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // ✅ Validate input fields
//     if (!email || !password) {
//       console.error("⚠️ Missing Email or Password:", req.body);
//       return res.status(400).json({
//         success: false,
//         message: "Please fill all required fields",
//       });
//     }

//     // ✅ Find user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       console.error(`❌ No user found with email: ${email}`);
//       return res.status(404).json({
//         success: false,
//         message: "Invalid email or password",
//       });
//     }

//     // ✅ Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       console.error(`❌ Incorrect password for email: ${email}`);
//       return res.status(401).json({
//         success: false,
//         message: "Invalid email or password",
//       });
//     }

//     console.log(`✅ User Logged In: ${user.email}`);
//     return res.status(200).json({
//       success: true,
//       message: "Login successful",
//     });
//   } catch (error) {
//     console.error("❌ Error in Login:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// });
//search by email
app.use("/api/v1/user", router)
// app.get("/api/v1/allUsers/:email", async(req, res)=>{
// const UserEmail = req.params.email;
// const user = await User.findOne({email : UserEmail});
// if(!user){
// return res.status(400).json({message : "No user found ",
//   success : false
//  })
// }

// return res.status(200).json({message : "User found",
//   success : true,
//   userID : user._id
//  })
 
// });


//delete 
app.use("/api/v1/user", router)
// app.delete("/api/v1/user/delete/:id", async(req, res)=>{
// const Uid = req.params.id;
// const isDeleated = await  User.findByIdAndDelete(Uid);
// if(!isDeleated){
// return res.status(400).json({
//   message : "The id that you have provide is wrong",
//   success : false
// })
// }

// return res.status(200).json({message : "Deleted successfully",
//   success : true
// })

// })
//to get all users
app.use("/api/v1", router)
// app.get("/api/v1/allUsers", async (req,res)=>{
//   try {
//     const users = await User.find({});
    
//     if (users.length === 0) {  // Check if users array is empty
//       return res.status(404).json({
//         message: "No users found",
//         success: false,
//       });
//     }

//     return res.status(200).json({
//       message: "Users retrieved successfully",
//       success: true,
//       users, // Send the users data
//     });

// }catch (error) {
//   console.error("Error occurred:", error);
//   return res.status(500).json({
//     message: "Internal server error",
//     success: false,
//     error: error.message,
//   });
// }
// });

// Start Server
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
