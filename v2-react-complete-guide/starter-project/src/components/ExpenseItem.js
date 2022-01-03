import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>Oct 31 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$Painful Loss</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
