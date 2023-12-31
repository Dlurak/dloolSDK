import { Dlool } from 'src';
import { AuthError } from 'src/errors/auth';

export const login = (dlool: Dlool, options: { username: string; password: string }) => {
    const url = `${dlool.baseUrl}/auth/login`;
    const response = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(options),
    })
        .then((res) => res.json())
        .catch((err) => {
            throw new Error(err);
        });

    return response.then((res) => {
        const status = res.status as 'success' | 'error';

        switch (status) {
            case 'success':
                const token = res.token as string;
                dlool.token = token;
                return [token, dlool] as const;
            case 'error':
                throw new AuthError('Incorrect username or password');
        }
    });
};
