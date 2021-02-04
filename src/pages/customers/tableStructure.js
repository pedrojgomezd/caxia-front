import React from "react";
import { Edit, Eye } from "react-feather";
import Link from "next/link";

export const columnsCustomer = [
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
  },
  {
    key: "code",
    title: "Code",
    dataIndex: "code",
  },
  {
    key: "birthday",
    title: "Birthday",
    dataIndex: "birthday",
  },
  {
    key: "id",
    title: "",
    dataIndex: "id",
    render: (value) => (
      <div className="flex gap-2">
        <Link href={`/customers/${value}/edit`}>
          <a className="text-blue-600">
            <Edit size={24} />
          </a>
        </Link>
      </div>
    ),
  },
];

export const columnsIndex = [
  {
    key: "avatar",
    title: "Avatar",
    dataIndex: "avatar",
    render: (value, { id }) => (
      <div>
        <img className="w-14 h-14 rounded-full" src={value} />
      </div>
    ),
  },
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
    render: (value, { id }) => (
      <Link href={`/customers/${id}`}>
        <a className="text-blue-500">{value}</a>
      </Link>
    ),
  },
  {
    key: "code",
    title: "Code",
    dataIndex: "code",
  },
  {
    key: "birthday",
    title: "Birthday",
    dataIndex: "birthday",
  },
  {
    key: "id",
    title: "",
    dataIndex: "id",
    render: (value) => (
      <div className="flex gap-2">
        <Link href={`/customers/${value}`}>
          <a className="text-blue-600">
            <Eye size={24} />
          </a>
        </Link>
        <Link href={`/customers/${value}/edit`}>
          <a className="text-blue-600">
            <Edit size={24} />
          </a>
        </Link>
      </div>
    ),
  },
];
