


export const TopicFilter = ({ setSearchTerm, setTopicSelect, allTopics }) => {
  

  return (
    <div className="filter-btn">
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        type="text"
        placeholder="Search Posts"
        className="ticket-search"
      />

      
        <select onChange={(event) => {
          setTopicSelect(event.target.value)
        }}
        
        >
          <option value= "0">Pick a topic...</option>
          {allTopics.map((topicObj) => {
            return <option value={topicObj.id} key={topicObj.id} >{topicObj.name}</option>;
          })}
        </select>
      
    </div>
  );
};
