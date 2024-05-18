import express from 'express'
import {fetch, createUser} from '../controller/userController.js'

const route = express.Router();

route.get("/fetch", fetch)
route.post("/create-user", createUser)

export default route;