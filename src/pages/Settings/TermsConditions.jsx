import { Button } from "antd";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import LoaderWraperComp from "../../Components/LoaderWraperComp";
import { useGetTermsQuery } from "../../redux/features/settings/settingApi";

const TermsConditions = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading } = useGetTermsQuery(undefined);
  const content = "This is Terms & Conditions content";
  return (
    <div className="min-h-full flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center gap-1.5">
          <button onClick={() => navigate("/settings")}>
            <LiaArrowLeftSolid size={26} />
          </button>
          <h6 className="text-2xl font-medium">Terms & Conditions</h6>
        </div>
        <LoaderWraperComp
          isLoading={isLoading}
          isError={isError}
          dataEmpty={!data?.data?.content}
          height={"h-[63vh]"}
        >
          <div
            className=" text-justify bg-secondary mt-[24px] h-[60vh] overflow-y-auto border-2 border-[#FFF3E6] rounded-md p-4"
            dangerouslySetInnerHTML={{ __html: data?.data?.content || content }}
          ></div>
        </LoaderWraperComp>
      </div>
      <div className="flex justify-end pt-10">
        <Button
          onClick={() => navigate("/settings/edit-terms-conditions")}
          style={{
            backgroundColor: "#FF8400",
            color: "white",
          }}
          className="w-[484px] h-[60px] py-3 rounded-lg text-[18px] font-medium  duration-200"
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default TermsConditions;
