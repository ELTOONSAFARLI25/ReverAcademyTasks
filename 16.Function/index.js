function country(data){
    let arr=[];
    for(elem of data){
        arr.push(elem.country)
    }
    return arr;

}
function cityCounter(data){
    let arr=[];
    let max=0;
    let country;
    for(elem of data){
        if(elem.cities.length>=max){
            max=elem.cities.length;
            country=elem.country;
        }
    }
    let result=country+":"+max;
    return result;
}
function maxCountry(data){
    let country1;
    let max=0;
    let obj;
    for(elem of data){
        if(elem.country.length>=max){
            max=elem.country.length;
            country1=elem.country;
            obj=elem;
        }
    }
    return obj.cities;
}
function countryCount(data){
    let result;
    let arr = [];
    for(elem of data){
        result=elem.country+":"+elem.cities.length;
        arr.push(result)
    }
    return arr;
}
const data = [
  {
    iso2: "AF",
    iso3: "AFG",
    country: "Afghanistan",
    cities: [
      "Herat",
      "Kabul",
      "Kandahar",
      "Molah",
      "Rana",
      "Shar",
      "Sharif",
      "Wazir Akbar Khan",
    ],
  },
  {
    iso2: "AL",
    iso3: "ALB",
    country: "Albania",
    cities: [
      "Elbasan",
      "Petran",
      "Pogradec",
      "Shkoder",
      "Tirana",
      "Ura Vajgurore",
    ],
  },
  {
    iso2: "DZ",
    iso3: "DZA",
    country: "Algeria",
    cities: [
      "Algiers",
      "Annaba",
      "Azazga",
      "Batna City",
      "Blida",
      "Bordj",
      "Bordj Bou Arreridj",
      "Bougara",
      "Cheraga",
      "Chlef",
      "Constantine",
      "Djelfa",
      "Draria",
      "El Tarf",
      "Hussein Dey",
      "Illizi",
      "Jijel",
      "Kouba",
      "Laghouat",
      "Oran",
      "Ouargla",
      "Oued Smar",
      "Relizane",
      "Rouiba",
      "Saida",
      "Souk Ahras",
      "Tamanghasset",
      "Tiaret",
      "Tissemsilt",
      "Tizi",
      "Tizi Ouzou",
      "Tlemcen",
    ],
  },
  {
    iso2: "AD",
    iso3: "AND",
    country: "Andorra",
    cities: [
      "Andorra la Vella",
      "Canillo",
      "Encamp",
      "Engordany",
      "Escaldes-Engordany",
      "La Massana",
      "Llorts",
      "Ordino",
      "Santa Coloma",
      "Sispony",
      "Soldeu",
    ],
  },
  {
    iso2: "AO",
    iso3: "AGO",
    country: "Angola",
    cities: [
      "Ambriz",
      "Benguela",
      "Cabinda",
      "Cacole",
      "Camabatela",
      "Cazeta",
      "Huambo",
      "Kuito",
      "Lobito",
      "Luanda",
      "Lubango",
      "Lucapa",
      "Lumeje",
      "Malanje",
      "Menongue",
      "Muxaluando",
      "Namibe",
      "Ondjiva",
      "Piri",
      "Saurimo",
      "Talatona",
    ],
  },
  {
    iso2: "AI",
    iso3: "AIA",
    country: "Anguilla",
    cities: [
      "The Valley",
      "Blowing Point Village",
      "Sandy Ground Village",
      "Sandy Hill",
      "East End Village",
      "George Hill",
      "Island Harbour",
      "North Hill Village",
      "North Side",
      "South Hill Village",
      "Stoney Ground",
      "Farrington",
      "The Quarter",
      "West End Village",
    ],
  },
];

console.log(country(data));
console.log(cityCounter(data));
console.log(maxCountry(data));
console.log(countryCount(data));