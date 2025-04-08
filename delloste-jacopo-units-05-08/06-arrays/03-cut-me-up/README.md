# Array Methods: `slice()` vs `splice()`

### `slice()`

- **Purpose**: Returns a shallow copy of a portion of an array into a new array, without modifying the original array.

- **Parameters**:

  + `start`: The index at which to begin extraction.

  + `end`: The index before which to end extraction (optional). If omitted, it slices until the end of the array.

- **Returns**: A new array with the selected elements.


```javascript
    let fruits = ['apple', 'banana', 'cherry', 'orange', 'grape'];

    let slicedFruits = fruits.slice(1, 4);
    console.log(slicedFruits); // ['banana', 'cherry', 'orange']
    console.log(fruits); // ['apple', 'banana', 'cherry', 'orange', 'grape'] (the original array remain unchanged)
```

### `splice()`

- **Purpose**: Changes the contents of an array by removing, replacing, or adding elements in place.

- **Parameters**:

  + `start`: The index at which to start changing the array.

  + `deleteCount`: The number of elements to remove from start (optional).

  + `item1, item2, /* ... */ itemN`: Items to add to the array (optional).

- **Returns**: An array containing the deleted elements.


```javascript
    let fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

    // Example of splice()
    let splicedFruits = fruits.splice(1, 2, 'kiwi', 'mango');
    console.log(splicedFruits); // ['banana', 'cherry'] (removed elements)
    console.log(fruits); // ['apple', 'kiwi', 'mango', 'date', 'fig'] (the original array will be modified)
```

---

## Summary of Differences

| Feature                  | `slice()`                                    | `splice()`                                    |
|--------------------------|----------------------------------------------|----------------------------------------------|
| **Effect on original array** | Does **not** modify the original array      | **Modifies** the original array              |
| **Purpose**              | Extracts a section into a new array           | Removes/replace/adds elements in the array   |
| **Return value**         | New array with selected elements              | Array of removed elements                    |
| **Parameters**           | `start`, `end` (optional)                     | `start`, `deleteCount` (optional), `items` (optional) |
| **Use Case**             | Non-destructive sub-array extraction          | Destructive manipulation (remove/insert)     |
