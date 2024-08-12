import React, { useState } from "react";
import usersImg from "../../../assets/images/users-img.png";
import { Button, Space, Table, Tag } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import UserDetailsModal from "../../../Components/UserDetailsModal";

const DashboardHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const showModal = (data) => {
    setIsModalOpen(true);
    setUserDetails(data);
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
  ];
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-6 bg-[#FFF3E6] flex items-center gap-5 px-8 py-6 rounded-xl border-2 border-[#FFD9B0]">
        <div>
          <img src={usersImg} alt="" />
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl font-medium">{"Total User"}</h3>
          <h3 className="text-3xl font-medium text-[#FF8400]">{"254.99"}</h3>
        </div>
      </div>
      <div className="col-span-6 bg-[#FFF3E6] flex items-center gap-5 px-8 py-6 rounded-xl border-2 border-[#FFD9B0]">
        <div>
          <img src={usersImg} alt="" />
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl font-medium">{"Recent User"}</h3>
          <h3 className="text-3xl font-medium text-[#FF8400]">{"220"}</h3>
        </div>
      </div>
      <div className="col-span-12 bg-[#FFF3E6] rounded-xl">
        <h3 className="text-xl font-medium text-[#464343] px-5 py-4">
          {"Recent User"}
        </h3>
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

export default DashboardHome;
