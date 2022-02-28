const HttpError = require('../middleware/http-error');
const axios = require('axios');


const getAllData = async (req, res, next) => {
    try {
        const startTime = Date.now();
        const {name} =req.query;
        console.log(name);
        const user = await axios.get(`https://swapi.dev/api/people?search=${name}`);
        usersData = user.data.results;
        const speciesNames = await usersData.map(async user=>{
            const promises = await user.species.map( async spece=>{
                const response = await axios.get(
                    `${spece}`
                );
                return response.data.name;
            });
            return await Promise.all(promises);
        });
        const species  = await Promise.all(speciesNames);

        const filmsNames = await usersData.map(async user=>{
            const promises = await user.films.map( async film=>{
                const response = await axios.get(
                    `${film}`
                );
                return response.data.title;
            });
            return await Promise.all(promises);
        });
        const films  = await Promise.all(filmsNames);


        const PlanetsNames = await usersData.map(async user=>{
            const response = await axios.get(
                `${user.homeworld}`
            );
            return response.data.name;
        });
        const planets  = await Promise.all(PlanetsNames);

        let result = [];
        await usersData.forEach((item,index)=> {
            result.push({
                characterName:item.name,
                gender:item.gender,
                species:species[index],
                films:films[index],
                homePlanet:planets[index],
                averageLifespan:item.birth_year
            });
            
        });
        const RangeTime =  Date.now()-startTime;
        res.status(200).json({result :result ,RangeTime:RangeTime});
        }catch (err) {
        const error = new HttpError(
            'Something went wrong, could not user all data.',
            500
        );
        return next(error);}
};


exports.getAllData = getAllData;
