import express from 'express'
import {getUsers, createUser} from '../controller/userController.js'

const route = express.Router();

route.get("/get-users", getUsers)
route.post("/create-user", createUser)

export default route;