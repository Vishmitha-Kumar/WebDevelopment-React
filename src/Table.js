import React from 'react';

function Table(){
    return(
           
        <table>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>PhoneNumber</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Kavya</td>
                    <td>1234567890</td>
                    <td>Namakkal</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Kavin</td>
                    <td>1234517890</td>
                    <td>Namakkal</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Snolia</td>
                    <td>1234667890</td>
                    <td>Namakkal</td>
                </tr>
            </tbody>
        </table>
    );
}
export default Table