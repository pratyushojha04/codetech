import React from 'react';
import { Link } from 'react-router-dom';

const AuthNav = ({ isLogin }) => {
    return (
        <p className="mt-2 text-center text-sm text-gray-600">
            {isLogin ? (
                <>
                    Don't have an account?{' '}
                    <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Sign up
                    </Link>
                </>
            ) : (
                <>
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Sign in
                    </Link>
                </>
            )}
        </p>
    );
};

export default AuthNav;
