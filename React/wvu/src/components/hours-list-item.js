
export default function HoursListItem(props){
    const {day, start, end} = props;


    return(<>
        {/* Conditional rendering */}
            {start ? <li><em>{day}</em> {start}:00 AM {end}:00PM </li> : <li>{day} CLOSED</li>}
        </>
    )
}