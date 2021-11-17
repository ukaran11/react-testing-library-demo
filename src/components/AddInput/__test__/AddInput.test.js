import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn()

describe('AddInput', () => {
    it("should render input element", async () => {
        render(
            <AddInput
                todos={[]}
                setTodos = {mockedSetTodo}
            />
        );

        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    })

    it("should render input element", async () => {
        render(
            <AddInput
                todos={[]}
                setTodos = {mockedSetTodo}
            />
        );

        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    }) 
})
