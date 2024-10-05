import { Button } from "antd";
import { useEffect, useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import {
  useGetAboutsQuery,
  useUpdateAboutsMutation,
} from "../../redux/features/settings/settingApi";
import Swal from "sweetalert2";
import LoaderWraperComp from "../../Components/LoaderWraperComp";

const EditAboutUs = () => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const { data, isError, isLoading } = useGetAboutsQuery([]);
  const [mutation, { isLoading: isPostLoading }] = useUpdateAboutsMutation();
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(data?.data?.content);
  }, [data?.data]);

  const handleUpdate = async () => {
    try {
      const res = await mutation({
        content,
      });
      // console.log(res);
      if (res?.data?.status == "success") {
        navigate(-1);
        Swal.fire({
          // position: "top-center",
          icon: "success",
          title: "Update success!",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error...",
          text:
            response?.data?.message ||
            res?.error?.data?.message ||
            "Something went wrong!!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Something went wrong!!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };
  const placeholder = "Enter your update terms & conditions...";
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
      height: "70vh",
    }),
    [placeholder]
  );
  return (
    <div className="min-h-full flex flex-col justify-between">
      <div className="space-y-4 ">
        <div className="flex items-center gap-1.5">
          <button onClick={() => navigate(-1)}>
            <LiaArrowLeftSolid size={26} />
          </button>
          <h6 className="text-2xl font-medium">Edit Abouts</h6>
        </div>
        <LoaderWraperComp
          isLoading={isLoading}
          isError={isError}
          dataEmpty={!data?.data?.content}
          height={"h-[55vh]"}
        >
          <div className="">
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => {
                setContent(newContent);
              }}
              className="text-wrap"
              config={config}
              tabIndex={1}
            />
          </div>
        </LoaderWraperComp>
      </div>
      <div className="flex justify-end pt-10">
        <Button
          disabled={isPostLoading}
          onClick={handleUpdate}
          style={{
            backgroundColor: "#FF8400",
            color: "white",
          }}
          className="w-[484px] h-[60px] py-3 rounded-lg text-[18px] font-medium  duration-200"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditAboutUs;
