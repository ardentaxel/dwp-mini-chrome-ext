import React, {useState} from "react";
import Button from "./Button";
import PKRow from "./PKRow";
import "./Card.css"

 

function Card({student}) {
    const [pkValue, setPkValue] = useState("");
    const [pkRows, setPkRows] = useState(student.pks);

    const totalPages = pkRows.reduce((total, pk) => total + pk.count, 0);

    const updatePkRows = (nextRowsOrUpdater) => {
        setPkRows(prevRows => {
            const nextRows = typeof nextRowsOrUpdater === "function"
                ? nextRowsOrUpdater(prevRows)
                : nextRowsOrUpdater;
            student.pks = nextRows;
            return nextRows;
        });
    };

    const handleIncrementPK = (pkId) => {
        updatePkRows(prevRows => prevRows.map(pk => pk.id === pkId ? {...pk, count: pk.count + 1} : pk));
    };

    const handleDecrementPK = (pkId) => {
        updatePkRows(prevRows => prevRows.map(pk => pk.id === pkId && pk.count > 0 ? {...pk, count: pk.count - 1} : pk));
    };

    const handleCheckPK = (pkId) => {
        updatePkRows(prevRows => prevRows.map(pk => pk.id === pkId ? {...pk, mastered: !pk.mastered} : pk));
    };

    const handleCancelPK = (pkId) => {
        updatePkRows(prevRows => prevRows.filter(pk => pk.id !== pkId));
    };

    const pkOptions = student.pks.map(pk => <option value={pk.id}></option>);
    const handleAddPK = (e) => {
        e.preventDefault();
        if(!pkValue.trim()) return;
        if(!student.addPK({id: pkValue, count: 1, attempted: true, mastered:false})){
            alert("PK already exists for this student");
            return;
        }
        setPkValue("");
        setPkRows([...student.pks]);
    }
  return (
    <div className="card">
      <div className="card-header">
        <p className="header">{student.getName()}</p>
      </div>
      <div className="card-contents">
        <div className="addPK">
            <form onSubmit={handleAddPK} className="form">
                <input
                    list="pk-options"
                    name="pk"
                    id="pk"
                    value={pkValue}
                    onChange={(e) => setPkValue(e.target.value)} />
            </form>
            <Button label={"Add PK"} click={handleAddPK}/>
        </div>
        <div className="pk-rows">
            {pkRows.map(pk => (
                <PKRow
                    key={pk.id}
                    pk={pk}
                    onIncrement={handleIncrementPK}
                    onDecrement={handleDecrementPK}
                    onCheck={handleCheckPK}
                    onCancel={handleCancelPK}
                />
            ))}
        </div>
        <div className="controls">
            <p className="total">Total: {totalPages != 1 ? `${totalPages} pages` : `${totalPages} page`}</p>
        </div>
        <Button label={"Populate DWP"} />
      </div>
    </div>
  );
}


export default Card;