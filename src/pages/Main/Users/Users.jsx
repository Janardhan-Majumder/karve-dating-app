import React, { useState } from "react";
import usersImg from "../../../assets/images/users-img.png";
import { Button, DatePicker, Input, Space, Table, Tag } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import UserDetailsModal from "../../../Components/UserDetailsModal";
import { IoSearch } from "react-icons/io5";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const showModal = (data) => {
    setIsModalOpen(true);
    setUserDetails(data);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const columns = [
    {
      title: "#SI",
      dataIndex: "key",
      key: "key",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Join Date",
      key: "joinDate",
      dataIndex: "joinDate",
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
  const data = [
    {
      key: "1",
      name: "John Brown",
      email: "subro@gmal.com",
      phone: "+880 158448484",
      joinDate: "16 Apr 2024",
      _id: "12112121",
    },
    {
      key: "2",
      name: "John Brown",
      email: "subro@gmal.com",
      phone: "+880 158448484",
      joinDate: "16 Apr 2024",
      _id: "12112121",
    },
    {
      key: "3",
      name: "John Brown",
      email: "subro@gmal.com",
      phone: "+880 158448484",
      joinDate: "16 Apr 2024",
      _id: "12112121",
    },
    {
      key: "4",
      name: "John Brown",
      email: "subro@gmal.com",
      phone: "+880 158448484",
      joinDate: "16 Apr 2024",
      _id: "12112121",
    },
    {
      key: "5",
      name: "John Brown",
      email: "subro@gmal.com",
      phone: "+880 158448484",
      joinDate: "16 Apr 2024",
      _id: "12112121",
    },
    {
      key: "6",
      name: "John Brown",
      email: "subro@gmal.com",
      phone: "+880 158448484",
      joinDate: "16 Apr 2024",
      _id: "12112121",
    },
    {
      key: "7",
      name: "John Brown",
      email: "subro@gmal.com",
      phone: "+880 158448484",
      joinDate: "16 Apr 2024",
      _id: "12112121",
    },
    {
      key: "8",
      name: "John Brown",
      email: "subro@gmal.com",
      phone: "+880 158448484",
      joinDate: "16 Apr 2024",
      _id: "12112121",
    },
    {
      key: "9",
      name: "John Brown",
      email: "subro@gmal.com",
      phone: "+880 158448484",
      joinDate: "16 Apr 2024",
      _id: "12112121",
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
              className="custom-datepicker focus:outline-none border-none rounded-full text-[#222222] text-sm"
              onChange={onChange}
            />
            <Input
              className="focus:outline-none border-none rounded-full placeholder:text-[#222222] text-sm"
              placeholder="User Name"
            />
            <Button
              className="bg-[#FF8400] text-white"
              type="default"
              shape="circle"
              icon={<IoSearch />}
            />
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            position: ["bottomCenter"],
          }}
        />
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
