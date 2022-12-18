class customerUseCase {
    constructor(customerRepository) {
      this.customerRepository = customerRepository;
    }
    GetById = async (id) => {
      return await this.customerRepository.GetById(id);
    };
  
    GetByEmail = async (email) => {
      return await this.customerRepository.GetByEmail(email);
    };
  
    GetAll = async () => {
      return await this.customerRepository.GetAll();
    };
  
    DelById = async (id) => {
      return await this.customerRepository.DelById(id);
    };
  
    UpdatePass = async (password, id) => {
      return await this.customerRepository.UpdatePass(password, id);
    };
  
  }
  
  module.exports = customerUseCase;