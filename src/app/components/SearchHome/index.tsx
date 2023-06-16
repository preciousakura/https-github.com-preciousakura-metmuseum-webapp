import { ChangeEvent, useEffect, useState } from "react";
import { Box } from "./styles";
import { MdOutlineSearch, MdOutlineClose } from "react-icons/md";
import useDebounce from "@/app/hooks/useDebounce";

export function SearchHome() {
  const [value, setValue] = useState("");
  const [found, setFounds] = useState([]);

  const onChange = async () => {
    console.log("oi");
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
      <input name="searh" onChange={handleChange} />
      <div className="icon">
        <MdOutlineClose aria-placeholder="dsdsdas" size={33} color="white" />
      </div>
    </Box>
  );
}
