import React from 'react';

function Documentation() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '20px',
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ fontSize: '24px', margin: '0' }}>Documentation</h1>
        <p style={{ fontSize: '14px', margin: '0' }}>
          Learn more about our application features and setup
        </p>
      </header>

      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            backgroundColor: '#f1f1f1',
            padding: '20px',
            borderBottom: '1px solid #ddd',
            flex: '1 0 auto',
            textAlign: 'center',
          }}
        >
          <nav>
            <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Table of Contents</h2>
            <ul
              style={{
                listStyle: 'none',
                padding: '0',
                margin: '0',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              {['Introduction', 'Installation', 'Features', 'FAQ', 'Support'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: '#007bff',
                      textDecoration: 'none',
                      fontSize: '14px',
                      padding: '5px 10px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      display: 'inline-block',
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main
          style={{
            flex: '1 0 auto',
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {/* Sections */}
          {[
            { id: 'introduction', title: 'Introduction', content: 'Welcome to our documentation. This page will guide you through the basics of using our application and understanding its features.' },
            {
              id: 'installation',
              title: 'Installation',
              content: (
                <ol>
                  <li>Clone the repository using <code>git clone</code>.</li>
                  <li>Navigate to the project directory.</li>
                  <li>Install dependencies using <code>npm install</code>.</li>
                  <li>Start the development server using <code>npm start</code>.</li>
                </ol>
              ),
            },
            { id: 'features', title: 'Features', content: <ul><li>Responsive user interface.</li><li>Comprehensive routing system.</li><li>Real-time data updates.</li><li>Secure authentication and authorization.</li></ul> },
            {
              id: 'faq',
              title: 'FAQ',
              content: (
                <>
                  <strong>Q: How do I reset my password?</strong>
                  <br />
                  A: You can reset your password from the login page by clicking "Forgot Password."
                </>
              ),
            },
            {
              id: 'support',
              title: 'Support',
              content: (
                <>
                  If you have any issues, please contact our support team at{' '}
                  <a
                    href="mailto:support@example.com"
                    style={{ color: '#007bff', textDecoration: 'none' }}
                  >
                    support@example.com
                  </a>
                  .
                </>
              ),
            },
          ].map(({ id, title, content }) => (
            <section key={id} id={id} style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '20px', marginBottom: '10px', color: '#007bff' }}>{title}</h2>
              <div style={{ fontSize: '14px', lineHeight: '1.6' }}>{content}</div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}

export default Documentation;
