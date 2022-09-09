import React, {
  useEffect,
  useState,
  useReducer,
  useDeferredValue,
} from "react";
import Footer from "../../components/Footer";
import axios from "axios";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTodos = async () => {
    setLoading(true);
    await axios
      .get("https://dummyjson.com/todos")
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const td = response.data.todos.slice(0, 5);
          setTasks(td);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTodos();
  }, []);

  const defferedValue = useDeferredValue(tasks, {
    timeoutMs: 3000,
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
        return {
          todos: state.todos.map((todo) => {
            if (todo.id === action.id) {
              return { ...todo, complete: !todo.complete };
            } else {
              return todo;
            }
          }),
        };
      default:
        return state;
    }
  };
  // const initialTodos = tasks;

  const initialTodos = [
    {
      id: 1,
      title: "Todo 1: Do something nice for someone I care",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2: Contribute code or a monetary",
      complete: false,
    },
  ];

  const [state, dispatch] = useReducer(reducer, { todos: initialTodos });
  // console.log(state.todos);
  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  return (
    <>
      <div className="home__wrapper">
        <h1>Home page</h1>
      </div>
      {loading ? (
        <div>{defferedValue ? <h1>Loading...</h1> : ""}</div>
      ) : (
        tasks?.map((task) => (
          <div key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.complete}
                onChange={() => handleComplete(task)}
              />
              {task.todo}
            </label>
          </div>
        ))
      )}

      <h4>TODOS....</h4>
      {state.todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}

      <Footer />
    </>
  );
};
export default Home;
