# my-button

`my-button` is a wrapper component for a native button applying specific visuals and functionality.

In reality this is just to show-case the author's capability of writing good Stencil components 😁

<!-- Auto Generated Below -->


## Usage

### Basic

```html
<my-button>Descriptive Label</my-button>
```


### Disabled

```html
<my-button disabled>This is a disabled button</my-button>
```


### Loading

```html
<my-button loading>This is a loading button</my-button>
```


### No-label

```html
<my-button aria-label="This is a descriptive label">💨</my-button>
```

In case the button is used _without_ passed in text, it's crucial to provide an `aria-label` for screen-readers to describe the button.



## Properties

| Property   | Attribute  | Description                                                           | Type      | Default |
| ---------- | ---------- | --------------------------------------------------------------------- | --------- | ------- |
| `disabled` | `disabled` | Sets the disabled state of the component                              | `boolean` | `false` |
| `loading`  | `loading`  | Displays the button as loading (visually and omitting pointer events) | `boolean` | `false` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
