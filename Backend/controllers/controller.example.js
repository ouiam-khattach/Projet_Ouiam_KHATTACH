const Example = require("../database/examples")
module.exports = {
    fetchAll: async function (req, res) {
        res.json(await Example.find({}))
    },
    insertOne: function (req, res) {
        const { name, email } = req.body
        const newExample = new Example({ name, email })
        newExample.save()
            .then((newexample) => {
                console.log(newexample)
                res.json(newExample);
            })
            .catch(err => {
                console.error(err)
                res.status(400).json({ error: err });
            })
    },
    findOne: async function (req, res) {
        const { id } = req.params
        try {
            const example = await Example.findOne({ _id: id })
            if (example) {
                res.json(example)

            }
            else throw { error: "not Found" }
        } catch (err) {
            res.status(404).json(err)
        }
    },
    update: async function (req, res) {
        const { id } = req.params
        try {
            const example = await Example.findOne({ _id: id })
            if (example) {
                //update
                res.json(example)

            }
            else throw { error: "not Found" }
        } catch (err) {
            res.status(404).json(err)
        }
    },
    delete: async function (req, res) {
        const { id } = req.params
        try {
            const example = await Example.findOne({ _id: id })
            if (example) {
                //delete
                res.json(example)

            }
            else throw { error: "not Found" }
        } catch (err) {
            res.status(404).json(err)
        }
    }
}