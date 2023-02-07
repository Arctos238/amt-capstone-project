import React from "react";

import CreateInvoiceItem from "./CreateInvoiceItem";
import EdgeProfile from "./EdgeProfile";

const CreateInvoice = () => {
  return (
    <div className="createInvoiceItem">
      <CreateInvoiceItem />
      <EdgeProfile />
    </div>
  );
};

export default CreateInvoice;
