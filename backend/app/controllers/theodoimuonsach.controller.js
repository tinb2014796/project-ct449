const ApiError = require("../api-error");
const theoDoi = require("../models/theodoimuonsach.model");
const sach = require("../models/sach.model");

exports.create = async (req, res, next) => {
    const sach_data = await sach.findById(req.body.masach);
    if(sach_data.soquyen > 0){
        try {
            const soquyen_update = sach_data.soquyen - 1;
            const document = await theoDoi.create(req.body);
            await sach.updateOne({_id : req.body.masach}, {soquyen:soquyen_update})
            return res.send(document);
        } catch (error) {
            return next(
                new ApiError(500, "An error occurred while creating the contact")
            );
        }
    }
    else {
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
};

exports.findAll = async(req, res, next) => {
    let documents=[];
    
    try{
        const{name} = req.query;
        if(name){
            documents = await theoDoi.findByName(name);
        }
        else {
            documents = await theoDoi.find({})
        }
    } catch(error){
        return next(
            new ApiError(500, "An error occurred while retrieving contacts")
        );
    }
    return res.send(documents);
};

exports.findOne = async(req, res, next) => {
    try {
        
        const document = await theoDoi.findById(req.params.id);
        if (!document) {
            return next(new ApiError(404, "Contact not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving contact with id=${req.params.id}`
            )
        );
    }
};

exports.update = async(req, res, next) => {
    if (Object.keys(req.body).length == 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }

    try {
        const document = await theoDoi.findByIdAndUpdate({_id:req.params.id}, req.body);
        if (!document) {
            return next(new ApiError(404, "Contact not found"));
        }
        return res.send({ message: "Contact was updated successfully" });
    } catch (error) {
        return next(
            new ApiError(500, `Error updating contact with id=${req.params.id}`)
        );
    }
};  

exports.delete = async(req, res, next) => {
    try {
        const document = await theoDoi.findByIdAndDelete(req.params.id);
        if (!document) {
            return next(new ApiError(404, "Contact not found"));
        }
        return res.send({ message: "Contact was deleted successully" });
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Could not delete contact with id=${req.params.id}`
            )
        );
    }
};

exports.deleteAll = async(req, res, next) => {
    try {
        const deletedCount = await theoDoi.deleteAll();
        return res.send({
            message: `${deletedCount} contacts were deleted successfully`,
        });
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while removing all contacts")
        );
    }
};