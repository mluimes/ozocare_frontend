class logicaFake {
    constructor() {
      this.apiUrl = 'http://localhost:3000/api/v1/medidas'; // URL base de la API
    }
  
    // Método GET para obtener medidas
    async getMedidas() {
      try {
        const response = await fetch(this.apiUrl);
        if (!response.ok) {
          throw new Error('Error al obtener las medidas');
        }
        const data = await response.json();
        return data; // Devolver los datos de medidas
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
}

export default new logicaFake();