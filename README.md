# @neovici/cosmoz-tree-view

A tree of nested, expandable rows — the [Untitled UI tree view](https://www.untitledui.com/react/components/tree-views) as a web component, built with [pionjs](https://github.com/pionjs/pion) and lit-html.

- **Click a row to select it, click the chevron to expand it.** Double-click or <kbd>Enter</kbd> _activates_ a row (confirm, open, navigate — whatever your app means by it).
- **Fast on very large trees.** Only expanded branches are walked and rows are virtualized: a node with 274,000 children expands in under 100 ms and renders only the rows in view.
- **Accessible.** WAI-ARIA tree pattern: `role="tree"` / `treeitem` with `aria-level`, `aria-posinset`, `aria-setsize`, `aria-expanded` and `aria-selected`; one tab stop with roving focus; full keyboard support.
- **Any data shape.** Plain `{ id, label, children }` works as is; anything else plugs in through three accessors.
- **Design tokens only** (`--cz-*` from `@neovici/cosmoz-tokens`), light and dark.

```sh
npm install @neovici/cosmoz-tree-view
```

## Quick start

```js
import { html } from '@pionjs/pion';
import '@neovici/cosmoz-tree-view/cosmoz-tree-view';

const items = [
	{
		id: 'ica',
		label: 'Client ICA',
		children: [
			{ id: 'ica.north', label: 'Region North' },
			{ id: 'ica.south', label: 'Region South' },
		],
	},
	{ id: 'rexel', label: 'Client Rexel' },
];

html`<cosmoz-tree-view
	style="height: 320px"
	label="Organisation"
	.items=${items}
	@selected-changed=${(e) => console.log('selected', e.detail.value)}
	@activate=${(e) => console.log('activated', e.detail.id, e.detail.node)}
></cosmoz-tree-view>`;
```

> **Give the element a height.** The rows are virtualized, so the tree scrolls inside its own box and needs a size — a fixed `height`, or a flex/grid parent that sizes it.

## Modes

Each mode has a live, tested story in Storybook (`npm start`).

### Uncontrolled (default)

Set `items` and let the tree keep its own `selected` and `expanded` state. Listen to the events to follow along. You can still seed the initial state:

```js
html`<cosmoz-tree-view
	.items=${items}
	.expanded=${['ica']}
	.selected=${'ica.north'}
></cosmoz-tree-view>`;
```

Story: **Default**, **Keyboard**.

### Controlled

Own `selected` and/or `expanded` in your component. Call `preventDefault()` on the change event to stop the tree from updating itself, then pass your new value back down — the same contract as every pion `useProperty`.

```js
const [selected, setSelected] = useState('ica.hq');
const [expanded, setExpanded] = useState(['ica']);

html`<cosmoz-tree-view
	.items=${items}
	.selected=${selected}
	.expanded=${expanded}
	@selected-changed=${(e) => {
		e.preventDefault();
		setSelected(e.detail.value);
	}}
	@expanded-changed=${(e) => {
		e.preventDefault();
		setExpanded(e.detail.value);
	}}
></cosmoz-tree-view>`;
```

When `selected` changes from outside (or the tree first renders with one), the tree scrolls it into view, centred. Expand its ancestors too, or it has no row to show.

Story: **Controlled**.

### Custom data (accessors)

For data that isn't `{ id, label, children }`, pass accessors. They must be stable functions (define them once, not inline in the template), because the tree recomputes its rows when they change.

| Accessor      | Default                   | Returns                     |
| ------------- | ------------------------- | --------------------------- |
| `getId`       | `node.id`                 | a stable, unique string id  |
| `getLabel`    | `node.label ?? node.name` | the row text                |
| `getChildren` | `node.children`           | an array, or nothing (leaf) |

Example with `@neovici/cosmoz-tree` data (path locators as ids, `children` as an object map):

```js
const getId = (node) => node.pathLocator;
const getLabel = (node) => node.name;
const getChildren = (node) => tree.getChildren(node);

html`<cosmoz-tree-view
	.items=${tree._roots}
	.getId=${getId}
	.getLabel=${getLabel}
	.getChildren=${getChildren}
></cosmoz-tree-view>`;
```

The tree shows children in the order `getChildren` returns them. To sort, sort in the accessor — and cache the result per node so it is done once, not on every render (see `cosmoz-treenode-navigator` for an example). An empty array is a leaf.

Story: **CustomAccessors**.

### Icons

`renderIcon(node, state)` puts an icon before the label. `state` is `{ expanded, selected, hasChildren, level }`.

```js
import { building07Icon, folderIcon } from '@neovici/cosmoz-icons/untitled';

const renderIcon = (node, { hasChildren }) =>
	(hasChildren ? folderIcon : building07Icon)({ width: '16', height: '16' });

html`<cosmoz-tree-view
	.items=${items}
	.renderIcon=${renderIcon}
></cosmoz-tree-view>`;
```

Story: **WithIcons**.

### Sizes

`size="sm"` (default, 32px rows, `--cz-text-sm`) or `size="md"` (40px rows, `--cz-text-base`).

```html
<cosmoz-tree-view size="md"></cosmoz-tree-view>
```

Story: **Medium**.

### Very large trees

Nothing to configure. Children are only read when their parent is expanded, and only the rows in the viewport exist in the DOM — each still announces its true position (`aria-posinset` / `aria-setsize`).

Story: **HundredThousandChildren**.

### Empty

An empty `items` renders an empty `role="tree"`. Show your own empty state next to it.

Story: **Empty**.

## API

### Properties

| Property      | Attribute  | Type                                        | Default | Description                                |
| ------------- | ---------- | ------------------------------------------- | ------- | ------------------------------------------ |
| `items`       |            | `T[]`                                       |         | Root nodes                                 |
| `selected`    | `selected` | `string \| undefined`                       |         | Id of the selected node (two-way)          |
| `expanded`    |            | `string[]`                                  | `[]`    | Ids of expanded nodes (two-way)            |
| `size`        | `size`     | `'sm' \| 'md'`                              | `'sm'`  | Row size                                   |
| `label`       | `label`    | `string`                                    |         | Accessible name of the tree (`aria-label`) |
| `getId`       |            | `(node: T) => string`                       |         | See [accessors](#custom-data-accessors)    |
| `getLabel`    |            | `(node: T) => string`                       |         | See [accessors](#custom-data-accessors)    |
| `getChildren` |            | `(node: T) => T[] \| null \| undefined`     |         | See [accessors](#custom-data-accessors)    |
| `renderIcon`  |            | `(node: T, state: TreeViewRowState) => any` |         | See [icons](#icons)                        |

### Events

| Event              | `detail`           | When                                                                       |
| ------------------ | ------------------ | -------------------------------------------------------------------------- |
| `selected-changed` | `{ value: id }`    | A row is selected (click, <kbd>Space</kbd>). Cancelable.                   |
| `expanded-changed` | `{ value: ids[] }` | A row is expanded or collapsed (chevron, arrow keys). Cancelable.          |
| `activate`         | `{ id, node }`     | A row is double-clicked or <kbd>Enter</kbd> is pressed. Bubbles, composed. |

### Methods

| Method              | Description                                                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `focusActiveItem()` | Moves focus to the active row (the tree's tab stop) and scrolls it into view — e.g. on <kbd>↓</kbd> from a search field above the tree. |

The native `focus()` is not overridden.

### Keyboard

| Key                              | Action                                                          |
| -------------------------------- | --------------------------------------------------------------- |
| <kbd>↓</kbd> / <kbd>↑</kbd>      | Next / previous row                                             |
| <kbd>→</kbd>                     | Closed parent: expand. Open parent: first child. Leaf: nothing. |
| <kbd>←</kbd>                     | Open parent: collapse. Otherwise: go to the parent.             |
| <kbd>Home</kbd> / <kbd>End</kbd> | First / last row                                                |
| <kbd>Space</kbd>                 | Select the focused row                                          |
| <kbd>Enter</kbd>                 | Select and activate the focused row                             |

The tree is a single tab stop: the last focused row, else the selected row, else the first. Keys that don't move anything are left alone, so the page still scrolls at the ends.

### Styling

Use the CSS parts; there are no component-specific custom properties.

| Part      | Element                                      |
| --------- | -------------------------------------------- |
| `tree`    | The scrolling container (`role="tree"`)      |
| `row`     | A row (`role="treeitem"`), full width        |
| `guide`   | An indent guide line, one per ancestor level |
| `content` | The highlighted part of a row                |
| `toggle`  | The chevron                                  |
| `icon`    | The icon wrapper (when `renderIcon` is set)  |
| `label`   | The row text                                 |

```css
cosmoz-tree-view::part(label) {
	font-variant-numeric: tabular-nums;
}
```

## Pure helpers

The row logic is exported for reuse and testing:

```js
import { flatten, keyAction, toggleId } from '@neovici/cosmoz-tree-view';

flatten(items, new Set(['ica']), { getId, getChildren }); // visible rows
keyAction(rows, index, 'ArrowRight'); // { type: 'expand', id } | { type: 'focus', index } | …
toggleId(['ica'], 'rexel'); // ['ica', 'rexel']
```

## Development

```sh
npm start          # Storybook on :8000
npm test           # unit (jsdom) + story play-tests (Chromium)
npm run lint
npm run build
```
