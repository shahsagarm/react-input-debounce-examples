import { useState, useEffect, useCallback } from 'react';
import { Form } from 'react-bootstrap';

import useDebounce from '../../hooks/useDebounce';

const SearchUsingCustomHook = ({ onQueryChange }) => {
    const onQueryChangeCallback = useCallback(localQuery => onQueryChange(localQuery), [onQueryChange]);

    const [localQuery, setLocalQuery] = useState('');

    const debouncedLocalQuery = useDebounce(localQuery, 1000);

    useEffect(() => {
        onQueryChangeCallback(debouncedLocalQuery);
    }, [debouncedLocalQuery, onQueryChangeCallback]);

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

export default SearchUsingCustomHook;