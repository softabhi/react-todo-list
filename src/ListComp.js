import React from "react";
import { useState } from "react";
function List(){
    const [SinglList, setList] = useState('');
    const [allList, setAllList] = useState([]);
    const [editItem , setEditItem] = useState(0);
    const addbtn = (e) => {
        e.preventDefault();

        if(editItem){
            const editTodo = allList.find((item) => item.key===editItem);
            const updatedTodo = allList.map((t)=>
            t.key==editTodo.key
            ? (t={key:t.key,SinglList})
            : {key:t.key , SinglList:t.SinglList}
            );
            setAllList(updatedTodo);
            setEditItem(0);
            setList('');
            return;
        }

        setAllList([...allList, { key: Date.now(), SinglList }]);
        setList('');
    }
     const deleteItem = (e)=>{
       let newList = allList.filter((item)=>{
          return item.key!==e;
       })
       setAllList(newList);
     }
    
     const editBtn = (key)=>{
       let element = allList.find((item)=>{
            return key===item.key
       })
       setList(element.SinglList);
       setEditItem(key);
     }
    return (
        <>
            <div className="main">
                <div className="list">
                    <form >
                        <input type="text" value={SinglList} onChange={(e) => setList(e.target.value)} />
                        <button type="submit" onClick={addbtn}>{editItem ? "save" : "Add List"}</button>
                    </form>
                </div>
                <div className="listitem">
                    <ul>
                        {allList.map((item) => (
                            <li className="oneList">
                                <span className="item">{item.SinglList}</span>
                                <button id="delete" onClick={()=>deleteItem(item.key)}>Delete</button>
                                <button id="edit" onClick={()=>editBtn(item.key)}>Edit</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    ) 
}
export default List;