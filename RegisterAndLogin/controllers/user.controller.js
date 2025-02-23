import User from "../model/user.model.js";
import bcrypt from "bcrypt";

//register 
export const userregister = async(req,res) => {
   try {
  const { firstname, lastname, email, password } = req.body;

  // ✅ Check if required fields are missing
  if (!firstname || !email || !password) {
    console.error("⚠️ Missing Fields:", req.body);
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields",
    });
  }

  // ✅ Check if email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    console.error(`⚠️ Email ${email} already exists`);
    return res.status(400).json({
      success: false,
      message: "Email already registered",
    });
  }

  // ✅ Hash password before saving
  const hashedPassword = await bcrypt.hash(password, 12);

  // ✅ Create a new user
  const newUser = await User.create({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  console.log("✅ User Created Successfully:", newUser);

  return res.status(201).json({
    success: true,
    message: "Account created successfully",
    userId: newUser._id,
  });
} catch (error) {
  console.error("❌ Error in Registration:", error);
  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
}
}

//login
export const userlogin = async(req,res)=>{
  try {
    const { email, password } = req.body;

    // ✅ Validate input fields
    if (!email || !password) {
      console.error("⚠️ Missing Email or Password:", req.body);
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // ✅ Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.error(`❌ No user found with email: ${email}`);
      return res.status(404).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // ✅ Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.error(`❌ Incorrect password for email: ${email}`);
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    console.log(`✅ User Logged In: ${user.email}`);
    return res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error("❌ Error in Login:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

//searchbyname
export  const SearchUserbyEmail = async(req,res)=>{
  const UserEmail = req.params.email;
const user = await User.findOne({email : UserEmail});
if(!user){
return res.status(400).json({message : "No user found ",
  success : false
 })
}

return res.status(200).json({message : "User found",
  success : true,
  userID : user._id,
  user
 })
 
};

//deletebu id
export const deleteById = async(req,res)=>{
  const Uid = req.params.id;
  const isDeleated = await  User.findByIdAndDelete(Uid);
  if(!isDeleated){
  return res.status(400).json({
    message : "The id that you have provide is wrong",
    success : false
  })
  }
  
  return res.status(200).json({message : "Deleted successfully",
    success : true
  })
  
  };


//search all users

export const getallUsers = async(req,res)=>{
  try {
    const users = await User.find({});
    
    if (users.length === 0) {  // Check if users array is empty
      return res.status(404).json({
        message: "No users found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Users retrieved successfully",
      success: true,
      users, // Send the users data
    });

}catch (error) {
  console.error("Error occurred:", error);
  return res.status(500).json({
    message: "Internal server error",
    success: false,
    error: error.message,
  });
}
}