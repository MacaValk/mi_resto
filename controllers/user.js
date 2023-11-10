// crud basico de users 
const { User } = require("../database/models");



    const getUsers = async (req, res) => {
        try {
            console.log("entramos a la funcion?")
        const users = await User.findAll()
            console.log("aca estan los usuarios", users)
            res.status(200).send(users)
        } catch (error) {
            res.status(400).json({
                error: error.message,
            });
        }
        
    }

    const postUsers =  async (req, res) => {
      const newUser =  req.params(firstName, lastName, employId)
    }

    const updateUsers = (req, res) => {

    }

    module.exports = {
        getUsers,
        postUsers,
        updateUsers
    }