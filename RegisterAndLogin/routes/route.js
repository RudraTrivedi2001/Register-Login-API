import express, { Router } from 'express';
import { userregister } from '../controllers/user.controller.js';
import { userlogin } from '../controllers/user.controller.js';
import { SearchUserbyEmail } from '../controllers/user.controller.js';
import { deleteById } from '../controllers/user.controller.js';
import { getallUsers } from '../controllers/user.controller.js';
const router = express.Router();


router.route("/register").post(userregister);
router.route("/login").post(userlogin);
router.route("/searchByEmail/:email").get(SearchUserbyEmail);
router.route("/delete/:id").delete(deleteById);
router.route("/allUsers").get(getallUsers);
export default router;