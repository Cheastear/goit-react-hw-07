import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <>
      <p>Find contact by name: </p>
      <input value={filter} onChange={handleOnChange} />
    </>
  );
};

SearchBox.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};

export default SearchBox;
