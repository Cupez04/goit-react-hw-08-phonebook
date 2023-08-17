import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { setFilter } from "../../redux/filter/filterSlice";

export const Filter = () => {
    const dispatch = useDispatch();

    const setFilterValue = (e) => {
        dispatch(setFilter(e.currentTarget.value.toUpperCase()))
    };

    return (
        <TextField
            onChange={setFilterValue}
            label="Find contacts by name"
            size="small"
            variant="outlined"
        />
    );
};

export default Filter;