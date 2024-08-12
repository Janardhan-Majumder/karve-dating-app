import { Button } from "antd";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center gap-1.5">
          <button onClick={() => navigate("/settings")}>
            <LiaArrowLeftSolid size={26} />
          </button>
          <h6 className="text-2xl font-medium">Privacy Policy</h6>
        </div>
        <div className="space-y-4 ">
          <p>
            Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci.
            Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis
            aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis
            habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan
            vehicula imperdiet mattis. Neque a vitae diam pharetra duis
            habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum
            nisl magnis convallis arcu enim tortor. Cursus a sed tortor enim mi
            imperdiet massa donec mauris. Sem morbi morbi posuere faucibus. Cras
            risus ultrices duis pharetra sit porttitor elementum sagittis
            elementum. Ut vitae blandit pulvinar fermentum in id sed. At
            pellentesque non semper eget egestas vulputate id volutpat quis.
            Dolor etiam sodales at elementum mattis nibh quam placerat ut.
            Suspendisse est adipiscing proin et. Leo nisi bibendum donec ac non
            eget euismod suscipit. At ultricies nullam ipsum tellus. Non dictum
            orci at tortor convallis tortor suspendisse. Ac duis senectus arcu
            nullam in suspendisse vitae. Tellus interdum enim lorem vel morbi
            lectus.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci.
            Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis
            aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis
            habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan
            vehicula imperdiet mattis. Neque a vitae diam pharetra duis
            habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum
            nisl magnis convallis arcu enim tortor. Cursus a sed tortor enim mi
            imperdiet massa donec mauris. Sem morbi morbi posuere faucibus. Cras
            risus ultrices duis pharetra sit porttitor elementum sagittis
            elementum. Ut vitae blandit pulvinar fermentum in id sed. At
            pellentesque non semper eget egestas vulputate id volutpat quis.
            Dolor etiam sodales at elementum mattis nibh quam placerat ut.
            Suspendisse est adipiscing proin et. Leo nisi bibendum donec ac non
            eget euismod suscipit. At ultricies nullam ipsum tellus. Non dictum
            orci at tortor convallis tortor suspendisse. Ac duis senectus arcu
            nullam in suspendisse vitae. Tellus interdum enim lorem vel morbi
            lectus.
          </p>
        </div>
      </div>
      <div className="flex justify-end pt-10">
        <Button
          onClick={() => navigate("/settings/edit-privacy-policy")}
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
export default PrivacyPolicy;
