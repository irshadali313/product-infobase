function store() { //stores items in the localStorage
            var productName = document.getElementById('productName').value;
            var productPrice = document.getElementById('productPrice').value;
            var ProductId = document.getElementById('productId').value;
            var productDetail = document.getElementById('productDetail').value;

            const product = {
                ProductName: productName,
                ProductPrice: productPrice,
                ProductDetail: productDetail
            }

            window.localStorage.setItem(ProductId, JSON.stringify(product));
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
            var ProductId = document.getElementById('removeId').value; //gets key from user
            localStorage.removeItem(ProductId) //passes key to the removeItem method
            alert("Items has been removed.");
        }


        window.onload = function () { //ensures the page is loaded before functions are executed.
            document.getElementById("productForm").onsubmit = store
            document.getElementById("removeButton").onclick = removeItem
            document.getElementById("retrieveButton").onclick = retrieveRecords
        }
