import axios from 'axios';

const CompanyService = new (class CompanyService {
  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/',
    });
  };

  getCompanies = async (searchTerm) => {
    const { data } = await this.requester.get(`/search`, {params: {searchTerm} });
    return data;
  };

})();

export default CompanyService;
