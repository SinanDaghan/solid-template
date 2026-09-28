import { Nav } from '@components/Nav';

import type { RouteSectionProps } from '@solidjs/router';

const App = (props: RouteSectionProps) => (
  <>
    <Nav />
    {props.children}
  </>
);

export { App };
