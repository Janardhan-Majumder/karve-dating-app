import React, { useState } from "react";
import usersImg from "../../../assets/images/users-img.png";
import { Button, Skeleton, Space, Table, Tag } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import UserDetailsModal from "../../../Components/UserDetailsModal";
import {
  useGetAllUserQuery,
  useGetUserStatusQuery,
} from "../../../redux/features/Users/userApi";
import LoaderWraperComp from "../../../Components/LoaderWraperComp";

const DashboardHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const { data: statusData } = useGetUserStatusQuery();
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
      name: "sortby",
      value: "desc",
    }
  ]);
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
        <p>{(1 - 1) * 15 + index + 1}</p>
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
    // {
    //   title: "Online",
    //   key: "online",
    //   render: (_, record) => (
    //     <p>
    //       {record.isOnline ? (
    //         <span className="text-yellow-400">Active</span>
    //       ) : (
    //         <span className="text-gray-400">In-Active</span>
    //       )}
    //     </p>
    //   ),
    // },
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
  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     email: "subro@gmal.com",
  //     phone: "+880 158448484",
  //     joinDate: "16 Apr 2024",
  //     _id: "12112121",
  //   },
  //   {
  //     key: "2",
  //     name: "John Brown",
  //     email: "subro@gmal.com",
  //     phone: "+880 158448484",
  //     joinDate: "16 Apr 2024",
  //     _id: "12112121",
  //   },
  //   {
  //     key: "3",
  //     name: "John Brown",
  //     email: "subro@gmal.com",
  //     phone: "+880 158448484",
  //     joinDate: "16 Apr 2024",
  //     _id: "12112121",
  //   },
  //   {
  //     key: "4",
  //     name: "John Brown",
  //     email: "subro@gmal.com",
  //     phone: "+880 158448484",
  //     joinDate: "16 Apr 2024",
  //     _id: "12112121",
  //   },
  // ];
  return (
    <div className="space-y-5">
      {statusData?.data ? (
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 bg-[#FFF3E6] flex items-center gap-5 px-8 py-6 rounded-xl border-2 border-[#FFD9B0]">
            <div>
              <img src={usersImg} alt="" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-medium">{"Total User"}</h3>
              <h3 className="text-3xl font-medium text-[#FF8400]">
                {statusData?.data?.totalUserCount}
              </h3>
            </div>
          </div>
          <div className="col-span-6 bg-[#FFF3E6] flex items-center gap-5 px-8 py-6 rounded-xl border-2 border-[#FFD9B0]">
            <div>
              <img src={usersImg} alt="" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-medium">{"Recent User"}</h3>
              <h3 className="text-3xl font-medium text-[#FF8400]">
                {statusData?.data?.recentUserCount}
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-10 h-[130px] mb-6">
          <Skeleton
            className="col-span-6 items-center"
            loading={true}
            active
            avatar
          />
          <Skeleton
            className="col-span-6 items-center"
            loading={true}
            active
            avatar
          />
        </div>
      )}
      <div className="bg-[#FFF3E6] rounded-xl">
        <h3 className="text-xl font-medium text-[#464343] px-5 py-4">
          {"Recent User"}
        </h3>
        <LoaderWraperComp isError={isError}>
          <Table
            columns={columns}
            dataSource={userData?.data?.users}
            loading={isLoading}
            // pagination={{
            //   position: ["bottomCenter"],
            //   current: currentPage,
            //   onChange: (page) => {
            //     setCurrentPage(page);
            //   },
            //   total: userData?.data?.pagination?.totalData,
            //   pageSize: 15,
            // }}
            pagination={false}
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

export default DashboardHome;
