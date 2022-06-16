const Person = require("../models/Person");

exports.personPost = async (req, res) => {
    const { name, salary, approved } = req.body;
    if (!name) {
        return res.status(422).json({ message: "O nome é obrigatorio." });
    }
    if (!salary) {
        return res.status(422).json({ message: "O salario é obrigatorio." });
    }
    if (!approved) {
        return res.status(422).json({ message: "O 'approved' é obrigatorio." });
    }

    const person = {
        name,
        salary,
        approved,
    };
    try {
        await Person.create(person);
        return res
            .status(201)
            .json({ message: "Usuario inserido com sucesso." });
    } catch (error) {
        return res.status(500).json({ error: "erro de qualquer coisa", error });
    }
};

exports.getPersonById = async (req, res) => {
    try {
        const people = await Person.find();
        return res.status(200).json({ people });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "erro de qualquer coisa" });
    }
};

exports.getPerson = async (req, res) => {
    const id = req.params.id;
    try {
        const person = await Person.findById(id);
        if (!person) {
            res.status(422).json({ error: "nenhuma pessoa encontrada" });
            return;
        }
        return res.status(200).json(person);
    } catch (error) {
        return res.status(500).json({ error: "erro de qualquer coisa" });
    }
};

exports.patchPerson = async (req, res) => {
    const id = req.params.id;
    const { name, salary, approved } = req.body;
    const person = {
        name,
        salary,
        approved,
    };
    try {
        const updatedPerson = await Person.findByIdAndUpdate(id, person);
        if (updatedPerson.matched === 0) {
            res.status(422).json({ msg: "Usuario nao encontrado" });
            return;
        }
        return res.status(200).json(person);
    } catch (error) {
        return res.status(500).json({ error: "erro de qualquer coisa" });
    }
};

exports.deletePerson = async (req, res) => {
    const id = req.params.id;
    const person = await Person.findById(id);
    if (!person) {
        res.status(422).json({ error: "nenhuma pessoa encontrada" });
        return;
    }
    try {
        await Person.findByIdAndDelete(id);
        res.status(200).json({ msg: "Usuario removido com sucesso." });
    } catch (error) {
        return res.status(500).json({ error: "erro de qualquer coisa" });
    }
};
