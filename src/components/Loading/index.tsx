import { LoadingContainer } from "./style";

interface LoadingProps {
  size?: number;
}

const Loading = ({ size }: LoadingProps) => {
  return (
    <LoadingContainer>
      <div
        style={{
          width: size ? `${size}px` : "50px",
          height: size ? `${size}px` : "50px",
        }}
      ></div>
    </LoadingContainer>
  );
};

export default Loading;
