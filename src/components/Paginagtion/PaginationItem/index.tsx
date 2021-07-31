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
  if (isCurrent) {
    return <StyledButton isActive={isCurrent}>{number}</StyledButton>;
  }
  return (
    <StyledButton isActive={!!isCurrent} onClick={() => onPageChange(number)}>
      {number}
    </StyledButton>
  );
};
export default PaginationItem;
