import { useCallback, useEffect, useState } from "react";
import { clientHttp } from "../../services/clientHttp";
import Button from "../../src/common/Button";
import Layouts from "../../src/Layouts";
import Table from "../../src/Table";
import { columnsCustomer } from "../../src/pages/customers/tableStructure";
import { useRouter } from "next/router";

const CustomersDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);

  const [customer, setCustomer] = useState([]);

  const fetchCustomer = useCallback(async () => {
    setLoading(true);
    const { data } = await clientHttp.get(`customers/${id}`);
    setCustomer(data);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    if (id >= 1 && id !== undefined) {
      fetchCustomer();
    }

    return () => true;
  }, [id]);

  return (
    <Layouts title="Customer" {...{ loading }}>
      <div>
        <h3 className="text-2xl text-gray-700 font-semibold">
          Customer: {customer.name}
        </h3>
      </div>
      <div className="flex gap-4">
        <div className="w-3/12 bg-white p-2">
          <img src={customer.avatar} className="w-full rounded-sm" />
        </div>
        <div className="w-9/12">
          <Table dataSource={[customer]} columns={columnsCustomer} />
        </div>
      </div>
    </Layouts>
  );
};

export default CustomersDetails;
