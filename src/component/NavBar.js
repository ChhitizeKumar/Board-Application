import React, { useRef, useState } from "react";
import "./NavBar.css";
import { IoFilterOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

function useClickOutside(ref, onClickOutside) {
//   useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    // Bind
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside);
    };
//   }, []);
}

const NavBar = ({ filter, setFilter }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);


  const handleSelect = (e) => {
    e.preventDefault();
    const newFilter = { ...filter, [e.target.name]: e.target.value };
    localStorage.setItem("filter",JSON.stringify(newFilter))
    setFilter(newFilter);
  };

  useClickOutside(ref, () => {
    setOpen(false);
  });


  return (
    <div className="displayed">
      <button className="dropdown" onClick={() => setOpen(!open)}>
        <div className="display-icon">
          <IoFilterOutline />
        </div>
        Display
        <div className="filter-icon">
          <RiArrowDropDownLine fontSize={"15px"} />
        </div>
      </button>

      {open && (
        <div className="filter" ref={ref}>
          <label>
            Grouping
            <select
              name="groupBy"
              id=""
              onChange={handleSelect}
              defaultValue={filter.groupBy}
            >
              <option value="status">Status</option>
              <option value="priority">Priority</option>
              <option value="users">Users</option>
            </select>
          </label>
          <label>
            Ordering
            <select
              name="orderBy"
              id=""
              onChange={handleSelect}
              defaultValue={filter.orderBy}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </label>
        </div>
      )}
    </div>
  );
};

export default NavBar;
