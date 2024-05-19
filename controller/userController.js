import User from "../model/userModel.js"

export const getUsers = async (req, res)=>{
    try{
        const users = await User.find();
        if (users.length == 0) return res.status(404).json("Users not found!");
        res.status(200).json(users);
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error!"})
    }
}

export const createUser = async (req, res) =>{
    try{
        const userData = new User(req.body);
        const {email} = userData;
        const userExists = await User.findOne({email});
        if (userExists) return res.status(400).json("User already exists!");
        const savedUser = await userData.save();
        res.status(200).json(savedUser);
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error"})
    }
}