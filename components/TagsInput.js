// import React from "react";
// import TagsInputStyles from "@/styles/TagsInput.module.scss";

// export default function TagsInput() {
//   const [value, setValue] = React.useState("");
//   const [tags, setTags] = React.useState(["react"]);

//   const addTag = (e) => {
//     e.preventDefault();
//     const tag = value;
//     setValue("");
//     if (tags.includes(tag)) return;
//     setTags((tags) => [...tags, tag.toLowerCase()]);
//   };

//   const removeTag = (tag) => {
//     setTags((tags) => tags.filter((t) => t !== tag));
//   };

//   const Tag = ({ tag, clear }) => (
//     <li>
//       {tag}
//       <span className={TagsInputStyles.clear} onClick={clear}>
//         x
//       </span>
//     </li>
//   );

//   return (
//     <form onSubmit={addTag}>
//       <label className={TagsInputStyles.TagsInput}>
//         <ul>
//           {tags.map((tag) => (
//             <Tag key={tag} tag={tag} clear={() => removeTag(tag)} />
//           ))}
//           <input
//             type="text"
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//           />
//         </ul>
//         <input type="submit" />
//       </label>
//     </form>
//   );
// }

// --------------------

import { useEffect, useState } from "react";
import TagsInputStyles from "@/styles/TagsInput.module.scss";

export default function TagsInput({ tags, setTags, value, setValue }) {
  // Set usestate in createpage.js
  // const [value, setValue] = useState("");
  // const [tags, setTags] = useState([]);

  const addTag = (e) => {
    e.preventDefault();
    const tag = value;
    setValue("");
    if (tags.includes(tag)) return;
    setTags((tags) => [...tags, tag.toLowerCase()]);
  };
  const removeTag = (tag) => {
    setTags((tags) => tags.filter((t) => t !== tag));
  };

  const Tag = ({ tag, clear }) => (
    <li>
      {tag}
      <span className={TagsInputStyles.clear} onClick={clear}>
        x
      </span>
    </li>
  );

  return (
    <label className={TagsInputStyles.TagsInput}>
      <ul>
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} clear={() => removeTag(tag)} />
        ))}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </ul>
      <input type="submit" />
      <button onClick={addTag}>按我新增TAG</button>
    </label>
  );
}
