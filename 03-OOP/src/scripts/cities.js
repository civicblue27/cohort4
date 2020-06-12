

export class City {
    constructor(name, latitude, longitude, population, key) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
        this.key = key;
    }

    show() {
        return this.name + '; Latitude: ' + this.latitude + '; Longitude: ' + this.longitude + '; Population: ' + this.population;
    }

    movedIn(increase) {
        this.population = this.population + increase;
    }

    movedOut(decrease) {
        this.population = this.population - decrease;
    }

    howBig() {
        switch (true) {
            case (this.population > 100000):
                return 'City';
            case (this.population > 20000):
                return 'Large Town';
            case (this.population > 1000):
                return 'Town';
            case (this.population > 100):
                return 'Village';
            case (this.population > 0):
                return 'Hamlet';
        };
        return 'No Population at this location';

    };

};

export class Community {
    constructor() {
        this.url = 'http://127.0.0.1:5000/';
        this.list = [];
        this.counter = 0;
        this.newcity;
    }

    nextKey() {
        return this.counter++;
    }

    async addCity(name, latitude, longitude, population) {
        try {
            let key = ++this.counter
            this.newcity = new City(name, latitude, longitude, population, key);
            this.list.push(this.newcity);
            // console.log(newcity);
            // console.log(this.list);
            // console.log(typeof (newcity.key));

            //     let data = await postData(this.url + 'add', newcity);
            //     if (data.status === 200) {
            //         return data;
            //     } return 'error';
            return this.newcity;
        } catch (error) {
            throw (error);
        }
    }

    whichSphere(city) {
        if (city.latitude > 0) {
            return 'Northern Hemisphere';
        } else {
            return 'Southern Hemisphere';
        }
    }

    northernCities() {
        // let northCity = this.list[0];

        // this.list.forEach(value => {
        //     if (value.latitude > northCity.latitude) {
        //         northCity = value;
        //     }
        // })
        let latitudeArray = [];
        for (let i = 0; i < this.list.length; i++) {
            latitudeArray[i] = this.list[i].latitude

        }
        let maxLatitude = latitudeArray.indexOf(Math.max(...latitudeArray));

        return this.list[maxLatitude].name
    }

    southernCities() {
        // let southCity = this.list[0];
        // this.list.forEach(value => {
        //     if (value.latitude < southCity.latitude) {
        //         southCity = value;
        //     }
        // })
        let latitudeArray = [];
        for (let i = 0; i < this.list.length; i++) {
            latitudeArray[i] = this.list[i].latitude

        }
        let minLatitude = latitudeArray.indexOf(Math.min(...latitudeArray));

        return this.list[minLatitude].name

    }

    totalPopulation() {
        let total = 0;
        this.list.forEach(value => {
            total += value.population;
        })
        return total;
    }

    deleteCity(name) {
        for (let i = 0; i < this.list.length; i++) {
            if (name === this.list[i].name) {
                this.list.splice(i, 1);
            }
        }
    }

    async getCommunity() {
        let apiCity;
        let serverCity = await fetch(this.url + 'clear');
        serverCity = await fetch(this.url + 'load');
        serverCity = await fetch(this.url + 'all');
        apiCity = await serverCity.json();

        for (let i = 0; i < apiCity.length; i++) {
            this.list.push(apiCity[i]);
        }

        return apiCity;

    }

    createCityCard(name, latitude, longitude, population) {
        let div = document.createElement('div');
        let cityName = document.createElement('h3');
        cityName.appendChild(document.createTextNode(name));
        let cityLat = document.createElement('P');
        cityLat.appendChild(document.createTextNode(latitude));
        let cityLong = document.createElement('P');
        cityLong.appendChild(document.createTextNode(longitude));
        let cityPop = document.createElement('P');
        cityPop.appendChild(document.createTextNode(population));
        div.appendChild(cityName);
        div.appendChild(cityLat);
        div.appendChild(cityLong);
        div.appendChild(cityPop);
        return div;


    }

}

