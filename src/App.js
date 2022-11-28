import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCountries } from "./redux/tools/selections";
import { getCountries } from "./redux/tools/setters";

function App () {
    const { countries, loading, error } = useSelector(selectCountries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, [])
    
    return (
        <div>
            {countries && countries.map(country =>
                <div key={country.id}>{country.name}</div>    
            )}
            {loading && <div>LOADING...</div>}
            {error && <div>{error}</div>}
        </div>
    );
}

export default App;