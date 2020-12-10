

function FruitList(props) {
    const fruitItems = props.fruits.map((eachFruit, idx) => {
                    return <li key={idx}>{eachFruit}</li>
                })
    return (
        <div>
            <ul>
                {fruitItems}
            </ul>
        </div>      
    )
}

export default FruitList