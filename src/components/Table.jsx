import TableRow from "./TableRow";

export default function Table({ results, initialInvestment }) {
    return (
        <div>
            <table id="result">
                <thead>
                    <tr>
                        <td>Year</td>
                        <td>Investment Value</td>
                        <td>Interest (Year)</td>
                        <td>Total Interest</td>
                        <td>Invested Capital</td>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result) => {
                        const investedValue = initialInvestment + (result.annualInvestment * result.year);
                        return (
                            <TableRow
                                key={result.year}
                                year={result.year}
                                investmentValue={result.valueEndOfYear}
                                interest={result.interest}
                                totalInterest={result.valueEndOfYear - investedValue}
                                investedCapital={investedValue} />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}