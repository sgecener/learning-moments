


export const TopicFilter = ({ setSearchTerm , setTopicSelect }) => {
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
        <select
        name='Filter...'
        placeholder='Filter...'
        >
          <option value ='0'>Pick a topic..</option>
          <option></option>
        </select>
      </div>
    );
  };
  