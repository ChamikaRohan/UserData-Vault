import express from 'express'
import {getUsers, createUser, updateUser} from '../controller/userController.js'

const route = express.Router();

route.get("/get-users", getUsers)
route.post("/create-user", createUser)
route.put("/update-user/:id", updateUser)

export default route;