import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const SearchUsingSetTimeout = ({ onQueryChange }) => {
    const [localQuery, setLocalQuery] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onQueryChange(localQuery);
        }, 1000);

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        }
    }, [localQuery, onQueryChange]);

    const onSearchChange = (event) => {
        setLocalQuery(event.target.value);
    };

    return (
        <Form className="my-4" onSubmit={e => e.preventDefault()}>
            <Form.Group controlId="search">
                <Form.Label>Search by keyword...</Form.Label>
                <Form.Control type="text" value={localQuery} onChange={onSearchChange} />
                <Form.Text className="text-muted">
                    Example: Use keywords like "react.js" or "node.js"
                </Form.Text>
            </Form.Group>
        </Form>
    )
};

export default SearchUsingSetTimeout;