import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({onSearchChange}) => {
    
    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
		try {
			const response = await fetch(`${GEO_API_URL}/cities?=minPopulation=100&namePrefix=${inputValue}`, geoApiOptions);
			const result = await response.json();
		
			const options = result.data.map((city) => ({
				value: `${city.latitude} ${city.longitude}`,
				label: `${city.name}, ${city.countryCode}`,
			}));
			return { options };
		} catch (error) {
			console.error(error);
			return { options: [] }; // You might want to handle the error more gracefully
		}
	};
	  

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search a city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;