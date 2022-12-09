import React from "react";

type TodoItemProp = {
  id: number;
  content: string;
  isCompleted: boolean;
  toggleStatus:(id:number)=>void;
};

const TodoItem = ({ id, content, isCompleted ,toggleStatus}: TodoItemProp) => {
  console.log("TodoItem")
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      onClick={()=>toggleStatus(id)}   
    >
      <div>
        {content} - {isCompleted ? "Done" : "Not Done"}
      </div>
    </div>
  );
};
export default React.memo(TodoItem);
// (prev,next)=>{
//   if(
//     prev.id!==next.id||
//     prev.isCompleted!==next.isCompleted || 
//     prev.content !== next.content)
//     {

//       return false
//     }
//     return true
 
// }
