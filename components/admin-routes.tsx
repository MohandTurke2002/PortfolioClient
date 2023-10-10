"use client";

import { adminRoutes } from "@/data/admin-routes";
import LinksBtn from "@/components/links-btn";

const AdminRoutes = () => {
  return (
    <>
      {adminRoutes.map(({ key, url, name, IconOutline, IconSolid }) => {
        return (
          <LinksBtn
            key={key}
            url={url}
            name={name}
            IconOutline={IconOutline}
            IconSolid={IconSolid}
          />
        );
      })}
    </>
  );
};

export default AdminRoutes;
