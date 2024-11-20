import React, { useState } from "react";
import { Button, DatePicker, Input, Space, Table, Tag } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import UserDetailsModal from "../../../Components/UserDetailsModal";
import { IoSearch } from "react-icons/io5";
import LoaderWraperComp from "../../../Components/LoaderWraperComp";
import { useGetAllUserQuery } from "../../../redux/features/Users/userApi";

const Users = () => {
  const [searchQuery, setSearchQuery] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const {
    data: userData,
    isLoading,
    isError,
  } = useGetAllUserQuery([
    {
      name: "limit",
      value: 20,
    },
    {
      name: "page",
      value: currentPage - 1,
    },
    {
      name: "date",
      value: searchQuery?.date ? searchQuery?.date : "",
    },
    {
      name: "name",
      value: searchQuery?.name ? searchQuery?.name : "",
    },
  ]);
  const onChange = (_date, dateString) => {
    // let { $D, $M, $y } = _date;
    // let date = `${$M}-${$D}-${$y}`;
    // console.log(date);
    setSearchQuery((c) => ({ ...c, date: dateString }));
  };
  const showModal = (data) => {
    setIsModalOpen(true);
    setUserDetails(data);
  };
  const columns = [
    {
      title: "#SI",
      dataIndex: "key",
      key: "key",
      render: (_text, _record, index) => (
        <p>{(currentPage - 1) * 20 + index + 1}</p>
      ),
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone Number",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Address",
      key: "address",
      // dataIndex: "address",
      render: (_, record) => <p>{record.address || "N/A"}</p>,
    },
    {
      title: "Join Date",
      key: "joinDate",
      render: (_, record) => <p>{new Date(record.createdAt).toDateString()}</p>,
    },
    {
      title: "Online",
      key: "online",
      render: (_, record) => (
        <p>
          {record.isOnline ? (
            <span className="text-yellow-400">Active</span>
          ) : (
            <span className="text-gray-400">In-Active</span>
          )}
        </p>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (data) => (
        <Button
          onClick={() => showModal(data)}
          type="text"
          shape="circle"
          className="px-0 py-0 text-[#FF8400]"
        >
          <FiAlertCircle size={22} />
        </Button>
      ),
    },
  ];

  return (
    <div>
      <div className="bg-[#FFF3E6] rounded-xl">
        <div className="px-5 py-3 flex justify-between items-center">
          <h3 className="text-xl font-medium text-[#464343]">{"User list"}</h3>
          <div className="flex justify-end gap-2">
            <DatePicker
              placeholder="Date"
              className="custom-datepicker focus:outline-none border-none rounded-full text-[#222222] text-sm w-48"
              onChange={onChange}
            />
            <Input
              onChange={(e) =>
                setSearchQuery((c) => ({
                  ...c,
                  name: "",
                  userName: e.target.value,
                }))
              }
              className="focus:outline-none border-none rounded-full placeholder:text-[#222222] text-sm"
              placeholder="User Name"
            />
            <Button
              onClick={() =>
                setSearchQuery((c) => ({ ...c, name: c?.userName || "" }))
              }
              className="bg-[#FF8400] text-white"
              type="default"
              shape="circle"
              icon={<IoSearch />}
            />
          </div>
        </div>
        <LoaderWraperComp isError={isError}>
          <Table
            columns={columns}
            dataSource={userData?.data?.users}
            loading={isLoading}
            pagination={{
              position: ["bottomCenter"],
              current: currentPage,
              onChange: (page) => {
                setCurrentPage(page);
              },
              total: userData?.data?.pagination?.totalData,
              pageSize: 20,
            }}
          />
        </LoaderWraperComp>
      </div>
      <UserDetailsModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        userDetails={userDetails}
      />
    </div>
  );
};

export default Users;
