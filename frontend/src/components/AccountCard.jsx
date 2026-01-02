function AccountCard({accountType, accountNumber, balance})
{
    return (
        <div style = {styles.card}>
            <h3>{accountType} Account </h3>
            <p> Account No.: *****{accountNumber.slice(-4)}</p>
            <h2>₹ {balance}</h2>
        </div>
    )
}

const styles = {
    card: {
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        width: "300px",
        background: "#939495ff"   
    }
}

export default AccountCard
