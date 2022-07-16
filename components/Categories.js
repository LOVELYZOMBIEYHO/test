// import { useState } from "react";
// import { useRouter } from "next/router";

// function Categories() {
//   const [year, setYear] = useState("");

//   const router = useRouter();

//   const selectCategory = (e) => {
//     setYear(e.target.value);
//     router.push(`/events/search?term=${e.target.value}`);
//     e.preventDefault();
//   };

//   return (
//     <div>
//       <fieldset>
//         <legend>Year</legend>
//         Category{" "}
//         <form>
//           <select onChange={selectCategory}>
//             <option value="null">blank</option>
//             <option value="2019">2019</option>
//             <option value="2020">2020</option>
//             <option value="2021">2021</option>
//           </select>
//           <select onChange={selectCategory}>
//             <option value="null">blank</option>
//             <option value="2016">2016</option>
//             <option value="2017">2017</option>
//             <option value="2018">2018</option>
//           </select>
//           <button onChange={selectCategory}>Submit</button>
//         </form>
//         <br />
//       </fieldset>
//     </div>
//   );
// }

// export default Categories;

// --------------------Vanilla React------------------------------------------------------------

// import { useState } from "react";
// import { useRouter } from "next/router";

// function Categories() {
//   const [year, setYear] = useState("");
//   const [genre, setGenre] = useState("");
//   const router = useRouter();

//   const selectCategory1 = (e) => {
//     setYear(e.target.value);
//     // router.push(`/events/search?term=${e.target.value}`);
//     e.preventDefault();
//   };

//   const selectCategory2 = (e) => {
//     setGenre(e.target.value);
//     // router.push(`/events/search?term=${e.target.value}`);
//     e.preventDefault();
//   };

// const submitSelectCategory = (e) => {
//   e.preventDefault();
//   console.log({ year });
//   router.push(`/events/search?term=${year}&term=${genre}`);
// };

//   return (
//     <div>
//       <fieldset>
//         <legend>Year</legend>
//         Category{" "}
//         <form onSubmit={submitSelectCategory}>
//           <select onChange={selectCategory1}>
//             <option value="null">blank</option>
//             <option value="2019">2019</option>
//             <option value="2020">2020</option>
//             <option value="2021">2021</option>
//           </select>
//           <select onChange={selectCategory2}>
//             <option value="null">blank</option>
//             <option value="2016">2016</option>
//             <option value="2017">2017</option>
//             <option value="2018">2018</option>
//           </select>
//           <button>Submit</button>
//           <input type="submit" value="Submit" />
//         </form>
//         <br />
//       </fieldset>
//     </div>
//   );
// }

// export default Categories;

// -------------------react-hook-form----------------------------------------------------------
// import React from "react";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/router";

// export default function Categories() {
//   const router = useRouter();
//   const { register, handleSubmit, watch } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//     router.push(`/events/search?term=${watch("year")}&term=${watch("genre")}`);
//   };

//   const Select = React.forwardRef(({ onChange, name, label }, ref) => (
//     <div>
//       <label>{label}</label>
//       <select name={name} ref={ref} onChange={onChange}>
//         <option value="null">null</option>

//         <option value="2019">2019</option>
//         <option value="2020">2020</option>
//       </select>
//     </div>
//   ));

//   const SelectA = React.forwardRef(({ onChange, name, label }, ref) => (
//     <div>
//       <label>{label}</label>
//       <select name={name} ref={ref} onChange={onChange}>
//         <option value="2018">2018</option>
//         <option value="2021">2021</option>
//       </select>
//     </div>
//   ));

//   console.log(watch("year"));
//   console.log(watch("genre"));
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Select label="Year" {...register("year")} />
//       <SelectA label="Genre" {...register("genre")} />
//       <input type="submit" />
//     </form>
//   );
// }

// ---------React-select--------------------------------------------------------------------

import Select from "react-select";
import { useState } from "react";
import { useRouter } from "next/router";

const options = [
  { value: "2018", label: "2018" },
  { value: "2019", label: "2019" },
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
];

export default function Categories(props) {
  const router = useRouter();
  const [value, setValue] = useState(null);
  const onDropdownChange = (value) => {
    setValue(value);
  };

  const submitSelectCategory = (e) => {
    e.preventDefault();

    const multiCategories = value.map((item) => {
      return item.value;
    });

    // console.log(multiCategories);

    // console.log(multiCategories.join("&term="));
    const joinURL = multiCategories.join("&term=");
    const categoriesURL = `/events/search?term=${joinURL}`;
    router.push(categoriesURL);
  };

  return (
    <div style={{ width: "300px", margin: "30px auto" }}>
      <form onSubmit={submitSelectCategory}>
        <Select
          value={value}
          options={options}
          onChange={onDropdownChange}
          isMulti
          id="long-value-select"
          instanceId="long-value-select"
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

// -----------------------------------------------------------------------------
