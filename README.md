<h1 align="center">Undo Nest</h1>

## Undo Nest, is a JavaScript Library for dealing with nested values

<p align="center">

<img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" >
<img src="https://badges.frapsoft.com/os/mit/mit.svg?v=103" >
<img src="https://badges.frapsoft.com/typescript/love/typescript.svg?v=103" >

</p>

## Installation

Using the package manager Yarn to install undo-nested.

```bash
yarn add undo-nested
```

Using the package manager npm to install undo-nested.

```bash
npm install undo-nested
```

## Usage

```javascript
import { undoNested } from 'undo-nested'

undoNested([1, [2, 3], [[4]]]) # returns [1, 2, 3, 4]
undoNested({name: 'Rick Sanchez', family: { name: 'Morty Smith' }}) # returns ['Rick Sanchez', 'Morty Smith']
undoNested(['Rick Sanchez', {age: 70}]) # returns ['Rick Sanchez', 70]

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
