# useState
### 1
* useUse state must always run in same exact order
* we cannot use an if else statement before useState

### 2
* useState always return an array
* the first variable in this array will be the state
* secound thing in the array will be the function to update the state
* destructuring eg: ``` const [state, setState] = useState()```
* useState can be initialised with a default state eg: useState(2)

### 3
* we can use state inside html as jsx to show values
* and we can use setState to update the state value and react will rerender the page

### 4
* ```prevState``` is another react hook which can passed on to setState to modify state

### 5
* we can use multipple useStates to manage multipple states

### 6
* we can pass a function to useState so that the functuon only run once when the page render
