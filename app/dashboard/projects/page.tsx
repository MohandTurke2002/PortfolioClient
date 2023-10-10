"use client";

import AddBtn from "@/components/add-btn";

const MyPtojects = () => {
  return (
    <>
      <h1>My Projects page</h1>
      <AddBtn url={`/dashboard/projects/add-project`} name="Add Project" />
    </>
  );
};

export default MyPtojects;
