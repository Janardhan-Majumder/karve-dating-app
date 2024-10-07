import React from "react";
import { Modal } from "antd";
import { IoMdClose } from "react-icons/io";

const UserDetailsModal = ({ isModalOpen, setIsModalOpen, userDetails }) => {
  //   const handleOk = () => {
  //     setIsModalOpen(false);
  //   };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title={null}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      closeIcon={false}
    >
      <div className="h-[560px]">
        <button
          onClick={handleCancel}
          type="primary"
          danger
          className="absolute top-0 right-0 text-white bg-[#EB5757] shadow-inner px-2.5 py-2 rounded-none rounded-bl-xl rounded-tr-md"
        >
          <IoMdClose size={23} />
        </button>
        <div className="space-y-10 p-4 text-sm text-[#222222]">
          <h6 className="font-medium text-center">User Details</h6>
          <div className="flex justify-between">
            <p>User Name</p>
            <p className="font-medium">{userDetails.name}</p>
          </div>
          <div className="flex justify-between">
            <p>Email</p>
            <p className="font-medium">{userDetails.email || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <p>Phone Number</p>
            <p className="font-medium">{userDetails.phone}</p>
          </div>
          <div className="flex justify-between">
            <p>Address</p>
            <p className="font-medium">{"Dhaka, Bangladesh"}</p>
          </div>
          <div className="flex justify-between">
            <p>Joining Date</p>
            <p className="font-medium">{new Date(userDetails.createdAt).toDateString()}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserDetailsModal;
