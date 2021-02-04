import Link from "next/link";
import { useEffect, useState } from "react";
import { clientHttp } from "../../services/clientHttp";
import Button from "../../src/common/Button";
import IconElement from "../../src/common/IconElement";
import Layouts from "../../src/Layouts";
import Table from "../../src/Table";
import { columnsIndex } from "../../src/pages/customers/tableStructure";

const Customers = () => {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomer = async () => {
      const { data } = await clientHttp.get("customers");
      setCustomers(data);
      setLoading(false);
    };
    fetchCustomer();
  }, []);

  return (
    <Layouts title="Customer" {...{ loading }}>
      <div className="flex justify-between w-full items-center">
        <h3 className="text-2xl text-gray-700 font-semibold flex gap-2 items-center">
          <IconElement icon="User" />
          Customers List
        </h3>
        <div>
          <Link href="/customers/create">
            <Button label="Add" icon="Plus" variant="primary" />
          </Link>
        </div>
      </div>
      <Table dataSource={customers} columns={columnsIndex} />
    </Layouts>
  );
};

export default Customers;
