import Table from 'react-bootstrap/Table';

const dateFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
const Posts = ({ posts }) => {
    return (
        <>
            <p className="lead text-center">
                <a href="https://hn.algolia.com/" target="_blank" rel="noreferrer">Hacker News Stories</a>
            </p>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Published On</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.length > 0 && (
                        posts.map((post, index) => {
                            return (
                                <tr key={post.objectID}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <p>
                                            <a href={post.url} target="_blank" rel="noreferrer">{post.title}</a>
                                        </p>
                                    </td>
                                    <td>{post.author}</td>
                                    <td>{post.created_at ? new Date(post.created_at).toLocaleString('en-US', dateFormatOptions) : '-'}</td>
                                </tr>
                            )
                        })
                    )}

                    {posts.length === 0 && (
                        <tr>
                            <td colSpan="4">No records found.</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    )
};

export default Posts;