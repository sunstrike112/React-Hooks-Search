import React from 'react';

function ResultTable(props) {

    const renderListDrinks = (drink, index) => {
        return (
            <tr key={drink.idDrink}>
                <td>{index + 1}</td>
                <td><img src={drink.strDrinkThumb} alt={drink.strDrink}></img></td>
                <td>{drink.strDrink}</td>
            </tr>
        )
    }

    return (
        <div>
            {
                props.listDrinks !== null ?
                    <table>
                        <thead>
                            {
                                !props.isFirstSearch && !props.isSearching ?
                                    <tr>
                                        <th>No</th>
                                        <th>Thumbnail</th>
                                        <th>Name</th>
                                    </tr>
                                :
                                    <tr></tr>
                            }
                        </thead>
                        {
                            !props.isSearching ?
                                <tbody>{props.listDrinks.map(renderListDrinks)}</tbody>
                            : 
                                <div></div>
                        }
                    </table>
                :
                    <div>
                </div>
            }
        </div>
    );
}

export default ResultTable;