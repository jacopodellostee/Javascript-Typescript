# Abracadabra

This README will explain the solution inside the 3 directory above

## **First File (Using `split()` and `join()`)**

```javascript
    const str = "Abracadabra"; 

    const arr = str.split(""); 

    arr[3] = "X"; 

    const newStr = arr.join(""); 

    console.log(newStr); 
```
### **Explanation**

1. **`split("")`** splits the string into an array of characters:  

   ```javascript
    ["A", "b", "r", "a", "c", "a", "d", "a", "b", "r", "a"]
   ```

2. The element at **index 3** is changed (`"a" → "X"`).

3. **`join("")`** reassembles the array into a modified string:  
   **Output → `"AbrXcadabra"`**

---

## **Second File (Using `substring()`)**

```javascript
    const str = "Abracadabra"; 

    const newStr = str.substring(0, 3) + "X" + str.substring(4);

    console.log(newStr); 
```
### **Explanation**

1. **`substring(0, 3)`** extracts the first three characters: `"Abr"`

2. `"X"` is added.

3. **`substring(4)`** extracts the rest of the string after the fourth character: `"cadabra"`

4. All parts are concatenated to get:  
   **Output → `"AbrXcadabra"`**
---

## **Third File (Using `slice()` and Template Literals)**

```javascript
    const str = "Abracadabra"; 

    const newStr = `${str.slice(0, 3)}X${str.slice(4)}`;

    console.log(newStr); 
```

### **Explanation**

1. **`slice(0, 3)`** extracts the first three characters: `"Abr"`

2. `"X"` is added.

3. **`slice(4)`** extracts the rest of the string after the fourth character: `"cadabra"`

4. **Template literals (`${}`)** are used to concatenate everything.
---

### **Comparison of the Three Methods**

| Method       | Advantages | Disadvantages |
|-------------|------------|---------------|
| `split()` + `join()` | Easy to understand, flexible | Less efficient, uses a temporary array |
| `substring()` | Efficient, avoids temporary arrays | Less readable with many concatenations |
| `slice()` + Template Literals | Modern, readable | Similar to `substring()`, but less familiar to beginners |

All three methods produce the same result: **`"AbrXcadabra"`** 