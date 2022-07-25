 function store() { //stores items in the localStorage
            var brand = document.getElementById('carBrand').value;
            var price = document.getElementById('carPrice').value;
            var key = document.getElementById('key').value;
            var wheel = document.getElementById('wheel').value;

            const car = {
                brand: brand,
                price: price,
                Wheel: wheel
            }

            window.localStorage.setItem(key, JSON.stringify(car));
            //converting object to string
        }

        function retrieveRecords() { //retrieves items in the localStorage
            var key = document.getElementById('retrieveKey').value; //gets key from user
            console.log("retrive records");
            var records = window.localStorage.getItem(key); //searches for the key in localStorage
            var paragraph = document.createElement("h2");
            var infor = document.createTextNode(records);
            paragraph.appendChild(infor);
            var element = document.getElementById("retrieve");
            element.appendChild(paragraph);
        }

        function removeItem() { //deletes item from localStorage
            var key = document.getElementById('removeKey').value; //gets key from user
            localStorage.removeItem(key) //passes key to the removeItem method
            console.log("remove items");
        }


        window.onload = function () { //ensures the page is loaded before functions are executed.
            document.getElementById("carForm").onsubmit = store
            document.getElementById("removeButton").onclick = removeItem
            document.getElementById("retrieveButton").onclick = retrieveRecords
        }