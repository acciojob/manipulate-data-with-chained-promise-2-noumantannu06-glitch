//your JS code here. If required.
function manipulateArray() {
            return new Promise((resolve) => {
                // Initial promise: 3-second delay with original array
                setTimeout(() => {
                    const originalArray = [1, 2, 3, 4];
                    resolve(originalArray);
                }, 3000);
            })
            .then((array) => {
                // First transformation: Filter out odd numbers (keep evens)
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const evenNumbers = array.filter(num => num % 2 === 0);
                        // Update DOM after 1 second
                        document.getElementById('output').textContent = evenNumbers.join(',');
                        resolve(evenNumbers);
                    }, 1000);
                });
            })
            .then((evenArray) => {
                // Second transformation: Multiply evens by 2
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const doubledArray = evenArray.map(num => num * 2);
                        // Update DOM after additional 2 seconds
                        document.getElementById('output').textContent = doubledArray.join(',');
                        resolve(doubledArray);
                    }, 2000);
                });
            });
        }

        // Start the chain when page loads
        window.addEventListener('load', manipulateArray);

