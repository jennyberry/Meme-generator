## About this project

A part of React course from Scrimba

## demo site

![Demo Site](./public/demo1.png)

## What I learn while building this project

##### Event listeners

Mouse event:

- onClick
- onChange

##### State:

React.useState() used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these.

**Example**:

- New value of state

```javascript
const [name, setName] = React.useState("Danny");
///update state:
setName("Jolie");
```

- Callback function - what ever the call back function return === new value of state

```javascript
function Profile() {
  const [user, setUser] = React.useState({
    userName: "gaming",
    email: "game1@red.com",
    password: "1234",
  });

  ///Update object
  const updateProfile = () => {
    setUser((prevUser) => {
      return {
        ...prevUser, //pull the current data in the object
        userName: "halsey",
      };
    });
  };
  return (
    <>
      <h1>Welcome {user.userName}</h1>
      <button type="button" onClick={updateProfile}>
        Update profile
      </button>
    </>
  );
}
```

##### Conditional rendering:

```
{truthy statement ? "ifTrue" : "ifFalse"}
{truthy statement && "display something"}
```

##### Forms:

Data is held in local state as the form is being filled out.

`name` property should match the property name being held in state for that input.

A checkbox uses the `checked` property to determine what should be shaced in state. Other form elements use the `value` instead.

Trigger a form submit by onSibmit handler on the `form` elememt.

##### Side effect: Any code that affects an outside system

```
React.useEffect(<function>, <dependency>)
```

Dependencies array is optional. It is a second parameter to the useEffect func and is a way for React to know whether it should re-run the effect function.

useEffect takes a function as its parameter. If that function
returns something, it needs to be a cleanup function. Otherwise,
it should return nothing.

**Example:**

Some effects require cleanup to reduce memory leaks.

```java
useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);
```
