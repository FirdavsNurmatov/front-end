import { useLocation } from "react-router-dom";
import { Form } from "../../components/form";
import { useGetSingleTodo } from "../../service/query/useGetSingleTodo";

export const EditTodo = () => {
  const location = useLocation();
  const { id } = location.state || {};

  const { data } = useGetSingleTodo(id);

  return (
    <div className="container">
      <Form data={data} />
    </div>
  );
};
