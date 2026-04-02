export const mockTransactions = [
  { id: 1, date: '2023-11-01', description: 'Salary', category: 'Income', amount: 4500, type: 'income' },
  { id: 2, date: '2023-11-02', description: 'Rent', category: 'Housing', amount: 1500, type: 'expense' },
  { id: 3, date: '2023-11-05', description: 'Groceries', category: 'Food', amount: 250, type: 'expense' },
  { id: 4, date: '2023-11-08', description: 'Internet', category: 'Utilities', amount: 80, type: 'expense' },
  { id: 5, date: '2023-11-10', description: 'Freelance', category: 'Income', amount: 800, type: 'income' },
  { id: 6, date: '2023-11-12', description: 'Dining Out', category: 'Food', amount: 65, type: 'expense' },
  { id: 7, date: '2023-11-15', description: 'Netflix', category: 'Entertainment', amount: 15, type: 'expense' },
  { id: 8, date: '2023-11-18', description: 'Gas', category: 'Transport', amount: 40, type: 'expense' },
  { id: 9, date: '2023-11-20', description: 'Gym', category: 'Health', amount: 50, type: 'expense' },
  { id: 10, date: '2023-11-25', description: 'Groceries', category: 'Food', amount: 120, type: 'expense' },
];

export const summaryStats = {
  totalBalance: 124560.80,
  income: 12450.00,
  expenses: 8230.50,
  balanceTrend: 2.4, // positive percentage
  expensesTrend: -0.5, // negative percentage (which is good)
};

export const chartData1M = [
  { name: 'Week 1', balance: 110000 },
  { name: 'Week 2', balance: 115000 },
  { name: 'Week 3', balance: 119000 },
  { name: 'Week 4', balance: 124560 },
];

export const chartData1D = [
  { name: '9AM', balance: 124500 },
  { name: '12PM', balance: 124520 },
  { name: '3PM', balance: 124550 },
  { name: '6PM', balance: 124560 },
];

export const chartData1W = [
  { name: 'Mon', balance: 124000 },
  { name: 'Wed', balance: 124200 },
  { name: 'Fri', balance: 124400 },
  { name: 'Sun', balance: 124560 },
];

export const chartData1Y = [
  { name: 'Jan', balance: 80000 },
  { name: 'Apr', balance: 95000 },
  { name: 'Jul', balance: 110000 },
  { name: 'Oct', balance: 124560 },
];

export const categoryData = [
  { name: 'Housing', value: 1500, color: '#c0c1ff' },
  { name: 'Food', value: 370, color: '#d0bcff' },
  { name: 'Utilities', value: 80, color: '#8083ff' },
  { name: 'Transport', value: 40, color: '#323538' },
  { name: 'Entertainment', value: 15, color: '#571bc1' },
  { name: 'Health', value: 50, color: '#ffb783' },
];
