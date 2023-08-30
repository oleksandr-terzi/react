import React, { Component } from "react";
import Button from "../Button/Button";
import "./styles.scss";

export default class List extends Component {
  state = {
    list1: [
      {
        id: 1,
        title: `Task 1`,
      },
      {
        id: 2,
        title: `Task 2`,
      },
      {
        id: 3,
        title: `Task 3`,
      },
      {
        id: 4,
        title: `Task 4`,
      },
      {
        id: 5,
        title: `Task 5`,
      },
      {
        id: 6,
        title: `Task 6`,
      },
      {
        id: 7,
        title: `Task 7`,
      },
      {
        id: 8,
        title: `Task 8`,
      },
      {
        id: 9,
        title: `Task 9`,
      },
      {
        id: 10,
        title: `Task 10`,
      },
    ],
    list2: [],
    list3: [],
  };

  moveFromList1ToList2 = () => {
    const { list1, list2 } = this.state;
    if (list1.length > 0) {
      const updatedList1 = list1.slice(1);
      const updatedList2 = [list1[0], ...list2];

      this.setState({
        list1: updatedList1,
        list2: updatedList2,
      });
    }
  };
  moveFromList2ToList1 = () => {
    const { list1, list2 } = this.state;
    if (list2.length > 0) {
      const updatedList1 = [list2[0], ...list1];
      const updatedList2 = list2.slice(1);

      this.setState({
        list1: updatedList1,
        list2: updatedList2,
      });
    }
  };
  moveFromList2ToList3 = () => {
    const { list2, list3 } = this.state;
    if (list2.length > 0) {
      const updatedList2 = list2.slice(1);
      const updatedList3 = [list2[0], ...list3];

      this.setState({
        list2: updatedList2,
        list3: updatedList3,
      });
    }
  };
  removeLastItem = () => {
    const { list3 } = this.state;
    if (list3.length > 0) {
      const updatedList3 = list3.slice(0, -1);

      this.setState({
        list3: updatedList3,
      });
    }
  };

  render() {
    const { list1, list2, list3 } = this.state;
    return (
      <div className="wrapper">
        <div className="list-wrapper">
          <ul>
            {list1.map(({ title, id }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
          <Button
            btnText={"Transfer first to right"}
            onClick={this.moveFromList1ToList2}
          />
        </div>

        <div className="list-wrapper">
          <ul>
            {list2.map(({ title, id }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
          <Button
            btnText={"Transfer first to left"}
            onClick={this.moveFromList2ToList1}
          />
          <Button
            btnText={"Transfer first to right"}
            onClick={this.moveFromList2ToList3}
          />
        </div>

        <div className="list-wrapper">
          <ul>
            {list3.map(({ title, id }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
          <Button btnText={"Remove last item"} onClick={this.removeLastItem} />
        </div>
      </div>
    );
  }
}
