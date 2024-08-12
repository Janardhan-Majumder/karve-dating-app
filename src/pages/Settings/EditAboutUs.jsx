import { Button } from "antd";
import { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const EditAboutUs = () => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const placeholder = "Enter your update about us...";
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
      height: "70vh",
      background: "#FF8400",
    }),
    [placeholder]
  );
  console.log(content);
  return (
    <div className="min-h-full flex flex-col justify-between">
      <div className="space-y-4 ">
        <div className="flex items-center gap-1.5">
          <button onClick={() => navigate("/settings/about-us")}>
            <LiaArrowLeftSolid size={26} />
          </button>
          <h6 className="text-2xl font-medium">Edit About Us</h6>
        </div>
        <div>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => {
              setContent(newContent);
            }}
            config={config}
            tabIndex={1}
          />
        </div>
      </div>
      <div className="flex justify-end pt-10">
        <Button
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
