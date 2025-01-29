import { Link } from 'react-router-dom';

const Public = () => {
    const content = (
        <article className="public">
            {/* HEADER SECTION */}
            <header className="public__header">
                <h1>Welcome to <span className="nowrap">Quick Notes!</span></h1>
            </header>

            {/* MAIN SECTION */}
            <main className="public__main">
                <p className="public__intro">
                    Quick Notes is a powerful and intuitive platform designed to streamline collaboration and task management.
                </p>
                
                <div className="public__features">
                    <ul className="public__list">
                        <li className="public__list-item">Students can effortlessly create, organize, and manage their notes.</li>
                        <li className="public__list-item">Staff members can assign tasks to students and monitor their progress seamlessly.</li>
                        <li className="public__list-item">Administrators have full control over user management and system activities.</li>
                    </ul>
                </div>
                
                <p className="public__cta">Boost productivity and collaboration with Quick Notes!</p>
            </main>

            {/* FOOTER SECTION */}
            <footer className="public__footer">
                <nav>
                    <Link to="/login" aria-label="User Login">Log In</Link>
                    {' | '}
                    <Link to="/signup" aria-label="User Signup">Sign Up</Link>
                </nav>
            </footer>
        </article>
    );

    return content;
};

export default Public;