const errorHandler = require("../helpers/Error-Handler");


const getById = async (req, res, next) => {
    const customerId = req.body.id;
  
    let customer = await req.customerUC.GetById(customerId);
  
    if (!customer) return next(new errorHandler("Customer not found", 404));
  
    res.json({
      success: true,
      message: `Berhasil mendapatkan customer dengan Username: ${customer.userName}`,
      data: customer,
    });
  };

  const getAll = async (req, res, next) => {
  
    let allCustomer = await req.customerUC.GetAll();
  
    if (!allCustomer) {
      allCustomer = [];
    }
  
    res.json({
      success: true,
      message: "Berhasil mendapatkan semua customer.",
    });
  };

  const delById = async (req, res, next) => {

    const { id } = req.body.id;
  
    let customer = await req.customerUC.GetById(id);
  
    if (!customer) return next(new errorHandler("Customer not found", 404));
  
    await req.customerUC.DelById(id);
  
    return res.status(200).json({
      success: true,
      message: "Berhasil menghapus customer dengan Username: .",
    });
  };

  const updatePass = async (req, res, next) => {
    const { id } = req.Customer;

    let customer = await req.customerUC.GetById(id);
  
    if (!customer) return next(new errorHandler("Customer not found", 404));
  
    const { error } = validation.password({
      password: req.body.password,
    });
  
    if (error) return next(new errorHandler(error["details"][0]["message"], 400));
  
    if (req.body["password"] !== req.body["confirmPassword"])
      return next(new errorHandler("Password not match", 403));
  
    await req.customerUC.UpdatePass(req.body.password, id);
  
    res.json({
      success: true,
      message: `berhasil merubah password`,
    });
  };
  
  module.exports = {
    getById,
    getAll,
    delById,
    updatePass,
  };