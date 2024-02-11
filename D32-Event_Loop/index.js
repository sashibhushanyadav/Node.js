// // EVENT LOOP
// -It is a C program and is part of libuv
// -A design pattern that co-ordinates the execution of synchronous and asynchronous code in Node.js

// // WORK OF EVENT LOOP
// timer queue (setTimeout/setInterval CB) -> I/O queue (fs/http modules) -> cheque queue (setImmediate) -> close queue (close Event/handlers)

// microtask queue
// i. nextTick queue (process.nextTick) -> ii. promise queue (promise cb)

// // NOTE:
// timer queue, I/O queue, check queue and close queue are the parts of libuv but not microtask queue


// // EVENT LOOP - EXECUTION ORDER
// 1.-( any cbs in the micro task queues are executed. First, tasks in the nextTick queue and only then tasks in the promise queue).
//   -(All callbacks within the timer queue are executed).

// 2.-( any cbs in the micro task queues if present are executed. Again, first tasks in the nextTick queue and only then tasks in the promise queue).
//   -(All callbacks within the I/O queue are executed).
 
// 3.-( any cbs in the micro task queues if present are executed. Again, first tasks in the nextTick queue and only then tasks in the promise queue).
//   -(All callbacks within the check queue are executed).

// 4.-( any cbs in the micro task queues if present are executed. Again, first tasks in the nextTick queue and only then tasks in the promise queue).
//   -(All callbacks within the close queue are executed).

// 5.-For one final time in the same loop, the micro task queues are executed. nextTick queue followed by promise queue.

// -If there are more callbacks to be processed, the loop is kept alive for one more run and the same steps are repeated.
// -On the other hand, if all callbacks are executed and there is no more code to process, the event loop exists.