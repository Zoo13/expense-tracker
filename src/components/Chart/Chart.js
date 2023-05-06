

import './Chart.css'
import ChartBar from './ChartBar';


const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    // const totalMaximum = Math.max(...dataPointValues)
    
    const totalSum = (expArr) => {
        let total = 0;
        for (let i = 0; i < expArr.length; i++) {
            total += expArr[i]
        }

        // for (const single in expArr){
        //     total += expArr[single]
        // }
        return total
    }

    const totalExpenses = totalSum(dataPointValues)


    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalExpenses}
                    label={dataPoint.label}
                />)}
        </div>
    )
}



export default Chart;