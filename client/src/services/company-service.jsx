import axios from 'axios';

const CompanyService = new (class CompanyService {
  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/',
    });
  };

  getCompanies = async (searchTerm) => {
    try {
    const { data } = await this.requester.get(`/search`, {params: {searchTerm} });
    return data;
  } catch ({ message }) {
    return { success: false, message };
  }
  };

  getCompanyProfile = async (symbol) => {
    try {
      const data = await this.requester.get(`/company/${symbol}`);
      return data;
    } catch ({ message }) {
      return { success: false, message };
    }
  };

})();

export default CompanyService;
