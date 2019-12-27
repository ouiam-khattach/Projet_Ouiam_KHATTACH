const User = require("../database/users")
module.exports = {
    fetchAll: async function (req, res) {
        res.json(await User.find({}))
    },
    insertOne: function (req, res) {
        const { name, gender,dob,news,email} = req.body
        const newUSer = new User({ name, gender,dob,news,email})
        newUSer.save()
            .then((newuser) => {
                console.log(newuser)
                res.json(newUSer);
            })
            .catch(err => {
                console.error(err)
                res.status(400).json({ error: err });
            })
    },
    findOne: async function (req, res) {
        const { id } = req.params
        try{
            const user = await User.findOne({ _id: id })
            if (user) {
                res.json(user)
                
            }
            else throw {error:"not Found"}
        }catch(err){
            res.status(404).json(err)
        }
    },
    update: async function (req, res) {
        const { id } = req.params
        try {
            const user = await User.findOne({ _id: id })
            if (user) {
                //update
                res.json(user)

            }
            else throw { error: "not Found" }
        } catch (err) {
            res.status(404).json(err)
        }
    },
    delete: async function (req, res) {
        const { id } = req.params
        try {
            const user = await User.findOne({ _id: id })
            if (user) {
                //delete
                res.json(user)

            }
            else throw { error: "not Found" }
        } catch (err) {
            res.status(404).json(err)
        }
    }
}