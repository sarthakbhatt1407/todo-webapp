import React from "react";

const AllTaskPage = (props) => {
  const { task, desc, date, status } = props.item;
  return (
    <div>
      <ul>
        <li>
          <h1>{task}</h1>
          <p>{desc}</p>
          <p>{date}</p>
          <p>{status}</p>
        </li>
      </ul>
    </div>
  );
};

export default AllTaskPage;
