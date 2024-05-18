export const fetch = async (req, res)=>{
    try{
        res.json("Hello world!")
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error!"})
    }
}