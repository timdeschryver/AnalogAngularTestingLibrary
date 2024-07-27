import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import HomeComponent from './index.page';

test('counter click increments the count', async () => {
  const user = userEvent.setup();
  await render(HomeComponent)
  const button = screen.getByRole('button', {name: /count 0/i});

  await user.click(button);

  expect(button).toHaveTextContent(/count 1/i);
});
