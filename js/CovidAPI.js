class CovidAPI{


    async getStates(){
        const apiResponse = await fetch(`https://api.covid19india.org/data.json`);
          // Returns a json respone
        const data = await apiResponse.json();
        return {
            data
        }
    }

    async getDistricts(){
        const apiResponse = await fetch(`https://api.covid19india.org/v2/state_district_wise.json`);
          // Returns a json respone
        const data = await apiResponse.json();

        return {
            data
        }
    }

    async getCountries(){
        const apiResponse = await fetch(`https://coronavirus-19-api.herokuapp.com/countries`);
          // Returns a json respone
        const data = await apiResponse.json();

        return {
            data
        }
    }

    async getZones(){
        const apiResponse = await fetch(`https://api.covid19india.org/zones.json`);
          // Returns a json respone
        const data = await apiResponse.json();

        return {
            data
        }
    }



}