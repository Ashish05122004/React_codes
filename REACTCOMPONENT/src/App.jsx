import "../src/App.css"
import Item from "./Components/Item";
import ItemDate from "./Components/ItemDate";
import Card from "./Components/Card";
const App = () => {
    const response = [
        {
            itemName: "Ashish",
            itemDate: 5,
            itemMonth: "December",
            itemYear: 2004
        },
        {
            itemName: "Amon",
            itemDate: 25,
            itemMonth: "june",
            itemYear: 2000
        },
        {
            itemName: "Ram",
            itemDate: 1,
            itemMonth: "may",
            itemYear: 1999
        }
    ];
    return (
        <Card>
            <div className="App">
                <h1 >Hello world</h1>
                <Item name={response[0].itemName}>
                    Hii I am Ashish
                </Item>
                <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

                <Item name={response[1].itemName}></Item>
                <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

                <Item name={response[2].itemName}></Item>
                <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

                <Item name="Pranam"></Item>
                <ItemDate day="29" month="june" year="2000"></ItemDate>
            </div>
        </Card>
    );
};
export default App;