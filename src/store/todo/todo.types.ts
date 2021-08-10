export type Todo = {
    id: string;
    text: string;
}

export type InitialState = {
    list:      Array<Todo>;
    isLoading: boolean;
    error:     null|Object;
    // Pagination
    skip:      number;
    take:      number;
    total:     number;
}

export type FetchTodoPayload = {
    skip: number;
    take: number;
}

export type FetchTodoSuccessPayload = {
    list: Array<Todo>;
}
