const User = require("../Models/User")



async function handleUserExist(req,res){
    try {
        const users = await User.find(PhoneNumber);
        if(!PhoneNumber) return false;
        return res.json(users);
      } catch (error) {
        // Handle the error, e.g., send an error response
        return res.status(500).json({ error: "Internal Server Error" });
      }
};

module.exports = {
    handleUserExist
};