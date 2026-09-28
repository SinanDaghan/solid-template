/* @refresh reload */
import 'virtual:uno.css';

import { App } from '@components/App';
import { routes } from '~/routes';

import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';

const root = document.querySelector('#root');

if (!root) throw new Error('root element not found');
else render(() => <Router root={App}>{routes}</Router>, root);
