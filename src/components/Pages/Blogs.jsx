import React from 'react';
import useTitle from '../UseHooks/UseTitle';


const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>

            <div className='bg-slate-200 grid gap-4 pb-6'>
                <div className='text-center'>
                    <h1 className='py-8 font-bold animate-pulse  w-10/12 mx-auto text-7xl'>Question & Answer</h1>

                </div>
                {/* Context api */}
                <div className="collapse md:w-9/12 container mx-auto bg-white rounded-xl px-3 py-4 shadow-xl">
                    {/* What is an access token and refresh token? How do they work and where should we store them on the client-side? */}
                    <input type="checkbox" />
                    <div className="collapse-title text-3xl font-medium">
                        <p tabIndex={0} className="px-8">
                            <strong className="text-2xl font-bold italic font-mono">
                                Access Token:
                            </strong>
                            <br />
                            An access token is a credential that is issued by an
                            authentication server to a client after a successful
                            authentication process. It is a string of characters that
                            represents the authorization granted to the client to access
                            protected resources or perform specific actions on behalf of the
                            authenticated user. The access token typically has an expiration
                            time, after which it becomes invalid and needs to be refreshed or
                            reacquired. The client includes the access token in each request
                            to the server to authenticate and authorize its actions.
                            <br />
                            <br />
                            <strong className="text-2xl font-bold italic font-mono">
                                Refresh Token:
                            </strong>
                            <br />
                            A refresh token is a long-lived credential that is also issued by
                            the authentication server during the authentication process.
                            Unlike the access token, the refresh token is not sent with each
                            request to the server. Its purpose is to obtain a new access token
                            when the current access token expires. The client securely stores
                            the refresh token and uses it to request a new access token from
                            the authentication server without requiring the user to
                            re-authenticate. The refresh token has a longer expiration time
                            compared to the access token.
                            <br />
                            <br />
                            <strong className="text-2xl font-bold italic font-mono">
                                Storage on the Client-side:
                            </strong>
                            <br />
                            Access tokens and refresh tokens should be securely stored on the
                            client-side to prevent unauthorized access. It is recommended to
                            store the tokens in a secure storage mechanism such as browser
                            cookies with appropriate security flags (e.g., HttpOnly, Secure)
                            or browser storage APIs like sessionStorage or localStorage.
                            Storing tokens in secure storage mechanisms helps protect them
                            from cross-site scripting (XSS) attacks and ensures they are not
                            accessible to malicious scripts or third-party JavaScript code.
                        </p>
                    </div>
                    <div className="collapse-content bg-slate-100">
                        <p className='text-2xl leading-9'>
                            Context Api is  added in version 16.3 of React that allows one to share state across the entire app. It is a primarily fetched data which is accesible throug-out many components. Normally a root component get the data by fetching and after that throug a react provider it give the access of same data in all component under the root component . To spread Out the data a context api called <span className='font-bold'>useContext</span> is used genarally.This inversion of context api made our code cleaner in many cases by reducing the amount of props that need to pass through a application and giving more control to the root components. There is no limitation in the children to use the access of data
                        </p>
                    </div>
                </div>
                {/*Difference between SQL and NoSQL databases? */}
                <div className="collapse md:w-9/12 container mx-auto bg-white rounded-xl px-3 py-4 shadow-xl">
                    <input type="checkbox" />
                    <div className="collapse-title text-3xl font-medium">
                        Difference between SQL and NoSQL databases?
                    </div>
                    <div className="collapse-content bg-slate-100">
                        <p className='text-2xl leading-9'>

                            Hooks are reusable functions. When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use". such as:
                            <ul className='list-disc indent-2 ml-7'>
                                <li>useFetch</li>
                                <li>useContext</li>
                                <li>useNavigate</li>
                                <li>useNavigation</li>
                            </ul>

                            <span>
                                Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value and makes changes of values), but every time you use a custom Hook, all state and effects inside of it are fully isolated.
                            </span>
                        </p>
                    </div>
                </div>
                {/*    What is express js? What is Nest JS? */}
                <div className="collapse md:w-9/12 container mx-auto bg-white rounded-xl px-3 py-4 shadow-xl">
                    <input type="checkbox" />
                    <div className="collapse-title text-3xl font-medium">
                        What is express js? What is Nest JS?
                    </div>
                    <div className="collapse-content bg-slate-100">
                        <p className='text-2xl leading-9'>
                            Refs is the shorthand used for references in React. It is similar to keys in React. It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements. It provides a way to access React DOM nodes or React elements and how to interact with it. Example as below : <br />
                            <img className='py-3' src="https://i.ibb.co/ZfQzBPv/useRef.png" alt="" />
                            <br />
                            The hook useRef() in React returns an object that has a property current that we can access as we do with objects. This property is initialized to the passed argument in the function useRef() . The returned object will persist for the full lifetime of the component.
                            <br /> <br />

                            The hook useRef() accepts one argument, which is the value to initialize the property current in the returned object.
                        </p>
                    </div>
                </div>
                {/* What is MongoDB aggregate and how does it work? */}
                <div className="collapse md:w-9/12 container mx-auto bg-white rounded-xl px-3 py-4 shadow-xl">
                    <input type="checkbox" />
                    <div className="collapse-title text-3xl font-medium">
                        What is MongoDB aggregate and how does it work?
                    </div>
                    <div className="collapse-content bg-slate-100">
                        <p className='text-2xl leading-9'>With the release of React 16.8, there are many useful hooks we can now use in your React applications where there is a mentionable Hooks that was introduced in 16.8 is <span className='font-bold'>useMemo</span> . This hook has the potential to improve performance in your application.The useMemo hook is needed for memoizing or caching computed results for reoccurring usage. It would help if we did not use the useMemo hook on side-effect tasks such as changing a state variable or a Virtual DOM element.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;