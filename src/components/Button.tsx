import { useState }                       from "react";
import { FC }                             from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { fetch }                          from "../store/todo";

export const Button: FC = () => {
    const { list } = useAppSelector((store) => store.todo);
    const dispatch = useAppDispatch();
    console.log("|||======||| ~ file: Button.tsx ~ line 7 ~ list", list);
    const [ count, setCount ] = useState(0);

    return (
        <div>
            <p>Count super fast: {count}</p>
            <button onClick = { () => setCount((state) => state + 1) }>Add</button>
            <button onClick = { () =>  dispatch(fetch({ skip: 0, take: 0 })) }>Fetch</button>
        </div>
    );
};
