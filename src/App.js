import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Bluetooth Speaker",
    amount: 4000,
    date: new Date(2022, 12, 18),
  },
  { id: "e2", title: "Monitor", amount: 4500, date: new Date(2022, 3, 20) },
  {
    id: "e3",
    title: "Peluş Terlik",
    amount: 3000,
    date: new Date(2021, 2, 18),
  },
  { id: "e4", title: "Airfrey", amount: 8000, date: new Date(2022, 2, 12) },
  { id: "e5", title: "Mont", amount: 2500, date: new Date(2020, 5, 28) },
  { id: "e6", title: "Bot", amount: 2000, date: new Date(2020, 9, 30) },
  { id: "e7", title: "Car Wheel", amount: 1500, date: new Date(2019, 6, 10) },
  {
    id: "e8",
    title: "Robot cleaner",
    amount: 8000,
    date: new Date(2021, 8, 8),
  },
  { id: "e9", title: "Phone", amount: 12000, date: new Date(2021, 11, 11) },
  { id: "e10", title: "Tshirt", amount: 1000, date: new Date(2019, 7, 18) },
  { id: "e11", title: "PC", amount: 20000, date: new Date(2023, 4, 27) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
