const data = {
  item2: "bb",
  item3: "cc",
};

const jsx = <ul className="list">
    <li className="item" style={{background: 'blue', color: 'pink'}} onClick={() => {console.log('click aa')}}>aa</li>
    <li className="item">{data.item2}<i>xxx</i></li>
    <li className="item">{data.item3}</li>
</ul>
