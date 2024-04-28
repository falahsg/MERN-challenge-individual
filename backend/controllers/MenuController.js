import Menu from "../models/MenuModels.js";

export const getMenus = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getMenuById = async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id);
        res.json(menu);
    } catch (error) {
        res.status(404).json({status : "Data tidak ditemukan", message: error.message});
    }
}

export const saveMenu = async (req, res) => {
    const menu = new Menu(req.body);
    try {
        const insertedMenu = await menu.save();
        res.status(201).json({ message: "Menu successfully added" });
        console.log(insertedMenu);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateMenu = async (req, res) => {
    try {
        const updatedMenu = await Menu.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json({ message: "Menu successfully modified" });
        console.log(updatedMenu);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteMenu = async (req, res) => {
    try {
        const deletedMenu = await Menu.deleteOne({_id:req.params.id});
        res.status(200).json({message : "Menu succesfully deleted"});
        console.log(deletedMenu);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}