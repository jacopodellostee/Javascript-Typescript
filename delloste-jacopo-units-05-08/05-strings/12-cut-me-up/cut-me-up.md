# Comparison of JavaScript String Methods

In this markdown we will confront 3 similar string method that are: 

- `slice()`

- `substring()`

- `substr()`

## `slice(start, end)`
- Returns a substring from `start` to `end` (excluding `end`).
- **Accepts negative indices** (counts from the end of the string).

```javascript
let str = "JavaScript";

console.log(str.slice(0, 4));      // "Java"
console.log(str.slice(-6, -3));    // "Scr"
console.log(str.slice(4));         // "Script"
```

---

##  `substring(start, end)`
- Similar to `slice()`, but:
  - **Does not accept negative indices**.
  - If `start > end`, it swaps the two values.

```javascript
let str = "JavaScript";

console.log(str.substring(0, 4));      // "Java"
console.log(str.substring(4, 0));      // "Java" (swapped)
console.log(str.substring(-3, 4));     // "Java" (-3 is treated as 0)
console.log(str.substring(4));         // "Script"
```

---

## `substr(start, length)` ⚠️ **Deprecated** ⚠️
- Returns a substring starting from `start` with `length` characters.
- `start` can be negative (counts from the end).
- **Deprecated** — not recommended for new code.

```javascript
let str = "JavaScript";

console.log(str.substr(0, 4));     // "Java"
console.log(str.substr(-6, 3));    // "Scr"
console.log(str.substr(4));        // "Script"
```

---

## ✅ Summary
| Method       | Accepts Negative Indices | Parameters                     | Notes                                |
|--------------|---------------------------|----------------------------------|---------------------------------------|
| `slice()`    | ✅                        | `start`, `end` (end excluded)   | Most flexible                         |
| `substring()`| ❌                        | `start`, `end` (end excluded)   | Swaps `start` and `end` if needed     |
| `substr()`   | ✅                        | `start`, `length`               | **Deprecated**, avoid in new projects |
