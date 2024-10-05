import { Grid } from "react-loader-spinner";
import { Empty } from "antd";
import { cn } from "../lib/utils";

const LoaderWraperComp = ({
  isLoading,
  isError,
  className,
  dataEmpty = false,
  children,
}) => {
  if (isLoading || isError || dataEmpty) {
    return (
      <div
        className={cn(
          `h-[50vh] w-full flex flex-col justify-center items-center`,
          className
        )}
      >
        {isLoading ? (
          <>
            <Grid
              visible={true}
              height="70"
              width="70"
              color="#81649e"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass="grid-wrapper"
            />
          </>
        ) : isError ? (
          <h1 className="text-red-400">Something want wrong!</h1>
        ) : (
          <h1 className="text-green-400">
            {isError ? isError : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
          </h1>
        )}
      </div>
    );
  }
  return children;
};

export default LoaderWraperComp;
