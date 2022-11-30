import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

export const Select = () => {
    const [value, setValue] = useState(null);

    console.log(value);

    const handleChange = (e) => {
        setValue(e);
        const ubication = {};
        ubication.address = e.value.terms[0].value;
        ubication.city = e.value.terms[1].value;
        ubication.state = e.value.terms[2].value;
        ubication.country = e.value.terms[3].value;
    };

    return (
        <div>
            <GooglePlacesAutocomplete
                apiKey="AIzaSyC1OI_ABfPPn8mlEv2bGQRIXk74WaJDAWo"
                selectProps={{
                    value,
                    onChange: handleChange,
                }}
                apiOptions={{
                    language: "es",
                }}
            />
        </div>
    );
};
