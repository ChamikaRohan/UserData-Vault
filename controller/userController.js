import User from "../model/userModel.js"

export const fetch = async (req, res)=>{
    try{
        res.json("Hello world!")
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
        res.status(200).json(savedUser)
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error"})
    }
}