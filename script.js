let expenses = [];

function addExpense() {

    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;

   
    if (name === "" || amount === "" || category === "") {
        alert("Please fill all the fields.");
        return;
    }

    
    if (Number(amount) <= 0) {
        alert("Amount must be greater than 0.");
        return;
    }

  
    let expense = {
        name: name,
        amount: Number(amount),
        category: category
    };

    
    expenses.push(expense);

   
    document.getElementById("expenseName").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";

    displayExpenses();
}


function displayExpenses() {

    let list = document.getElementById("expenseList");

    list.innerHTML = "";

    let filter = document.getElementById("filter").value;

    let total = 0;

    let found = false;

    for (let i = 0; i < expenses.length; i++) {

        if (filter === "All" || expenses[i].category === filter) {

            found = true;

            total = total + expenses[i].amount;

            let div = document.createElement("div");

            div.className = "expense";

            div.innerHTML = `
                <div class="expense-info">
                    <h3>${expenses[i].name}</h3>
                    <p>${expenses[i].category}</p>
                </div>

                <div>
                    <span class="amount">
                        ₹${expenses[i].amount}
                    </span>

                    <button class="delete-btn"
                        onclick="deleteExpense(${i})">
                        Delete
                    </button>
                </div>
            `;

            list.appendChild(div);
        }
    }

    if (found === false) {
        list.innerHTML = '<p class="empty">No expenses found.</p>';
    }

    document.getElementById("total").innerText = "₹" + total;
}


function deleteExpense(index) {

    expenses.splice(index, 1);

    displayExpenses();
}