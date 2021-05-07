import { useSelector } from "react-redux";
import { memo } from "react";
import GiveSeedToFarmers from "./GiveSeedToFarmers";
import { Draggable, Droppable } from "react-beautiful-dnd";
import DeleteSeed from "./DeleteSeed";

function ReadSeeds({ id }) {
  const seeds = useSelector((state) => {
    return state.farmReducer.crops.filter((el) => {
      if (id === el.crops_id) {
        return el;
      }
    });
  });

  return (
    <>
      <Droppable droppableId={`Crops${id}`}>
        {(provided, snapshot) => {
          return (
            <div ref={provided.innerRef}>
              {console.log(seeds[0].Seeds)}
              {seeds[0].Seeds.map((el, idx) => (
                <Draggable
                  key={idx}
                  draggableId={`${el.seed_id}`}
                  index={el.seed_id}
                >
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="Seed_Board"
                        key={idx}
                      >
                        <span className="Seed_Name">{el.seed_name}</span>
                        <DeleteSeed
                          seedId={el.seed_id}
                          cropsId={id}
                        ></DeleteSeed>
                      </div>
                    );
                  }}
                </Draggable>
              ))}
            </div>
          );
        }}
      </Droppable>
    </>
  );
}

export default memo(ReadSeeds);
