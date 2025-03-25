 const Search = (props) => {
    const {searchTerm, setSearchTerm} = props;
    return <div className="search">
        <div>
            <img src="search.svg" alt="search" />
            
            <input 
                type="text"
                placeholder="Search through a variety of films"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
        </div>
    </div>
 };

 export default Search;