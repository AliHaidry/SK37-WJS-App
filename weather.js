class Weather
{
    constructor(city, state)
    {
        this.apiKey = '6c2e5acf16bf432fae5acf16bf032f96';
        this.city = city;
        this.state = state;
    }

    // fetch weather from api
    async getWeather()
    {
      
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
        const responseData = await response.json();

        return responseData.current_observation;
    }

    // change weather Location
    changeLocation(city,state)
    {
        this.city = city;
        this.state = state;
    }
}