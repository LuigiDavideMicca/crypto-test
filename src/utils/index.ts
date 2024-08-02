import { type FetchConfig } from "@/models";

const baseConfig: FetchConfig = {
    headers: {
        'X-CMC_PRO_API_KEY': 'c3f841e7-0fff-4d8e-985f-248d29747571',
    },
    method: 'GET',
};

const mergeConfigs = (baseConfig: FetchConfig, config?: FetchConfig): FetchConfig => ({
    ...baseConfig,
    ...config,
    headers: {
        ...baseConfig.headers,
        ...config?.headers,
    },
});

export const makeApiCall = async <T>(endpoint: string, config?: FetchConfig): Promise<T> => {
    const finalConfig = mergeConfigs(baseConfig, config);
    const response = await fetch(endpoint, finalConfig);

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
};

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    }).format(date);
};