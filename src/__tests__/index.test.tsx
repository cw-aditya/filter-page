import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import BudgetFilter from '@/components/BudgetFilter.component'
import FuelFilter from '@/components/FuelFilter.component';
import MainContent from '@/components/mainContent.component';
import Card from '@/components/Card.component';
import AllContexts from '@/components/AllContexts.component';

// describe('A truthy statement', () => {
//     it('renders the App component', () => {
//         render(<App/>)

//         // screen.debug(); // prints out the jsx in the App component unto the command line
//       })
// })

// jest.mock('fs', () => ({
//   promises: {
//     access: jest.fn()
//   }
// }));



describe("Budget Filter Component Test", () => {
  const setup = () => {
    return render(
      <AllContexts>
        <BudgetFilter />
      </AllContexts>
    )
  }

  test("Should Contain 2 input numbers", () => {
    setup()
    const inputs = screen.getAllByRole('spinbutton')
    expect(inputs).toHaveLength(2)
  })
  test("Should Render 2 input numbers", () => {
    setup()
    const inputs = screen.getAllByRole('spinbutton')
    inputs.forEach(element => {
      expect(element).toBeInTheDocument()
      
    });
  })
  test("Should handle user Event input numbers", async () => {
    setup()
    const input = screen.getAllByRole('spinbutton')[0]
    expect(input).toHaveValue(0)
    await userEvent.type(input, '1')
    expect(input).toHaveValue(1)
  })
  test("Should handle user Event min should not excced max", async () => {
    setup()
    const input_min = screen.getAllByRole('spinbutton')[0]
    const input_max = screen.getAllByRole('spinbutton')[1]
    expect(input_min).toHaveValue(0)
    expect(input_max).toHaveValue(21)
    await userEvent.type(input_min, '22')
    expect(input_min).toHaveValue(2)
  })
  test("Budget Component Snapshot", () => {
    const component = setup();
    expect(component).toMatchSnapshot();
  });
})

describe('Fuel Filter Component', () => {
  const setup = () => {
    return render(
      <AllContexts>
        <FuelFilter />
      </AllContexts>
    )
  }
  test('Should Contain 6 Checkboxes', () => {
    setup()
    const inputs = screen.getAllByRole('checkbox')
    expect(inputs).toHaveLength(6)
  });
  test('Should Render 6 Checkboxes', () => {
    setup()
    const inputs = screen.getAllByRole('checkbox')
    inputs.forEach(element => {
      expect(element).toBeInTheDocument()
    });
  });
  test('Should Update when input changes', async () => {
    setup()
    const input = screen.getAllByRole('checkbox')[0]
    await userEvent.click(input)
    expect(input).toBeChecked()
  });
  test("Fuel Filter Component Snapshot", () => {
    const component = setup();
    expect(component).toMatchSnapshot();
  });
})


describe('Main Component Tests', () => {

  const setup = () => {
    return render(
      <AllContexts>
        <MainContent />
      </AllContexts>
    )
  }

  test('Should render sort by filter', () => {
    setup()
    const sortByFilter = screen.getByRole('combobox')
    expect(sortByFilter).toBeInTheDocument()
  });
  test('Should have 3 filter options', () => {
    setup()
    const sortByFilterOptions = screen.getAllByRole('option')
    expect(sortByFilterOptions).toHaveLength(3)
  });
  test('Should render sort by filter options', () => {
    setup()
    const sortByFilterOptions = screen.getAllByRole('option')
    sortByFilterOptions.forEach(element => {
      expect(element).toBeInTheDocument()
    });
  });
  test("Main Component Snapshot", () => {
    const component = setup();
    expect(component).toMatchSnapshot();
  });
});

describe('Car Card Component Test', () => {
  const setup = () => {
    const props = {
      imageUrl: 'https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/usedcar/no-car-image-with-text.svg',
      carName: 'Some Car Name',
      km: 50000,
      fuel: 'Petrol',
      cityName: 'Mumbai',
      price: '5 Lakh',
      emiText: 'EMI Starts at ₹4,751'
    }
    return render(
      <AllContexts>
        <Card car={props} />
      </AllContexts>
    )
  }
  test('Should render car name & price', () => {
    setup()
    const heading = screen.getAllByRole('heading')
    heading.forEach(element => {
      expect(element).toBeInTheDocument()
    });
  });
  test('Should render car image', () => {
    setup()
    const image = screen.getByAltText('Car image not available')
    // console.log(image);

    expect(image).toBeInTheDocument()
  });
  test("Card Component Snapshot", () => {
    const component = setup();
    expect(component).toMatchSnapshot();
  });

});

