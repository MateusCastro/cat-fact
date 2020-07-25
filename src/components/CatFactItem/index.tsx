import React from "react";
import { CatFact } from "../../common/types";

// import { Container } from './styles';

interface Props {
  catFact: CatFact;
}

const CatFactItem: React.FC<Props> = ({ catFact }) => {
  return (
    <tr>
      <td>
        {catFact.user
          ? `${catFact.user.name.first} ${catFact.user.name.last}`
          : "Unknown"}
      </td>
      <td>{catFact.text}</td>
      <td>{catFact.upvotes}</td>
    </tr>
  );
};

export default CatFactItem;
