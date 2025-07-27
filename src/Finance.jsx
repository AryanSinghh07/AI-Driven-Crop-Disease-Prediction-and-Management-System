import { useState, useEffect } from 'react';
import './Finance.css';

const Finance = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [transactions, setTransactions] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    type: 'income',
    category: '',
    amount: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    cropType: ''
  });

  // Sample data for demonstration
  useEffect(() => {
    const sampleTransactions = [
      {
        id: 1,
        type: 'income',
        category: 'Crop Sale',
        amount: 25000,
        description: 'Wheat harvest sale',
        date: '2024-01-15',
        cropType: 'Wheat',
        status: 'completed'
      },
      {
        id: 2,
        type: 'expense',
        category: 'Fertilizer',
        amount: 5000,
        description: 'Organic fertilizer purchase',
        date: '2024-01-10',
        cropType: 'Rice',
        status: 'completed'
      },
      {
        id: 3,
        type: 'income',
        category: 'Vegetable Sale',
        amount: 8000,
        description: 'Tomato and potato sale',
        date: '2024-01-08',
        cropType: 'Vegetables',
        status: 'completed'
      },
      {
        id: 4,
        type: 'expense',
        category: 'Seeds',
        amount: 3000,
        description: 'High-quality rice seeds',
        date: '2024-01-05',
        cropType: 'Rice',
        status: 'completed'
      },
      {
        id: 5,
        type: 'income',
        category: 'Crop Sale',
        amount: 15000,
        description: 'Corn harvest sale',
        date: '2024-01-03',
        cropType: 'Corn',
        status: 'pending'
      }
    ];
    setTransactions(sampleTransactions);
  }, []);

  const addTransaction = () => {
    if (newTransaction.amount && newTransaction.description) {
      const transaction = {
        id: Date.now(),
        ...newTransaction,
        amount: parseFloat(newTransaction.amount),
        status: 'completed'
      };
      setTransactions([transaction, ...transactions]);
      setNewTransaction({
        type: 'income',
        category: '',
        amount: '',
        description: '',
        date: new Date().toISOString().split('T')[0],
        cropType: ''
      });
      setShowAddModal(false);
    }
  };

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const netProfit = totalIncome - totalExpenses;

  const cropCategories = ['Wheat', 'Rice', 'Corn', 'Vegetables', 'Fruits', 'Pulses', 'Oilseeds'];
  const transactionCategories = {
    income: ['Crop Sale', 'Vegetable Sale', 'Fruit Sale', 'Government Subsidy', 'Insurance Claim'],
    expense: ['Seeds', 'Fertilizer', 'Pesticides', 'Equipment', 'Labor', 'Irrigation', 'Transport']
  };

  return (
    <div className="finance-page">
      {/* Demo Notice */}
      <div className="page-demo-notice">
        <div className="demo-notice-content">
          <span className="demo-notice-icon">⚠️</span>
          <span className="demo-notice-text">Demo Mode: All data and transactions shown are simulated for demonstration purposes only.</span>
        </div>
      </div>
      
      {/* Header Section */}
      <div className="finance-header">
        <div className="finance-header-content">
          <h1 className="finance-page-title">
            <span className="finance-icon">💰</span>
            Financial Management
          </h1>
          <p className="finance-page-subtitle">
            Track your farm's financial health, manage transactions, and optimize your agricultural business
          </p>
        </div>
        <div className="finance-header-actions">
          <button 
            className="add-transaction-btn"
            onClick={() => setShowAddModal(true)}
          >
            <span className="btn-icon">+</span>
            Add Transaction
          </button>
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="finance-stats">
        <div className="stat-card income">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <h3>Total Income</h3>
            <p className="stat-amount">₹{totalIncome.toLocaleString()}</p>
            <span className="stat-change positive">+12.5% from last month</span>
          </div>
        </div>
        <div className="stat-card expense">
          <div className="stat-icon">📉</div>
          <div className="stat-content">
            <h3>Total Expenses</h3>
            <p className="stat-amount">₹{totalExpenses.toLocaleString()}</p>
            <span className="stat-change negative">+8.2% from last month</span>
          </div>
        </div>
        <div className="stat-card profit">
          <div className="stat-icon">💵</div>
          <div className="stat-content">
            <h3>Net Profit</h3>
            <p className="stat-amount">₹{netProfit.toLocaleString()}</p>
            <span className="stat-change positive">+15.3% from last month</span>
          </div>
        </div>
        <div className="stat-card transactions">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>Total Transactions</h3>
            <p className="stat-amount">{transactions.length}</p>
            <span className="stat-change positive">This month</span>
          </div>
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="finance-content">
        <div className="finance-tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className="tab-icon">📊</span>
            Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'transactions' ? 'active' : ''}`}
            onClick={() => setActiveTab('transactions')}
          >
            <span className="tab-icon">📝</span>
            Transactions
          </button>
          <button 
            className={`tab-btn ${activeTab === 'buy-sell' ? 'active' : ''}`}
            onClick={() => setActiveTab('buy-sell')}
          >
            <span className="tab-icon">🛒</span>
            Buy & Sell
          </button>
          <button 
            className={`tab-btn ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            <span className="tab-icon">📋</span>
            Reports
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="overview-content">
              <div className="overview-grid">
                <div className="overview-card chart-card">
                  <h3>Income vs Expenses</h3>
                  <div className="chart-placeholder">
                    <div className="chart-bars">
                      <div className="chart-bar income-bar" style={{height: '70%'}}>
                        <span>Income</span>
                      </div>
                      <div className="chart-bar expense-bar" style={{height: '40%'}}>
                        <span>Expenses</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="overview-card recent-transactions">
                  <h3>Recent Transactions</h3>
                  <div className="recent-list">
                    {transactions.slice(0, 5).map(transaction => (
                      <div key={transaction.id} className="recent-item">
                        <div className="recent-icon">
                          {transaction.type === 'income' ? '💰' : '💸'}
                        </div>
                        <div className="recent-details">
                          <h4>{transaction.description}</h4>
                          <p>{transaction.category} • {transaction.cropType}</p>
                        </div>
                        <div className="recent-amount">
                          <span className={transaction.type === 'income' ? 'positive' : 'negative'}>
                            {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="overview-card crop-performance">
                  <h3>Top Performing Crops</h3>
                  <div className="crop-list">
                    <div className="crop-item">
                      <div className="crop-info">
                        <span className="crop-icon">🌾</span>
                        <div>
                          <h4>Wheat</h4>
                          <p>₹25,000 revenue</p>
                        </div>
                      </div>
                      <div className="crop-profit positive">+₹18,500</div>
                    </div>
                    <div className="crop-item">
                      <div className="crop-info">
                        <span className="crop-icon">🍅</span>
                        <div>
                          <h4>Vegetables</h4>
                          <p>₹8,000 revenue</p>
                        </div>
                      </div>
                      <div className="crop-profit positive">+₹6,200</div>
                    </div>
                    <div className="crop-item">
                      <div className="crop-info">
                        <span className="crop-icon">🌽</span>
                        <div>
                          <h4>Corn</h4>
                          <p>₹15,000 revenue</p>
                        </div>
                      </div>
                      <div className="crop-profit positive">+₹12,000</div>
                    </div>
                  </div>
                </div>

                <div className="overview-card financial-tips">
                  <h3>Financial Tips</h3>
                  <div className="tips-list">
                    <div className="tip-item">
                      <span className="tip-icon">💡</span>
                      <p>Diversify your crop portfolio to reduce market risks</p>
                    </div>
                    <div className="tip-item">
                      <span className="tip-icon">📅</span>
                      <p>Plan your expenses based on seasonal requirements</p>
                    </div>
                    <div className="tip-item">
                      <span className="tip-icon">📊</span>
                      <p>Track your profit margins for each crop type</p>
                    </div>
                    <div className="tip-item">
                      <span className="tip-icon">💰</span>
                      <p>Set aside emergency funds for unexpected expenses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Transactions Tab */}
          {activeTab === 'transactions' && (
            <div className="transactions-content">
              <div className="transactions-header">
                <h3>All Transactions</h3>
                <div className="transactions-filters">
                  <select className="filter-select">
                    <option>All Types</option>
                    <option>Income</option>
                    <option>Expense</option>
                  </select>
                  <select className="filter-select">
                    <option>All Crops</option>
                    {cropCategories.map(crop => (
                      <option key={crop}>{crop}</option>
                    ))}
                  </select>
                  <input 
                    type="date" 
                    className="filter-date"
                    placeholder="Filter by date"
                  />
                </div>
              </div>

              <div className="transactions-table">
                <div className="table-header">
                  <div className="table-cell">Type</div>
                  <div className="table-cell">Category</div>
                  <div className="table-cell">Crop</div>
                  <div className="table-cell">Description</div>
                  <div className="table-cell">Amount</div>
                  <div className="table-cell">Date</div>
                  <div className="table-cell">Status</div>
                </div>
                
                {transactions.map(transaction => (
                  <div key={transaction.id} className="table-row">
                    <div className="table-cell">
                      <span className={`type-badge ${transaction.type}`}>
                        {transaction.type === 'income' ? '💰 Income' : '💸 Expense'}
                      </span>
                    </div>
                    <div className="table-cell">{transaction.category}</div>
                    <div className="table-cell">{transaction.cropType}</div>
                    <div className="table-cell">{transaction.description}</div>
                    <div className="table-cell">
                      <span className={transaction.type === 'income' ? 'positive' : 'negative'}>
                        {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount.toLocaleString()}
                      </span>
                    </div>
                    <div className="table-cell">{new Date(transaction.date).toLocaleDateString()}</div>
                    <div className="table-cell">
                      <span className={`status-badge ${transaction.status}`}>
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Buy & Sell Tab */}
          {activeTab === 'buy-sell' && (
            <div className="buy-sell-content">
              <div className="buy-sell-grid">
                <div className="buy-sell-card">
                  <div className="card-header">
                    <h3>🛒 Buy Crops & Supplies</h3>
                    <p>Purchase seeds, fertilizers, and equipment</p>
                  </div>
                  <div className="buy-items">
                    <div className="buy-item">
                      <div className="item-info">
                        <span className="item-icon">🌱</span>
                        <div>
                          <h4>High-Yield Wheat Seeds</h4>
                          <p>Premium quality, disease-resistant</p>
                        </div>
                      </div>
                      <div className="item-price">₹2,500/kg</div>
                      <button className="buy-btn">Buy Now</button>
                    </div>
                    <div className="buy-item">
                      <div className="item-info">
                        <span className="item-icon">🌿</span>
                        <div>
                          <h4>Organic Fertilizer</h4>
                          <p>Natural nutrients for better growth</p>
                        </div>
                      </div>
                      <div className="item-price">₹1,200/bag</div>
                      <button className="buy-btn">Buy Now</button>
                    </div>
                    <div className="buy-item">
                      <div className="item-info">
                        <span className="item-icon">🔧</span>
                        <div>
                          <h4>Irrigation System</h4>
                          <p>Automated watering solution</p>
                        </div>
                      </div>
                      <div className="item-price">₹15,000</div>
                      <button className="buy-btn">Buy Now</button>
                    </div>
                  </div>
                </div>

                <div className="buy-sell-card">
                  <div className="card-header">
                    <h3>💰 Sell Your Produce</h3>
                    <p>List your crops for sale to buyers</p>
                  </div>
                  <div className="sell-items">
                    <div className="sell-item">
                      <div className="item-info">
                        <span className="item-icon">🌾</span>
                        <div>
                          <h4>Wheat Harvest</h4>
                          <p>500kg available, Grade A quality</p>
                        </div>
                      </div>
                      <div className="item-price">₹3,200/kg</div>
                      <button className="sell-btn">List for Sale</button>
                    </div>
                    <div className="sell-item">
                      <div className="item-info">
                        <span className="item-icon">🍅</span>
                        <div>
                          <h4>Fresh Tomatoes</h4>
                          <p>200kg available, organic</p>
                        </div>
                      </div>
                      <div className="item-price">₹80/kg</div>
                      <button className="sell-btn">List for Sale</button>
                    </div>
                    <div className="sell-item">
                      <div className="item-info">
                        <span className="item-icon">🥔</span>
                        <div>
                          <h4>Potatoes</h4>
                          <p>300kg available, fresh harvest</p>
                        </div>
                      </div>
                      <div className="item-price">₹45/kg</div>
                      <button className="sell-btn">List for Sale</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="market-insights">
                <h3>📈 Market Insights</h3>
                <div className="insights-grid">
                  <div className="insight-card">
                    <h4>Wheat Prices</h4>
                    <p className="insight-price">₹3,200/kg</p>
                    <span className="insight-change positive">+5.2% this week</span>
                  </div>
                  <div className="insight-card">
                    <h4>Rice Prices</h4>
                    <p className="insight-price">₹2,800/kg</p>
                    <span className="insight-change negative">-2.1% this week</span>
                  </div>
                  <div className="insight-card">
                    <h4>Vegetable Index</h4>
                    <p className="insight-price">₹65/kg</p>
                    <span className="insight-change positive">+8.7% this week</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div className="reports-content">
              <div className="reports-header">
                <h3>Financial Reports</h3>
                <div className="report-actions">
                  <button className="export-btn">
                    <span className="btn-icon">📄</span>
                    Export PDF
                  </button>
                  <button className="export-btn">
                    <span className="btn-icon">📊</span>
                    Export Excel
                  </button>
                </div>
              </div>

              <div className="reports-grid">
                <div className="report-card">
                  <h4>Monthly Summary</h4>
                  <div className="report-stats">
                    <div className="report-stat">
                      <span>Total Revenue</span>
                      <strong>₹48,000</strong>
                    </div>
                    <div className="report-stat">
                      <span>Total Expenses</span>
                      <strong>₹8,000</strong>
                    </div>
                    <div className="report-stat">
                      <span>Net Profit</span>
                      <strong className="positive">₹40,000</strong>
                    </div>
                    <div className="report-stat">
                      <span>Profit Margin</span>
                      <strong className="positive">83.3%</strong>
                    </div>
                  </div>
                </div>

                <div className="report-card">
                  <h4>Crop Performance</h4>
                  <div className="crop-performance-chart">
                    <div className="crop-bar">
                      <span>Wheat</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{width: '85%'}}></div>
                      </div>
                      <span>85%</span>
                    </div>
                    <div className="crop-bar">
                      <span>Vegetables</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{width: '65%'}}></div>
                      </div>
                      <span>65%</span>
                    </div>
                    <div className="crop-bar">
                      <span>Corn</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{width: '75%'}}></div>
                      </div>
                      <span>75%</span>
                    </div>
                  </div>
                </div>

                <div className="report-card">
                  <h4>Expense Breakdown</h4>
                  <div className="expense-breakdown">
                    <div className="expense-item">
                      <span>Seeds</span>
                      <span>₹3,000</span>
                    </div>
                    <div className="expense-item">
                      <span>Fertilizer</span>
                      <span>₹5,000</span>
                    </div>
                    <div className="expense-item">
                      <span>Equipment</span>
                      <span>₹0</span>
                    </div>
                    <div className="expense-item">
                      <span>Labor</span>
                      <span>₹0</span>
                    </div>
                  </div>
                </div>

                <div className="report-card">
                  <h4>Revenue by Crop</h4>
                  <div className="revenue-breakdown">
                    <div className="revenue-item">
                      <span>Wheat</span>
                      <span>₹25,000</span>
                    </div>
                    <div className="revenue-item">
                      <span>Vegetables</span>
                      <span>₹8,000</span>
                    </div>
                    <div className="revenue-item">
                      <span>Corn</span>
                      <span>₹15,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Transaction Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add New Transaction</h3>
              <button 
                className="modal-close"
                onClick={() => setShowAddModal(false)}
              >
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <div className="form-group">
                <label>Transaction Type</label>
                <select 
                  value={newTransaction.type}
                  onChange={(e) => setNewTransaction({...newTransaction, type: e.target.value})}
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>

              <div className="form-group">
                <label>Category</label>
                <select 
                  value={newTransaction.category}
                  onChange={(e) => setNewTransaction({...newTransaction, category: e.target.value})}
                >
                  <option value="">Select Category</option>
                  {transactionCategories[newTransaction.type].map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Crop Type</label>
                <select 
                  value={newTransaction.cropType}
                  onChange={(e) => setNewTransaction({...newTransaction, cropType: e.target.value})}
                >
                  <option value="">Select Crop</option>
                  {cropCategories.map(crop => (
                    <option key={crop} value={crop}>{crop}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Amount (₹)</label>
                <input 
                  type="number"
                  value={newTransaction.amount}
                  onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})}
                  placeholder="Enter amount"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea 
                  value={newTransaction.description}
                  onChange={(e) => setNewTransaction({...newTransaction, description: e.target.value})}
                  placeholder="Enter transaction description"
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label>Date</label>
                <input 
                  type="date"
                  value={newTransaction.date}
                  onChange={(e) => setNewTransaction({...newTransaction, date: e.target.value})}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button 
                className="btn-secondary"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button 
                className="btn-primary"
                onClick={addTransaction}
              >
                Add Transaction
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Finance; 