import { ChangeEvent, useState } from "react";
import { Box } from "./styles";
import { MdOutlineSearch, MdOutlineClose } from "react-icons/md";
import useDebounce from "@/app/hooks/useDebounce";
import { search } from "@/app/services/search";

export function SearchHome() {
  const [value, setValue] = useState("");
  const [found, setFounds] = useState([]);

  const onChange = async () => {
    search.getResults().then((results) => console.log(results));
  };

  const debouncedChange = useDebounce(onChange, 800);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    debouncedChange(e.target.value);
  }

  return (
    <Box>
      <div className="icon">
        <MdOutlineSearch aria-placeholder="dsdsdas" size={33} color="white" />
      </div>
      <input value={value} name="searh" onChange={handleChange} />
      <div className="clean">
        <MdOutlineClose
          aria-placeholder="dsdsdas"
          size={33}
          color="white"
          onClick={() => setValue("")}
        />
      </div>
    </Box>
  );
}
