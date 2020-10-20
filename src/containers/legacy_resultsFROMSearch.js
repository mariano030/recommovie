<div className="result-list">
    {/* <ResultsItemsList /> */}
    {/* {items && <ResultsItemsList items={items} item={item} />} */}
    {items &&
        items.map((item, i) => {
            return (
                <>
                    <div
                        key={i}
                        className="result-item"
                        onClick={() => handleClick(item)}
                    >
                        <div>
                            <ItemIcon item={item} myClass="icon-search" />
                        </div>
                        <div>
                            <strong>
                                {item.name || item.title}{" "}
                                <ItemDate item={item} />
                            </strong>
                            {item.original_title && (
                                <div className="small">
                                    <i>{item.original_title}</i>
                                </div>
                            )}
                            <ItemInfo item={item} />
                            <div className="small">Id: {item.id}</div>
                        </div>
                    </div>
                </>
            );
        })}
</div>;
