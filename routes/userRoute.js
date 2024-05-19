import express from 'express'
import {getUsers, createUser, updateUser, deleteUser} from '../controller/userController.js'

const route = express.Router();

route.get("/get-users", getUsers)
route.post("/create-user", createUser)
route.put("/update-user/:id", updateUser)
route.delete("/delete-user/:id", deleteUser)

export default route;