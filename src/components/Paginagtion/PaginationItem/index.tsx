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
    return <button disabled>{number}</button>;
  }
  return <button onClick={() => onPageChange(number)}>{number}</button>;
};
export default PaginationItem;
