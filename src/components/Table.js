import React from "react";

export default function Table(props) {
    const {characters, locations} = props; 
    console.log(characters);

  return ( 
    <div className="Table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Species</th>
            <th>Locations</th>
            <th>Episodes</th>
          </tr>
        </thead>

        <tbody>
            {}
          <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
