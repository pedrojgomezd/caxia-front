import React from "react";
import IconElement from "./common/IconElement";

const Table = ({ columns, dataSource }) => {
  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr className="bg-white">
              {columns.map(({ key, title }) => (
                <Column {...{ key, title }} />
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.length === 0 ? (
              <tr className="bg-white h-64 w-full">
                <td colSpan="5" className="">
                  <div className="text-blue-500 text-xl font-semibold text-center  grid grid-cols-1">
                    <div className="text-indigo-900 flex content-center justify-center">
                      <IconElement icon="Inbox" size={38} />
                    </div>
                    <div>No hay datos para mostar</div>
                  </div>
                </td>
              </tr>
            ) : (
              dataSource.map((data, index) => (
                <tr key={index}>
                  {columns.map(({ key, dataIndex, render }) => {
                    if (render) {
                      return (
                        <td
                          key={key}
                          className="px-3 py-2 border-b border-gray-200 bg-white text-sm"
                        >
                          {render(data[dataIndex], data)}
                        </td>
                      );
                    }

                    return (
                      <td
                        key={key}
                        className="px-3 py-2 border-b border-gray-200 bg-white text-sm"
                      >
                        <p className="text-gray-900 whitespace-no-wrap">
                          {data[dataIndex]}
                        </p>
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Column = ({ title }) => {
  return (
    <th className="px-5 py-4 border-b border-gray-200  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
      {title}
    </th>
  );
};

export default Table;
