import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<App/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('4');
    
  })

  it('should sum numbers', () => {
    const num1 = container.getByTestId("number1");
    const num2 = container.getByTestId("number4")
    const operator = container.getByTestId("add")
    const equals = container.getByTestId("equals")
    const clicks = [num1, operator, num2, equals]
    clicks.forEach(click => fireEvent.click(click))
    const runningTotal=container.getByTestId("running-total")
    expect(runningTotal).toHaveTextContent('5');
  })

  it('should subtract numbers', () => {
    const num1 = container.getByTestId("number7");
    const num2 = container.getByTestId("number4")
    const operator = container.getByTestId("subtract")
    const equals = container.getByTestId("equals")
    const clicks = [num1, operator, num2, equals]
    clicks.forEach(click => fireEvent.click(click))
    const runningTotal=container.getByTestId("running-total")
    expect(runningTotal).toHaveTextContent('3');
  })

  it('should multiply numbers', () => {
    const num1 = container.getByTestId("number3");
    const num2 = container.getByTestId("number5")
    const operator = container.getByTestId("multiply")
    const equals = container.getByTestId("equals")
    const clicks = [num1, operator, num2, equals]
    clicks.forEach(click => fireEvent.click(click))
    const runningTotal=container.getByTestId("running-total")
    expect(runningTotal).toHaveTextContent('15');
  })

  it('should divide numbers', () => {
    const num1 = container.getByTestId("number2");
    const num2 = container.getByTestId("number1")
    const num3 = container.getByTestId("number7")
    const operator = container.getByTestId("divide")
    const equals = container.getByTestId("equals")
    const clicks = [num1, num2, operator, num3, equals]
    clicks.forEach(click => fireEvent.click(click))
    const runningTotal=container.getByTestId("running-total")
    expect(runningTotal).toHaveTextContent('3');
  })

  it('should concatenate numbers', () => {
    const num1 = container.getByTestId("number3");
    const num2 = container.getByTestId("number5")
    const clicks = [num1, num2]
    clicks.forEach(click => fireEvent.click(click))
    const runningTotal=container.getByTestId("running-total")
    expect(runningTotal).toHaveTextContent('35');
  })

  it('should chain multiple operations together', () => {
    const num1 = container.getByTestId("number2");
    const num2 = container.getByTestId("number5")
    const num3 = container.getByTestId("number4")
    const operator1 = container.getByTestId("add")
    const operator2 = container.getByTestId("subtract")
    const equals = container.getByTestId("equals")
    const clicks = [num1, operator1, num2, equals, operator2, num3, equals]
    clicks.forEach(click => fireEvent.click(click))
    const runningTotal=container.getByTestId("running-total")
    expect(runningTotal).toHaveTextContent('3');
  })
})

