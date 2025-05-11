# Factory

**Author**: Jacopo Dell'Oste 

### Request From The Client

- Write car.json, a JSON that represents a car object

    + Make your object complete, having at least one property of the following types

    + Number, String, Boolean, Array, Object, Null

- Write a factory.json that represents a car factory

    + Follow the same rules above

- Transform car.json into cars.json with 5 cars

- Cars should belong to a factory

    + Write two variants of factory.json

    + One that has cars directly embedded in the factory JSON structure

    + Another that uses cars referring to their IDs

### Solution Step-by-Step

1. Create the  `01-factory` folder

2. Create the the JSON files according to the client request

3. The JSON file:

    - `car.json`

        ```json
        {
            "brand": "Citroen",
            "model": "C3 Picasso",
            "yearOfRegistration": 2012,
            "automatic": false,
            "optional": ["LED headlights", "Cruise Control", "Air Conditioning"],
            "engine": {
                "type": "diesel",
                "horsePower": 95,
                "emmissionStandard": "Euro 5"
            },
            "owner": null
        }
        ```
    - `cars.json`

        ```json
        [
            {
                "id": 1,
                "brand": "Citroen",
                "model": "C3 Picasso",
                "yearOfRegistration": 2012,
                "automatic": false,
                "optional": ["LED headlights", "Cruise Control", "Air Conditioning"],
                "engine": {
                    "type": "diesel",
                    "horsePower": 95,
                    "emmissionStandard": "Euro 5"
                },
                "owner": null
            },

            {
                "id": 2,
                "brand": "Peugeot",
                "model": "207",
                "yearOfRegistration": 2002,
                "automatic": false,
                "optional": null,
                "engine": {
                    "type": "gasoline",
                    "horsePower": 75,
                    "emmissionStandard": "Euro 4"
                },
                "owner": ["Jacopo Dell'Oste", "Sandro Dell'Oste"]
            },

            {
                "id": 3,
                "brand": "KIA",
                "model": "Stonic",
                "yearOfRegistration": 2024,
                "automatic": true,
                "optional": ["LED headlights", "Adaptive Cruise Control", "Air Conditioning", "Start and Stop", "Reverse Camera"],
                "engine": {
                    "type": "gasoline",
                    "horsePower": 115,
                    "emmissionStandard": "Euro 6E"
                },
                "owner": null
            },

            {
                "id": 4,
                "brand": "Volkswagen",
                "model": "Golf 8",
                "yearOfRegistration": 2021,
                "automatic": true,
                "optional": ["LED Matrix headlights", "Keyless Entry", "Heated Seats", "Digital Cockpit"],
                "engine": {
                    "type": "mild hybrid",
                    "horsePower": 150,
                    "emmissionStandard": "Euro 6D"
                },
                "owner": null
            },
            
            {
                "id": 5,
                "brand": "Fiat",
                "model": "500e",
                "yearOfRegistration": 2023,
                "automatic": true,
                "optional": ["Panoramic Roof", "Wireless Apple CarPlay", "Fast Charging", "Lane Assist"],
                "engine": {
                    "type": "electric",
                    "horsePower": 118,
                    "emmissionStandard": "Zero Emissions"
                },
                "owner": null
            }
        ]
        ```

    - `factory.json`

        ```json
        {
            "name": "GO Motori",
            "yearOfFoundation": 1990,
            "acceptsBankTransfers": true,
            "employees": ["Beppe", "Lucia", "Marco"],
            "address": {
                "streetName": "SP50",
                "houseNumber": 13,
                "CAP": 15033
            },
            "website": null
        }
        ```
    - `factory-embedded.json`

        ```json
        {
            "name": "GO Motori",
            "yearOfFoundation": 1990,
            "acceptsBankTransfers": true,
            "employees": ["Beppe", "Lucia", "Marco"],
            "address": {
                "streetName": "SP50",
                "houseNumber": 13,
                "CAP": 15033
            },
            "website": null,
            "cars": [
                {
                    "id": 1,
                    "brand": "Citroen",
                    "model": "C3 Picasso",
                    "yearOfRegistration": 2012,
                    "automatic": false,
                    "optional": ["LED headlights", "Cruise Control", "Air Conditioning"],
                    "engine": {
                        "type": "diesel",
                        "horsePower": 95,
                        "emmissionStandard": "Euro 5"
                    },
                    "owner": null
                },
                {
                    "id": 2,
                    "brand": "Peugeot",
                    "model": "207",
                    "yearOfRegistration": 2002,
                    "automatic": false,
                    "optional": null,
                    "engine": {
                        "type": "gasoline",
                        "horsePower": 75,
                        "emmissionStandard": "Euro 4"
                    },
                    "owner": ["Jacopo Dell'Oste", "Sandro Dell'Oste"]
                },
                {
                    "id": 3,
                    "brand": "KIA",
                    "model": "Stonic",
                    "yearOfRegistration": 2024,
                    "automatic": true,
                    "optional": ["LED headlights", "Adaptive Cruise Control", "Air Conditioning", "Start and Stop", "Reverse Camera"],
                    "engine": {
                        "type": "gasoline",
                        "horsePower": 115,
                        "emmissionStandard": "Euro 6E"
                    },
                    "owner": null
                },
                {
                    "id": 4,
                    "brand": "Volkswagen",
                    "model": "Golf 8",
                    "yearOfRegistration": 2021,
                    "automatic": true,
                    "optional": ["LED Matrix headlights", "Keyless Entry", "Heated Seats", "Digital Cockpit"],
                    "engine": {
                        "type": "mild hybrid",
                        "horsePower": 150,
                        "emmissionStandard": "Euro 6D"
                    },
                    "owner": null
                },
                {
                    "id": 5,
                    "brand": "Fiat",
                    "model": "500e",
                    "yearOfRegistration": 2023,
                    "automatic": true,
                    "optional": ["Panoramic Roof", "Wireless Apple CarPlay", "Fast Charging", "Lane Assist"],
                    "engine": {
                        "type": "electric",
                        "horsePower": 118,
                        "emmissionStandard": "Zero Emissions"
                    },
                    "owner": null
                }
            ]    
        }
        ```
    - `factory-references.json`

        ```json
        {
            "name": "GO Motori",
            "yearOfFoundation": 1990,
            "acceptsBankTransfers": true,
            "employees": ["Beppe", "Lucia", "Marco"],
            "address": {
                "streetName": "SP50",
                "houseNumber": 13,
                "CAP": 15033
            },
            "website": null,
            "carsId": [1, 2, 3, 4, 5]
        }
        ```

        
