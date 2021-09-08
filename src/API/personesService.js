export class PersonesService {
  static async getAll() {
      const data = require('../resources/data.json')
      return data
    
  }
  
}