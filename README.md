# UseEffect in React


### 1
* By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
* The idea to use useEffect hook is to execute code that needs happens during lifecycle of the component instead of on specific user interactions or DOM events.

### 2
* useEffect runs a function that is passed to it when something changes in dom
* But, we can pass a secound variable ie; a list of values, so that function runs only on change of those variables
```js
    useEffect(()=>{},[])
```
* if this list is empty, function is called just once when it mounts

### 3
* we can use state (```useState()```) with this hook, so that the function is called only when the ```setState()``` is called
* to do this add ```state``` variable to the list(2nd input in useEffect)

### 4
* return statement can be used to clean up the state
    ```
        useEffect(() => {
            effect
            return () => {
            cleanup
            }
        }, [input])
    ```
