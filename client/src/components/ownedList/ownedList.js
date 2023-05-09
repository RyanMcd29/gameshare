import React from 'react';

const OwnedList = ({
    games,
}) => {
    // if(games.length == 0){
    //     return <h3>No Games Owned!</h3>
    // }

    

    return (
        <div>
        {games &&
        games.map((game) => (
          <div key={game._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0"></h4>
            <div className="card-body bg-light p-2">
              <p>{game.name}</p>
            </div>
          </div>
        ))}

        </div>

    )
}

export default OwnedList;