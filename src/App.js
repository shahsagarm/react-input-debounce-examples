import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { Container, Jumbotron, Nav } from 'react-bootstrap';

import Loader from './components/UI/Loader/Loader';
import Posts from './components/Posts/Posts';
import SearchUsingSetTimeout from './components/SearchUsingSetTimeout/SearchUsingSetTimeout';
import SearchUsingCustomHook from './components/SearchUsingCustomHook/SearchUsingCustomHook';
import SearchUsingLodash from './components/SearchUsingLodash/SearchUsingLodash';
import SearchUsingUnderscore from './components/SearchUsingUnderscore/SearchUsingUnderscore';
import { fetchPosts } from './services/PostsService';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState('');

    const onQueryChange = newQuery => {
        setQuery(newQuery);
    };

    useEffect(() => {
        const fetchPostsFn = async () => {
            try {
                const result = await fetchPosts(query);
                setPosts(result.data?.hits || []);
            } catch (error) {
                console.log('error', error);
            }
        }

        fetchPostsFn();
    }, [query]);

    return (
        <Router>
            <Container>
                <Jumbotron>
                    <h1 className="display-4 text-center">Input Debounce Examples in React</h1>
                    <p className="lead text-center">
                        This little poc app shows how to use the following techniques to implement input debouncing in your react.js app.
                    </p>
                </Jumbotron>
                <main>
                    <Nav variant="tabs" className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                            <NavLink className="nav-link" activeClassName="active" to="/set-timeout">Using 'setTimeout' function</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className="nav-link" activeClassName="active" to="/custom-hook">Using 'custom hook'</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className="nav-link" activeClassName="active" to="/lodash">Using 'lodash' library</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className="nav-link" activeClassName="active" to="/underscore">Using 'underscore' library</NavLink>
                        </Nav.Item>
                    </Nav>

                    <Switch>
                        <Route path="/set-timeout" exact>
                            <SearchUsingSetTimeout onQueryChange={onQueryChange} />
                        </Route>
                        <Route path="/custom-hook" exact>
                            <SearchUsingCustomHook onQueryChange={onQueryChange} />
                        </Route>
                        <Route path="/lodash" exact>
                            <SearchUsingLodash onQueryChange={onQueryChange} />
                        </Route>
                        <Route path="/underscore" exact>
                            <SearchUsingUnderscore onQueryChange={onQueryChange} />
                        </Route>
                        <Redirect from="/" to="/set-timeout" />
                    </Switch>

                    <Posts posts={posts} />
                </main>

                {/* Insert loader component inside #overlay div using portal */}
                {ReactDOM.createPortal(<Loader />, document.getElementById('overlay'))}
            </Container>
        </Router>
    );
}

export default App;
