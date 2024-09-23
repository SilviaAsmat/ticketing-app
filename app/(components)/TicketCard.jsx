import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./Priority";
import ProgressDisplay from "./ProgressDisplay";

const TicketCard = () => {
  return (
    <div>
      <DeleteBlock />
      <PriorityDisplay />
      <ProgressDisplay />
    </div>
  );
};

export default TicketCard;
