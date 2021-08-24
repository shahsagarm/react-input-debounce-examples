import { useMemo, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { debounce } from 'lodash'

const SearchUsingLodash = ({ onQueryChange }) => {
    const debouncedHandler = useMemo(() => debounce(onQueryChange, 1000), []);

    const onSearchChange = (event) => {
        const { value } = event.target;
        debouncedHandler(value);
    };

    // cleanup debounce before component is unmounted
    useEffect(() => {
        return () => {
            debouncedHandler.cancel();
        }
    }, []);

    return (
        <Form className="my-4" onSubmit={e => e.preventDefault()}>
            <Form.Group controlId="search">
                <Form.Label>Search by keyword...</Form.Label>
                <Form.Control type="text" onChange={onSearchChange} />
                <Form.Text className="text-muted">
                    Example: Use keywords like "react.js" or "node.js"
                </Form.Text>
            </Form.Group>
        </Form>
    )
};

export default SearchUsingLodash;