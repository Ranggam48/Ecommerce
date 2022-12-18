const {user: Customer, Sequelize} = require('../models');
const bcrypt = require("bcrypt");

class CustomerRepository {
    constructor(){
        this.Customer = Customer;
        this.Sequelize = Sequelize;
    };

    GetById = async (id) => {
      let data = null;
        try {
            data = await this.Customer.findOne({
                where: {
                    id: id,
                },                
            });
        } catch (error) {
            console.error(error);
            return false;
        }
        return data;
    };

    GetByEmail = async (email) => {
        try {
            return await this.Customer.findOne({
                where: {
                    email: email,
                }
            });
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    GetAll = async () => {
      let data = null;
        try {
            data = await this.Customer.findAll({

            });
        } catch (error) {
            console.error(error);
            return false;
        }
        return data;
    };

    DelById = async (id) => {
        try {
          return await this.Customer.destroy({
            where: {
              id: id,
            },
          });
        } catch (error) {
          console.error(error);
          return false;
        }
      };

      UpdatePass = async (password, id) => {
        let newPassword = bcrypt.hashSync(password, 10);
        try {
          return await this.Customer.update(
            { password: newPassword },
            {
              where: {
                id: id,
              },
            }
          );
        } catch (error) {
          lconsole.error(error);
          return false;
        }
      };
}

module.exports = CustomerRepository;