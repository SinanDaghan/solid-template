import { routes } from '~/routes';

import { A } from '@solidjs/router';
import { For } from 'solid-js';

const Nav = () => (
  <nav>
    <ul>
      <For each={routes}>
        {({ path, name }) => (
          <li>
            <A href={path}>{name}</A>
          </li>
        )}
      </For>
    </ul>
  </nav>
);

export { Nav };
