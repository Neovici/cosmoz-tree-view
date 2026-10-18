# @neovici/cosmoz-tree-view

## 1.0.0

### Major Changes

- 61f2cb8: First release of `cosmoz-tree-view`: a tree of nested, expandable rows after the Untitled UI tree view. Click to select, chevron to expand, double-click or Enter to activate; full WAI-ARIA tree keyboard support; only expanded branches are walked and rows are virtualized, so trees with hundreds of thousands of nodes stay fast. Controlled or uncontrolled `selected` / `expanded`, custom data accessors, optional icons, `sm` / `md` sizes, CSS parts for styling.

### Minor Changes

- 61f2cb8: Allow a hasChildren accessor to expose branches before their children have loaded. Right Arrow waits for an expanded branch's first child instead of focusing the next sibling while loading.

  Keep a keyboard entry point when scrolling virtualizes the active row away, and synchronize focus with external selection changes.
