import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async Component', () => {
    test('renders post if request succeeds', async () => {
        //Arrange
        render(<Async />);

        //Act
        //will be done in the component itself

        //Assert
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});


