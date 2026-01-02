function TransactionTable({transactions})
{
    return (
        <table style = {styles.table}>
            <thead> 
                <tr>
                    <th style={styles.th}> Date </th>
                    <th style={styles.th}> Description </th>
                    <th style={styles.th}> Amount </th>
                    <th style={styles.th}> Types</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((tx, index) => (
                    <tr key  = {index}>
                        <td style={styles.td}> {tx.date}</td>
                        <td style={styles.td}> {tx.description}</td>
                        <td style ={{color: tx.type === "Credit" ?  "green" : "red", ...styles.td}}>  ₹{tx.amount}</td>
                        <td style={styles.td}> {tx.type}</td>
                    </tr>
                ))}

            </tbody>

        </table>

    )
}

const styles = {
    table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px"
  },
  th: {
    textAlign: "left",
    padding: "10px",
    borderBottom: "2px solid #ccc",
    backgroundColor: "#7795e9ff"
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd"
  }
}

export default TransactionTable