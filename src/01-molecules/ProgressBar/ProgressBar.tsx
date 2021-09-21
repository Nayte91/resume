import "./ProgressBar.scss"

const ProgressBar:React.FC<{item:any}> = ({item}) => {
    let xpYears = 2
    let progressBar = item.xp / xpYears * 100 + '%'
    
    return (
        <div key={item.id} className="progress__bar">
            <h6>{item.value}</h6>
            <figure style={{width:progressBar}} />
        </div>
    )
}

export default ProgressBar