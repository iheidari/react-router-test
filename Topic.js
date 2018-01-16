import React from 'react';

const Topic = ({match}) => {
    return (
        <div>
            {match.params.topicId}
        </div>
    );
};

export default Topic;