import useWindowSize from "../../../hooks/useWindowSize";
import { StyledButton } from "./style";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

const PaginationItem = ({
  number,
  onPageChange,
  isCurrent = false,
}: PaginationItemProps) => {
  const widthPage: Array<number> = useWindowSize();
  const widthMobile = widthPage[0] <= 768;

  function handleWindowScrollTop() {
    if (!widthMobile) {
      window.scrollTo({
        top: 1150,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  if (isCurrent) {
    return <StyledButton isActive={isCurrent}>{number}</StyledButton>;
  }
  return (
    <StyledButton
      isActive={!!isCurrent}
      onClick={() => {
        onPageChange(number);
        handleWindowScrollTop();
      }}
    >
      {number}
    </StyledButton>
  );
};
export default PaginationItem;
