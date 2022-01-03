import HoursListItem from "./hours-list-item";


export default function OfficeHoursList(){

    return(<ul>
        <HoursListItem day="Monday" start={9} end={5}/>
        <HoursListItem day="Tuesday" start={9} end={5}/>
        <HoursListItem day="Wednesday" start={9} end={5}/>
        <HoursListItem day="Thursday" start={9} end={5}/>
        <HoursListItem day="Friday" start={9} end={5}/>
        <HoursListItem day="Saturday" />
        <HoursListItem day="Sunday" />
    </ul>)

}