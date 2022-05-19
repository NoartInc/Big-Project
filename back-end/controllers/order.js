const { Order } = require("../models");

const uuid = require("uuid");
const { v4: uuidv4 } = require('uuid');
const Validator = require("fastest-validator");
const formValidator = new Validator();

const validationSchema = {
  userId: { type: "string" },
  paymentId: { type: "string" },
  shipmentId: { type: "string" },
  status: { type: "boolean" },
  buktiBayar: { type: "string" },
};

// findAll
exports.findAll = async (req, res, next) => {
  try {
    const data = await Order.findAll();

    if (!data) {
      throw new Error("Gagal mengambil data Products");
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
};

// findOne
exports.findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Order.findByPk(id, {
      include: "detailorders",
    });

    if (!data) {
      throw new Error("Gagal mengambil data dengan id " + id);
    }

    return res.json(data);
  } catch (error) {
    next(error);
  }
};
// create
exports.create = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { 
      shipment: {
        fullName, email, address, city, postCode, note
      },
      carts
    } = req.body;

    // const validation = formValidator.validate(req.body, validationSchema);
    // if (validation.length) {
    //   return res.status(400).json({
    //     status: false,
    //     error: validation,
    //   });
    // }

    const data = await Order.create({
      id: uuid.v4(),
      userId,
      address, 
      city,
      postCode,
      note,
      status: "unpaid",
      buktiBayar: "",
      detailorders: carts.map(cart => {
        return {
          id: uuidv4(),
          productId: cart.id,
          quantity: cart.qty,
          price: cart.price
        }
      })
    }, {
      include: ["detailorders"]
    });

    if (!data) {
      throw new Error("Gagal menambahkan data");
    }

    res.json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
// update
exports.update = async (req, res, next) => {
  try {
    const { userId, paymentId, shipmentId, status, buktiBayar } = req.body;
    const { id } = req.params;

    const data = await Order.update(
      {
        userId,
        paymentId,
        shipmentId,
        status,
        buktiBayar,
      },
      {
        where: { id: id },
      }
    );

    if (!data) {
      throw new Error("Gagal melakukan update data dengan id " + id);
    }

    res.json(await Products.findByPk(id));
  } catch (error) {
    next(error);
  }
};

// delete
exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Order.destroy({
      where: {
        id: id,
      },
    });

    if (!data) {
      throw new Error("Gagal menghapus data dengan id " + id);
    }

    res.json({
      status: true,
    });
  } catch (error) {
    next(error);
  }
};
